import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { Calendar, Clock, ArrowLeft, ArrowRight, Facebook, Instagram, Youtube } from 'lucide-react'
import { blogPosts } from '../data/blogPosts'

const BASE_URL = 'https://www.hometownwebco.com'
const FALLBACK_OG = `${BASE_URL}/og-image.jpg`
const PUBLISHER_LOGO = `${BASE_URL}/logo.png`

const BlogPost = () => {
  const { slug } = useParams()
  const post = blogPosts.find((p) => p.slug === slug)

  if (!post) {
    return (
      <div className="min-h-screen py-20 flex items-center justify-center bg-site-gradient">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Post Not Found</h1>
          <p className="text-gray-100 mb-8">The blog post you're looking for doesn't exist.</p>
          <Link
            to="/blog"
            className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors"
          >
            <ArrowLeft className="mr-2" size={18} />
            Back to Blog
          </Link>
        </div>
      </div>
    )
  }

  const url = `${BASE_URL}/blog/${post.slug}`
  const title = `${post.title} | Hometown Web Co Blog`
  const description =
    post.excerpt || 'Read our latest post about small business web strategy from Hometown Web Co.'
  const image =
    post.imageUrl || post.image || FALLBACK_OG
  const published = post.date
  const modified = post.date

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt || description,
    datePublished: published,
    dateModified: modified,
    author: {
      '@type': 'Organization',
      name: 'Hometown Web Co'
    },
    publisher: {
      '@type': 'Organization',
      name: 'Hometown Web Co',
      logo: {
        '@type': 'ImageObject',
        url: PUBLISHER_LOGO
      }
    },
    mainEntityOfPage: url,
    image: [image]
  }

  if (post.category) {
    jsonLd.articleSection = post.category
  }
  if (post.tags && Array.isArray(post.tags) && post.tags.length) {
    jsonLd.keywords = post.tags.join(', ')
  }

  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })

  return (
    <div className="min-h-screen py-20 bg-site-gradient">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={url} />

        {/* Open Graph */}
        <meta property="og:site_name" content="Hometown Web Co" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={url} />
        <meta property="og:image" content={image} />
        <meta property="article:published_time" content={published} />
        {post.tags && post.tags.map((t, i) => (
          <meta key={i} property="article:tag" content={t} />
        ))}

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
        {post.readTime && <meta name="twitter:label1" content="Est. read" />}
        {post.readTime && <meta name="twitter:data1" content={post.readTime} />}

        {/* Structured Data */}
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back to Blog */}
        <Link
          to="/blog"
          className="inline-flex items-center text-primary hover:text-primary/80 font-medium mb-8 transition-colors"
          aria-label="Back to blog index"
        >
          <ArrowLeft className="mr-2" size={18} />
          Back to Blog
        </Link>

        {/* Article Header */}
        <header className="mb-12 text-center">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
            {post.category && (
              <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                {post.category}
              </span>
            )}
            <div className="flex items-center text-gray-100 text-sm">
              <Calendar size={14} className="mr-1" />
              {formattedDate}
            </div>
            {post.readTime && (
              <div className="flex items-center text-gray-100 text-sm">
                <Clock size={14} className="mr-1" />
                {post.readTime}
              </div>
            )}
          </div>

          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight font-sans">
            {post.title}
          </h1>

          {post.excerpt && (
            <p className="text-xl text-gray-100 leading-relaxed font-sans max-w-3xl mx-auto">
              {post.excerpt}
            </p>
          )}
        </header>

        {/* Article Content */}
        <article className="prose max-w-none bg-white rounded-lg shadow p-8 mb-12 prose-p:font-sans prose-p:text-lg prose-p:leading-relaxed prose-headings:font-sans prose-headings:text-gray-900 prose-headings:font-bold prose-headings:tracking-tight prose-li:font-sans prose-li:text-lg prose-li:leading-relaxed prose-a:text-primary">
          <div
            className="text-gray-900 leading-relaxed font-sans"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>

        {/* Article Footer CTA */}
        <footer className="mt-16 pt-8 border-t border-border">
          <div className="bg-white p-8 rounded-lg text-center mb-8 shadow">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 font-sans">
              Ready to Get Your Business Online?
            </h3>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto font-sans">
              Let's discuss how we can help your business establish a strong online presence
              and connect with more customers in your community.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-primary text-primary-foreground font-semibold text-lg rounded-lg hover:bg-primary/90 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
            >
              Get Your Free Website Demo
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>

          {/* Social Media Block */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mt-8">
            <a
              href="https://www.facebook.com/profile.php?id=61578313660385"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-white hover:text-primary"
            >
              <Facebook className="mr-2" size={20} />
              Facebook
            </a>
            <a
              href="https://www.instagram.com/hometownwebco/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-white hover:text-primary"
            >
              <Instagram className="mr-2" size={20} />
              Instagram
            </a>
            <a
              href="https://www.youtube.com/@hometownwebco"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-white hover:text-primary"
            >
              <Youtube className="mr-2" size={20} />
              YouTube
            </a>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default BlogPost
