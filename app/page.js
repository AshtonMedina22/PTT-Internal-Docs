import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen bg-brand-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-black mb-12 text-center">
            Legal Documents
          </h1>
          
          <div className="grid md:grid-cols-2 gap-8 mt-16">
            {/* Terms and Conditions Box */}
            <Link 
              href="/terms"
              className="group relative bg-white border-2 border-brand-gray hover:border-brand-gold transition-all duration-300 rounded-lg p-8 shadow-lg hover:shadow-xl transform hover:-translate-y-2"
            >
              <div className="absolute top-0 right-0 w-20 h-20 bg-brand-gold opacity-10 group-hover:opacity-20 transition-opacity rounded-bl-full"></div>
              <h2 className="text-2xl md:text-3xl font-bold text-brand-black mb-4 group-hover:text-brand-red transition-colors">
                Terms and Conditions
              </h2>
              <p className="text-brand-gray text-lg">
                View our terms and conditions
              </p>
              <div className="mt-6 text-brand-red font-semibold group-hover:translate-x-2 transition-transform inline-block">
                View Document →
              </div>
            </Link>

            {/* Agreement Box */}
            <Link 
              href="/agreement"
              className="group relative bg-white border-2 border-brand-gray hover:border-brand-gold transition-all duration-300 rounded-lg p-8 shadow-lg hover:shadow-xl transform hover:-translate-y-2"
            >
              <div className="absolute top-0 right-0 w-20 h-20 bg-brand-gold opacity-10 group-hover:opacity-20 transition-opacity rounded-bl-full"></div>
              <h2 className="text-2xl md:text-3xl font-bold text-brand-black mb-4 group-hover:text-brand-red transition-colors">
                Agreement
              </h2>
              <p className="text-brand-gray text-lg">
                View our agreement document
              </p>
              <div className="mt-6 text-brand-red font-semibold group-hover:translate-x-2 transition-transform inline-block">
                View Document →
              </div>
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}

