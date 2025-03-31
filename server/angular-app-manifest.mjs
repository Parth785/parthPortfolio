
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/parthPortfolio/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/parthPortfolio"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 5868, hash: '8965ca6550144d1f9b72984cdb20471d98d456e7cf0c419a0b8f12bf62444b1e', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1028, hash: '3a0b36e06997aa1b1ef1113a3df95d9087325a3b7f651bce754ee7ea069e3e2c', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 22507, hash: '63ce1e4b80745a7d7b2b7f57d5a06f1a2b67e0ec6a80f1696474d118ddb49f55', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-CON6YUZV.css': {size: 305312, hash: 'o2N/S4UGvEs', text: () => import('./assets-chunks/styles-CON6YUZV_css.mjs').then(m => m.default)}
  },
};
