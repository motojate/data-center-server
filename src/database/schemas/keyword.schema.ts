import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Keyword extends Document {
  @Prop()
  title: string;

  @Prop()
  category: string;
}

export const KeywordSchema = SchemaFactory.createForClass(Keyword);
