import { NextResponse } from "next/server";
import appEnvVars from "./utils/appEnvVars";
import { cookies } from "next/headers";

const authMiddleware = async (request) => {
  const cookieStore = cookies();
  if (!cookieStore.has("appSession")) {
    return NextResponse.redirect(appEnvVars.baseUrl);
  }

  return NextResponse.next();
};

export default authMiddleware;

export const config = {
  matcher: "/account/:path*",
};
