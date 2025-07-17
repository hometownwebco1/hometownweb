import { Link } from 'react-router-dom'
import { Calendar, Clock, ArrowRight } from 'lucide-react'

const Blog = () => {
  const blogPosts = [
    {
      slug: 'why-every-local-business-needs-website',
      title: 'Why Every Local Business Needs a Website — Even If You\'re on Facebook',
      excerpt: 'Social media is great, but it\'s not enough. Discover why having your own website is crucial for long-term business success and customer trust.',
      date: '2025-01-15',
      readTime: '8 min read',
      category: 'Business Strategy'
    },
    {
      slug: 'what-simple-website-can-do-for-business',
      title: 'What a Simple Website Can Do for Your Business (And What It Shouldn\'t)',
      excerpt: 'Not every business needs a complex website. Learn what features actually matter for local businesses and what you can skip.',
      date: '2025-01-12',
      readTime: '7 min read',
      category: 'Web Design'
    },
    {
      slug: 'website-mistakes-drive-customers-away',
      title: '5 Website Mistakes That Drive Customers Away — and How to Avoid Them',
      excerpt: 'Common website problems that frustrate visitors and hurt your business, plus simple solutions to fix them.',
      date: '2025-01-10',
      readTime: '9 min read',
      category: 'Best Practices'
    },
    {
      slug: 'small-business-website-cost-2025',
      title: 'How Much Should a Small Business Website Really Cost in 2025?',
      excerpt: 'A transparent breakdown of website costs, from DIY options to professional services, so you can budget wisely.',
      date: '2025-01-08',
      readTime: '6 min read',
      category: 'Pricing'
    },
    {
      slug: 'getting-business-online-one-week',
      title: 'A Beginner\'s Guide to Getting Your Business Online in One Week',
      excerpt: 'Step-by-step instructions for establishing your online presence quickly, even if you\'re starting from scratch.',
      date: '2025-01-05',
      readTime: '10 min read',
      category: 'Getting Started'
    }
  ]

  const categories = ['All', 'Business Strategy', 'Web Design', 'Best Practices', 'Pricing', 'Getting Started']

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Our Blog
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Practical advice and insights to help your local business succeed online
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                index === 0
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {blogPosts.map((post, index) => (
            <article
              key={index}
              className="bg-background border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-200"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                    {post.category}
                  </span>
                  <div className="flex items-center text-muted-foreground text-sm">
                    <Clock size={14} className="mr-1" />
                    {post.readTime}
                  </div>
                </div>
                
                <h2 className="text-xl font-bold text-foreground mb-3 leading-tight">
                  <Link
                    to={`/blog/${post.slug}`}
                    className="hover:text-primary transition-colors"
                  >
                    {post.title}
                  </Link>
                </h2>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-muted-foreground text-sm">
                    <Calendar size={14} className="mr-1" />
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </div>
                  
                  <Link
                    to={`/blog/${post.slug}`}
                    className="inline-flex items-center text-primary hover:text-primary/80 font-medium text-sm transition-colors"
                  >
                    Read More
                    <ArrowRight size={14} className="ml-1" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="bg-muted p-12 rounded-lg text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Stay Updated
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Get the latest tips and insights for growing your local business online. 
            No spam, just valuable content delivered to your inbox.
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-foreground"
            />
            <button className="px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog

