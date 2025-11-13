export default function handler(req, res) {
  const robots = `# https://www.robotstxt.org/robotstxt.html
User-agent: *
Allow: /

# Sitemaps
Sitemap: https://dentics-moora-website.onrender.com/api/sitemap.xml

# Block sensitive paths (if any)
Disallow: /api/
Disallow: /_next/

# Crawl-delay for polite crawlers
Crawl-delay: 1`

  res.setHeader('Content-Type', 'text/plain')
  res.setHeader('Cache-Control', 'public, s-maxage=86400, stale-while-revalidate=172800')
  res.status(200).send(robots)
}
