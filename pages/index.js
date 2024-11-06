import Head from 'next/head';

import HowItWorks from '../components/CumFunct';
import TechSolutions from '../components/features';
import TechHero from '../components/hero';
import TechPricing from '../components/pricing';


export default function Home() {
   

    return (
        <div>
            <Head>
                <title>Solicita.ro - Agenție de Marketing Digital și Dezvoltare Web | SEO, Web, Mobile</title>
                <meta name="description" content="Agenție premium de marketing digital din România. Experți în SEO, dezvoltare web, aplicații mobile și publicitate online. Rezultate garantate și creștere măsurabilă." />
                <meta name="keywords" content="agenție marketing digital, SEO România, dezvoltare web, aplicații mobile, publicitate online, marketing digital București, web design, optimizare SEO" />
                <meta name="robots" content="index, follow" />
                <meta property="og:title" content="Solicita.ro - Agenție de Marketing Digital și Dezvoltare Web" />
                <meta property="og:description" content="Transformăm afacerea ta prin servicii complete de marketing digital și dezvoltare software." />
                <meta property="og:image" content="/og-image.jpg" />
                <meta property="og:url" content="https://solicita.ro" />
                <link rel="canonical" href="https://solicita.ro" />
                <meta name="google-site-verification" content="your-verification-code" />
                <script type="application/ld+json">
                  {`
                    {
                      "@context": "https://schema.org",
                      "@type": "Organization",
                      "name": "Solicita.ro",
                      "url": "https://solicita.ro",
                      "logo": "https://solicita.ro/logo.svg",
                      "description": "Agenție premium de marketing digital din România",
                      "address": {
                        "@type": "PostalAddress",
                        "addressLocality": "București",
                        "addressCountry": "RO"
                      },
                      "contactPoint": {
                        "@type": "ContactPoint",
                        "telephone": "+40-xxx-xxx-xxx",
                        "contactType": "customer service"
                      }
                    }
                  `}
                </script>
            </Head>
            <TechHero />
            <TechSolutions />
            <HowItWorks />
            <TechPricing />
            
        </div>
    );
} 