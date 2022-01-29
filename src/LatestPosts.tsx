import { useEffect } from "react";
import styled from "styled-components";
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
    <section>
      <h1>The latest</h1>
      <PostList>
        {latestPosts.data.map((post, index) => (
          <PostListItem key={index}>
            <Post {...post} />
          </PostListItem>
        ))}
      </PostList>
    </section>
  );
}

const PostList = styled.ul`
  list-style: none;
  width: 300px;
  margin: 0;
  padding: 0;
`;

const PostListItem = styled.li`
  margin-bottom: 2em;
`;

const PostTile = styled.h1`
  font-size: 16px;
`;

const PostLink = styled.a`
  color: inherit;
  text-decoration: none;

  :hover {
    color: #2793ff;
  }
`;

function Post({ title, link }: PostProps) {
  return (
    <PostLink href={link} target="_blank" rel="noopener noreferrer">
      <article>
        <PostTile>{title}</PostTile>
      </article>
    </PostLink>
  );
}

interface PostProps {
  title: string;
  link: string;
}
