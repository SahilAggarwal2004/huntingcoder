/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true // By default, when we build and export a static site using next, it creates file like about.js --> about.html. Now problem in here is that when we go to /about using js routing, it works fine, but when we reload the page, it cannot find anything related to /about path. But when we pass true value to trailingSlash, it converts about.js into a about folder containing index.html file(which is default file any browser searches for). Now, when we go to /about via any method and even reload it, our page will be there only
}

module.exports = nextConfig
