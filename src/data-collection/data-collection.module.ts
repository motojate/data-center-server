import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Keyword, KeywordSchema } from 'src/database/schemas/keyword.schema';
import { DataCollectionService } from './data-collection.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Keyword.name, schema: KeywordSchema }]),
  ],
  providers: [DataCollectionService],
})
export class DataCollectionModule {}
