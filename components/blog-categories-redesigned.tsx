"use client";

import { Badge } from "@/components/ui/badge";
import { getCategories, type WordPressCategory } from "@/lib/wordpress";
import { Suspense, useEffect, useState } from "react";
import { motion } from "framer-motion";

interface BlogCategoriesProps {
  selectedCategory?: string;
  onCategoryChange?: (categoryId: string) => void;
}

function CategoriesList({
  selectedCategory,
  onCategoryChange,
}: BlogCategoriesProps) {
  const [categories, setCategories] = useState<WordPressCategory[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      setLoading(true);
      try {
        const fetchedCategories = await getCategories();
        setCategories(fetchedCategories);
      } catch (error) {
        console.error("Failed to fetch categories:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  if (loading) {
    return <CategoriesSkeleton />;
  }

  const allCategories = [
    {
      id: 0,
      name: "All Posts",
      slug: "",
      count: categories.reduce((sum, cat) => sum + cat.count, 0),
    },
    ...categories.filter((cat) => cat.count > 0),
  ];

  return (
    <div className="flex flex-wrap gap-4 justify-center">
      {allCategories.map((category) => {
        // Check if active:
        // If selectedCategory is empty/undefined, "All Posts" (id 0) is active.
        // Otherwise, match by ID.
        const isAllPosts = category.id === 0;
        const isActive =
          selectedCategory === category.id.toString() ||
          (!selectedCategory && isAllPosts);

        return (
          <motion.div
            key={category.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="cursor-pointer"
          >
            <Badge
              variant="outline"
              onClick={() =>
                onCategoryChange?.(isAllPosts ? "" : category.id.toString())
              }
              className={`px-5 py-2.5 text-sm font-medium rounded-full transition-all duration-200 border-2 
                ${
                  isActive
                    ? "bg-blue-600 border-blue-600 text-white shadow-md hover:bg-blue-700"
                    : "bg-white border-blue-200 text-blue-700 hover:bg-blue-50 hover:border-blue-400"
                }`}
            >
              {category.name}{" "}
              <span className="opacity-70 ml-1">({category.count})</span>
            </Badge>
          </motion.div>
        );
      })}
    </div>
  );
}

function CategoriesSkeleton() {
  return (
    <div className="flex flex-wrap gap-4 justify-center">
      {Array.from({ length: 6 }).map((_, i) => (
        <div
          key={i}
          className="h-8 bg-blue-100 dark:bg-blue-800 rounded-full animate-pulse w-24"
        />
      ))}
    </div>
  );
}

export default function BlogCategoriesRedesigned({
  selectedCategory,
  onCategoryChange,
}: BlogCategoriesProps) {
  return (
    <section className="py-12 bg-blue-50 dark:bg-blue-950 border-b border-blue-100 dark:border-blue-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <CategoriesList
          selectedCategory={selectedCategory}
          onCategoryChange={onCategoryChange}
        />
      </div>
    </section>
  );
}
