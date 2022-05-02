const cors = require('cors');
const express = require('express');
const db = require('./db');
const { ApolloServer } = require('apollo-server');

const port = process.env.PORT || 9000;
const app = express();

const fs = require('fs')
const typeDefs = fs.readFileSync('./schema.graphql',{encoding:'utf-8'})
const resolvers = require('./resolvers')



const server = new ApolloServer({typeDefs, resolvers});

app.use(cors(), express.json());



server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});