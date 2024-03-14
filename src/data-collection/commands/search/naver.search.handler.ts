import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { NaverSearchCommand } from './naver.search.command';
import axios from 'axios';
import { InjectModel } from '@nestjs/mongoose';
import { Keyword } from 'src/database/schemas/keyword.schema';
import { ModelDocument } from 'src/types/common.type';
import { removeHtmlTags } from 'src/utils/data.util';

@CommandHandler(NaverSearchCommand)
export class NaverSearchCommandHandler
  implements ICommandHandler<NaverSearchCommand>
{
  constructor(
    @InjectModel(Keyword.name)
    private readonly keywordModel: ModelDocument<Keyword>,
  ) {}

  async execute(command: NaverSearchCommand): Promise<any> {
    try {
      const response = await axios.get<{
        lastBuildDate: Date;
        total: number;
        start: number;
        display: number;
        items: {
          title: string;
          description: string;
        }[];
      }>(process.env.NAVER_SEARCH_API_URL, {
        headers: {
          'Content-Type': 'application/json',
          'X-Naver-Client-Id': process.env.NAVER_CLIENT_ID,
          'X-Naver-Client-Secret': process.env.NAVER_CLIENT_SECRET,
        },
        params: {
          query: command.keyword,
        },
      });

      const { data } = response;
      data.items.forEach(async (data) => {
        const title = removeHtmlTags(data.description);
        const category = '개발';
        const result = new this.keywordModel({ title, category });
        await result.save();
      });
    } catch (error) {
      console.log(error);
    }
  }
}
