import { handleAuth } from "@auth0/nextjs-auth0";
import {
  callbackHandler,
  loginHandler,
} from "../../../../services/loginService";

// Creates /api/auth/login, /api/auth/callback, and /api/auth/logout
export const GET = handleAuth({
  login: loginHandler,
  callback: callbackHandler,
});
