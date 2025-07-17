import { Heart, Users, Target, Award } from 'lucide-react'
import { Link } from 'react-router-dom'

const About = () => {
  const values = [
    {
      icon: Heart,
      title: 'Trust',
      description: 'We build lasting relationships with our clients based on honesty, transparency, and reliable service.'
    },
    {
      icon: Users,
      title: 'Simplicity',
      description: 'We make the complex world of web development simple and accessible for every business owner.'
    },
    {
      icon: Target,
      title: 'Results',
      description: 'Every website we create is designed to help your business grow and connect with more customers.'
    },
    {
      icon: Award,
      title: 'Quality',
      description: 'We deliver professional, high-quality websites that you can be proud to share with your customers.'
    }
  ]

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            About HomeTown Web Co
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We're passionate about helping local businesses succeed online
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Our Story
            </h2>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                HomeTown Web Co helps mom-and-pop businesses build an online presence. 
                We are based in the U.S. and focused on trust, simplicity, and results.
              </p>
              <p>
                We understand that running a local business is challenging enough without 
                having to worry about websites, SEO, and digital marketing. That's why we 
                make it our mission to handle all the technical details so you can focus 
                on what you do best – serving your customers.
              </p>
              <p>
                Every project we take on is an opportunity to help a local business owner 
                achieve their dreams and connect with their community in meaningful ways. 
                We're not just building websites; we're building bridges between businesses 
                and the customers who need them.
              </p>
            </div>
          </div>
          
          <div className="bg-muted p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Why Choose Us?
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-muted-foreground">
                  <strong className="text-foreground">Local Focus:</strong> We understand the unique needs of hometown businesses
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-muted-foreground">
                  <strong className="text-foreground">Personal Service:</strong> You'll work directly with our team, not a call center
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-muted-foreground">
                  <strong className="text-foreground">Affordable Solutions:</strong> Professional websites that fit your budget
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-muted-foreground">
                  <strong className="text-foreground">Ongoing Support:</strong> We're here to help your business grow long-term
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Our Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These core principles guide everything we do and every relationship we build
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon
              return (
                <div
                  key={index}
                  className="text-center p-6 bg-background border border-border rounded-lg hover:shadow-md transition-shadow duration-200"
                >
                  <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-lg mb-4 mx-auto">
                    <IconComponent className="text-primary" size={32} />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-muted p-12 rounded-lg">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Ready to Work Together?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help your business establish a strong online presence 
            and connect with more customers in your community.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-primary text-primary-foreground font-semibold text-lg rounded-lg hover:bg-primary/90 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
          >
            Get Started Today
          </Link>
        </div>
      </div>
    </div>
  )
}

export default About
