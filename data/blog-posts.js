export const categories = [
  {
    id: 'seo',
    name: 'SEO',
    slug: 'seo',
    description: 'Articole despre optimizare pentru motoare de căutare'
  },
  {
    id: 'marketing', 
    name: 'Marketing Digital',
    slug: 'marketing-digital',
    description: 'Strategii și tactici de marketing online'
  },
  {
    id: 'web-dev',
    name: 'Dezvoltare Web',
    slug: 'dezvoltare-web',
    description: 'Tutoriale și sfaturi pentru dezvoltare web'
  },
  {
    id: 'design',
    name: 'Design',
    slug: 'design',
    description: 'Principii de design și UX/UI'
  }
];

export const posts = [
  {
    id: 'seo-2024',
    slug: 'seo-2024',
    title: 'Tendințe SEO în 2024',
    date: '2024-03-20',
    excerpt: 'Descoperă cele mai importante strategii SEO pentru 2024 și cum să-ți optimizezi site-ul pentru motoarele de căutare.',
    content: `
      Anul 2024 aduce schimbări majore în lumea SEO. Iată cele mai importante aspecte pe care trebuie să le urmărești:

      1. AI și Căutarea Semantică
      Inteligența artificială joacă un rol tot mai important în modul în care Google înțelege conținutul. Focusează-te pe:
      - Conținut natural, conversațional
      - Răspunsuri complete la întrebările utilizatorilor
      - Contextualizarea informației

      2. Core Web Vitals
      Performanța tehnică rămâne critică:
      - Optimizarea timpilor de încărcare
      - Experiență mobilă excelentă
      - Stabilitate vizuală

      3. E-E-A-T
      Expertiza, Experiența, Autoritatea și Trustul (E-E-A-T) devin și mai importante:
      - Demonstrează expertiza în domeniu
      - Construiește autoritate prin backlink-uri relevante
      - Menține informația actualizată
    `,
    category: 'SEO',
    image: '/images/seo-2024.jpg',
    tags: ['seo', 'marketing digital', 'optimizare']
  },
  {
    id: 'marketing-digital',
    slug: 'marketing-digital-2024',
    title: 'Strategii de Marketing Digital pentru 2024',
    date: '2024-03-15',
    excerpt: 'Află care sunt cele mai eficiente strategii de marketing digital pentru a-ți crește afacerea în 2024.',
    content: `
      În era digitală, prezența online puternică este esențială. Iată strategiile care funcționează în 2024:

      1. Video Marketing
      Conținutul video domină social media:
      - Reels și TikTok pentru reach organic
      - Live streaming pentru engagement
      - Tutorial-uri și how-to pentru valoare

      2. Personalizare
      Personalizarea experienței devine standard:
      - Segmentare avansată a audienței
      - Email marketing personalizat
      - Recomandări bazate pe comportament

      3. Social Commerce
      Vânzările prin social media cresc:
      - Instagram Shopping
      - Facebook Marketplace
      - TikTok Shop
    `,
    category: 'Marketing',
    image: '/images/marketing-digital.jpg',
    tags: ['marketing digital', 'social media', 'strategie']
  },
  
];

// Funcții helper
export const getFeaturedPosts = () => {
  return posts.filter(post => post.featured);
};

export const getRecentPosts = (limit = 3) => {
  return [...posts]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, limit);
};

export const getPostsByCategory = (categoryId) => {
  return posts.filter(post => post.category === categoryId);
};
export const getRelatedPosts = (currentPost, limit = 3) => {
  return posts
    .filter(post => 
      post.id !== currentPost.id && 
      (post.category === currentPost.category ||
       post.tags.some(tag => currentPost.tags.includes(tag)))
    )
    .slice(0, limit);
};

// Funcție pentru a găsi postările adiacente
export function getAdjacentPosts(currentSlug) {
  const currentIndex = posts.findIndex(post => post.slug === currentSlug);
  
  return {
    previous: currentIndex > 0 ? posts[currentIndex - 1] : null,
    next: currentIndex < posts.length - 1 ? posts[currentIndex + 1] : null
  };
}

