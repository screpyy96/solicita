const { writeFileSync, readdirSync, statSync } = require('fs');
const { join } = require('path');

// Adăugăm rute statice cunoscute
const staticRoutes = [
  '/',
  '/contact',
  '/seo',
  '/web-development',
  '/mobile-development',
  '/ads',
  '/mobile-development/ios',
  '/mobile-development/android',
  '/mobile-development/cross-platform'
];

async function generateSitemap() {
  try {
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${staticRoutes
        .map((route) => {
          let priority = 0.8;
          let changefreq = 'weekly';

          if (route === '/') {
            priority = 1;
            changefreq = 'yearly';
          } else if (route === '/contact') {
            priority = 0.8;
            changefreq = 'monthly';
          } else if (route.includes('/mobile-development/')) {
            priority = 0.8;
            changefreq = 'weekly';
          }

          return `
            <url>
              <loc>https://solicita.ro${route}</loc>
              <lastmod>${new Date().toISOString()}</lastmod>
              <changefreq>${changefreq}</changefreq>
              <priority>${priority}</priority>
            </url>
          `;
        })
        .join('')}
    </urlset>`;

    writeFileSync('public/sitemap.xml', sitemap);
    console.log('Sitemap generated successfully!');
  } catch (error) {
    console.error('Error generating sitemap:', error);
  }
}

generateSitemap(); 