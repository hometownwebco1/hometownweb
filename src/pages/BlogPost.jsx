import { useParams, Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { Calendar, Clock, ArrowLeft, ArrowRight } from 'lucide-react'
import { blogPosts } from '../data/blogPosts'

const BlogPost = () => {
  const { slug } = useParams()
  const post = blogPosts.find(p => p.slug === slug)

  if (!post) {
    return (
      <div className="min-h-screen py-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Post Not Found
          </h1>
          <p className="text-muted-foreground mb-8">
            The blog post you're looking for doesn't exist.
          </p>
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

  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })

  return (
    <div className="min-h-screen py-20">
      <Helmet>
        <title>{post.title} | Hometown Web Co Blog</title>
        <meta
          name="description"
          content={post.excerpt || 'Read our latest post about small business web strategy from Hometown Web Co.'}
        />
        <link rel="canonical" href={`https://www.hometownwebco.com/blog/${post.slug}`} />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: post.title,
            description: post.excerpt,
            datePublished: post.date,
            dateModified: post.date,
            author: {
              '@type': 'Organization',
              name: 'Hometown Web Co'
            },
            publisher: {
              '@type': 'Organization',
              name: 'Hometown Web Co',
              logo: {
                '@type': 'ImageObject',
                url: 'https://www.hometownwebco.com/logo.png'
              }
            },
            mainEntityOfPage: `https://www.hometownwebco.com/blog/${post.slug}`
          })}
        </script>
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
        <header className="mb-12">
          <div className="flex items-center gap-4 mb-6">
            <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
              {post.category}
            </span>
            <div className="flex items-center text-muted-foreground text-sm">
              <Calendar size={14} className="mr-1" />
              {formattedDate}
            </div>
            <div className="flex items-center text-muted-foreground text-sm">
              <Clock size={14} className="mr-1" />
              {post.readTime}
            </div>
          </div>

          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
            {post.title}
          </h1>

          <p className="text-xl text-muted-foreground leading-relaxed">
            {post.excerpt}
          </p>
        </header>

        {/* Article Content */}
        <article className="prose prose-lg max-w-none">
          <div
            className="text-foreground leading-relaxed"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>

        {/* Article Footer CTA */}
        <footer className="mt-16 pt-8 border-t border-border">
          <div className="bg-muted p-8 rounded-lg text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to Get Your Business Online?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
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
        </footer>
      </div>
    </div>
  )
}

export default BlogPost
