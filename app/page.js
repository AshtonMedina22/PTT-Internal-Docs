import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="min-h-screen bg-brand-white flex flex-col">
      {/* Logo Letterhead */}
      <header className="w-full border-b-2 border-brand-gray bg-brand-white py-6">
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <Image 
              src="/logo.png" 
              alt="Party Time Texas Logo" 
              width={300} 
              height={100}
              className="h-auto object-contain"
              priority
            />
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-16 flex-1">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-black mb-8 text-center">
            Legal Documents
          </h1>
          
          {/* Main Welcome Section */}
          <div className="max-w-4xl mx-auto mb-20">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-black mb-6 text-center">
              Welcome to the Party Time Texas Confidential Vendor Portal
            </h2>
            
            <div className="text-brand-black space-y-5">
              <p className="text-base md:text-lg leading-relaxed">
                This private page includes our current company policies, terms, and expectations for independent contractors and vendors working with our team.
              </p>
              
              <p className="text-base md:text-lg leading-relaxed">
                Access is intended only for recipients who have been provided this link. By continuing, you acknowledge the content is confidential and not to be shared or distributed.
              </p>
              
              <p className="text-base md:text-lg leading-relaxed">
                After reviewing the documents, please complete the acknowledgment form provided in your onboarding email to confirm your review and agreement.
              </p>
              
              <p className="text-base md:text-lg leading-relaxed pt-4">
                For any questions, please contact us at <a href="tel:2143408000" className="text-brand-red hover:underline font-semibold">(214) 340-8000</a> or <a href="mailto:sales@partytimetexas.com" className="text-brand-red hover:underline font-semibold">sales@partytimetexas.com</a>.
              </p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
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
      </main>

      {/* Footer */}
      <footer className="bg-brand-gray bg-opacity-20 border-t-2 border-brand-gray mt-auto">
        <div className="container mx-auto px-4 py-6">
          <div className="text-center">
            <p className="text-brand-black font-semibold">
              © Party Time Texas 2025. For authorized vendor and employee use only.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

