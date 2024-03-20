import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import axios from 'axios';
import { InjectModel } from '@nestjs/mongoose';
import { Keyword } from 'src/database/schemas/keyword.schema';
import { ModelDocument } from 'src/types/common.type';
import { KakaoSearchCommand } from './kakao.search.command';
import { removeHtmlTags } from 'src/utils/data.util';
import puppeteer from 'puppeteer';

@CommandHandler(KakaoSearchCommand)
export class KakaoSearchCommandHandler
  implements ICommandHandler<KakaoSearchCommand>
{
  constructor(
    @InjectModel(Keyword.name)
    private readonly keywordModel: ModelDocument<Keyword>,
  ) {}

  async execute(command: KakaoSearchCommand): Promise<any> {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.setViewport({ width: 1080, height: 1024 });
    await page.goto(
      'https://section.blog.naver.com/Search/Post.naver?pageNo=1&rangeType=ALL&orderBy=sim&keyword=%EB%B0%B1%EC%97%94%EB%93%9C',
    );
    const selector =
      '#content > section > div.area_list_search > div:nth-child(1) > div > div.info_post > div.desc > a.desc_inner > strong';
    const element = await page.waitForSelector(selector);
    await element.click();

    console.log(element);

    // const dto = {
    //   startDate: '2024-01-01',
    //   endDate: '2024-03-20',
    //   timeUnit: 'date',
    //   keywordGroups: [
    //     {
    //       groupName: '주식',
    //       keywords: ['비트코인'],
    //     },
    //   ],
    // };
    // try {
    //   const response = await axios.post(
    //     'https://openapi.naver.com/v1/datalab/search',
    //     dto,
    //     {
    //       headers: {
    //         'X-Naver-Client-Id': process.env.NAVER_CLIENT_ID,
    //         'X-Naver-Client-Secret': process.env.NAVER_CLIENT_SECRET,
    //       },
    //       params: {
    //         query: command.keyword,
    //       },
    //     },
    //   );
    //   const { data } = response;
    //   console.log(data.results[0].data);
    // } catch (e) {
    //   console.log(e);
    // }

    // const url = 'https://dapi.kakao.com/v2/search/blog';
    // const response = await axios.get(url, {
    //   headers: {
    //     'Content-Type': 'application/json',
    //     Authorization: `KakaoAK ${process.env.DAUM_REST_KEY}`,
    //   },
    //   params: {
    //     query: command.keyword,
    //   },
    // });
    // response.data.documents.forEach((v) => {
    //   console.log(removeHtmlTags(v.contents));
    // });
    // console.log(response.data);
  }
}
