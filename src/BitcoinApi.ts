export async function bitcoinApifetchLatestPosts() {
  const url = "https://news.bitcoin.com/feed/";
  const res = await fetch(url);
  const xmlText = await res.text();

  return xmlText;
}

// {"price":29546,"stamp":1643430240}
async function fetchBitcoinCurrentPrice() {
  const url = "https://index-api.bitcoin.com/api/v0/cash/price/usd";
  const res = await fetch(url);
  const json = await res.json();

  console.log(json);

  return json;
}

/*
  
  [
      [
          "2017-01-01T00:00:00.000Z",
          96760
      ],
  */

// https://github.com/bitcoin-portal/index-api-docs#historic-index-values
async function fetchBitcoinHistory() {
  const url = "https://index-api.bitcoin.com/api/v0/history";
  const res = await fetch(url);
  const json = await res.json();

  console.log(json);

  return json;
}
