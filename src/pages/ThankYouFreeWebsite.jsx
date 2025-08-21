import { Helmet } from 'react-helmet'

export default function ThankYouFreeWebsite() {
  return (
    <div style={{ padding: "2rem" }}>
      <Helmet>
        <title>Thanks — Your Free Website Spot Is Reserved | Hometown Web Co</title>
        <meta name="description" content="Check your email for the 60‑second intake. If you don't see it, check spam/promotions. You’ll also get a quick text reminder. Reply to any message with questions." />
        <link rel="canonical" href="https://www.hometownwebco.com/thank-you-free-website" />
        <meta name="robots" content="noindex, nofollow" />
        <meta property="og:title" content="Thanks — Your Free Website Spot Is Reserved | Hometown Web Co" />
        <meta property="og:description" content="Check your email for the 60‑second intake. If you don't see it, check spam/promotions. You’ll also get a quick text reminder. Reply to any message with questions." />
        <meta property="og:url" content="https://www.hometownwebco.com/thank-you-free-website" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.hometownwebco.com/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Thanks — Your Free Website Spot Is Reserved | Hometown Web Co" />
        <meta name="twitter:description" content="Check your email for the 60‑second intake. If you don't see it, check spam/promotions. You’ll also get a quick text reminder. Reply to any message with questions." />
        <meta name="twitter:image" content="https://www.hometownwebco.com/og-image.jpg" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Thanks — Your Free Website Spot Is Reserved",
          "url": "https://www.hometownwebco.com/thank-you-free-website",
          "description": "Check your email for the 60‑second intake. If you don't see it, check spam/promotions. You’ll also get a quick text reminder. Reply to any message with questions."
        })}</script>
      </Helmet>

      <h1>Thanks — Your Free Website Spot Is Reserved</h1>
      <p>Check your email now for the 60-second intake. If you don’t see it, check spam/promotions. You’ll also get a quick text reminder.</p>
      <p>Reply to any email or text if you have questions — that pauses the automation so we can talk live.</p>
    </div>
  );
}
