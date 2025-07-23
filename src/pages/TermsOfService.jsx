import { Helmet } from 'react-helmet'

const TermsOfService = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-20">
      <Helmet>
        <title>Terms of Service | Hometown Web Co</title>
        <meta
          name="description"
          content="Review the Terms of Service for using Hometown Web Co’s website and digital services. Understand your rights, responsibilities, and legal protections."
        />
        <link rel="canonical" href="https://www.hometownwebco.com/terms-of-service" />
        {/* Open Graph Tags */}
        <meta property="og:title" content="Terms of Service | Hometown Web Co" />
        <meta property="og:description" content="Review the Terms of Service for using Hometown Web Co’s website and digital services. Understand your rights, responsibilities, and legal protections." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.hometownwebco.com/terms-of-service" />
        <meta property="og:image" content="https://www.hometownwebco.com/og-image.jpg" />
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Terms of Service | Hometown Web Co" />
        <meta name="twitter:description" content="Review the Terms of Service for using Hometown Web Co’s website and digital services. Understand your rights, responsibilities, and legal protections." />
        <meta name="twitter:image" content="https://www.hometownwebco.com/og-image.jpg" />
        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TermsOfService",
            "name": "Terms of Service | Hometown Web Co",
            "url": "https://www.hometownwebco.com/terms-of-service",
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

      <h1 className="text-4xl font-bold mb-6 text-foreground">Terms of Service</h1>

      <p className="text-muted-foreground mb-6">
        Welcome to Hometown Web Co. By accessing or using our website or services, you agree to the following terms and conditions. If you do not agree, please do not use our site or services.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">1. Services Provided</h2>
      <p className="text-muted-foreground mb-6">
        We offer website design, development, maintenance, digital marketing, and related services. All services are subject to a written agreement or service contract.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">2. Payment & Invoicing</h2>
      <p className="text-muted-foreground mb-6">
        Payment terms will be outlined in your service agreement. Late payments may result in service suspension or additional fees. Hometown Web Co reserves the right to pause work until payment is made in full.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">3. Intellectual Property</h2>
      <p className="text-muted-foreground mb-6">
        All website designs, code, and content produced by Hometown Web Co remain our intellectual property until full payment is received. Upon full payment, deliverables transfer to the client for business use unless otherwise stated.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">4. Client Responsibilities</h2>
      <p className="text-muted-foreground mb-6">
        Clients agree to provide timely feedback, content, and approvals as required. Delays caused by the client may affect timelines and project completion.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">5. Refunds & Cancellations</h2>
      <p className="text-muted-foreground mb-6">
        All services are custom and non-refundable once work has begun. Cancellations prior to kickoff may be eligible for a partial refund.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">6. Limitation of Liability</h2>
      <p className="text-muted-foreground mb-6">
        Hometown Web Co shall not be liable for any indirect, incidental, or consequential damages arising from use of our services or website. All services are provided "as-is" without warranty.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">7. Third-Party Tools & Integrations</h2>
      <p className="text-muted-foreground mb-6">
        We may recommend or integrate third-party tools such as hosting, plugins, APIs, or platforms. We are not responsible for their availability, performance, or security practices.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">8. Termination</h2>
      <p className="text-muted-foreground mb-6">
        We reserve the right to terminate services for any reason, including breach of terms or misuse of our platform. Upon termination, outstanding balances must be paid in full.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">9. Governing Law</h2>
      <p className="text-muted-foreground mb-6">
        These terms are governed by the laws of the State of North Carolina, USA. Any legal action must be filed in the appropriate jurisdiction within Wake County.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">10. Changes to These Terms</h2>
      <p className="text-muted-foreground mb-6">
        We may update these Terms of Service at any time. Updates will be posted on this page with a new effective date.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">11. Contact Us</h2>
      <p className="text-muted-foreground">
        For questions about these terms, please contact us at:
        <br />
        <strong>Email:</strong> woody@hometownwebco.com
      </p>

      <p className="text-muted-foreground text-sm mt-6 italic">
        Effective date: July 21, 2025
      </p>
    </div>
  )
}

export default TermsOfService

