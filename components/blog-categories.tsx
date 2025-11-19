"use client"

import { Badge } from "@/components/ui/badge"
import { getCategories } from "@/lib/wordpress"
import { Suspense } from "react"

interface BlogCategoriesProps {
  selectedCategory?: string
  onCategoryChange?: (categoryId: string) => void
}

async function CategoriesList({ selectedCategory, onCategoryChange }: BlogCategoriesProps) {
  const categories = await getCategories()

  const allCategories = [
    { id: 0, name: "All Posts", slug: "", count: categories.reduce((sum, cat) => sum + cat.count, 0) },
    ...categories.filter((cat) => cat.count > 0), // Only show categories with posts
  ]

  return (
    <div className="flex flex-wrap gap-3 justify-center">
      {allCategories.map((category) => {
        const isActive = selectedCategory === category.slug || (!selectedCategory && category.slug === "")

        return (
          <Badge
            key={category.id}
            variant={isActive ? "default" : "secondary"}
            className={`px-4 py-2 text-sm font-medium cursor-pointer transition-colors rounded-sm ${
              isActive
                ? "bg-primary text-primary-foreground hover:bg-primary/90"
                : "bg-background text-foreground hover:bg-primary/10 hover:text-primary"
            }`}
            onClick={() => onCategoryChange?.(category.slug)}
          >
            {category.name} ({category.count})
          </Badge>
        )
      })}
    </div>
  )
}

function CategoriesSkeleton() {
  return (
    <div className="flex flex-wrap gap-3 justify-center">
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i} className="h-8 bg-muted rounded-sm animate-pulse w-24" />
      ))}
    </div>
  )
}

export default function BlogCategories({ selectedCategory, onCategoryChange }: BlogCategoriesProps) {
  return (
    <section className="py-12 bg-muted/30 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Suspense fallback={<CategoriesSkeleton />}>
          <CategoriesList selectedCategory={selectedCategory} onCategoryChange={onCategoryChange} />
        </Suspense>
      </div>
    </section>
  )
}
