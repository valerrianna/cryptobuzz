// const rp = require('request-promise');
// const requestOptions = {
//   method: 'GET',
//   uri: 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest',
//   qs: {
//     'start': '1',
//     'limit': '1',
//     'sort': 'name'
//   },
//   headers: {
//     'X-CMC_PRO_API_KEY': '9256192e-5bec-495f-ac90-d237f0a1f879'
//   },
//   json: true,
//   gzip: true
// };

// rp(requestOptions).then(response => {
//   console.log('API call response:', response);
// }).catch((err) => {
//   console.log('API call error:', err.message);
// });

const searchBar = document.getElementById('searchbar').value;

searchBar.addEventListener('keyup', (e) => {
  const searchString = e.target.value.toLowerCase();

  const filteredCurrency = cryptocurrency.filter((currency) => {
      return (
          currency.toLowerCase().includes(searchString)
      );
  });
  displayCurrency(filteredCurrency);
});

const loadCharacters = async () => {
  const rp = require('request-promise');
  const requestOptions = {
  method: 'GET',
  uri: 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest',
  qs: {
    'start': '1',
    'limit': '1',
    'sort': 'name'
  },
  headers: {
    'X-CMC_PRO_API_KEY': '9256192e-5bec-495f-ac90-d237f0a1f879'
  },
  json: true,
  gzip: true
};

  rp(requestOptions).then(response => {
    console.log('API call response:', response);
  }).catch((err) => {
    console.log('API call error:', err.message);
  });
}
  
const displayCurrency = (responses) => {
  const htmlString = responses
      .map((response) => {
          return `
          <li class="character">
          <h2>${data.name}</h2>
          <p>Symbol: ${data.symbol}</p>
          <li>Rank: ${data.cmc_rank}</li>
          <li>Price: ${data.quote.CAD.price}</li>
          <li>Volume Change: ${data.quote.CAD.volume_change_24H}</li>
          <li>Market Cap: ${data.quote.CAD.market_cap}</li>
          </li>
      `;
      })
      .join('');
 currencyList.innerHTML = htmlString;
};

loadCharacters();


