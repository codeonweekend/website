import { useState } from "react";
import Layout from "../../commons/components/Layout";
import ArticleItem from "./ArticleItem";
import { ArticleContainer, LoadMoreButton, Title } from "./styled";

const DEFAULT_LENGTH_ARTICLE = 6;

export default function Home({ contents }) {
  const [length, setLength] = useState(DEFAULT_LENGTH_ARTICLE);

  const articles = contents.slice(0, length);

  const showMore = () => {
    let articleAdded = length;
    const count = contents.length - length;
    if (count >= DEFAULT_LENGTH_ARTICLE) {
      articleAdded += DEFAULT_LENGTH_ARTICLE;
    } else {
      articleAdded += count;
    }
    setLength(articleAdded);
  };

  const showLoadMore = contents.length > length;

  return (
    <Layout>
      <Title>Latest Article</Title>
      <ArticleContainer>
        {articles.map((content, i) => (
          <ArticleItem content={content} key={i} />
        ))}
      </ArticleContainer>
      {showLoadMore && (
        <LoadMoreButton onClick={showMore}>LOAD MORE</LoadMoreButton>
      )}
    </Layout>
  );
}
