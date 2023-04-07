import { Field, InputType } from '@nestjs/graphql';
// // import { Prop } from '@nestjs/mongoose';
// // import mongoose from 'mongoose';
@InputType()
export class CreatePublisherInput {
  @Field(() => String)
  publisher: string;

  @Field(() => String)
  address: string;

  @Field(() => String, { nullable: true })
  contact?: number;
}

// @InputType()
// export class Publisherid {
//   // @Field(() => String, { nullable: false })
//   // _id?: string;

//   @Field(() => String)
//   _id: string;
// }

// @InputType()
// export class UpdatePublisherInput {
//   @Field(() => String, { nullable: false })
//   id?: string;

//   @Field(() => String)
//   publisher: string;

//   @Field(() => String, { nullable: true })
//   address: string;

//   @Field(() => String, { nullable: true })
//   contact?: number;

//   // @Field(() => String, { nullable: true })

//   // Category?: number;
// }
