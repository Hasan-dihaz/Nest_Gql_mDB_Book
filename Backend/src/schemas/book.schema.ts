import { Field, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type BookDocument = Book & Document;
@ObjectType()
@Schema()
export class Book {
  @Field(() => String)
  @Prop({ type: String })
  _id: string;

  @Field(() => String)
  @Prop({ type: String })
  name: string;

  @Field(() => String)
  @Prop({ type: String })
  author: number;

  @Field(() => String, { nullable: true })
  @Prop({ type: Number })
  publishYear?: number;

  // @Field(() => String, { nullable: true })
  // @Prop({ type: String })
  // Category?: string;
}

export const BookSchema = SchemaFactory.createForClass(Book);
