import { getPosts } from "@/lib/wordpress";
import Link from "next/link";

export default async function SimilarBlogs({ currentPostId, categories }: { currentPostId: number, categories: number[] }) {
  const categoryString = categories.join(",");
  const { posts } = await getPosts({
    categories: categoryString,
    exclude: [currentPostId],
    per_page: 3
  });

  if (!posts || posts.length === 0) return null;

  return (
    <div className="mt-20 border-t border-slate-100 pt-16">
      <h3 className="font-heading font-bold text-3xl text-blue-900 mb-10 text-center">
        Similar Articles
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <Link 
            key={post.id} 
            href={`/blog/${post.slug}`}
            className="group block bg-white border border-blue-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:border-blue-300 transition-all duration-300 transform hover:-translate-y-1"
          >
            {post._embedded?.["wp:featuredmedia"]?.[0] && (
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={post._embedded["wp:featuredmedia"][0].source_url}
                  alt={post.title.rendered}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            )}
            <div className="p-6">
              <div className="flex gap-2 mb-3">
                 <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded-full uppercase tracking-wider">
                    Read More
                 </span>
              </div>
              <h4 className="font-heading font-bold text-xl text-blue-900 group-hover:text-blue-600 transition-colors line-clamp-2 leading-tight">
                {post.title.rendered}
              </h4>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
