"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ArrowRight, User } from "lucide-react"
import Link from "next/link"
import { getPosts, formatDate, stripHtml, calculateReadTime } from "@/lib/wordpress"
import { Suspense } from "react"
import { motion } from "framer-motion"

interface BlogGridProps {
  searchQuery?: string
  selectedCategory?: string
}

async function BlogPosts({ searchQuery, selectedCategory }: BlogGridProps) {
  const { posts } = await getPosts({
    per_page: 12,
    search: searchQuery,
    categories: selectedCategory,
  })

  if (posts.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-blue-700 text-lg font-medium">No blog posts found.</p>
        <p className="text-muted-foreground">Check back soon for new content!</p>
      </div>
    )
  }

  const featuredPost = posts[0]
  const regularPosts = posts.slice(1)

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.5 },
    }),
  }

  return (
    <>
      {/* Featured Post */}
      {featuredPost && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="mb-16 border-blue-100 shadow-sm hover:shadow-md transition-shadow rounded-xl overflow-hidden md:h-[40vh]">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="aspect-video lg:aspect-auto overflow-hidden">
                <img
                  src={
                    featuredPost._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
                    "/placeholder.svg?height=400&width=600&query=featured blog post"
                  }
                  alt={featuredPost._embedded?.["wp:featuredmedia"]?.[0]?.alt_text || featuredPost.title.rendered}
                  className="w-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8 flex flex-col justify-center bg-blue-50/40">
                <div className="space-y-4">
                  <Badge className="bg-blue-600 text-white w-fit rounded-full">Featured</Badge>
                  {featuredPost._embedded?.["wp:term"]?.[0]?.[0] && (
                    <Badge variant="outline" className="border-blue-200 text-blue-700 w-fit rounded-full">
                      {featuredPost._embedded["wp:term"][0][0].name}
                    </Badge>
                  )}
                  <CardTitle className="font-heading font-bold text-3xl text-blue-950">
                    {featuredPost.title.rendered}
                  </CardTitle>
                  <CardDescription className="text-blue-800/80 text-lg leading-relaxed">
                    {stripHtml(featuredPost.excerpt.rendered)}
                  </CardDescription>
                  <div className="flex items-center flex-wrap gap-4 text-sm text-blue-700/80">
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      {featuredPost._embedded?.author?.[0]?.name || "RankoLink Team"}
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
                    className="w-fit mt-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-6 py-2"
                  >
                    <Link href={`/blog/${featuredPost.slug}`} className="flex items-center gap-2">
                      Read Article
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      )}

      {/* Regular Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {regularPosts.map((post, i) => (
          <motion.div
            key={post.id}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
          >
            <Card className="border-blue-100 shadow-sm hover:shadow-md transition-shadow duration-300 rounded-xl overflow-hidden h-full bg-white">
              <div className="aspect-video overflow-hidden">
                <img
                  src={
                    post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
                    "/placeholder.svg?height=200&width=400&query=blog post"
                  }
                  alt={post._embedded?.["wp:featuredmedia"]?.[0]?.alt_text || post.title.rendered}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <CardHeader className="space-y-3 p-6">
                {post._embedded?.["wp:term"]?.[0]?.[0] && (
                  <Badge variant="outline" className="border-blue-200 text-blue-700 w-fit rounded-full">
                    {post._embedded["wp:term"][0][0].name}
                  </Badge>
                )}
                <CardTitle className="font-heading font-semibold text-xl text-blue-950 hover:text-blue-700 transition-colors">
                  {post.title.rendered}
                </CardTitle>
                {/* <CardDescription className="text-blue-800/70 leading-relaxed">
                  {stripHtml(post.excerpt.rendered)}
                </CardDescription> */}
              </CardHeader>
              <CardContent className="p-6 pt-0 space-y-4">
                <div className="flex flex-wrap items-center gap-4 text-sm text-blue-700/70">
                  <div className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    {post._embedded?.author?.[0]?.name || "RankoLink Team"}
                  </div>
                  {/* <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {calculateReadTime(post.content.rendered)}
                  </div> */}
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {formatDate(post.date)}
                  </div>
                </div>
                <Button
                  variant="outline"
                  asChild
                  className="w-full border-blue-200 text-blue-700 hover:bg-blue-50 hover:border-blue-400 rounded-lg"
                >
                  <Link href={`/blog/${post.slug}`} className="flex items-center justify-center gap-2 font-medium">
                    Read More
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </>
  )
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
  )
}

export default function BlogGridRedesigned({ searchQuery, selectedCategory }: BlogGridProps) {
  return (
    <section className="py-20 bg-blue-50/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Suspense fallback={<BlogGridSkeleton />}>
          <BlogPosts searchQuery={searchQuery} selectedCategory={selectedCategory} />
        </Suspense>
        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            className="rounded-lg border-blue-200 text-blue-700 hover:bg-blue-100 hover:border-blue-400"
          >
            Load More Articles
          </Button>
        </div>
      </div>
    </section>
  )
}
