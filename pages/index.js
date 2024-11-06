import Head from 'next/head';

import HowItWorks from '../components/CumFunct';
import TechSolutions from '../components/features';
import TechHero from '../components/hero';
import TechPricing from '../components/pricing';


export default function Home() {
   

    return (
        <div>
            <Head>
                <title>Solicita.ro - Soluții Digitale pentru Afacerea Ta</title>
                <meta name="description" content="Oferim servicii de SEO, dezvoltare web, dezvoltare mobilă și publicitate online pentru a-ți îmbunătăți prezența digitală." />
                <meta name="keywords" content="SEO, dezvoltare web, dezvoltare mobilă, publicitate online, marketing digital" />
                <meta name="robots" content="index, follow" />
            </Head>
            <TechHero />
            <TechSolutions />
            <HowItWorks />
            <TechPricing />
            
        </div>
    );
} 