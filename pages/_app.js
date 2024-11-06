import '../styles/globals.css';
import { Analytics } from "@vercel/analytics/react"

import Navbar from '../components/Navbar';
import Footer from '../components/footer';
export default function App({ Component, pageProps }) {
    return (
        <>
            <Analytics />
            <Navbar />
            <Component {...pageProps} />
            <Footer />
        </>
    );
} 