import { Field, InputType } from '@nestjs/graphql';
// import { Prop } from '@nestjs/mongoose';
// import mongoose from 'mongoose';
@InputType()
export class CreateAuthorInput {
  @Field(() => String)
  name: string;

  @Field(() => String)
  email: string;

  @Field(() => String, { nullable: true })
  phone?: number;
}

@InputType()
export class Authorid {
  @Field(() => String)
  _id: string;
}

@InputType()
export class UpdateAuthorInput {
  @Field(() => String, { nullable: false })
  id?: string;

  @Field(() => String)
  name: string;

  @Field(() => String, { nullable: true })
  email: string;

  @Field(() => String, { nullable: true })
  phone?: number;
}
