import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

 
export default {
    products:prisma.products,
    packs:prisma.packs
}