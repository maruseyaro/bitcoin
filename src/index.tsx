import ReactDOM from "react-dom";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import styled from "styled-components";
import { LineChart, CartesianGrid, Line } from "recharts";

const reducer = combineReducers({
  noop: (x = 1) => x,
});

const store = createStore(reducer);

const Title = styled.h1`
  font-size: 48px;
`;

function Chart() {
  const data = [
    {
      uv: 1,
      pv: 1,
    },
    {
      uv: 10,
      pv: 10,
    },
  ];

  return (
    <LineChart width={400} height={400} data={data}>
      <CartesianGrid stroke="#f5f5f5" />
      <Line type="monotone" dataKey="uv" stroke="#ff7300" yAxisId={0} />
      <Line type="monotone" dataKey="pv" stroke="#387908" yAxisId={1} />
    </LineChart>
  );
}

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

function App() {
  return (
    <>
      <Title>Hello, bitcoin.</Title>
      <Chart />
    </>
  );
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
