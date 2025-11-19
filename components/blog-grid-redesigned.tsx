"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight, User } from "lucide-react";
import Link from "next/link";
import {
  getPosts,
  formatDate,
  stripHtml,
  calculateReadTime,
} from "@/lib/wordpress";
import { Suspense } from "react";
import { motion } from "framer-motion";

interface BlogGridProps {
  searchQuery?: string;
  selectedCategory?: string;
}

async function BlogPosts({ searchQuery, selectedCategory }: BlogGridProps) {
  const { posts } = await getPosts({
    per_page: 12,
    search: searchQuery,
    categories: selectedCategory,
  });

  if (posts.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-blue-700 text-lg font-medium">
          No blog posts found.
        </p>
        <p className="text-muted-foreground">
          Check back soon for new content!
        </p>
      </div>
    );
  }

  const featuredPost = posts[0];
  const regularPosts = posts.slice(1);

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.5 },
    }),
  };

  return (
    <>
      {/* 🔶 FEATURED POST — MAGAZINE HERO */}
      {featuredPost && (
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="relative grid grid-cols-1 lg:grid-cols-2 rounded-3xl overflow-hidden shadow-[0_6px_24px_rgba(30,64,175,0.12)] border border-blue-100 bg-white">
            {/* IMAGE */}
            <div className="relative overflow-hidden group h-[320px] lg:h-full">
              <img
                src={
                  featuredPost._embedded?.["wp:featuredmedia"]?.[0]
                    ?.source_url || "/placeholder.svg"
                }
                alt={
                  featuredPost._embedded?.["wp:featuredmedia"]?.[0]?.alt_text ||
                  featuredPost.title.rendered
                }
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Category Badge */}
              {featuredPost._embedded?.["wp:term"]?.[0]?.[0] && (
                <Badge className="absolute top-6 left-6 bg-blue-600 text-white shadow-lg px-4 py-1.5 text-sm rounded-full">
                  {featuredPost._embedded["wp:term"][0][0].name}
                </Badge>
              )}
            </div>

            {/* CONTENT */}
            <div className="p-10 flex flex-col justify-center space-y-5">
              <Badge className="bg-blue-700 text-white text-xs w-fit rounded-full px-3 py-1">
                Featured Article
              </Badge>

              <h2 className="font-heading font-bold text-4xl text-blue-950 leading-snug">
                {featuredPost.title.rendered}
              </h2>

              <p className="text-blue-800/80 text-lg leading-relaxed">
                {stripHtml(featuredPost.excerpt.rendered)}
              </p>

              {/* Meta */}
              <div className="flex items-center flex-wrap gap-5 text-sm text-blue-700/70 pt-2">
                <div className="flex items-center gap-1">
                  <User className="w-4 h-4" />
                  {featuredPost._embedded?.author?.[0]?.name ||
                    "RankoLink Team"}
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {formatDate(featuredPost.date)}
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {calculateReadTime(featuredPost.content.rendered)}
                </div>
              </div>

              <Button
                asChild
                className="w-fit mt-1 bg-blue-600 hover:bg-blue-700 text-white rounded-xl px-6 py-2"
              >
                <Link
                  href={`/blog/${featuredPost.slug}`}
                  className="flex items-center gap-2"
                >
                  Read Article <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </motion.div>
      )}

      {/* 🔹 REGULAR POSTS — CLEAN CORPORATE GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {regularPosts.map((post, i) => (
          <motion.div
            key={post.id}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
          >
            <Card
              className="
              rounded-2xl overflow-hidden
              border border-blue-100
              bg-white shadow-sm
              hover:shadow-[0_6px_20px_rgba(30,64,175,0.15)]
              transition-all duration-300 h-full
            "
            >
              {/* Image */}
              <div className="relative aspect-video overflow-hidden group">
                <img
                  src={
                    post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
                    "/placeholder.svg"
                  }
                  alt={
                    post._embedded?.["wp:featuredmedia"]?.[0]?.alt_text ||
                    post.title.rendered
                  }
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Category */}
                {post._embedded?.["wp:term"]?.[0]?.[0] && (
                  <Badge className="absolute top-4 left-4 bg-white/90 border border-blue-200 text-blue-700 text-xs rounded-full px-3 py-1 shadow-sm">
                    {post._embedded["wp:term"][0][0].name}
                  </Badge>
                )}
              </div>

              <CardHeader className="p-6 space-y-3">
                <CardTitle className="font-heading font-semibold text-xl text-blue-950 hover:text-blue-700 transition-colors">
                  {post.title.rendered}
                </CardTitle>
              </CardHeader>

              <CardContent className="px-6 pb-6 space-y-5">
                {/* Meta */}
                <div className="flex flex-wrap items-center gap-4 text-sm text-blue-700/70">
                  <div className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    {post._embedded?.author?.[0]?.name || "RankoLink Team"}
                  </div>

                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {formatDate(post.date)}
                  </div>
                </div>

                <Button
                  variant="outline"
                  asChild
                  className="w-full border-blue-200 text-blue-700 bg-white hover:bg-blue-50 hover:border-blue-400 rounded-xl py-2 font-medium"
                >
                  <Link
                    href={`/blog/${post.slug}`}
                    className="flex items-center justify-center gap-2"
                  >
                    Read More <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </>
  );
}

function BlogGridSkeleton() {
  return (
    <div className="space-y-16">
      <Card className="border-blue-100 overflow-hidden rounded-xl">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="aspect-video bg-blue-100 animate-pulse" />
          <div className="p-8 space-y-4">
            <div className="h-6 bg-blue-100 rounded w-20 animate-pulse" />
            <div className="h-8 bg-blue-100 rounded w-3/4 animate-pulse" />
            <div className="space-y-2">
              <div className="h-4 bg-blue-100 rounded animate-pulse" />
              <div className="h-4 bg-blue-100 rounded w-5/6 animate-pulse" />
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default function BlogGridRedesigned({
  searchQuery,
  selectedCategory,
}: BlogGridProps) {
  return (
    <section className="py-24 bg-blue-50/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Suspense fallback={<BlogGridSkeleton />}>
          <BlogPosts
            searchQuery={searchQuery}
            selectedCategory={selectedCategory}
          />
        </Suspense>

        <div className="text-center mt-16">
          <Button
            variant="outline"
            size="lg"
            className="rounded-xl border-blue-200 text-blue-700 bg-white hover:bg-blue-100 hover:border-blue-400 px-8"
          >
            Load More Articles
          </Button>
        </div>
      </div>
    </section>
  );
}
