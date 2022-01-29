async function fetchLatestPosts() {
  const url = "https://news.bitcoin.com/feed/";
  const res = await fetch(url);
  const text = await res.text();

  const parser = new DOMParser();

  const doc = parser.parseFromString(text, "application/xml");
  const items = doc.querySelectorAll("item");

  let posts = [];

  const min = Math.min(items.length, 4);

  for (let i = 0; i < min; i++) {
    const item = items[i];
    const post = {
      title: item.querySelector("title")?.textContent,
      link: item.querySelector("link")?.textContent,
    };

    posts.push(post);
  }

  return posts;
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
