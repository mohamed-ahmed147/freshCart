
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://mohamed-ahmed147.github.io/freshCart/',
  locale: undefined,
  routes: [
  {
    "renderMode": 1,
    "redirectTo": "/https://mohamed-ahmed147.github.io/freshCart/home",
    "route": "/https://mohamed-ahmed147.github.io/freshCart"
  },
  {
    "renderMode": 1,
    "route": "/https://mohamed-ahmed147.github.io/freshCart/home"
  },
  {
    "renderMode": 1,
    "route": "/https://mohamed-ahmed147.github.io/freshCart/cart"
  },
  {
    "renderMode": 1,
    "route": "/https://mohamed-ahmed147.github.io/freshCart/products"
  },
  {
    "renderMode": 1,
    "route": "/https://mohamed-ahmed147.github.io/freshCart/changePassword"
  },
  {
    "renderMode": 1,
    "route": "/https://mohamed-ahmed147.github.io/freshCart/wishlist"
  },
  {
    "renderMode": 1,
    "route": "/https://mohamed-ahmed147.github.io/freshCart/allorders"
  },
  {
    "renderMode": 1,
    "route": "/https://mohamed-ahmed147.github.io/freshCart/checkout/*"
  },
  {
    "renderMode": 1,
    "route": "/https://mohamed-ahmed147.github.io/freshCart/categories"
  },
  {
    "renderMode": 1,
    "route": "/https://mohamed-ahmed147.github.io/freshCart/details/*"
  },
  {
    "renderMode": 1,
    "route": "/https://mohamed-ahmed147.github.io/freshCart/brands"
  },
  {
    "renderMode": 1,
    "route": "/https://mohamed-ahmed147.github.io/freshCart/submitCode"
  },
  {
    "renderMode": 1,
    "route": "/https://mohamed-ahmed147.github.io/freshCart/setNewPassword"
  },
  {
    "renderMode": 1,
    "route": "/https://mohamed-ahmed147.github.io/freshCart/forgetPassword"
  },
  {
    "renderMode": 1,
    "route": "/https://mohamed-ahmed147.github.io/freshCart/signin"
  },
  {
    "renderMode": 1,
    "route": "/https://mohamed-ahmed147.github.io/freshCart/register"
  },
  {
    "renderMode": 1,
    "route": "/https://mohamed-ahmed147.github.io/freshCart/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 7872, hash: '0e685df846325106fcfd6f577921e408b723bd594d4f1e7f96ff94981f02f645', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1207, hash: 'd4d042ada5ad3ece50d8a13562e925b8dbe20b0d11b4e472d7fe3b43bbfedc31', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-GAES7G64.css': {size: 155317, hash: 'vtwP0YC+BJQ', text: () => import('./assets-chunks/styles-GAES7G64_css.mjs').then(m => m.default)}
  },
};
