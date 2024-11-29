import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import bodyParser from "body-parser";
import { typeDefs } from "./graphql/schemas";
import { resolvers } from "./graphql/resolvers";


dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

// Initialize Apollo Server
const server = new ApolloServer({
    typeDefs,
    resolvers,
});

// Start Apollo Server and integrate with Express
async function startServer() {
    await server.start();

    app.use(
        "/graphql",
        bodyParser.json(), // Parse incoming JSON requests
        expressMiddleware(server) // Integrate Apollo Server with Express
    );

    app.listen(port, () => {
        console.log(`[server]: Server is running at http://localhost:${port}/graphql`);
    });
}

startServer();