import { redirect } from "next/navigation";

// GET /api/login
// /api/auth/login was created by Auth0's handleAuth to start the login process
export const GET = async (req, res) => {
  redirect("/api/auth/login");
};
