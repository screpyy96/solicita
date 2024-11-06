import Head from 'next/head';

export default function WebDevelopment() {
    return (
        <div className="container mx-auto px-4 py-10">
            <Head>
                <title>Dezvoltare Web - Solicita.ro</title>
                <meta name="description" content="Oferim servicii de dezvoltare web personalizate pentru a crea site-uri eficiente și optimizate." />
                <meta name="keywords" content="dezvoltare web, site-uri web, servicii web, aplicații web" />
                <meta name="robots" content="index, follow" />
            </Head>
            <h1 className="text-3xl font-bold mb-6">Dezvoltare Web</h1>
            <p className="mb-4">
                Creăm site-uri web personalizate și eficiente, optimizate pentru performanță și conversie.
            </p>
            <h2 className="text-2xl font-semibold mt-6 mb-4">Serviciile Noastre:</h2>
            <ul className="list-disc pl-5 mb-6">
                <li>Design personalizat al site-ului.</li>
                <li>Optimizare pentru motoarele de căutare (SEO).</li>
                <li>Integrarea funcționalităților specifice afacerii tale.</li>
                <li>Asistență și mentenanță continuă.</li>
            </ul>
            <h2 className="text-2xl font-semibold mt-6 mb-4">De ce să alegi serviciile noastre?</h2>
            <p className="mb-4">
                Echipa noastră de experți în dezvoltare web se angajează să ofere soluții inovatoare și eficiente pentru a-ți ajuta afacerea să crească.
            </p>
            <h2 className="text-2xl font-semibold mt-6 mb-4">Contactează-ne</h2>
            <p className="mb-4">
                Ești gata să îți dezvolți site-ul? <strong>Contactează-ne astăzi</strong> pentru o consultație gratuită!
            </p>
            <a href="#contact" className="inline-block px-8 py-4 bg-blue-600 text-white font-bold rounded-md hover:bg-blue-700 transition-colors duration-300">
                Începe Acum
            </a>
        </div>
    );
} 