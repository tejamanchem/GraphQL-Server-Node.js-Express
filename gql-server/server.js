const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const graphql = require("graphql");

const QueryRoot = new graphql.GraphQLObjectType({
  name: "Query",
  fields: () => ({
    introduction: {
      type: graphql.GraphQLString,
      resolve: () => "This is nodejs server with graphql apis",
    },
    type: {
      type: graphql.GraphQLString,
      resolve: () => "This is gqpahql api",
    },
  }),
});

const schema = new graphql.GraphQLSchema({ query: QueryRoot });

const app = express();
app.use(
  "/api",
  graphqlHTTP({
    schema: schema,
    graphiql: true,
  })
);

let port = 4000;
app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});
