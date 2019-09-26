import { prisma } from "../../../generated/prisma-client";

export default {
    User: {
        fullName: (parent) => {
            return `${parent.firstName}${parent.lastName}`;
        },
        amIFollowing: async(parent, _, { request }) => {
            const { user } = request;

        }
    }
};