import { notFound } from "next/navigation"
import { getPostBySlug, formatDate, calculateReadTime, stripHtml } from "@/lib/wordpress"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, User, ArrowLeft } from "lucide-react"
import Link from "next/link"

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = await getPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-background via-muted/20 to-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-6">
              <Button variant="ghost" asChild className="rounded-sm">
                <Link href="/blog" className="flex items-center gap-2 text-muted-foreground hover:text-foreground">
                  <ArrowLeft className="w-4 h-4" />
                  Back to Blog
                </Link>
              </Button>

              {post._embedded?.["wp:term"]?.[0]?.[0] && (
                <Badge variant="secondary" className="rounded-sm">
                  {post._embedded["wp:term"][0][0].name}
                </Badge>
              )}

              <h1 className="font-heading font-bold text-4xl lg:text-5xl text-foreground leading-tight">
                {post.title.rendered}
              </h1>

              <div className="flex items-center gap-6 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <User className="w-5 h-5" />
                  <span>{post._embedded?.author?.[0]?.name || "RankoLink Team"}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  <span>{formatDate(post.date)}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  <span>{calculateReadTime(post.content.rendered)}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Image */}
        {post._embedded?.["wp:featuredmedia"]?.[0] && (
          <section className="py-8">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="aspect-video overflow-hidden rounded-lg">
                <img
                  src={post._embedded["wp:featuredmedia"][0].source_url || "/placeholder.svg"}
                  alt={post._embedded["wp:featuredmedia"][0].alt_text || post.title.rendered}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </section>
        )}

        {/* Content */}
        <section className="py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div
              className="prose prose-lg max-w-none prose-headings:font-heading prose-headings:text-foreground prose-p:text-muted-foreground prose-a:text-primary prose-strong:text-foreground"
              dangerouslySetInnerHTML={{ __html: post.content.rendered }}
            />
          </div>
        </section>

        {/* Back to Blog */}
        <section className="py-12 border-t border-border">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Button asChild size="lg" className="rounded-sm">
              <Link href="/blog">View More Articles</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const post = await getPostBySlug(params.slug)

  if (!post) {
    return {
      title: "Post Not Found",
    }
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
  }
}
