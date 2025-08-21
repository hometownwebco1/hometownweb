import { Helmet } from 'react-helmet'

export default function FreeWebsite() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12">
      <Helmet>
        <title>Get a Professional Website — For $0 | Hometown Web Co</title>
        <meta name="description" content="We’ll design and launch a polished 3‑page site you keep forever. Mobile‑friendly, lead‑ready, done‑for‑you setup. Limited spots each month." />
        <link rel="canonical" href="https://www.hometownwebco.com/free-website" />
        <meta property="og:title" content="Get a Professional Website — For $0 | Hometown Web Co" />
        <meta property="og:description" content="We’ll design and launch a polished 3‑page site you keep forever. Mobile‑friendly, lead‑ready, done‑for‑you setup. Limited spots each month." />
        <meta property="og:url" content="https://www.hometownwebco.com/free-website" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.hometownwebco.com/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Get a Professional Website — For $0 | Hometown Web Co" />
        <meta name="twitter:description" content="We’ll design and launch a polished 3‑page site you keep forever. Mobile‑friendly, lead‑ready, done‑for‑you setup. Limited spots each month." />
        <meta name="twitter:image" content="https://www.hometownwebco.com/og-image.jpg" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Get a Professional Website — For $0",
          "url": "https://www.hometownwebco.com/free-website",
          "description": "We’ll design and launch a polished 3‑page site you keep forever. Mobile‑friendly, lead‑ready, done‑for‑you setup. Limited spots each month."
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Free Website Design",
          "url": "https://www.hometownwebco.com/free-website",
          "provider": {
            "@type": "Organization",
            "name": "Hometown Web Co",
            "url": "https://www.hometownwebco.com"
          },
          "areaServed": "US",
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD",
            "availability": "https://schema.org/InStock"
          }
        })}</script>
      </Helmet>

      {/* HERO */}
      <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-center">
        Get a Professional Website — For $0
      </h1>
      <p className="mt-3 text-lg md:text-xl text-muted-foreground text-center max-w-2xl mx-auto">
        We’ll design and launch a polished 3-page site for your business
        (Home, Services, Contact) that works seamlessly on desktop and mobile.
        Yours to keep, with hosting available if you need it. Spots are limited each month.
      </p>

      {/* QUICK VALUE */}
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-3xl mx-auto text-center">
        <div className="rounded-lg bg-white/70 backdrop-blur p-4 shadow-sm">
          <p className="font-semibold">Mobile-friendly design</p>
          <p className="text-sm text-muted-foreground">Looks great on phones and desktops</p>
        </div>
        <div className="rounded-lg bg-white/70 backdrop-blur p-4 shadow-sm">
          <p className="font-semibold">Done-for-you build</p>
          <p className="text-sm text-muted-foreground">No DIY — we handle the setup</p>
        </div>
        <div className="rounded-lg bg-white/70 backdrop-blur p-4 shadow-sm">
          <p className="font-semibold">Lead-ready contact form</p>
          <p className="text-sm text-muted-foreground">Simple, fast, and reliable</p>
        </div>
        <div className="rounded-lg bg-white/70 backdrop-blur p-4 shadow-sm">
          <p className="font-semibold">Yours to keep</p>
          <p className="text-sm text-muted-foreground">Host with us or take the files</p>
        </div>
      </div>

      {/* FORM CARD */}
      <div className="mt-10 max-w-2xl mx-auto bg-white rounded-xl shadow-xl p-6 md:p-8">
        <iframe
          src="https://api.leadconnectorhq.com/widget/form/dtw5NqzbfTxYr2e0JIBH"
          style={{ width: '100%', height: '900px', border: 'none', borderRadius: '6px' }}
          id="inline-dtw5NqzbfTxYr2e0JIBH"
          data-layout="{'id':'INLINE'}"
          data-trigger-type="alwaysShow"
          data-trigger-value=""
          data-activation-type="alwaysActivated"
          data-activation-value=""
          data-deactivation-type="neverDeactivate"
          data-deactivation-value=""
          data-form-name="Free Website Lead Form"
          data-height="900"
          data-layout-iframe-id="inline-dtw5NqzbfTxYr2e0JIBH"
          data-form-id="dtw5NqzbfTxYr2e0JIBH"
          title="Free Website Lead Form"
        ></iframe>
        <script src="https://link.msgsndr.com/js/form_embed.js"></script>
      </div>

      {/* UPGRADE HOOK */}
      <p className="mt-6 text-center text-lg font-bold text-foreground">
        Want more? Upgrade within 7 days with hosting for $249: additional pages, basic SEO, Terms, Privacy, and social links are all included.
      </p>
    </div>
  );
}
