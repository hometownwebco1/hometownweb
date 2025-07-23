import { useState } from 'react'

const faqData = [
  {
    question: 'Do I own the website once it’s built?',
    answer: 'Yes — you’ll have full ownership of your custom domain, site, and content.'
  },
  {
    question: 'Can you update my website after it’s launched?',
    answer: 'Absolutely. We offer affordable monthly plans for updates, SEO, and support.'
  },
  {
    question: 'How long does it take to build a site?',
    answer: 'Most sites are ready in 5–7 business days depending on your content and needs.'
  },
  {
    question: 'Do I need to provide anything?',
    answer: 'We’ll need your business info, services, and any photos or logos you want to use.'
  }
]

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggle = (index) => {
    setOpenIndex(index === openIndex ? null : index)
  }

  return (
    <div className="bg-gray-100 p-6 rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Frequently Asked Questions</h2>
      <ul className="space-y-3">
        {faqData.map((item, index) => (
          <li key={index} className="border-b pb-2">
            <button
              onClick={() => toggle(index)}
              className="text-left w-full font-medium text-gray-800"
            >
              {item.question}
            </button>
            {openIndex === index && (
              <p className="text-sm text-gray-600 mt-1">{item.answer}</p>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}
