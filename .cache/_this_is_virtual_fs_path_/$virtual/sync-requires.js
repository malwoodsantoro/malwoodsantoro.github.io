
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/Users/mallorywood/malwoodsantoro.github.io/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/Users/mallorywood/malwoodsantoro.github.io/src/pages/404.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/mallorywood/malwoodsantoro.github.io/src/pages/index.js")),
  "component---src-pages-plugins-js": preferDefault(require("/Users/mallorywood/malwoodsantoro.github.io/src/pages/plugins.js")),
  "component---src-pages-projects-js": preferDefault(require("/Users/mallorywood/malwoodsantoro.github.io/src/pages/projects.js")),
  "component---src-pages-work-js": preferDefault(require("/Users/mallorywood/malwoodsantoro.github.io/src/pages/work.js"))
}

