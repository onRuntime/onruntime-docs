import { FC, ReactNode } from "react";
import { ThemeProviderProps } from "next-themes/dist/types";
import { NextSeoProps } from "next-seo";

export type Renderable = string | React.ReactNode | React.ComponentType;

/**
 * nextra-theme-docs Theme config
 * @link https://github.com/shuding/nextra/blob/core/packages/nextra-theme-docs/src/types.ts
 */
export interface DocsThemeConfig {
  banner: {
    dismissible: boolean;
    key: string;
    text?: ReactNode | FC;
  };
  chat: {
    icon: ReactNode | FC;
    link?: string;
  };
  components?: Record<string, FC>;
  darkMode: boolean;
  direction: "ltr" | "rtl";
  docsRepositoryBase: string;
  editLink: {
    component: FC<{
      children: ReactNode;
      className?: string;
      filePath?: string;
    }>;
    text: ReactNode | FC;
  };
  faviconGlyph?: string;
  feedback: {
    content?: ReactNode | FC;
    labels?: string;
  };
  footer: {
    component: ReactNode | FC<{ menu: boolean }>;
    text: ReactNode | FC;
  };
  getNextSeoProps?: () => NextSeoProps;
  gitTimestamp: ReactNode | FC<{ timestamp: Date }>;
  head: ReactNode | FC;
  i18n: { direction?: string; locale: string; text: string }[];
  logo: ReactNode | FC;
  logoLink?: boolean | string;
  main?: FC<{ children: ReactNode }>;
  navbar: ReactNode;
  navigation:
    | boolean
    | {
        next: boolean;
        prev: boolean;
      };
  nextThemes: Pick<
    ThemeProviderProps,
    "defaultTheme" | "storageKey" | "forcedTheme"
  >;
  notFound: {
    content: ReactNode | FC;
    labels: string;
  };
  primaryHue:
    | number
    | {
        dark: number;
        light: number;
      };
  project: {
    icon: ReactNode | FC;
    link?: string;
  };
  search: {
    component:
      | ReactNode
      | FC<{
          className?: string;
          directories: unknown[];
        }>;
    emptyResult: ReactNode | FC;
    // Can't be React component
    placeholder: string | (() => string);
  };
  serverSideError: {
    content: ReactNode | FC;
    labels: string;
  };
  sidebar: {
    defaultMenuCollapseLevel: number;
    titleComponent: ReactNode | FC<{ title: string; type: string }>;
  };
  toc: {
    component: ReactNode | FC;
    extraContent?: ReactNode | FC;
    float: boolean;
    title: ReactNode | FC;
  };
}
