import type { Metadata } from "next";
import BlogContent from "./blog-content";

export const metadata: Metadata = {
  title: "The Rankolink Blog | SEO & Link Building Insights",
  description:
    "Level up your SEO skills. Our blog offers in-depth tutorials, industry insights, and the latest strategies to help you master link building and improve your search rankings.",
};

export default function BlogPage() {
  return <BlogContent />;
}
