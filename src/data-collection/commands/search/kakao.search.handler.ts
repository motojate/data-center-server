import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import axios from 'axios';
import { InjectModel } from '@nestjs/mongoose';
import { Keyword } from 'src/database/schemas/keyword.schema';
import { ModelDocument } from 'src/types/common.type';
import { KakaoSearchCommand } from './kakao.search.command';

@CommandHandler(KakaoSearchCommand)
export class KakaoSearchCommandHandler
  implements ICommandHandler<KakaoSearchCommand>
{
  constructor(
    @InjectModel(Keyword.name)
    private readonly keywordModel: ModelDocument<Keyword>,
  ) {}

  async execute(command: KakaoSearchCommand): Promise<any> {
    const url = 'https://dapi.kakao.com/v2/search/blog';
    const response = await axios.get(url, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `KakaoAK ${process.env.DAUM_REST_KEY}`,
      },
      params: {
        query: command.keyword,
      },
    });
    return response.data;
  }
}
