import Image from "next/image";
import Link from "next/link";
import { ArticleTitle, CardArticle, CardImage, TagsContainer } from "./styled";
import shimmer from "../../commons/utils/shimmer";
import { toBase64 } from "../../commons/utils/base64";

function ArticleItem({ content }) {
  return (
    <CardArticle>
      <CardImage>
        <Image
          src={content.coverImage}
          alt={content.title}
          layout="fill"
          placeholder="blur"
          blurDataURL={`data:image/svg+xml;base64,${toBase64(
            shimmer(700, 150)
          )}`}
        />
      </CardImage>
      <Link href={"/article/" + content.slug} passHref>
        <ArticleTitle>{content.title} →</ArticleTitle>
      </Link>
      <TagsContainer>
        <p>Tags: {content.tags}</p>
      </TagsContainer>
    </CardArticle>
  );
}

export default ArticleItem;
