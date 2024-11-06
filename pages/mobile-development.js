import Head from 'next/head';

export default function MobileDevelopment() {
    return (
        <div className="container mx-auto px-4 py-10">
            <Head>
                <title>Dezvoltare Mobilă - Solicita.ro</title>
                <meta name="description" content="Oferim servicii de dezvoltare mobilă pentru aplicații native și cross-platform." />
                <meta name="keywords" content="dezvoltare mobilă, aplicații mobile, servicii mobile" />
                <meta name="robots" content="index, follow" />
            </Head>
            <h1 className="text-3xl font-bold mb-6">Dezvoltare Mobilă</h1>
            <p className="mb-4">
                Creăm aplicații mobile native și cross-platform pentru a-ți extinde prezența pe dispozitive mobile.
            </p>
            <h2 className="text-2xl font-semibold mt-6 mb-4">Serviciile Noastre:</h2>
            <ul className="list-disc pl-5 mb-6">
                <li>Dezvoltare aplicații native pentru iOS și Android.</li>
                <li>Dezvoltare aplicații web progresive (PWA).</li>
                <li>Integrarea API-urilor și a funcționalităților specifice.</li>
                <li>Testare și optimizare pentru performanță.</li>
            </ul>
            <h2 className="text-2xl font-semibold mt-6 mb-4">De ce să alegi serviciile noastre?</h2>
            <p className="mb-4">
                Echipa noastră de dezvoltatori mobili are experiență vastă în crearea de aplicații care oferă o experiență utilizator excelentă.
            </p>
            <h2 className="text-2xl font-semibold mt-6 mb-4">Contactează-ne</h2>
            <p className="mb-4">
                Ești gata să îți dezvolți aplicația mobilă? <strong>Contactează-ne astăzi</strong> pentru o consultație gratuită!
            </p>
            <a href="#contact" className="inline-block px-8 py-4 bg-blue-600 text-white font-bold rounded-md hover:bg-blue-700 transition-colors duration-300">
                Începe Acum
            </a>
        </div>
    );
} 