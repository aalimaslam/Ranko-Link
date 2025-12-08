import { notFound } from "next/navigation";
import {
  getPostBySlug,
  formatDate,
  calculateReadTime,
  stripHtml,
} from "@/lib/wordpress";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, User, ArrowLeft } from "lucide-react";
import Link from "next/link";
import BlogTOC from "@/components/blog-toc";
import BlogCTA from "@/components/blog-cta";
import ScrollTracker from "@/components/ui/scroll-tracker";
import BlogAuthor from "@/components/blog-author";
import SimilarBlogs from "@/components/similar-blogs";

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  // Process content to add IDs to headings for TOC
  // This is a simple server-side replacement. For more complex cases, use a parser.
  let content = post.content.rendered;
  let headingIndex = 0;
  content = content.replace(
    /<(h[2])([^>]*)>(.*?)<\/\1>/gi,
    (match, tag, attrs, text) => {
      const id = `heading-${headingIndex++}`;
      // Add id and scroll-margin-top class for sticky header offset
      // Check if class attribute exists
      let newAttrs = attrs;
      if (newAttrs.includes("class=")) {
        newAttrs = newAttrs.replace(
          /class=(["'])(.*?)\1/,
          'class=$1$2 scroll-mt-32$1'
        );
      } else {
        newAttrs += ' class="scroll-mt-32"';
      }
      return `<${tag} id="${id}"${newAttrs}>${text}</${tag}>`;
    }
  );

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <ScrollTracker />
      <main>
        {/* Hero Section */}
        <section className="min-h-[60vh] flex items-center pt-24 pb-12 bg-[#f5f5f5]">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
              {/* Left: Content */}
              <div className="flex-1 space-y-6">
                <Badge
                  variant="outline"
                  className="rounded-full px-3 py-1 border-blue-200 text-blue-700 bg-blue-50 w-fit"
                >
                  {calculateReadTime(post.content.rendered)}
                </Badge>

                <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-5xl text-blue-950 leading-[1.1]">
                  {post.title.rendered}
                </h1>

                <div className="flex items-center gap-3 pt-2">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-lg shrink-0">
                    {post._embedded?.author?.[0]?.name?.charAt(0) || "R"}
                  </div>
                  <div>
                    <p className="font-semibold text-blue-950">
                      {post._embedded?.author?.[0]?.name || "RankoLink Team"}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {formatDate(post.date)}
                    </p>
                  </div>
                </div>
              </div>

              {/* Right: Image */}
              {post._embedded?.["wp:featuredmedia"]?.[0] && (
                <div className="flex-1 w-full lg:max-w-xl">
                  <div className="relative aspect-[16/10] rounded-3xl overflow-hidden shadow-sm">
                    <img
                      src={
                        post._embedded["wp:featuredmedia"][0].source_url ||
                        "/placeholder.svg"
                      }
                      alt={
                        post._embedded["wp:featuredmedia"][0].alt_text ||
                        post.title.rendered
                      }
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-12 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              {/* Left Sidebar: TOC */}
              <div className="hidden lg:block lg:col-span-4 bg-blue-100 p-4 rounded-2xl">
                <BlogTOC content={content} />
              </div>

              {/* Main Content */}
              <div className="lg:col-span-8">
                <div
                  className="prose prose-lg max-w-none 
                    prose-headings:font-heading prose-headings:font-bold prose-headings:text-blue-950 
                    prose-p:text-slate-600 prose-p:leading-relaxed
                    prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline
                    prose-strong:text-blue-900
                    prose-li:text-slate-600
                    prose-img:rounded-2xl prose-img:shadow-lg"
                  dangerouslySetInnerHTML={{ __html: content }}
                />

                {/* Author Profile */}
                <div className="mt-8">
                   <BlogAuthor 
                      author={{
                        name: post._embedded?.author?.[0]?.name || "RankoLink Team",
                        avatar_url: post._embedded?.author?.[0]?.avatar_urls?.["96"]
                      }}
                   />
                </div>
              </div>
            </div>

            {/* Similar Blogs */}
            <SimilarBlogs currentPostId={post.id} categories={post.categories} />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: `${post.title.rendered} | RankoLink Blog`,
    description: stripHtml(post.excerpt.rendered),
    openGraph: {
      title: post.title.rendered,
      description: stripHtml(post.excerpt.rendered),
      images: post._embedded?.["wp:featuredmedia"]?.[0]?.source_url
        ? [post._embedded["wp:featuredmedia"][0].source_url]
        : [],
    },
  };
}

