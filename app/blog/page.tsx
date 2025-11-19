"use client";

import { useState, useCallback } from "react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import BlogHeroRedesigned from "@/components/blog-hero-redesigned";
import BlogGridRedesigned from "@/components/blog-grid-redesigned";
import BlogCategoriesRedesigned from "@/components/blog-categories-redesigned";
import GrowTogether from "@/components/grow-together";
import BlogNewsletterRedesigned from "@/components/blog-newsletter-redesigned";

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [searchQuery, setSearchQuery] = useState<string>("");

  // ✅ useCallback prevents unnecessary re-renders of child components
  const handleCategoryChange = useCallback((categorySlug: string) => {
    setSelectedCategory(categorySlug);
  }, []);

  const handleSearchChange = useCallback((query: string) => {
    setSearchQuery(query);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Navigation />
      <main className="flex-grow">
        {/* Hero with Search */}
        <BlogHeroRedesigned onSearchChange={handleSearchChange} />

        {/* Category Filter Bar */}
        <BlogCategoriesRedesigned
          selectedCategory={selectedCategory}
          onCategoryChange={handleCategoryChange}
        />

        {/* Blog Cards Grid */}
        <BlogGridRedesigned
          searchQuery={searchQuery}
          selectedCategory={selectedCategory}
        />

        {/* Newsletter Section */}
        {/* <BlogNewsletterRedesigned />
        <GrowTogether /> */}
      </main>
      <Footer />
    </div>
  );
}
