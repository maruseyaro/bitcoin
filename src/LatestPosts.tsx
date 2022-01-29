import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./store";
import { fetchLatestPosts } from "./store/latestPosts";

export default function LatestPosts() {
  const dispatch = useAppDispatch();
  const latestPosts = useAppSelector((state) => state.latestPosts);

  useEffect(() => {
    dispatch(fetchLatestPosts());
  }, []);

  if (latestPosts.loading) {
    return <>loading</>;
  }

  if (latestPosts.error) {
    return <>can't retrieve the news right now</>;
  }

  if (!latestPosts.data || latestPosts.data.length === 0) {
    return <>No recent news.</>;
  }

  return (
    <ol>
      {latestPosts.data.map((post, index) => (
        <li key={index}>
          <Post {...post} />
        </li>
      ))}
    </ol>
  );
}

function Post({ title, link }: PostProps) {
  return (
    <article>
      <h1>{title}</h1>
      <a href={link} target="_blank" rel="noopener noreferrer">
        Read more
      </a>
    </article>
  );
}

interface PostProps {
  title: string;
  link: string;
}
