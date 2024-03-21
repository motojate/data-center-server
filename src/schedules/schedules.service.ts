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
    // TODO 작동 시 무작위 키워드 생성
    await this.commandBus.execute(new NaverSearchCommand(''));
  }

  @Cron(CronExpression.EVERY_MINUTE, {
    name: 'kakaoSearch',
  })
  async handleKakaoSearchCron() {
    // TODO 작동 시 무작위 키워드 생성
    await this.commandBus.execute(new KakaoSearchCommand('개발자'));
  }
}
