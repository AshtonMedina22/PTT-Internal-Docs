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
          <h1 className="text-4xl md:text-5xl font-bold text-brand-black mb-12 text-center">
            Legal Documents
          </h1>
          
          {/* Main Welcome Section */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="bg-white border-2 border-brand-gray rounded-lg p-8 shadow-lg">
              <p className="text-brand-black text-lg leading-relaxed mb-4">
                Welcome to the Party Time Texas Confidential Vendor Portal.
              </p>
              <p className="text-brand-black text-lg leading-relaxed mb-4">
                This private portal contains key company policies, terms, and operating expectations for independent contractors and vendors who are engaged for events, services, or special assignments with our team.
              </p>
              <p className="text-brand-black text-lg leading-relaxed mb-4">
                Access to this site is provided exclusively to intended recipients for the purpose of reviewing the current policies and agreement terms. By continuing, you acknowledge this portal is private and may not be shared, forwarded, or discussed with third parties.
              </p>
              <p className="text-brand-black text-lg leading-relaxed mb-4">
                After reviewing the content in each section, please complete and submit the acknowledgment form linked in your onboarding message to confirm your review and acceptance of these materials. Your agreement ensures we can move forward with your engagement in a compliant and coordinated way.
              </p>
              <p className="text-brand-black text-lg leading-relaxed">
                If you have any questions, contact your assigned point of contact or email us directly at <a href="mailto:operations@partyTimeTexas.com" className="text-brand-red hover:underline font-semibold">operations@partyTimeTexas.com</a>.
              </p>
            </div>
          </div>
          
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
      </main>

      {/* Footer */}
      <footer className="bg-brand-gray bg-opacity-20 border-t-2 border-brand-gray mt-auto">
        <div className="container mx-auto px-4 py-6">
          <div className="text-center">
            <p className="text-brand-black font-semibold">
              © 2025 Party Time Texas · Confidential Vendor Portal · For Authorized Use Only · All Rights Reserved
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

