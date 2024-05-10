import { PrismaClient } from "@prisma/client";

let myDbInstance;

if (process.env.NODE_ENV === "production") {
  myDbInstance = new PrismaClient();
} else {
  if (!global.myDbInstance) {
    global.myDbInstance = new PrismaClient();
  }
  myDbInstance = global.myDbInstance;
}

export default myDbInstance;
