import load from './load';

export default function update(req) {
  return new Promise((resolve, reject) => {
    // write to database
    setTimeout(() => {
      if (Math.random() < 0.2) {
        reject('Oh no! Product save fails 20% of the time. Try again.');
      } else {
        load(req).then(data => {
          const products = data;
          const product = req.body;
          if (product.color === 'Green') {
            reject({
              color: 'We do not accept green products' // example server-side validation error
            });
          }
          if (product.id) {
            products[product.id - 1] = product;  // id is 1-based. please don't code like this in production! :-)
            req.session.products = products;
          }
          resolve(product);
        }, err => {
          reject(err);
        });
      }
    }, 1500); // simulate async db write
  });
}
