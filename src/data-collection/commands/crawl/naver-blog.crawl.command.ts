import { ICommand } from '@nestjs/cqrs';

export class NaverBlogCrawlCommand implements ICommand {
  constructor(public readonly keyword: string) {}
}
