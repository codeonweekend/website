import Image from "next/image";
import Layout from "../../commons/components/Layout";
import ArticleContent, {
  Title,
  DateText,
} from "../../commons/components/ArticleContent";
import { CoverImageContainer } from "./styled";
import shimmer from "../../commons/utils/shimmer";
import { toBase64 } from "../../commons/utils/base64";

function Article({ article }) {
  const datePosted = new Date(article.date).toDateString();
  return (
    <Layout>
      <Title>{article.title}</Title>
      <DateText>{datePosted}</DateText>
      <CoverImageContainer>
        <Image
          src={article.coverImage}
          layout="fill"
          alt={article.title}
          // placeholder="blur"
          // blurDataURL={`data:image/svg+xml;base64,${toBase64(
          //   shimmer(999, 500)
          // )}`}
        />
      </CoverImageContainer>
      <ArticleContent dangerouslySetInnerHTML={{ __html: article.content }} />
    </Layout>
  );
}

export default Article;
