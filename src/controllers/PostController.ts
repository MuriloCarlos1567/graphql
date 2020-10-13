import { Arg, Mutation, Query, Resolver } from 'type-graphql';
import Post from '../schemas/Post';
import MongoPost from '../database/schemas/Post';
import DataLoader from 'dataloader';


@Resolver(Post)
class PostController {
  
  @Query(returns => [Post], { name: 'findPosts' })
  async findPost() {
    const posts = await MongoPost.find();
    return posts;
  }
  
  @Query(returns => Post, { name: 'findPost' })
  async findPostById(
    @Arg('id') id: string
    ) {
    
    const posts = await MongoPost.findById(id);
    return posts;
  }

  @Mutation(returns => Post, { name: 'createPost' })
  async create(
    @Arg('author') author:string,
    @Arg('description') description: string
  ) {
    const post = await MongoPost.create({ author, description, likes: 0 })

    return post;
  }

}

export default PostController;