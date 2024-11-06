import Head from 'next/head';

export default function SEO() {
    return (
        <div className="container mx-auto px-4 py-10">
            <Head>
                <title>Servicii SEO - Solicita.ro</title>
                <meta name="description" content="Oferim soluții complete de optimizare SEO pentru a îmbunătăți vizibilitatea afacerii tale online." />
                <meta name="keywords" content="SEO, optimizare, servicii SEO, marketing digital, trafic organic" />
                <meta name="robots" content="index, follow" />
            </Head>
            <h1 className="text-3xl font-bold mb-6">Servicii SEO</h1>
            <p className="mb-4">
                Oferim soluții complete de optimizare pentru motoarele de căutare, menite să îmbunătățească vizibilitatea afacerii tale online.
            </p>
            <h2 className="text-2xl font-semibold mt-6 mb-4">Ce Oferim:</h2>
            <ul className="list-disc pl-5 mb-6">
                <li>Audit SEO complet pentru a identifica oportunitățile de îmbunătățire.</li>
                <li>Optimizare On-Page pentru a asigura relevanța conținutului.</li>
                <li>Strategii de Link Building pentru a crește autoritatea site-ului.</li>
                <li>Monitorizare și raportare a performanței SEO.</li>
            </ul>
            <h2 className="text-2xl font-semibold mt-6 mb-4">De ce să alegi serviciile noastre SEO?</h2>
            <p className="mb-4">
                Echipa noastră de experți are experiență vastă în domeniu și utilizează cele mai bune practici pentru a asigura rezultate durabile. Ne concentrăm pe strategii personalizate care se potrivesc nevoilor specifice ale afacerii tale.
            </p>
            <h2 className="text-2xl font-semibold mt-6 mb-4">Testimoniale</h2>
            <blockquote className="border-l-4 border-blue-600 pl-4 italic mb-4">
                "Serviciile SEO oferite de această echipă ne-au ajutat să creștem traficul organic cu 150% în doar 6 luni!" - Client Fericit
            </blockquote>
            <blockquote className="border-l-4 border-blue-600 pl-4 italic mb-4">
                "Am observat o îmbunătățire semnificativă a ratei de conversie datorită optimizării site-ului nostru." - Alt Client Fericit
            </blockquote>
            <h2 className="text-2xl font-semibold mt-6 mb-4">Contactează-ne</h2>
            <p className="mb-4">
                Ești gata să îți îmbunătățești prezența online? <strong>Contactează-ne astăzi</strong> pentru o consultație gratuită!
            </p>
            <a href="#contact" className="inline-block px-8 py-4 bg-blue-600 text-white font-bold rounded-md hover:bg-blue-700 transition-colors duration-300">
                Începe Acum
            </a>
        </div>
    );
} 