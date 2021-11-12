import ArticleComponent from "../../features/article";
import { Wrapper } from "../../commons/components/Common";
import {
  getAllArticles,
  getArticleBySlug,
  markdownToHtml,
} from "../../commons/utils/markdown-parser";
import SEO from "../../commons/components/SEO";

function Article({ article }) {
  const seo = {
    description: article.summary,
    title: article.title,
    author: article.author.name,
    keywords: article.tags,
    image: article.coverImage,
    url: `/${article.slug}`,
  };
  return (
    <Wrapper>
      <SEO {...seo} />
      <ArticleComponent article={article} />
    </Wrapper>
  );
}

export const getStaticProps = async ({ params }) => {
  const article = getArticleBySlug(params.slug, [
    "slug",
    "title",
    "date",
    "summary",
    "coverImage",
    "author",
    "content",
    "tags",
  ]);
  const content = await markdownToHtml(article.content || "");

  return {
    props: {
      article: {
        ...article,
        content,
      },
    },
  };
};

export const getStaticPaths = async () => {
  const articles = getAllArticles(["slug"]);

  return {
    paths: articles.map(({ slug }) => {
      return {
        params: {
          slug,
        },
      };
    }),
    fallback: false,
  };
};

export default Article;
