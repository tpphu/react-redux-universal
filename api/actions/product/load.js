var rp = require('request-promise');

export default function load(req) {
  return new Promise((resolve, reject) => {
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
