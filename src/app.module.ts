import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BooksController } from './controllers/books/books.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { booksSchema } from './schemas/books.schema';
import { BooksService } from './services/books/books.service';
import { APP_FILTER } from '@nestjs/core';
import { HttpExceptionFilter } from './filters/http-exception.filter';

@Module({
  imports: [
    MongooseModule.forFeature([{
      name: 'books',
      schema: booksSchema,
      collection: 'books'
    }]),
    MongooseModule.forRoot("mongodb://localhost:27017/bookstutorial")
  ],
  controllers: [
    AppController, 
    BooksController
  ],
  providers: [
    AppService, 
    BooksService,
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    }
  ],
})
export class AppModule {}
