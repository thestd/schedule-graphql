'use strict';
const { ApolloServer } = require('apollo-server');
const { typeDefs } = require('./graphql/schema')
const { resolvers } = require('./graphql/resolvers')

const PORT = process.env.PORT || 3000;

const server = new ApolloServer({ typeDefs, resolvers });

server.listen(PORT).then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});
