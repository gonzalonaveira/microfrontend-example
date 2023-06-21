import { registerApplication, start } from 'single-spa';

registerApplication(
  'header',
  () => import('nav/Header'),
    location => location.pathname.startsWith('/') || location.pathname.startsWith('/category/'),
);

registerApplication(
    'menu',
    () => import('nav/Menu'),
    location => location.pathname.startsWith('/') || location.pathname.startsWith('/category/'),
);

registerApplication(
  'footer',
  () => import('nav/Footer'),
    location => location.pathname.startsWith('/') || location.pathname.startsWith('/category/'),
);

registerApplication(
  'buy-product',
  () => import('buyProduct/BuyProduct'),
  location => location.pathname.startsWith('/')
);

registerApplication(
    'product-grid',
    () => import('productImage/ProductImage'),
    location => location.pathname.startsWith('/')
);

start();
