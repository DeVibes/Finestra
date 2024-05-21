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

const accountDefaultCategories = [
  { name: "groceries", displayName: "Groceries" },
  { name: "services", displayName: "Services" },
  { name: "utilities", displayName: "Utilities" },
  { name: "transportation", displayName: "Transportation" },
  { name: "health", displayName: "Health" },
  { name: "entertainment", displayName: "Entertainment" },
  { name: "shopping", displayName: "Shopping" },
  { name: "income", displayName: "Income" },
];

export default myDbInstance;
export { accountDefaultCategories };
