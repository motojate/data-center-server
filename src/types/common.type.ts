import { Document, Model } from 'mongoose';

export type ModelDocument<T> = Model<T & Document>;
