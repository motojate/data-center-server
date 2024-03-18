import { Injectable } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { Cron, CronExpression } from '@nestjs/schedule';
import { NaverSearchCommand } from 'src/data-collection/commands/search/naver.search.command';

@Injectable()
export class SchedulesService {
  constructor(private readonly commandBus: CommandBus) {}

  @Cron(CronExpression.EVERY_MINUTE, {
    name: 'naverSearch',
  })
  async handleCron() {
    const searchCommand = await this.commandBus.execute(
      new NaverSearchCommand(''),
    );
    searchCommand;
  }
}
