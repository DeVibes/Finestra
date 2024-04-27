export const isAuthenticated = (request) => {
  const sessionCookieName = "appSession";
  return request.cookies.has(sessionCookieName);
};
