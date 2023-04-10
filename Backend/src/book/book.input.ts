import { Field, InputType } from '@nestjs/graphql';
// import { Publisher } from 'src/publisher/entities/publisher.model';
import { CreatePublisherInput } from 'src/publisher/publisher.input';
// import { Prop } from '@nestjs/mongoose';
// import mongoose from 'mongoose';

import { FileUpload, GraphQLUpload } from 'graphql-upload';
@InputType()
export class CreateBookInput {
  @Field(() => String)
  name: string;

  // @Field(() => String)
  // authorId: string;

  @Field(() => CreatePublisherInput)
  publisher: CreatePublisherInput;

  @Field(() => String, { nullable: true })
  publishedYear?: number;

  @Field(() => GraphQLUpload, { nullable: true })
  image?: FileUpload;
}

@InputType()
export class Bookid {
  // @Field(() => String, { nullable: false })

  // _id?: string;

  @Field(() => String)
  _id: string;
}

@InputType()
export class UpdateBookInput {
  @Field(() => String, { nullable: false })
  id?: string;

  @Field(() => String)
  name: string;

  @Field(() => String, { nullable: true })
  authorId: string;

  @Field(() => String, { nullable: true })
  publishedYear?: number;

  // @Field(() => String, { nullable: true })

  // Category?: number;
}
