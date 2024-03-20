import { Module } from '@nestjs/common';
import { SchedulesService } from './schedules.service';
import { NaverSearchCommandHandler } from 'src/data-collection/commands/search/naver.search.handler';
import { CqrsModule } from '@nestjs/cqrs';
import { KakaoSearchCommandHandler } from 'src/data-collection/commands/search/kakao.search.handler';

@Module({
  imports: [CqrsModule],
  providers: [
    SchedulesService,
    NaverSearchCommandHandler,
    KakaoSearchCommandHandler,
  ],
})
export class SchedulesModule {}
