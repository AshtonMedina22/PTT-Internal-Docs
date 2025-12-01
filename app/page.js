import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="h-screen bg-brand-white flex flex-col overflow-hidden">
      {/* Logo Letterhead */}
      <header className="w-full border-b-2 border-brand-gray bg-brand-white py-4 shrink-0">
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <Image 
              src="/logo.png" 
              alt="Party Time Texas Logo" 
              width={280} 
              height={90}
              className="h-auto object-contain max-h-20"
              priority
            />
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6 flex-1 overflow-y-auto">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-2xl md:text-3xl font-bold text-brand-black mb-5 text-center">
            Legal Documents
          </h1>
          
          {/* Main Welcome Section */}
          <div className="max-w-5xl mx-auto mb-6">
            <div className="text-brand-black space-y-3 text-center">
              <p className="text-sm md:text-base leading-relaxed">
                This page contains our current policies, terms, and expectations for independent contractors and vendors.
              </p>
              
              <p className="text-sm md:text-base leading-relaxed">
                Access is restricted to authorized recipients. By continuing, you acknowledge this content is confidential and may not be shared.
              </p>
              
              <p className="text-sm md:text-base leading-relaxed">
                After reviewing the documents, please complete the acknowledgment form in your onboarding email.
              </p>
              
              <p className="text-sm md:text-base leading-relaxed">
                For questions, contact us at <a href="tel:2143408000" className="text-brand-red hover:underline font-semibold">(214) 340-8000</a> or <a href="mailto:sales@partytimetexas.com" className="text-brand-red hover:underline font-semibold">sales@partytimetexas.com</a>.
              </p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* Company Policy & Guidelines Box */}
            <Link 
              href="/policy"
              className="group relative bg-white border-2 border-brand-gray hover:border-brand-gold transition-all duration-300 rounded-lg p-6 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <div className="absolute top-0 right-0 w-20 h-20 bg-brand-gold opacity-10 group-hover:opacity-20 transition-opacity rounded-bl-full"></div>
              <h2 className="text-xl md:text-2xl font-bold text-brand-black mb-3 group-hover:text-brand-red transition-colors">
                Company Policy & Guidelines
              </h2>
              <p className="text-brand-gray text-base">
                View Our Company Policy & Guidelines
              </p>
              <div className="mt-4 text-brand-red font-semibold group-hover:translate-x-2 transition-transform inline-block">
                View Document →
              </div>
            </Link>

            {/* Terms & Conditions Box */}
            <Link 
              href="/terms-conditions"
              className="group relative bg-white border-2 border-brand-gray hover:border-brand-gold transition-all duration-300 rounded-lg p-6 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <div className="absolute top-0 right-0 w-20 h-20 bg-brand-gold opacity-10 group-hover:opacity-20 transition-opacity rounded-bl-full"></div>
              <h2 className="text-xl md:text-2xl font-bold text-brand-black mb-3 group-hover:text-brand-red transition-colors">
                Terms & Conditions
              </h2>
              <p className="text-brand-gray text-base">
                View Our Terms & Conditions
              </p>
              <div className="mt-4 text-brand-red font-semibold group-hover:translate-x-2 transition-transform inline-block">
                View Document →
              </div>
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-brand-gray bg-opacity-20 border-t-2 border-brand-gray shrink-0">
        <div className="container mx-auto px-4 py-3">
          <div className="text-center">
            <p className="text-brand-black font-semibold text-sm">
              © Party Time Texas 2025. For authorized vendor and employee use only.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

