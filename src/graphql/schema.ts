import { makeExecutableSchema } from 'graphql-tools';

const usersMock: any[] = [
    {
        id: 1,
        name: 'John',
        email: 'johndoee@gmail.com'
    },
    {
        id: 2,
        name: 'John John',
        email: 'johndoee@gmail.com'
    }
];

const typeDefs = `
    type User {
        id: ID!
        name: String!
        email: String!
    }

    type Query {
        allUsers: [User!]!
    }
`;

const resolvers = {
    Query: {
        allUsers: () => usersMock
    }
};

export default makeExecutableSchema({ typeDefs, resolvers });