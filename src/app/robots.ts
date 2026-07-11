import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/portal", "/admin"],
    },
    sitemap: "https://nextpointacademy.com/sitemap.xml",
  };
}
