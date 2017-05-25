var rp = require('request-promise');
var _ = require('lodash');
var options = {};
if( process.env.HTTP_PROXY ){
  options['proxy']  = process.env.HTTP_PROXY;
}
var r = rp.defaults(options);

export default function load(req) {
  return new Promise((resolve, reject) => {
    var url = 'https://mapi.sendo.vn/v1/catalog/recomendation?tracking_id=00633019';
    r(url).then((html) => {
      var result = JSON.parse(html);
      resolve(_.shuffle(result.result.data));
    }).catch((err)=>{
      reject(err);
    });
  });
}
