import ReactDOM from "react-dom";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import styled from "styled-components";
import LatestPosts from "./LatestPosts";
import PriceGraph from "./PriceGraph";

const reducer = combineReducers({
  noop: (x = 1) => x,
});

const store = createStore(reducer);

const Title = styled.h1`
  font-size: 48px;
`;

function App() {
  return (
    <>
      <Title>Hello, bitcoin.</Title>
      <LatestPosts posts={[]} />
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
