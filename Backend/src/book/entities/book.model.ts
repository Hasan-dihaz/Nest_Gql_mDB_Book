import { Field, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Author } from 'src/author/entities/author.model';
import { Publisher } from 'src/publisher/entities/publisher.model';
// import Schem from 'mongoose';

export type BookDocument = Book & Document;
@ObjectType()
@Schema()
export class Book {
  @Field(() => String)
  @Prop({ type: String })
  name: string;

  @Field(() => Author, { nullable: true })
  @Prop({ type: Types.ObjectId, ref: 'Author', required: true })
  author: Types.ObjectId;

  @Field(() => Publisher, { nullable: true })
  @Prop({ type: Publisher })
  publisher: string;

  // @Field(() => String, { nullable: true })
  @Prop({ type: Number })
  publishedYear?: number;

  @Field(() => String, { nullable: true })
  @Prop({ type: String })
  image?: string;
}

export const BookSchema = SchemaFactory.createForClass(Book);
