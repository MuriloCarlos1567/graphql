import { Field, ObjectType } from 'type-graphql';

@ObjectType()
export default class Hello {
  @Field()
  hello: string;
}