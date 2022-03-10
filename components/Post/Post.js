import Link from "next/link";
import * as React from "react";
import styled from "styled-components";

export function Post({ id, title, date }) {
  return (
    <Link href={`/blog/${id}`}>
      <Container>
        <a>
          <Title id={id}>{title}</Title>
          <time dateTime={date}>{date}</time>
        </a>
      </Container>
    </Link>
  );
}

const Container = styled.article`
  color: orange;
  background-color: rgb(44, 44, 44);
  box-shadow: 0 0 5px 1px white;
  padding: 1rem;
  border-radius: 12px;

  :hover {
    box-shadow: 0 0 15px 5px white;
    background-color: rgb(22, 22, 22);
    cursor: pointer;
  }
  a:link {
    text-decoration: none;
  }
`;

const Title = styled.h3`
  margin: 0;
`;
