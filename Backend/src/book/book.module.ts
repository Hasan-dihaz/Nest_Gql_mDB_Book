import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { join } from 'path';
import { BookController } from './book.resolver';
import { BookService } from './book.service';
import { Book, BookSchema } from './entities/book.schema';
// import { ConfigModule } from '@nestjs/config';
// import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';

@Module({
  imports: [
    // MongooseModule.forRoot('mongodb://localhost:27017/book_nest'),
    MongooseModule.forFeature([{ name: Book.name, schema: BookSchema }]),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      //   playground: false,
      //   plugins: [ApolloServerPluginLandingPageLocalDefault()],
      autoSchemaFile: join(process.cwd(), 'src/book/entities/bookSchema.gql'),
    }),
  ],
  // controllers: [BookController],
  providers: [BookController, BookService],
})
export class BookModule {}
