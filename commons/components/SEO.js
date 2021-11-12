import Head from "next/head";

const DEFAULT_META_TAGS_VALUE = {
  description:
    "Tutorial dan Artikel teknologi Pemrograman terbaru untuk membantumu belajar",
  keywords: "belajar pemrograman, belajar html, belajar css, belajar frontend",
  author: "codeonweekend",
  title: "Codeonweekend - Learn code on your free time",
};

function SEO({
  description = DEFAULT_META_TAGS_VALUE.description,
  keywords = DEFAULT_META_TAGS_VALUE.keywords,
  author = DEFAULT_META_TAGS_VALUE.author,
  title = DEFAULT_META_TAGS_VALUE.title,
  image = "/assets/logo.svg",
  url = "/",
  firstImage,
}) {
  return (
    <Head>
      <meta charset="UTF-8" />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <title>{title}</title>
      <meta property="og:type" content="article" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content="Codeonweekend" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:site" content={url} />
      <meta name="twitter:creator" content="@chimemooo"></meta>
      {firstImage & <link rel="preload" href={firstImage} as="image" />}
    </Head>
  );
}

export default SEO;
