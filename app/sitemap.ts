import { MetadataRoute } from 'next'
import { getPosts } from '@/lib/wordpress'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://rankolink.com'
  console.log('Sitemap Base URL:', baseUrl)

  // Static routes
  const routes = [
    '',
    '/about',
    '/blog',
    '/contact',
    '/pricing',
    '/services',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  // Dynamic blog routes
  console.log('Fetching posts for sitemap...')
  const { posts } = await getPosts({ 
    per_page: 100,
    fields: ['slug', 'date']
  })
  console.log(`Fetched ${posts.length} posts for sitemap`)
  
  const blogRoutes = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }))

  return [...routes, ...blogRoutes]
}
