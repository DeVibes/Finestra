export const isAuthenticated = async (request) => {
  const sessionCookieName = "appSession";
  return request.cookies.includes(sessionCookieName);
};
