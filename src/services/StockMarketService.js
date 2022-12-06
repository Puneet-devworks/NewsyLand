
function getMarketData(marketSymbol) {
    const url = '/finance/quote?symbols=^' + marketSymbol;
    return fetch(url).then((res) => res.json());
  };

export default getMarketData;