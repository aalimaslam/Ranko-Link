"use client";

interface BlogAuthorProps {
  author: {
    name: string;
    avatar_url?: string;
  };
}

export default function BlogAuthor({ author }: BlogAuthorProps) {
  const initial = author.name ? author.name.charAt(0).toUpperCase() : "A";
  
  return (
    <div className="bg-blue-50 rounded-2xl p-8 mt-12 flex items-center gap-6 border border-blue-100">
      <div className="h-16 w-16 border-2 border-white shadow-sm rounded-full overflow-hidden flex-shrink-0 bg-blue-200 flex items-center justify-center">
        {author.avatar_url ? (
           <img src={author.avatar_url} alt={author.name} className="w-full h-full object-cover" />
        ) : (
           <span className="text-blue-700 font-bold text-xl">{initial}</span>
        )}
      </div>
      <div>
        <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-1">
          Written By
        </p>
        <h3 className="font-heading font-bold text-xl text-blue-900">
          {author.name}
        </h3>
        <p className="text-slate-600 mt-2 text-sm leading-relaxed">
           SEO Specialist & Content Strategist at RankoLink. Passionate about helping businesses grow through transparent and effective link-building strategies.
        </p>
      </div>
    </div>
  );
}
