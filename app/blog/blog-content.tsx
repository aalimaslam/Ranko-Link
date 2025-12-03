"use client";

import { useState } from "react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import BlogHeroRedesigned from "@/components/blog-hero-redesigned";
import BlogGridRedesigned from "@/components/blog-grid-redesigned";
import BlogCategoriesRedesigned from "@/components/blog-categories-redesigned";
import { useDebounce } from "@/hooks/use-debounce";
import ScrollTracker from "@/components/ui/scroll-tracker";

export default function BlogContent() {
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const debouncedSearchQuery = useDebounce(searchQuery, 500);

  // ✅ useCallback prevents unnecessary re-renders of child components
  const handleCategoryChange = (categoryId: string) => {
    setSelectedCategory(categoryId);
  };

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
  };
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Navigation />
      <main className="flex-grow">
        {/* <ScrollTracker /> */}
        {/* Hero with Search */}
        <BlogHeroRedesigned onSearchChange={handleSearchChange} />

        {/* Category Filter Bar */}
        <BlogCategoriesRedesigned
          selectedCategory={selectedCategory}
          onCategoryChange={handleCategoryChange}
        />

        {/* Blog Cards Grid */}
        <BlogGridRedesigned
          searchQuery={debouncedSearchQuery}
          selectedCategory={selectedCategory}
        />

        {/* Newsletter Section */}
        {/* <BlogNewsletterRedesigned /> */}
        {/* <GrowTogether /> */}
      </main>
      <Footer />
    </div>
  );
}
