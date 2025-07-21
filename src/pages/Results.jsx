import { ExternalLink, TrendingUp, Users, Globe } from 'lucide-react'
import { Link } from 'react-router-dom'

const Results = () => {
  const exampleProjects = [
    {
      title: "Bella's Italian Bistro",
      category: 'Restaurant',
      description:
        'We designed a warm, inviting website for a family-owned Italian restaurant. The new site makes it easy for customers to browse menus, book reservations, and read about their story.',
      highlights: [
        'Streamlined reservations and contact form',
        'Mobile-friendly layout',
        'Brand-aligned design and photography'
      ],
      image: '/api/placeholder/400/300',
      link: '#'
    },
    {
      title: 'Mountain View Auto Repair',
      category: 'Automotive Service',
      description:
        'This auto shop wanted a website that built trust and allowed customers to schedule appointments. We created a modern, professional site with clear service info and testimonials.',
      highlights: [
        'Online appointment scheduling',
        'Responsive design for mobile users',
        'Improved visibility in local search'
      ],
      image: '/api/placeholder/400/300',
      link: '#'
    },
    {
      title: 'Sunshine Daycare Center',
      category: 'Childcare',
      description:
        'We helped a daycare center create a website that reassures parents and highlights their educational approach. The site includes a tour request form and program overview.',
      highlights: [
        'Easy-to-navigate program info',
        'Tour scheduling made simple',
        'Friendly, parent-first design'
      ],
      image: '/api/placeholder/400/300',
      link: '#'
    }
  ]

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Real Websites for Real Businesses
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We specialize in building clean, effective websites that help local businesses grow — here's a look at what we’ve delivered.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Website Examples
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Every project is different, but each one is built to help local businesses look professional and win customer trust.
            </p>
          </div>

          <div className="space-y-16">
            {exampleProjects.map((project, index) => (
              <div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="bg-muted aspect-video rounded-lg flex items-center justify-center border border-border">
                    <div className="text-center">
                      <Globe className="text-muted-foreground mx-auto mb-2" size={48} />
                      <p className="text-muted-foreground">Website Preview</p>
                      <p className="text-sm text-muted-foreground mt-1">{project.title}</p>
                    </div>
                  </div>
                </div>

                <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                  <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
                    {project.category}
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="font-semibold text-foreground mb-3">Project Highlights:</h4>
                    <ul className="space-y-2">
                      {project.highlights.map((item, resultIndex) => (
                        <li key={resultIndex} className="flex items-start space-x-3">
                          <TrendingUp className="text-primary mt-0.5 flex-shrink-0" size={16} />
                          <span className="text-muted-foreground text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a
                    href={project.link}
                    className="inline-flex items-center text-primary hover:text-primary/80 font-medium transition-colors"
                  >
                    View Project
                    <ExternalLink className="ml-2" size={16} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-20">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Want a Site Like These?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            We’ll build you a custom site that fits your brand, your goals, and your budget — and we’ll make it easy.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-primary text-primary-foreground font-semibold text-lg rounded-lg hover:bg-primary/90 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
          >
            Let’s Talk About Your Website
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Results

