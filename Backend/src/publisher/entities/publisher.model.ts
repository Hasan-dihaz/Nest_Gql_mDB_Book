import { Field, ObjectType } from '@nestjs/graphql';
// import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
// import { Document } from 'mongoose';

// export type PublisherDocument = Publisher & Document;
@ObjectType()
// @Schema()
export class Publisher {
  @Field(() => String)
  // @Prop({ type: String })
  publisher: string;

  @Field(() => String)
  // @Prop({ type: String })
  address: string;

  @Field(() => String, { nullable: true })
  // @Prop({ type: Number })
  contact?: number;

  // @Field(() => String, { nullable: true })
  // @Prop({ type: String })
  // Category?: string;
}

// export const PublisherSchema = SchemaFactory.createForClass(Publisher);
