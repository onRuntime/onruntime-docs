import urlcat from "urlcat";
import { DocsThemeConfig, useConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  docsRepositoryBase: "https://github.com/onRuntime/onruntime-docs/blob/master",
  logo: <span>onRuntime</span>,
  head: function useHead() {
    const config = useConfig();
    const {
      title,
      frontMatter: { meta },
    } = config;
    const description =
      meta?.description ||
      "Studio that brings together teams of creators and develops applications, website and game platforms.";

    const ogImage = urlcat(`https://og-image.onruntime.com/${title}.jpeg`, {
      description,
      theme: "dark",
      md: 1,
      fontSize: "100px",
      images: "https://onruntime.com/static/images/logo/onruntime.svg",
    });

    return (
      <>
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta httpEquiv="Content-Language" content="en" />
        <meta name="description" content={description} />
        <meta name="og:description" content={description} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@onRuntime" />
        <meta name="twitter:image" content={ogImage} />
        <meta
          name="og:title"
          content={title ? title + " | onRuntime" : "onRuntime Studio"}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={description} />
        <meta name="og:title" content={title} />
        <meta name="og:image" content={ogImage} />
      </>
    );
  },
};

export default config;
