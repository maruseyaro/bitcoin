import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import styled from "styled-components";
import LatestPosts from "./LatestPosts";
import PriceGraph from "./PriceGraph";
import { store } from "./store";

const Title = styled.h1`
  font-size: 48px;
`;

function App() {
  return (
    <>
      <Title>Hello, bitcoin.</Title>
      <LatestPosts />
      <PriceGraph />
    </>
  );
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
