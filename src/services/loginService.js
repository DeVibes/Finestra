import { handleCallback, handleLogin } from "@auth0/nextjs-auth0";
import { getUserData } from "./accountInfoService";

// handleLogin is responsible for redirecting the user to the Auth0 login page
const loginHandler = (req, res) => {
  try {
    return handleLogin(req, res, {
      returnTo: "/account/settings",
    });
  } catch (error) {
    console.error(error);
  }
};

/*
  callbackHandler is called after the user is redirected back to the application with the authorization code
  handleCallback exchanges the authorization code for the token, session id and user information
  afterCallback is called after the user session is created and before the user is redirected to the returnTo URL
*/
const callbackHandler = async (req, res) => {
  try {
    //
    return handleCallback(req, res, {
      afterCallback: async (req, session, state) => {
        const { email: userEmail } = session?.user;
        session.user.account = await getUserData(userEmail);
        return session;
      },
    });
  } catch (error) {
    console.error(error);
    res.status(error);
  }
};

export { loginHandler, callbackHandler };
