'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function PolicyPage() {
  const [activeSection, setActiveSection] = useState('')

  const sections = [
    { id: 'policy-guidelines', title: 'Independent Contractor Company Policy & Guidelines' },
    { id: 'welcome', title: 'Welcome' },
    { id: 'independent-contracted-services', title: 'Independent Contracted Services' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i].id)
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i].id)
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      const offset = 100
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <div className="min-h-screen bg-brand-white flex flex-col">
      {/* Logo Letterhead - Legal Document Format */}
      <header className="w-full border-b-2 border-brand-gray bg-brand-white py-4">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Top Row: Logo Left, Company Info Right */}
          <div className="flex justify-between items-start mb-6">
            {/* Logo on Left */}
            <div className="shrink-0">
              <Image 
                src="/logo.png" 
                alt="Party Time Texas Logo" 
                width={250} 
                height={80}
                className="h-auto object-contain max-h-20"
                priority
              />
            </div>
            {/* Company Information on Right */}
            <div className="shrink-0 text-right text-brand-black">
              <p className="font-semibold mb-1">Olde Glory Entertainment, LLC</p>
              <p className="mb-1">dba Party Time Texas</p>
              <p className="mb-1">330 Industrial Blvd. Suite 106</p>
              <p>McKinney, Texas 75069</p>
            </div>
          </div>
          
          {/* Document Title */}
          <div className="text-center mb-4">
            <h1 className="text-2xl md:text-3xl font-bold text-brand-black mb-2">
              Company Policy & Guidelines
            </h1>
            <div className="text-lg text-brand-black">
              <p className="font-semibold">Independent Contractor Company Policy & Guidelines</p>
              <p className="mt-1 text-gray-700">August 12th, 2025</p>
            </div>
          </div>
          
          {/* Home Button */}
          <div className="flex justify-end mt-4">
            <Link 
              href="/"
              className="px-6 py-2 bg-brand-red text-brand-white font-semibold rounded-lg hover:bg-brand-gold hover:text-brand-black transition-colors duration-200"
            >
              Home
            </Link>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 flex-1">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sticky Sidebar */}
          <aside className="lg:w-64 lg:sticky lg:top-8 lg:h-fit">
            <div className="bg-white border-2 border-brand-gray rounded-lg p-6 shadow-lg max-h-[calc(90vh-5rem)] overflow-y-auto">
              <Link 
                href="/"
                className="text-brand-red hover:text-brand-gold mb-6 inline-block font-semibold transition-colors"
              >
                ← Back to Home
              </Link>
              <h2 className="text-xl font-bold text-brand-black mb-4">
                Table of Contents
              </h2>
              <nav className="space-y-2">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={`block w-full text-left px-4 py-2 rounded transition-colors text-sm ${
                      activeSection === section.id
                        ? 'bg-brand-gold text-brand-black font-semibold'
                        : 'text-brand-gray hover:bg-brand-gray hover:text-brand-black'
                    }`}
                  >
                    {section.title}
                  </button>
                ))}
              </nav>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1 max-w-4xl">
            <div className="bg-white border-2 border-brand-gray rounded-lg p-8 md:p-12 shadow-lg">
              <div className="mb-8">
                <p className="text-gray-700 text-sm mb-2">ATTACHMENT 1: INDEPENDENT CONTRACTOR COMPANY POLICY & GUIDELINES</p>
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-black mb-4">
                  INDEPENDENT CONTRACTOR COMPANY POLICY & GUIDELINES
                </h1>
              </div>

              {/* Independent Contractor Company Policy & Guidelines Section */}
              <section id="policy-guidelines" className="mb-12 scroll-mt-24">
                <h2 className="text-2xl md:text-3xl font-bold text-brand-black mb-4 border-b-2 border-brand-gold pb-2">
                  Independent Contractor Company Policy & Guidelines
                </h2>
                <div className="prose prose-lg max-w-none text-brand-black leading-relaxed space-y-4">
                  <p>
                    Through the execution of the Independent Contractor Agreement, Contractor accepts and confirms adherence to the following Independent Contractor Company Policy & Guidelines and provides acknowledgement of Receipt and Review (&quot;Acknowledgement&quot;) is made by Contractor, confirming receipt of the current version of the Independent Contractor Company Policy & Guidelines.
                  </p>
                  <p>
                    The Contractor has read and understands the policies in the Independent Contractor Company Policy & Guidelines and agrees that the Contractor engagement shall be governed by them.
                  </p>
                  <p>
                    The Company may, from time to time, amend, alter, or delete policies or topics included in the Independent Contractor Company Policy & Guidelines in order to meet its business needs or adhere to changing legislation.  The Contractor agrees that upon receiving notice of such changes, their engagement with the Company shall be governed by such revised policy.
                  </p>
                  <p>
                    The Independent Contractor Company Policy & Guidelines shall continue to govern the Contractor so long as the Contractor is engaged by the Company, subsidiary companies, corporations, limited partnerships and other organized and affiliated entities and in the event of a change in Company ownership.
                  </p>
                  <p>
                    If the Contractor does not understand any of the information included in the Independent Contractor Company Policy & Guidelines, they can discuss any questions they may have with the Company prior to execution of the Independent Contractor Agreement.
                  </p>
                  <p>
                    The Contractor understands that failure to adhere to the Independent Contractor Company Policy & Guidelines may result in termination of their engagement with the Company.
                  </p>
                  <p>
                    In the event of inconsistency between the terms in the Independent Contractor Company Policy & Guidelines and this Agreement, the terms of the Independent Contractor Company Policy & Guidelines shall prevail.
                  </p>
                </div>
              </section>

              {/* Welcome Section */}
              <section id="welcome" className="mb-12 scroll-mt-24">
                <h2 className="text-2xl md:text-3xl font-bold text-brand-black mb-4 border-b-2 border-brand-gold pb-2">
                  Welcome
                </h2>
                <div className="prose prose-lg max-w-none text-brand-black leading-relaxed space-y-4">
                  <p>
                    You have just joined a dedicated organization. We hope that your contracted services with Party Time Texas will be rewarding and challenging. We take pride in our independent contractors as well as in the products and services we provide.
                  </p>
                  <p>
                    The Company complies with all federal and state contracted services laws, and this Company Policy & Guidelines generally reflect those laws. The Company also complies with any applicable local laws, although there may not be an express written policy regarding those laws contained in the Company Policy & Guidelines.
                  </p>
                  <p>
                    The contracted services policies and/or benefits summaries in this Company Policy & Guidelines are written for all independent contractors.  Please take the time now to read this Company Policy & Guidelines carefully. Sign the acknowledgment at the end to show that you have read, understood, and agree to the contents of this Company Policy & Guidelines, which sets out the basic rules and guidelines concerning your contracted services.
                  </p>
                  <p>
                    This Company Policy & Guidelines supersedes any previously issued Company Policy & Guidelines or policy statements dealing with the subjects discussed herein. The Company reserves the right to interpret, modify, or supplement the provisions of this Company Policy & Guidelines at any time. Neither this Company Policy & Guidelines nor any other communication by a management representative or other, whether oral or written, is intended in any way to create a contract of contracted services. Please understand that no Company Policy & Guidelines can address every situation in the workplace.
                  </p>
                  <p>
                    If you have questions about your contracted services or any provisions in this Company Policy & Guidelines, contact Aaron Sheets.
                  </p>
                  <p>
                    We wish you success in your contracted services here at Party Time Texas!
                  </p>
                  <div className="mt-6 space-y-2">
                    <p className="font-semibold">All the best,</p>
                    <div className="mt-4">
                      <p className="font-semibold">Aaron Sheets, COO</p>
                      <p>Party Time Texas</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Independent Contracted Services Section */}
              <section id="independent-contracted-services" className="mb-12 scroll-mt-24">
                <h2 className="text-2xl md:text-3xl font-bold text-brand-black mb-4 border-b-2 border-brand-gold pb-2">
                  Independent Contracted Services
                </h2>
                <div className="prose prose-lg max-w-none text-brand-black leading-relaxed space-y-4">
                  <p>
                    Your contracted services with Party Time Texas is on an &quot;per the terms of the service agreement&quot; basis and will be issued for review and acceptance via the Party Time Texas Work Order system. Once a Work Order is accepted, the terms of the Work Order will dictate the terms of the Services.
                  </p>
                  <p>
                    Only the CEO and COO have the authority to make promises or negotiate with regard to guaranteed or continued contracted services, and any such promises are only effective if placed in writing and signed by authorized parties within Part Time Texas and the from the Independent Contractor.
                  </p>
                  <p>
                    If a written contract between you and the Company is inconsistent with this Company Policy & Guidelines, the written contract is controlling.
                  </p>
                </div>
              </section>
            </div>
          </main>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-brand-gray bg-opacity-20 border-t-2 border-brand-gray mt-auto">
        <div className="container mx-auto px-4 py-6">
          <div className="text-center">
            <p className="text-brand-black font-semibold">
              Party Time Texas 2025 • Company Policy & Guidelines
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

