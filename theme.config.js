/* eslint-disable react/jsx-filename-extension */
import Brand from "@components/Brand";
import urlcat from "urlcat";

/**
 * @type {import("./theme").DocsThemeConfig}
 */
const config = {
  project: {
    link: "https://github.com/onRuntime/onruntime-docs",
  },
  chat: {
    link: "https://discord.gg/ucX9c5yXmX",
  },
  docsRepositoryBase: "https://github.com/onRuntime/onruntime-docs/blob/master",
  titleSuffix: " | onRuntime Studio",
  logo: <Brand />,
  head: ({ title = "onRuntime Studio", meta }) => {
    const description =
      (meta && meta.description) ||
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
  navigation: false,
  sidebar: {
    defaultMenuCollapseLevel: true,
  },
  feedback: {
    labels: "feedback",
  },
  footer: {
    text: `MIT ${new Date().getFullYear()} © onRuntime Studio.`,
  },
  editLink: {
    text: "Edit this page on GitHub",
  },
  faviconGlyph: "👋",
  unstable_flexsearch: true,
};

export default config;
