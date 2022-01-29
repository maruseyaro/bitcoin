export default function LatestPosts({ posts }: Props) {
  if (posts.length === 0) {
    return <>No recent news.</>;
  }

  return (
    <ol>
      {posts.map((post, index) => (
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
      <a href={link} rel="noopener noreferrer">
        {link}
      </a>
    </article>
  );
}

interface Props {
  posts: PostProps[];
}

interface PostProps {
  title: string;
  link: string;
}
