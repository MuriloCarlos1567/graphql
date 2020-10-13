import { IPost } from '../database/schemas/Post';
import { Field, ObjectType } from 'type-graphql';

@ObjectType()
class Post implements IPost {
  
  @Field()
  _id: string;

  @Field()
  author: string;

  @Field()
  description: string;

  @Field()
  likes: number;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}

export default Post;