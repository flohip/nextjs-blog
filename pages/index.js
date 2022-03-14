import { PostList } from "../components/PostList/PostList";
import { getSortedPostsData } from "../lib/posts";
import Image from "next/image";
import gazingFish from "../img/gazing_fish.svg";
import happyTurtle from "../img/happy_turtle.svg";
import hiddenTurtle from "../img/turtle_hidden.svg";
import visibleTurtle from "../img/turtle_visible.svg";
import styled from "styled-components";
import { useState } from "react";

export default function Home({ posts }) {
  const [turtleImage, setTurtleImage] = useState(visibleTurtle);

  return (
    <>
      <StyledHeader>
        <Image src={gazingFish} alt="A gazing Fish" />
        <Image
          className="toggleTurtle"
          src={turtleImage}
          alt="A fearfull Fish"
          onMouseEnter={() => {
            setTurtleImage(hiddenTurtle);
          }}
          onMouseLeave={() => {
            setTurtleImage(visibleTurtle);
          }}
        />
        <StyledHeaderText>
          <h1>CheatSheet Blog</h1>
          <p>Das Nachschlagewerk für neue Fischlein</p>
        </StyledHeaderText>
        <Image src={happyTurtle} alt="A happy Turtle" />
      </StyledHeader>
      <PostsWrapper>
        <h2>Posts</h2>
        <PostList posts={posts} />
      </PostsWrapper>
    </>
  );
}

// SSR Props
export async function getStaticProps() {
  const posts = getSortedPostsData();
  // somehow get the data!
  return {
    props: {
      posts: posts,
    },
  };
}

// Styled Components
const StyledHeader = styled.header`
  height: 150px;
  padding: 2rem;
  margin-bottom: 2rem;
  color: var(--primary-color-dark);
  background: var(--primary-bg-color-bright);
  background: linear-gradient(
    0deg,
    rgba(0, 176, 255, 1) 0%,
    rgba(171, 255, 248, 1) 100%
  );

  display: grid;
  grid-template-columns: 100px 100px 1fr 100px;
  gap: 0.5rem;

  h1 {
    font-size: 3rem;
  }
`;

const StyledHeaderText = styled.div`
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
    font-size: 2rem;
    margin-bottom: 1rem;
  }
`;
