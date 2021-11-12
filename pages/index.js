import { getAllArticles } from "../commons/utils/markdown-parser";
import Home from "../features/home";
import { Wrapper } from "../commons/components/Common";
import SEO from "../commons/components/SEO";

function Main({ articles }) {
  const firstImage = articles[0].coverImage;
  return (
    <Wrapper>
      <SEO firstImage={firstImage} />
      <Home contents={articles} />
    </Wrapper>
  );
}

export const getStaticProps = async () => {
  const articles = getAllArticles([
    "slug",
    "title",
    "date",
    "summary",
    "coverImage",
    "tags",
  ]);

  return {
    props: {
      articles,
    },
  };
};

export default Main;
