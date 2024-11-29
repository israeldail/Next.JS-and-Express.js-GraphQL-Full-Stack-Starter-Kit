import prisma from "../prisma/client";

// The root provides a resolver function for each API endpoint
const resolvers = {
    Query: {
        users: () => {
            return prisma.user.findMany()
        },
    },
};

export { resolvers }