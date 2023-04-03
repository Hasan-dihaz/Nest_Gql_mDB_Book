import { Field, InputType } from '@nestjs/graphql';
import { Prop } from '@nestjs/mongoose';
// import mongoose from 'mongoose';
@InputType()
export class CreateAuthorInput {
  @Field(() => String)
  @Prop({ type: String })
  nam: string;

  @Field(() => String)
  @Prop({ type: Number })
  email: string;

  @Field(() => String, { nullable: true })
  @Prop({ type: Number })
  phone?: number;
}

@InputType()
export class Authorid {
  // @Field(() => String, { nullable: false })
  // @Prop({ type: String })
  // _id?: string;

  @Field(() => String)
  // @Prop({ type: mongoose.Schema.Types.ObjectId, auto: true })
  _id: string;
}

@InputType()
export class UpdateAuthorInput {
  @Field(() => String, { nullable: false })
  @Prop({ type: String })
  id?: string;

  @Field(() => String)
  @Prop({ type: String })
  name: string;

  @Field(() => String, { nullable: true })
  @Prop({ type: String })
  email: string;

  @Field(() => String, { nullable: true })
  @Prop({ type: Number })
  phone?: number;

  // @Field(() => String, { nullable: true })
  // @Prop({ type: Number })
  // Category?: number;
}
