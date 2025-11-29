export interface WordPressPost {
  id: number;
  title: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  date: string;
  slug: string;
  categories: number[];
  tags: number[];
  featured_media: number;
  author: number;
  _embedded?: {
    author: Array<{
      name: string;
      avatar_urls: {
        [key: string]: string;
      };
    }>;
    "wp:featuredmedia": Array<{
      source_url: string;
      alt_text: string;
    }>;
    "wp:term": Array<
      Array<{
        id: number;
        name: string;
        slug: string;
      }>
    >;
  };
}

export interface WordPressCategory {
  id: number;
  name: string;
  slug: string;
  count: number;
}

const WORDPRESS_API_URL = process.env.NEXT_PUBLIC_WORDPRESS_API_URL;

export async function getPosts(params?: {
  page?: number;
  per_page?: number;
  categories?: string | number;
  search?: string;
}): Promise<{ posts: WordPressPost[]; totalPages: number }> {
  try {
    if (!WORDPRESS_API_URL) {
      console.warn("[v0] WordPress API URL not configured. Using mock data.");
      return getMockPosts(params);
    }

    const searchParams = new URLSearchParams({
      _embed: "true",
      page: (params?.page || 1).toString(),
      per_page: (params?.per_page || 10).toString(),
      ...(params?.categories && { categories: params.categories.toString() }),
      ...(params?.search && { search: params.search }),
    });

    console.log(
      "[v0] Fetching WordPress posts from:",
      `${WORDPRESS_API_URL}?${searchParams}`
    );

    const response = await fetch(`${WORDPRESS_API_URL}/posts?${searchParams}`, {
      next: { revalidate: 300 },
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      console.error(
        "[v0] WordPress API response not ok:",
        response.status,
        response.statusText
      );
      throw new Error(
        `Failed to fetch posts: ${response.status} ${response.statusText}`
      );
    }

    const posts = await response.json();
    const totalPages = Number.parseInt(
      response.headers.get("X-WP-TotalPages") || "1"
    );

    console.log("[v0] Successfully fetched", posts.length, "WordPress posts");
    return { posts, totalPages };
  } catch (error) {
    console.error("Error fetching WordPress posts:", error);
    return getMockPosts(params);
  }
}

export async function getCategories(): Promise<WordPressCategory[]> {
  try {
    if (!WORDPRESS_API_URL) {
      console.warn(
        "[v0] WordPress API URL not configured. Using mock categories."
      );
      return getMockCategories();
    }

    console.log(
      "[v0] Fetching WordPress categories from:",
      `${WORDPRESS_API_URL}`
    );

    const response = await fetch(`${WORDPRESS_API_URL}/categories?per_page=100`, {
      next: { revalidate: 3600 },
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      console.error(
        "[v0] WordPress categories API response not ok:",
        response.status,
        response.statusText
      );
      throw new Error(
        `Failed to fetch categories: ${response.status} ${response.statusText}`
      );
    }

    const categories = await response.json();
    console.log(
      "[v0] Successfully fetched",
      categories.length,
      "WordPress categories"
    );
    return categories;
  } catch (error) {
    console.error("Error fetching WordPress categories:", error);
    return getMockCategories();
  }
}

export async function getCategoryIdBySlug(
  slug: string
): Promise<number | undefined> {
  const categories = await getCategories();
  const category = categories.find((cat) => cat.slug === slug);
  return category?.id;
}

export async function getPostBySlug(
  slug: string
): Promise<WordPressPost | null> {
  try {
    if (!WORDPRESS_API_URL) {
      console.warn("[v0] WordPress API URL not configured. Using mock post.");
      return getMockPostBySlug(slug);
    }

    const response = await fetch(
      `${WORDPRESS_API_URL}/posts?slug=${slug}&_embed=true`,
      {
        next: { revalidate: 300 },
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error(
        `Failed to fetch post: ${response.status} ${response.statusText}`
      );
    }

    const posts = await response.json();
    return posts.length > 0 ? posts[0] : null;
  } catch (error) {
    console.error("Error fetching WordPress post:", error);
    return getMockPostBySlug(slug);
  }
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, "").trim();
}

export function calculateReadTime(content: string): string {
  const wordsPerMinute = 200;
  const words = stripHtml(content).split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return `${minutes} min read`;
}

function getMockCategories(): WordPressCategory[] {
  return [
    { id: 1, name: "Link Building", slug: "link-building", count: 15 },
    { id: 2, name: "SEO Strategy", slug: "seo-strategy", count: 12 },
    { id: 3, name: "Content Marketing", slug: "content-marketing", count: 8 },
    { id: 4, name: "Digital Marketing", slug: "digital-marketing", count: 10 },
    { id: 5, name: "Case Studies", slug: "case-studies", count: 6 },
  ];
}

function getMockPosts(params?: {
  page?: number;
  per_page?: number;
  categories?: string;
  search?: string;
}): { posts: WordPressPost[]; totalPages: number } {
  const mockPosts: WordPressPost[] = [
    {
      id: 1,
      title: {
        rendered: "The Ultimate Guide to White-Hat Link Building in 2024",
      },
      excerpt: {
        rendered:
          "Discover the most effective white-hat link building strategies that will boost your SEO rankings without risking penalties.",
      },
      content: {
        rendered:
          "<p>Link building remains one of the most crucial aspects of SEO...</p>",
      },
      date: "2024-01-15T10:00:00",
      slug: "ultimate-guide-white-hat-link-building-2024",
      categories: [1],
      tags: [1, 2],
      featured_media: 1,
      author: 1,
    },
    {
      id: 2,
      title: { rendered: "How to Identify High-Quality Link Opportunities" },
      excerpt: {
        rendered:
          "Learn the key metrics and indicators that separate high-quality link opportunities from low-value ones.",
      },
      content: { rendered: "<p>Not all backlinks are created equal...</p>" },
      date: "2024-01-10T14:30:00",
      slug: "identify-high-quality-link-opportunities",
      categories: [1, 2],
      tags: [1, 3],
      featured_media: 2,
      author: 1,
    },
    {
      id: 3,
      title: {
        rendered: "Content Marketing Strategies That Attract Natural Backlinks",
      },
      excerpt: {
        rendered:
          "Create content that naturally attracts high-quality backlinks from authoritative websites in your industry.",
      },
      content: {
        rendered: "<p>The best backlinks are earned, not built...</p>",
      },
      date: "2024-01-05T09:15:00",
      slug: "content-marketing-strategies-natural-backlinks",
      categories: [3],
      tags: [2, 4],
      featured_media: 3,
      author: 1,
    },
    {
      id: 4,
      title: {
        rendered: "Content Marketing Strategies That Attract Natural Backlinks",
      },
      excerpt: {
        rendered:
          "Create content that naturally attracts high-quality backlinks from authoritative websites in your industry.",
      },
      content: {
        rendered: "<p>The best backlinks are earned, not built...</p>",
      },
      date: "2024-01-05T09:15:00",
      slug: "content-marketing-strategies-natural-backlinks",
      categories: [3],
      tags: [2, 4],
      featured_media: 3,
      author: 1,
    },
    {
      id: 5,
      title: {
        rendered: "Content Marketing Strategies That Attract Natural Backlinks",
      },
      excerpt: {
        rendered:
          "Create content that naturally attracts high-quality backlinks from authoritative websites in your industry.",
      },
      content: {
        rendered: "<p>The best backlinks are earned, not built...</p>",
      },
      date: "2024-01-05T09:15:00",
      slug: "content-marketing-strategies-natural-backlinks",
      categories: [3],
      tags: [2, 4],
      featured_media: 3,
      author: 1,
    },
  ];

  const filteredPosts = params?.search
    ? mockPosts.filter(
        (post) =>
          post.title.rendered
            .toLowerCase()
            .includes(params.search!.toLowerCase()) ||
          post.excerpt.rendered
            .toLowerCase()
            .includes(params.search!.toLowerCase())
      )
    : mockPosts;

  return { posts: filteredPosts, totalPages: 1 };
}

function getMockPostBySlug(slug: string): WordPressPost | null {
  const mockPosts = getMockPosts().posts;
  return mockPosts.find((post) => post.slug === slug) || null;
}
