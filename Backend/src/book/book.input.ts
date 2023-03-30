import { Field, ID, InputType } from '@nestjs/graphql';
import { Prop } from '@nestjs/mongoose';
import mongoose from 'mongoose';
@InputType()
export class CreateBookInput {
  @Field(() => String)
  @Prop({ type: String })
  name: string;

  @Field(() => String)
  @Prop({ type: Number })
  author: string;

  @Field(() => String, { nullable: true })
  @Prop({ type: Number })
  publishYear?: number;
}

@InputType()
export class Bookid {
  // @Field(() => String, { nullable: false })
  // @Prop({ type: String })
  // _id?: string;

  @Field(() => ID)
  @Prop({ type: mongoose.Schema.Types.ObjectId, auto: true })
  _id: mongoose.Types.ObjectId;
}

@InputType()
export class UpdateBookInput {
  @Field(() => String, { nullable: false })
  @Prop({ type: String })
  id?: string;

  @Field(() => String)
  @Prop({ type: String })
  name: string;

  @Field(() => String, { nullable: true })
  @Prop({ type: String })
  author: string;

  @Field(() => String, { nullable: true })
  @Prop({ type: Number })
  publishYear?: number;

  // @Field(() => String, { nullable: true })
  // @Prop({ type: Number })
  // Category?: number;
}
