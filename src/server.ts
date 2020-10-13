import 'reflect-metadata';
import { ApolloServer } from 'apollo-server';
import './database';
import schema from './schemas';

const server = new ApolloServer({ schema });

server.listen({ port:4000 }, () => console.log('http://localhost:4000/graphql'))