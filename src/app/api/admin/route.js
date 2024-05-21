import { NextResponse } from "next/server";
import { createTransaction } from "../../../db/prismaQueries";

export const POST = async (req, res) => {
  const response = await createTransaction(req.body).then((data) =>
    data.json()
  );
  return NextResponse.json({ message: response });
  //   return NextResponse.json({ message: "POST request to the admin page" });
};
