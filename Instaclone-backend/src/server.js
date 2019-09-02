import { GraphQLServer } from "graphql-yoga";
import logger from "morgan";
import schema from "./schema";
import dotenv from "dotenv";
import "./passport";
import { authenticateJwt } from "./passport";
dotenv.config();


const PORT = process.env.PORT || 4000;

const server = new GraphQLServer({
    schema,
    context: ({ request }) => ({ request })
});

server.express.use(logger("dev"));
server.express.use(authenticateJwt);

server.start({ port: PORT }, () =>
    console.log(`✅ Server running on http://localhost:${PORT}`)
);