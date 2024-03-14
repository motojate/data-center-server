import { Global, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Keyword, KeywordSchema } from './schemas/keyword.schema';

@Global()
@Module({
  imports: [
    MongooseModule.forFeature([{ name: Keyword.name, schema: KeywordSchema }]),
  ],
  exports: [MongooseModule],
})
export class DatabaseModule {}
