import { readdirSync, statSync } from 'fs'
import { join } from 'path'

function getPages(dir, arrayOfPages = []) {
  const files = readdirSync(dir)

  files.forEach(file => {
    const filePath = join(dir, file)
    const stat = statSync(filePath)

    if (stat.isDirectory()) {
      getPages(filePath, arrayOfPages)
    } else {
      if (file === 'page.js' || file === 'page.tsx') {
        const route = dir
          .replace(process.cwd() + '/app', '')
          .replace(/\\/g, '/')
        
        if (route !== '/api' && route !== '/sitemap') {
          arrayOfPages.push(route || '/')
        }
      }
    }
  })

  return arrayOfPages
}

export default async function sitemap() {
  const pagesDirectory = join(process.cwd(), 'app')
  const pages = getPages(pagesDirectory)

  return pages.map((route) => {
    let priority = 0.8
    let changeFrequency = 'weekly'

    if (route === '/') {
      priority = 1
      changeFrequency = 'yearly'
    } else if (route === '/contact') {
      priority = 0.8
      changeFrequency = 'monthly'
    } else if (route.includes('/mobile-development/')) {
      priority = 0.8
      changeFrequency = 'weekly'
    }

    return {
      url: `https://solicita.ro${route}`,
      lastModified: new Date().toISOString(),
      changeFrequency,
      priority,
    }
  })
} 