import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Keyword } from 'src/database/schemas/keyword.schema';

@Injectable()
export class DataCollectionService {
  constructor(
    @InjectModel(Keyword.name)
    private readonly keywordModel: Model<Keyword & Document>,
  ) {}
}
