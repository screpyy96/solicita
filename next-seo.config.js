export default {
    titleTemplate: '%s | Solicita.ro',
    defaultTitle: 'Solicita.ro - Agenție de Marketing Digital și Dezvoltare Web',
    description: 'Agenție premium de marketing digital din România. Experți în SEO, dezvoltare web, aplicații mobile și publicitate online.',
    openGraph: {
      type: 'website',
      locale: 'ro_RO',
      url: 'https://solicita.ro',
      siteName: 'Solicita.ro',
      images: [
        {
          url: 'https://solicita.ro/og-image.jpg',
          width: 1200,
          height: 630,
          alt: 'Solicita.ro',
        },
      ],
    },
    twitter: {
      handle: '@solicita_ro',
      site: '@solicita_ro',
      cardType: 'summary_large_image',
    },
    additionalMetaTags: [
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        name: 'keywords',
        content: 'marketing digital, seo, web development, mobile apps, online advertising, romania',
      },
    ],
    additionalLinkTags: [
      {
        rel: 'icon',
        href: '/favicon.ico',
      },
      {
        rel: 'apple-touch-icon',
        href: '/apple-touch-icon.png',
        sizes: '180x180'
      },
    ],
  };