import { Field, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type AuthorDocument = Author & Document;
@ObjectType()
@Schema()
export class Author {
  @Field(() => String)
  @Prop({ type: String })
  name: string;

  @Field(() => String)
  @Prop({ type: String })
  email: string;

  @Field(() => String, { nullable: true })
  @Prop({ type: Number })
  phone?: number;

  // @Field(() => String, { nullable: true })
  // @Prop({ type: String })
  // Category?: string;
}

export const AuthorSchema = SchemaFactory.createForClass(Author);
