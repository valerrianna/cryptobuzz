const rp = require('request-promise');
const requestOptions = {
  method: 'GET',
  uri: 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest',
  qs: {
    'start': '1',
    'limit': '5',
    'convert': 'CAD'
  },
  headers: {
    'X-CMC_PRO_API_KEY': '9256192e-5bec-495f-ac90-d237f0a1f879'
  },
  json: true,
  gzip: true
};



rp(requestOptions).then(response => {
  console.log(response);
  res.render('homepage',{ response });
 // console.log('API call response:', response);
}).catch((err) => {
  console.log('API call error:', err.message);
});



