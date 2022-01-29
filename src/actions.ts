type FetchLatestPosts =
  | FetchLatestPostsStarted
  | FetchLatestPostsSucceeded
  | FetchLatestPostsFailed;

interface FetchLatestPostsStarted {
  type: "FETCH_LATEST_POSTS_STARTED";
}

interface FetchLatestPostsSucceeded {
  type: "FETCH_LATEST_POSTS_SUCCEEDED";
  payload: {
    posts: Array<{
      title: string;
      link: string;
    }>;
  };
}

interface FetchLatestPostsFailed {
  type: "FETCH_LATEST_POSTS_FAILED";
  payload: Error;
  error: true;
}
