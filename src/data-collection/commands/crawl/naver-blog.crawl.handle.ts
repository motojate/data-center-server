import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { NaverBlogCrawlCommand } from './naver-blog.crawl.command';
import puppeteer from 'puppeteer';

@CommandHandler(NaverBlogCrawlCommand)
export class NaverBlogCrawlCommandHandler
  implements ICommandHandler<NaverBlogCrawlCommand>
{
  private async getDateByCrawling(keyword: string): Promise<string> {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.setViewport({ width: 1080, height: 1024 });
    await page.goto(
      `https://section.blog.naver.com/Search/Post.naver?pageNo=1&rangeType=ALL&orderBy=sim&keyword=${keyword}`,
    );
    const selector =
      '#content > section > div.area_list_search > div:nth-child(1) > div > div.info_post > div.desc > a.desc_inner > strong';
    const element = await page.waitForSelector(selector);
    await element.click();
    await page.close();
    return element.toString();
  }
  async execute(command: NaverBlogCrawlCommand): Promise<any> {
    const data = await this.getDateByCrawling(command.keyword);

    Number();
  }
}
