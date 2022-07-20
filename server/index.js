const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');

const app = express()

let schema = buildSchema(`
	type Query {
		hello: String
	}
`);

let root = {
	hello: () => {
		return 'Hello, world!';
	},
};

app.use('/graphql', graphqlHTTP({
	schema: schema,
	rootValue: root,
	graphiql: true,
}));

let port = 8080;
app.listen(port);
console.log(`GraphQL API server is running on port ${port}`);
