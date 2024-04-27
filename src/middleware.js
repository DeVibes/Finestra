import { NextResponse } from "next/server";
import { isAuthenticated } from "./utils/auth";
import appEnvVars from "./utils/appEnvVars";

const authMiddleware = async (request) => {
  const isUserAuthenticated = isAuthenticated(request);

  if (!isUserAuthenticated) {
    return NextResponse.redirect(appEnvVars.baseUrl);
  }

  return NextResponse.next();
};

export default authMiddleware;

export const config = {
  matcher: "/account/:path*",
};
