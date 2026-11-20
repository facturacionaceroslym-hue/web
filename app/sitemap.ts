import type { MetadataRoute } from "next";
import { negocio } from "@/content/negocio";
export default function sitemap(): MetadataRoute.Sitemap {
  const u = negocio.sitioUrl;
  return [{ url: `${u}/`, changeFrequency: "monthly", priority: 1 }, { url: `${u}/privacidad` }, { url: `${u}/terminos` }, { url: `${u}/antifraude` }];
}
