import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthorController } from './author.resolver';
import { AuthorService } from './author.service';
import { Author, AuthorSchema } from './entities/author.model';
// import { ConfigModule } from '@nestjs/config';
// import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';

@Module({
  imports: [
    // MongooseModule.forRoot('mongodb://localhost:27017/book_nest'),
    MongooseModule.forFeature([{ name: Author.name, schema: AuthorSchema }]),
  ],
  providers: [AuthorController, AuthorService],
})
export class AuthorModule {}
