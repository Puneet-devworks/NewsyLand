
function getMarketData(marketSymbol) {
    const url = 'https://cors-anywhere.herokuapp.com/https://query1.finance.yahoo.com/v7/finance/quote?symbols=^' + marketSymbol;
    return fetch(url).then((res) => res.json());
  };

export default getMarketData;