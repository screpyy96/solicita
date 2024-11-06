import '../styles/globals.css';
import { Analytics } from "@vercel/analytics/react"
import { DefaultSeo } from 'next-seo';
import SEO from '../next-seo.config';

import Navbar from '../components/Navbar';
import Footer from '../components/footer';
export default function App({ Component, pageProps }) {
    return (
        <>
            <Analytics />
            <DefaultSeo {...SEO} />
            <Navbar />
            <Component {...pageProps} />
            <Footer />
        </>
    );
} 