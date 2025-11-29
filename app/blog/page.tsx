import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import BlogHeroRedesigned from "@/components/blog-hero-redesigned";
import BlogGridRedesigned, {
  BlogGridSkeleton,
} from "@/components/blog-grid-redesigned";
import BlogCategoriesRedesigned, {
  CategoriesSkeleton,
} from "@/components/blog-categories-redesigned";
import BlogNewsletterRedesigned from "@/components/blog-newsletter-redesigned";
import {
  getCategories,
  getCategoryIdBySlug,
  getPosts,
} from "@/lib/wordpress";
import { Suspense } from "react";

// Server Component (no "use client")
export default async function BlogPage({
  searchParams,
}: {
  searchParams: { category?: string; search?: string };
}) {
  const categorySlug = searchParams.category;
  const searchQuery = searchParams.search;

  // 1. Resolve Category ID if a slug is provided
  let categoryId: number | undefined = undefined;
  if (categorySlug) {
    categoryId = await getCategoryIdBySlug(categorySlug);
  }

  // 2. Fetch Data (Parallel)
  const categoriesPromise = getCategories();
  const postsPromise = getPosts({
    per_page: 12,
    search: searchQuery,
    categories: categoryId, // Pass ID (or undefined)
  });

  const [categories, { posts }] = await Promise.all([
    categoriesPromise,
    postsPromise,
  ]);

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Navigation />
      <main className="flex-grow">
        {/* Hero with Search (Client Component) */}
        <BlogHeroRedesigned />

        {/* Category Filter Bar (Client Component) */}
        <Suspense fallback={<CategoriesSkeleton />}>
          <BlogCategoriesRedesigned
            categories={categories}
            selectedCategory={categorySlug}
          />
        </Suspense>

        {/* Blog Cards Grid (Client Component) */}
        <Suspense fallback={<BlogGridSkeleton />}>
          <BlogGridRedesigned posts={posts} />
        </Suspense>

        {/* Newsletter Section */}
        {/* <BlogNewsletterRedesigned /> */}
      </main>
      <Footer />
    </div>
  );
}
