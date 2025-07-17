import { ExternalLink, TrendingUp, Users, Globe } from 'lucide-react'

const Results = () => {
  const projects = [
    {
      title: 'Bella\'s Italian Bistro',
      category: 'Restaurant',
      description: 'A family-owned Italian restaurant needed an online presence to showcase their authentic recipes and allow customers to make reservations. We created a warm, inviting website that captures the essence of their traditional Italian hospitality.',
      results: [
        '150% increase in online reservations',
        '300+ new customers in first 3 months',
        '4.8-star average Google reviews'
      ],
      image: '/api/placeholder/400/300',
      link: '#'
    },
    {
      title: 'Mountain View Auto Repair',
      category: 'Automotive Service',
      description: 'This local auto shop wanted to build trust with potential customers and make it easy to schedule appointments. We designed a professional website that highlights their expertise and customer testimonials.',
      results: [
        '200% increase in online appointments',
        '50% more first-time customers',
        'Improved local search rankings'
      ],
      image: '/api/placeholder/400/300',
      link: '#'
    },
    {
      title: 'Sunshine Daycare Center',
      category: 'Childcare',
      description: 'A growing daycare center needed a website to help parents learn about their programs and philosophy. We created a bright, friendly site that showcases their caring environment and educational approach.',
      results: [
        '75% increase in enrollment inquiries',
        'Reduced phone calls by 40%',
        'Enhanced parent communication'
      ],
      image: '/api/placeholder/400/300',
      link: '#'
    }
  ]

  const stats = [
    {
      icon: Globe,
      number: '50+',
      label: 'Websites Launched',
      description: 'Professional websites delivered for local businesses'
    },
    {
      icon: Users,
      number: '10,000+',
      label: 'New Customers',
      description: 'Additional customers reached through our websites'
    },
    {
      icon: TrendingUp,
      number: '180%',
      label: 'Average Growth',
      description: 'Average increase in online inquiries'
    }
  ]

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Our Results
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Real success stories from local businesses we've helped grow online
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon
            return (
              <div
                key={index}
                className="text-center p-8 bg-muted rounded-lg border border-border"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-lg mb-4 mx-auto">
                  <IconComponent className="text-primary" size={32} />
                </div>
                <div className="text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {stat.label}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {stat.description}
                </p>
              </div>
            )
          })}
        </div>

        {/* Projects Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              See how we've helped local businesses like yours succeed online
            </p>
          </div>
          
          <div className="space-y-16">
            {projects.map((project, index) => (
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
                      <p className="text-muted-foreground">
                        Website Preview
                      </p>
                      <p className="text-sm text-muted-foreground mt-1">
                        {project.title}
                      </p>
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
                    <h4 className="font-semibold text-foreground mb-3">Results:</h4>
                    <ul className="space-y-2">
                      {project.results.map((result, resultIndex) => (
                        <li key={resultIndex} className="flex items-start space-x-3">
                          <TrendingUp className="text-primary mt-0.5 flex-shrink-0" size={16} />
                          <span className="text-muted-foreground text-sm">
                            {result}
                          </span>
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

        {/* Testimonials Section */}
        <div className="bg-muted p-12 rounded-lg mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              What Our Clients Say
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                quote: "HomeTown Web Co transformed our online presence. We went from having no website to booking 50% more appointments online. They made the whole process so easy!",
                author: "Maria Rodriguez",
                business: "Bella's Italian Bistro"
              },
              {
                quote: "The team really understood our business and created a website that perfectly represents who we are. Our customers love being able to schedule appointments online.",
                author: "Mike Thompson",
                business: "Mountain View Auto Repair"
              },
              {
                quote: "We've seen a huge increase in enrollment inquiries since launching our new website. The parents love how easy it is to find information about our programs.",
                author: "Sarah Johnson",
                business: "Sunshine Daycare Center"
              }
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-background p-6 rounded-lg border border-border"
              >
                <p className="text-muted-foreground mb-4 italic leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div>
                  <p className="font-semibold text-foreground">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.business}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Ready to Join Our Success Stories?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's create a website that helps your business grow and connect 
            with more customers in your community.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-primary text-primary-foreground font-semibold text-lg rounded-lg hover:bg-primary/90 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
          >
            Start Your Success Story
          </a>
        </div>
      </div>
    </div>
  )
}

export default Results

