export const withBasePath = (path: string) => {
  const base = process.env.NODE_ENV === "production" ? "/BeauDev" : "";
  return `${base}${path}`;
};
