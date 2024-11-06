import Head from 'next/head';

export default function Ads() {
    return (
        <div className="container mx-auto px-4 py-10">
            <Head>
                <title>Publicitate Online - Solicita.ro</title>
                <meta name="description" content="Oferim servicii de publicitate online pentru a-ți crește vizibilitatea și a atrage clienți." />
                <meta name="keywords" content="publicitate online, marketing digital, campanii publicitare" />
                <meta name="robots" content="index, follow" />
            </Head>
            <h1 className="text-3xl font-bold mb-6">Publicitate Online</h1>
            <p className="mb-4">
                Creăm campanii publicitare eficiente pentru a-ți crește vizibilitatea online și a atrage clienți.
            </p>
            <h2 className="text-2xl font-semibold mt-6 mb-4">Serviciile Noastre:</h2>
            <ul className="list-disc pl-5 mb-6">
                <li>Campanii Google Ads pentru a atrage trafic targetat.</li>
                <li>Publicitate pe rețelele sociale (Facebook, Instagram, etc.).</li>
                <li>Analiză și optimizare a campaniilor pentru rezultate maxime.</li>
                <li>Raportare și monitorizare a performanței campaniilor.</li>
            </ul>
            <h2 className="text-2xl font-semibold mt-6 mb-4">De ce să alegi serviciile noastre?</h2>
            <p className="mb-4">
                Echipa noastră de experți în marketing digital te va ajuta să îți maximizezi ROI-ul prin campanii bine gândite și executate.
            </p>
            <h2 className="text-2xl font-semibold mt-6 mb-4">Contactează-ne</h2>
            <p className="mb-4">
                Ești gata să îți crești afacerea prin publicitate online? <strong>Contactează-ne astăzi</strong> pentru o consultație gratuită!
            </p>
            <a href="#contact" className="inline-block px-8 py-4 bg-blue-600 text-white font-bold rounded-md hover:bg-blue-700 transition-colors duration-300">
                Începe Acum
            </a>
        </div>
    );
} 