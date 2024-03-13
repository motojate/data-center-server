import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { DataCollectionModule } from './data-collection/data-collection.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/data_center'),
    ConfigModule.forRoot({ isGlobal: true }),
    DataCollectionModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
