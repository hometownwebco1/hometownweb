import { TrendingUp, Users, Globe } from 'lucide-react'
import { Link } from 'react-router-dom'

const Results = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Our Work Speaks for Itself — Soon
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We’re currently building a portfolio of real results from real clients.
            No fake case studies. No stock reviews. Just honest work — and yours could be the next one featured here.
          </p>
        </div>

        {/* Why There's No Fake Portfolio */}
        <div className="mb-20 text-center max-w-3xl mx-auto">
          <p className="text-lg text-muted-foreground mb-6">
            We believe in transparency and trust. That's why you won't see made-up websites or placeholder testimonials here.
            Every project we feature will come from real client work — with permission, results, and context.
          </p>
          <p className="text-lg text-muted-foreground">
            If you're looking for someone who takes your business seriously from day one, let’s talk. We’d love for your project to be our next success story.
          </p>
        </div>

        {/* CTA */}
        <div className="text-center mt-20">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Ready to Be the First Success Story?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            If you're a local business that needs a clean, professional website — you're in the right place.
            Let’s build something together that we’ll both be proud to show off.
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
