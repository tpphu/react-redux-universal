var rp = require('request-promise');

const initialProducts = [
  {id: 1, color: 'Red', sprocketCount: 7, owner: 'John'},
  {id: 2, color: 'Taupe', sprocketCount: 1, owner: 'George'},
  {id: 3, color: 'Green', sprocketCount: 8, owner: 'Ringo'},
  {id: 4, color: 'Blue', sprocketCount: 2, owner: 'Paul'}
];

export function getProducts(req) {
  let products = req.session.products;
  if (!products) {
    products = initialProducts;
    req.session.products = products;
  }
  return products;
}

export default function load(req) {
  return new Promise((resolve, reject) => {
    // make async call to database
    var url = 'https://mapi.sendo.vn/v1/catalog/recomendation?tracking_id=00633019';
    rp(url).then((html) => {
      var result = JSON.parse(html);
      resolve(result.result.data);
    }).catch((err)=>{
      reject(err);
    });
  });
  return ;
}
