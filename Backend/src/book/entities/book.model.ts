import { Field, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Publisher } from 'src/publisher/entities/publisher.model';

export type BookDocument = Book & Document;
@ObjectType()
@Schema()
export class Book {
  @Field(() => String)
  @Prop({ type: String })
  name: string;

  @Field(() => String)
  @Prop({ type: String })
  authorId: string;

  @Field(() => Publisher)
  @Prop({ type: Publisher })
  publisher: Publisher;

  @Field(() => String, { nullable: true })
  @Prop({ type: Number })
  publishedYear?: number;

  // @Field(() => String, { nullable: true })
  // @Prop({ type: String })
  // Category?: string;
}

export const BookSchema = SchemaFactory.createForClass(Book);
