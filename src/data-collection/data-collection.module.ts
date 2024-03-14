import { Module } from '@nestjs/common';
import { DataCollectionService } from './data-collection.service';
import { CqrsModule } from '@nestjs/cqrs';

@Module({
  imports: [CqrsModule],
  providers: [DataCollectionService],
})
export class DataCollectionModule {}
