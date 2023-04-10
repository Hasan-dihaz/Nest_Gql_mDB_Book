import { Field, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { AuthorDocument } from 'src/author/entities/author.model';
import { Publisher } from 'src/publisher/entities/publisher.model';
import Schem from 'mongoose';

export type BookDocument = Book & Document;
@ObjectType()
@Schema()
export class Book {
  // @Field(() => String)
  @Prop({ type: String })
  name: string;

  // @Field(() => String)
  @Prop({ type: Schem.Types.ObjectId, ref: 'Author', required: true })
  author: AuthorDocument;

  // @Field(() => Publisher)
  @Prop({ type: Publisher })
  publisher: Publisher;

  // @Field(() => String, { nullable: true })
  @Prop({ type: Number })
  publishedYear?: number;

  // @Field(() => String, { nullable: true })
  @Prop({ type: String })
  image?: string;

  // @Field(() => String, { nullable: true })
  // @Prop({ type: String })
  // Category?: string;
}

export const BookSchema = SchemaFactory.createForClass(Book);
