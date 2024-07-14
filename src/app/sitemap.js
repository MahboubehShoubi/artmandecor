export default function sitemap() {
  const staticRoutes = ["", "/about", "/contact", "/projects"];

  const routes = staticRoutes.map((route) => ({
    url: `http://artmandecor.com${route}`,
    lastModified: new Date().toString(),
  }));

  return [...routes];
}
