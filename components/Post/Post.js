import Link from "next/link";
import styled from "styled-components";

export function Post({ id, title, date }) {
  // console.log(`ID:${id} \nTITLE:${title} \nDATE:${date}`);
  return (
    <Container>
      <Link href={`/blog/${id}`}>
        <a>
          <Title id={id}>{title}</Title>
          <time dateTime={date}>{date}</time>
        </a>
      </Link>
    </Container>
  );
}

const Container = styled.div`
  background-color: var(--secondary-bg-color-dark);
  box-shadow: 0 0 5px 1px white;
  padding: 1rem;
  border-radius: 12px;
  :hover {
    box-shadow: 0 0 15px 5px white;
    background-color: var(--hover-bg-color-dark);
    cursor: pointer;

    a {
      color: var(--secondary-bg-color-bright);
    }
  }
  a {
    color: var(--primary-color-bright);
  }
  a:hover {
  }
  a:link {
    text-decoration: none;
  }
`;

const Title = styled.h3`
  margin: 0;
`;
