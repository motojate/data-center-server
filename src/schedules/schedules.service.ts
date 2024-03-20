import { Injectable } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { Cron, CronExpression } from '@nestjs/schedule';
import { KakaoSearchCommand } from 'src/data-collection/commands/search/kakao.search.command';
import { NaverSearchCommand } from 'src/data-collection/commands/search/naver.search.command';

@Injectable()
export class SchedulesService {
  constructor(private readonly commandBus: CommandBus) {}

  @Cron(CronExpression.EVERY_MINUTE, {
    name: 'naverSearch',
  })
  async handleNaverSearchCron() {
    const searchCommand = await this.commandBus.execute(
      new NaverSearchCommand(''),
    );
    searchCommand;
  }

  @Cron(CronExpression.EVERY_MINUTE, {
    name: 'kakaoSearch',
  })
  async handleKakaoSearchCron() {
    const searchCommand = await this.commandBus.execute(
      new KakaoSearchCommand('개발자'),
    );
    searchCommand;
  }
}
