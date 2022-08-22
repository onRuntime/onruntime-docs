import APP from "@constants/main";
import { NextSeo } from "next-seo";
import urlcat from "urlcat";

interface Props {
  title?: string;
  subtitle?: string;
  description?: string;
  keywords?: string[];
  thumbnailUrl?: string;
  noIndex?: boolean;
  noFollow?: boolean;
}

const Head: React.FC<Props> = ({
  title,
  subtitle,
  description,
  keywords,
  thumbnailUrl,
  noIndex,
  noFollow,
}: Props) => {
  const finalTitle = title
    ? `${subtitle ? `${subtitle} - ` : ""}${title} | ${APP}`
    : APP.NAME;

  const finalThumbnailUrl =
    urlcat(`https://og-image.onruntime.com/${subtitle || title}.jpeg`, {
      description,
      theme: "dark",
      md: 1,
      fontSize: "100px",
      images: "https://onruntime.com/static/images/logo/onruntime.svg",
    }) ||
    thumbnailUrl || // TODO: Add a thumbnail parameter to the og-image API
    "/static/images/open-graph-image.jpg";

  return (
    <NextSeo
      title={finalTitle}
      description={description}
      openGraph={{
        title: finalTitle,
        description: description,
        site_name: APP.NAME,
        images: [
          {
            url: finalThumbnailUrl,
            alt: finalTitle,
            type: "image/jpeg",
          },
        ],
      }}
      twitter={{
        handle: "@expatfacilities",
        site: "@expatfacilities",
        cardType: "summary_large_image",
      }}
      additionalMetaTags={[
        {
          property: "keywords",
          content: `expatfacilities, expats, facilities, expatriation, trip, voyage, students${
            keywords ? `, ${keywords.join(", ").toLowerCase()}` : ""
          }`,
        },
        {
          name: "viewport",
          content:
            "width=device-width, initial-scale=1, maximum-scale=5, user-scalable=0",
        },
        {
          name: "theme-color",
          content: "#1e1f20",
        },
      ]}
      noindex={noIndex}
      nofollow={noFollow}
    />
  );
};

export default Head;
