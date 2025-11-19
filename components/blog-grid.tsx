import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ArrowRight, User } from "lucide-react"
import Link from "next/link"
import { getPosts, formatDate, stripHtml, calculateReadTime } from "@/lib/wordpress"
import { Suspense } from "react"

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
        <p className="text-muted-foreground text-lg">No blog posts found.</p>
        <p className="text-muted-foreground">Check back soon for new content!</p>
      </div>
    )
  }

  const featuredPost = posts[0]
  const regularPosts = posts.slice(1)

  return (
    <>
      {/* Featured Post */}
      {featuredPost && (
        <Card className="mb-16 border-border overflow-hidden hover:shadow-lg transition-shadow rounded-lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            <div className="aspect-video lg:aspect-auto overflow-hidden">
              <img
                src={
                  featuredPost._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
                  "/placeholder.svg?height=400&width=600&query=featured blog post"
                }
                alt={featuredPost._embedded?.["wp:featuredmedia"]?.[0]?.alt_text || featuredPost.title.rendered}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-8 flex flex-col justify-center">
              <div className="space-y-4">
                <Badge className="bg-primary text-primary-foreground w-fit rounded-sm">Featured</Badge>
                {featuredPost._embedded?.["wp:term"]?.[0]?.[0] && (
                  <Badge variant="secondary" className="w-fit rounded-sm">
                    {featuredPost._embedded["wp:term"][0][0].name}
                  </Badge>
                )}
                <CardTitle className="font-heading font-bold text-2xl lg:text-3xl text-foreground">
                  {featuredPost.title.rendered}
                </CardTitle>
                <CardDescription className="text-muted-foreground text-lg leading-relaxed">
                  {stripHtml(featuredPost.excerpt.rendered)}
                </CardDescription>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
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
                <Button asChild className="w-fit rounded-sm">
                  <Link href={`/blog/${featuredPost.slug}`} className="flex items-center gap-2">
                    Read Article
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </Card>
      )}

      {/* Regular Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {regularPosts.map((post) => (
          <Card key={post.id} className="border-border hover:shadow-lg transition-shadow duration-300 group rounded-md">
            <div className="aspect-video overflow-hidden rounded-t-md">
              <img
                src={
                  post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
                  "/placeholder.svg?height=200&width=400&query=blog post"
                }
                alt={post._embedded?.["wp:featuredmedia"]?.[0]?.alt_text || post.title.rendered}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <CardHeader className="space-y-3">
              {post._embedded?.["wp:term"]?.[0]?.[0] && (
                <Badge variant="secondary" className="w-fit rounded-sm">
                  {post._embedded["wp:term"][0][0].name}
                </Badge>
              )}
              <CardTitle className="font-heading font-semibold text-xl text-foreground group-hover:text-primary transition-colors">
                {post.title.rendered}
              </CardTitle>
              <CardDescription className="text-muted-foreground leading-relaxed">
                {stripHtml(post.excerpt.rendered)}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <User className="w-4 h-4" />
                  {post._embedded?.author?.[0]?.name || "RankoLink Team"}
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {calculateReadTime(post.content.rendered)}
                </div>
              </div>
              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                <Calendar className="w-4 h-4" />
                {formatDate(post.date)}
              </div>
              <Button variant="outline" asChild className="w-full bg-transparent rounded-sm">
                <Link href={`/blog/${post.slug}`} className="flex items-center gap-2">
                  Read More
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  )
}

function BlogGridSkeleton() {
  return (
    <div className="space-y-16">
      {/* Featured Post Skeleton */}
      <Card className="border-border overflow-hidden rounded-lg">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
          <div className="aspect-video lg:aspect-auto bg-muted animate-pulse" />
          <div className="p-8 space-y-4">
            <div className="h-6 bg-muted rounded w-20 animate-pulse" />
            <div className="h-8 bg-muted rounded w-3/4 animate-pulse" />
            <div className="space-y-2">
              <div className="h-4 bg-muted rounded animate-pulse" />
              <div className="h-4 bg-muted rounded w-5/6 animate-pulse" />
            </div>
            <div className="flex gap-4">
              <div className="h-4 bg-muted rounded w-20 animate-pulse" />
              <div className="h-4 bg-muted rounded w-20 animate-pulse" />
            </div>
          </div>
        </div>
      </Card>

      {/* Regular Posts Grid Skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Array.from({ length: 6 }).map((_, i) => (
          <Card key={i} className="border-border rounded-md">
            <div className="aspect-video bg-muted animate-pulse rounded-t-md" />
            <CardHeader className="space-y-3">
              <div className="h-6 bg-muted rounded w-20 animate-pulse" />
              <div className="h-6 bg-muted rounded w-3/4 animate-pulse" />
              <div className="space-y-2">
                <div className="h-4 bg-muted rounded animate-pulse" />
                <div className="h-4 bg-muted rounded w-5/6 animate-pulse" />
              </div>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default function BlogGrid({ searchQuery, selectedCategory }: BlogGridProps) {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Suspense fallback={<BlogGridSkeleton />}>
          <BlogPosts searchQuery={searchQuery} selectedCategory={selectedCategory} />
        </Suspense>

        {/* Load More - This would need state management for pagination */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="rounded-sm bg-transparent">
            Load More Articles
          </Button>
        </div>
      </div>
    </section>
  )
}
