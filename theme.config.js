/* eslint-disable react/jsx-filename-extension */
import Head from "@components/Head";
import Footer from "@components/Footer";
import Brand from "@components/Brand";

/**
 * @type {import("./theme").DocsThemeConfig}
 */
const config = {
  github: "https://github.com/onRuntime/onruntime-docs",
  docsRepositoryBase: "https://github.com/onRuntime/onruntime-docs/blob/master",
  titleSuffix: " | onRuntime Studio",
  projectChatLink: "https://discord.gg/ucX9c5yXmX",
  logo: <Brand />,
  head: ({ title, meta }) => (
    <Head
      title={title}
      description={meta.description}
      keywords={meta.keywords}
    />
  ),
  search: true,
  defaultMenuCollapsed: true,
  prevLinks: true,
  nextLinks: true,
  footer: true,
  floatTOC: true,
  footerEditLink: "Edit this page on GitHub",
  footerText: <Footer />,
  feedbackLabels: "feedback",
  feedbackLink: "Feedback",
  unstable_faviconGlyph: "👋",
  unstable_flexsearch: true,
};

export default config;
