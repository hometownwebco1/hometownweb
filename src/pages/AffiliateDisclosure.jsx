import { Helmet } from 'react-helmet'

const AffiliateDisclosure = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-20">
      <Helmet>
        <title>Affiliate Disclosure | Hometown Web Co</title>
        <meta
          name="description"
          content="Learn about our use of affiliate links and how they support Hometown Web Co. We prioritize transparency and only recommend tools we trust."
        />
        <link rel="canonical" href="https://www.hometownwebco.com/affiliate-disclosure" />
        {/* Open Graph Tags */}
        <meta property="og:title" content="Affiliate Disclosure | Hometown Web Co" />
        <meta property="og:description" content="Learn about our use of affiliate links and how they support Hometown Web Co. We prioritize transparency and only recommend tools we trust." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.hometownwebco.com/affiliate-disclosure" />
        <meta property="og:image" content="https://www.hometownwebco.com/og-image.jpg" />
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Affiliate Disclosure | Hometown Web Co" />
        <meta name="twitter:description" content="Learn about our use of affiliate links and how they support Hometown Web Co. We prioritize transparency and only recommend tools we trust." />
        <meta name="twitter:image" content="https://www.hometownwebco.com/og-image.jpg" />
        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "DisclosurePolicy",
            "name": "Affiliate Disclosure | Hometown Web Co",
            "url": "https://www.hometownwebco.com/affiliate-disclosure",
            "publisher": {
              "@type": "Organization",
              "name": "Hometown Web Co",
              "url": "https://www.hometownwebco.com"
            },
            "inLanguage": "en-US",
            "dateModified": "2025-07-21",
            "description": "This page discloses our use of affiliate links to support our website and services. We only recommend products and services we trust."
          })}
        </script>
      </Helmet>

      <h1 className="text-4xl font-bold mb-6 text-foreground">Affiliate Disclosure</h1>

      <p className="text-muted-foreground mb-6">
        In accordance with the Federal Trade Commission (FTC) guidelines, we want to disclose that some of the links on this website are affiliate links. This means that if you click on a link and make a purchase, Hometown Web Co may receive a small commission — at no extra cost to you.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Why We Use Affiliate Links</h2>
      <p className="text-muted-foreground mb-6">
        We only promote products or services that we believe will provide genuine value to our audience. Any affiliate links included on this site are based on our personal or professional experience, and we never allow compensation to influence our content or recommendations.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Affiliate Programs We Use</h2>
      <p className="text-muted-foreground mb-6">
        Hometown Web Co may participate in programs such as Amazon Associates, software referral programs, or website tool partnerships. These partnerships help fund the time and resources needed to keep our site running.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Your Trust Comes First</h2>
      <p className="text-muted-foreground mb-6">
        We are committed to honesty and transparency. Using our affiliate links is optional, but if you do, we sincerely appreciate your support.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Questions?</h2>
      <p className="text-muted-foreground">
        If you have any questions about our affiliate relationships or this disclosure, feel free to contact us at:
        <br />
        <strong>Email:</strong> woody@hometownwebco.com
      </p>

      <p className="text-muted-foreground text-sm mt-6 italic">
        This policy was last updated on July 21, 2025.
      </p>
    </div>
  )
}

export default AffiliateDisclosure
