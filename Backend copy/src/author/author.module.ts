import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { join } from 'path';
import { AuthorController } from './author.resolver';
import { AuthorService } from './author.service';
import { Auth, AuthorSchema } from './entities/author.schema';
// import { ConfigModule } from '@nestjs/config';
// import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';

@Module({
  imports: [
    // MongooseModule.forRoot('mongodb://localhost:27017/book_nest'),
    MongooseModule.forFeature([{ name: Auth.name, schema: AuthorSchema }]),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      //   playground: false,
      //   plugins: [ApolloServerPluginLandingPageLocalDefault()],
      autoSchemaFile: join(process.cwd(), 'src/author/entities/author.gql'),
    }),
  ],
  // controllers: [BookController],
  providers: [AuthorController, AuthorService],
})
export class AuthorModule {}
