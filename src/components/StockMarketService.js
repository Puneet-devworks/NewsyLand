const BASE_URL = "https://query1.finance.yahoo.com/v7/finance/quote?symbols=";

function getMarketData(marketSymbol) {
    const url = new URL(BASE_URL + "^" + marketSymbol);
    return fetch(url).then((res) => res.json());
  };

export default getMarketData;