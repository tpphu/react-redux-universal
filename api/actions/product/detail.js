var rp = require('request-promise');

var headers = {
    'accept-language': 'en-US,en;q=0.8,vi;q=0.6',
    'user-agent': 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.96 Mobile Safari/537.36',
    'accept': 'application/json, text/plain, */*',
    'cache-control': 'max-age=0',
    'authority': 'www.sendo.vn',
    'if-modified-since': '0',
    'referer': 'https://www.sendo.vn'
}

var options = {
  headers : headers
};
if( process.env.HTTP_PROXY ){
  options['proxy']  = process.env.HTTP_PROXY;
}
var r = rp.defaults(options);

export default function detail(req) {
  return new Promise((resolve, reject) => {
    var url = 'https://www.sendo.vn/detail/product/4545326';
    r(url).then((html) => {
      var result = JSON.parse(html);
      resolve(result);
    }).catch((err)=>{
      reject(err);
    });
  });
}
