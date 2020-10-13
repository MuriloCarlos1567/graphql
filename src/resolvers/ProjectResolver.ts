import { Query, Resolver } from 'type-graphql';
import Project from '../schemas/Project';
import { HelloData } from '../database/data';

@Resolver(of => Project)
export default class {

  @Query(returns => Project, { name: 'find' })
  find() {
    return HelloData
  }
}