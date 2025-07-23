import React from 'react'
import { Helmet } from 'react-helmet'

const faqs = [
  {
    question: 'How much does a small business website cost?',
    answer: 'At Hometown Web Co, most local business websites start at around $500. We offer transparent, flat-rate pricing with no hidden fees.'
  },
  {
    question: 'Can I update my website after it’s built?',
    answer: 'Yes — you’ll have full access and ownership of your site. We also offer optional maintenance packages if you’d rather we handle updates for you.'
  },
  {
    question: 'Do you offer SEO with your website packages?',
    answer: 'Absolutely. Every site we build includes local SEO best practices — fast load times, mobile optimization, and proper structure for ranking in Google Maps and search results.'
  },
  {
    question: 'How long does the website design process take?',
    answer: 'Most websites are completed within 5–10 business days. Larger or more customized builds may take longer, but we always keep you updated.'
  },
  {
    question: 'What do you need from me to get started?',
    answer: 'We’ll ask for a short intake form with your business info, services, and photos or branding (if available). Don’t worry — we make the process easy.'
  },
  {
    question: 'Do I need a domain name before we start?',
    answer: 'Nope! We can help you choose and register a custom domain name that fits your brand. It’s included in all our web design packages.'
  }
]

export default function FaqPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <Helmet>
        <title>Frequently Asked Questions | Hometown Web Co</title>
        <meta name="description" content="Get answers to the most common website and digital marketing questions for local businesses. Learn how Hometown Web Co helps you succeed online." />
      </Helmet>
      <h1 className="text-3xl font-bold mb-8">Frequently Asked Questions</h1>
      <div className="space-y-6">
        {faqs.map((item, index) => (
          <div key={index}>
            <h2 className="text-xl font-semibold text-gray-800">{item.question}</h2>
            <p className="text-gray-600 mt-1">{item.answer}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
