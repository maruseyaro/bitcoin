import {
  createSlice,
  type PayloadAction,
  type AnyAction,
} from "@reduxjs/toolkit";
import type { ThunkAction } from "redux-thunk";
import { bitcoinApifetchLatestPosts } from "../BitcoinApi";
import type { RootState } from ".";

const initialState: State = {
  data: null,
  error: null,
  loading: false,
};

export const latestPostsSlice = createSlice({
  name: "latestPosts",
  initialState,
  reducers: {
    started: (state) => {
      state.loading = true;
    },
    succeeded: (state, action: PayloadAction<Data>) => {
      state.loading = false;
      state.error = null;
      state.data = action.payload;
    },
    failed: (state, action: PayloadAction<Error>) => {
      state.loading = false;
      state.error = action.payload;
      state.data = null;
    },
  },
});

export default latestPostsSlice.reducer;

export const fetchLatestPosts = (limit = 4): FetchLatestPostsThunk => {
  return async (dispatch) => {
    dispatch(latestPostsSlice.actions.started);

    try {
      const xmlText = await bitcoinApifetchLatestPosts();
      const parser = new DOMParser();
      const doc = parser.parseFromString(xmlText, "application/xml");
      const items = doc.querySelectorAll("item");

      let posts = [];

      const min = Math.min(items.length, limit);

      for (let i = 0; i < min; i++) {
        const item = items[i];
        const title = item.querySelector("title")?.textContent;
        const link = item.querySelector("link")?.textContent;

        if (!title || !link) {
          throw new Error("Cannot parse item");
        }

        const post = {
          title,
          link,
        };

        posts.push(post);
      }

      dispatch(latestPostsSlice.actions.succeeded(posts));
    } catch (err) {
      dispatch(
        latestPostsSlice.actions.failed(
          new Error("Error while fetching latest posts.")
        )
      );
    }
  };
};

type FetchLatestPostsThunk = ThunkAction<void, RootState, unknown, AnyAction>;

interface State {
  data: Data | null;
  loading: boolean;
  error: Error | null;
}

type Data = Array<{ title: string; link: string }>;
