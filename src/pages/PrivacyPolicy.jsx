import { Helmet } from 'react-helmet'

const PrivacyPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-20">
      <Helmet>
        <title>Privacy Policy | Hometown Web Co</title>
        <meta
          name="description"
          content="Learn how Hometown Web Co collects, uses, and protects your personal information in compliance with GDPR and CCPA regulations."
        />
        <link rel="canonical" href="https://www.hometownwebco.com/privacy-policy" />
        {/* Open Graph Tags */}
        <meta property="og:title" content="Privacy Policy | Hometown Web Co" />
        <meta property="og:description" content="Learn how Hometown Web Co collects, uses, and protects your personal information in compliance with GDPR and CCPA regulations." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.hometownwebco.com/privacy-policy" />
        <meta property="og:image" content="https://www.hometownwebco.com/og-image.jpg" />
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Privacy Policy | Hometown Web Co" />
        <meta name="twitter:description" content="Learn how Hometown Web Co collects, uses, and protects your personal information in compliance with GDPR and CCPA regulations." />
        <meta name="twitter:image" content="https://www.hometownwebco.com/og-image.jpg" />
        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "PrivacyPolicy",
            "name": "Privacy Policy | Hometown Web Co",
            "url": "https://www.hometownwebco.com/privacy-policy",
            "publisher": {
              "@type": "Organization",
              "name": "Hometown Web Co",
              "url": "https://www.hometownwebco.com"
            },
            "inLanguage": "en-US",
            "dateModified": "2025-07-21"
          })}
        </script>
      </Helmet>

      <h1 className="text-4xl font-bold mb-6 text-foreground">Privacy Policy</h1>
      <p className="text-muted-foreground mb-6">
        At Hometown Web Co, we value your privacy and are committed to protecting your personal information.
        This Privacy Policy outlines how we collect, use, and safeguard your data in accordance with the General Data Protection Regulation (GDPR) and the California Consumer Privacy Act (CCPA).
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">1. Information We Collect</h2>
      <p className="text-muted-foreground mb-6">
        We collect personal details you voluntarily provide, such as your name, email address, phone number, and business information when you submit forms or contact us.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">2. How We Use Your Information</h2>
      <div className="text-muted-foreground mb-6">
        <p>We use your information to:</p>
        <ul className="list-disc list-inside ml-4 mt-2">
          <li>Respond to inquiries and service requests</li>
          <li>Provide updates or important information</li>
          <li>Improve our services and website functionality</li>
        </ul>
      </div>

      <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">3. Cookies and Tracking Technologies</h2>
      <p className="text-muted-foreground mb-6">
        We may use cookies to enhance your browsing experience. Cookies help us understand how visitors use our site. You can disable cookies in your browser settings at any time.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">4. Third-Party Services</h2>
      <p className="text-muted-foreground mb-6">
        Our website may contain links to third-party sites. We are not responsible for the privacy policies or practices of those services.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">5. Data Retention</h2>
      <p className="text-muted-foreground mb-6">
        We retain personal information only as long as necessary to fulfill the purposes outlined in this policy, unless a longer retention period is required by law.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">6. Your Rights</h2>
      <p className="text-muted-foreground mb-6">
        Under applicable laws, you may have the right to access, correct, or delete your personal information. To exercise these rights, contact us at the email below.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">7. Consent</h2>
      <p className="text-muted-foreground mb-6">
        By using our website, you consent to the terms outlined in this Privacy Policy.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">8. Contact Us</h2>
      <p className="text-muted-foreground">
        If you have questions about this Privacy Policy or your personal data, please contact us at:
        <br />
        <strong>Email:</strong> woody@hometownwebco.com
      </p>

      <p className="text-muted-foreground text-sm mt-6 italic">
        This policy was last updated on July 21, 2025. Jurisdiction: United States, North Carolina.
      </p>
    </div>
  )
}

export default PrivacyPolicy
