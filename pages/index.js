import { PostList } from "../components/PostList/PostList";
import { getSortedPostsData } from "../lib/posts";
import styled from "styled-components";

export default function Home({ posts }) {
  return (
    <>
      <StyledHeader>
        <h1>CheatSheet Blog</h1>
        <p>Das Nachschlagewerk für neue Fischlein</p>
      </StyledHeader>
      <PostsWrapper>
        <h2>Posts</h2>
        <PostList posts={posts} />
      </PostsWrapper>
    </>
  );
}

export async function getStaticProps() {
  const posts = getSortedPostsData();
  // somehow get the data!
  return {
    props: {
      posts: posts,
    },
  };
}

const StyledHeader = styled.header`
  padding: 2rem;
  margin-bottom: 2rem;
  color: blue;
  background: rgb(0, 176, 255);
  background: linear-gradient(
    0deg,
    rgba(0, 176, 255, 1) 0%,
    rgba(171, 255, 248, 1) 100%
  );

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const PostsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h2 {
    margin-bottom: 1rem;
    color: orange;
    &:hover {
      color: hotpink;
    }
  }
`;
