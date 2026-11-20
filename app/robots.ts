import type { MetadataRoute } from "next";
import { negocio } from "@/content/negocio";
export default function robots(): MetadataRoute.Robots {
  return { rules: [{ userAgent: "*", allow: "/" }], sitemap: `${negocio.sitioUrl}/sitemap.xml` };
}
