import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BookController } from './book.resolver';
import { BookService } from './book.service';
import { Book, BookSchema } from './entities/book.model';
// import { ConfigModule } from '@nestjs/config';
// import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';

@Module({
  imports: [
    // MongooseModule.forRoot('mongodb://localhost:27017/book_nest'),
    MongooseModule.forFeature([{ name: Book.name, schema: BookSchema }]),
  ],
  // controllers: [BookController],
  providers: [BookController, BookService],
})
export class BookModule {}
