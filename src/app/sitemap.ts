import type { MetadataRoute } from "next";
import { examData } from "@/lib/data/exams";
import { languageData } from "@/lib/data/languages";
import { programData } from "@/lib/data/programs";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://nextpointacademy.com";

  // Base routes
  const routes = ["", "/camps-ete", "/examens", "/institut", "/contact"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  // Dynamic exam routes
  const examRoutes = Object.keys(examData).map((test) => ({
    url: `${baseUrl}/examens/${test}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  // Dynamic language routes
  const languageRoutes = Object.keys(languageData).map((langue) => ({
    url: `${baseUrl}/langues/${langue}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  // Dynamic program routes
  const programRoutes = Object.keys(programData).map((prog) => ({
    url: `${baseUrl}/programmes/${prog}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  return [...routes, ...examRoutes, ...languageRoutes, ...programRoutes];
}
