export const addResponsiveClasses = (classes, screenSize = sm) =>
  classes.reduce((result, cls) => `${result} ${screenSize}:${cls}`, "").trim();
