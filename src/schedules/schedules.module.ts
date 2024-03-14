import { Module } from '@nestjs/common';
import { SchedulesService } from './schedules.service';
import { NaverSearchCommandHandler } from 'src/data-collection/commands/search/naver.search.handler';
import { CqrsModule } from '@nestjs/cqrs';

@Module({
  imports: [CqrsModule],
  providers: [SchedulesService, NaverSearchCommandHandler],
})
export class SchedulesModule {}
