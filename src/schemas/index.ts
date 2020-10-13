import { buildSchemaSync } from 'type-graphql';
import Post from './Post';
import PostController from '../controllers/PostController';

const schema = buildSchemaSync({
  resolvers: [Post, PostController]
})

export default schema;