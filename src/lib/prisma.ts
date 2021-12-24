//Depending on which environment we run, local or Vercel one of the imports will be undefined
import Prisma, * as PrismaAll from "@prisma/client";

const PrismaClient = Prisma?.PrismaClient || PrismaAll?.PrismaClient; //optional chaining see MDN for info
export default PrismaClient;