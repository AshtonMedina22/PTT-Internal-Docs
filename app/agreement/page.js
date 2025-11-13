'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function AgreementPage() {
  const [activeSection, setActiveSection] = useState('')

  const sections = [
    { id: 'engagement', title: 'Engagement of Services' },
    { id: 'independent-status', title: 'Independent Contractor Status' },
    { id: 'compensation', title: 'Compensation' },
    { id: 'term-termination', title: 'Term and Termination' },
    { id: 'confidentiality', title: 'Confidentiality and Non-Disparagement' },
    { id: 'non-solicitation', title: 'Non-Solicitation and Non-Circumvention' },
    { id: 'work-product', title: 'Ownership of Work Product' },
    { id: 'representations', title: 'Representations and Warranties' },
    { id: 'indemnification', title: 'Indemnification' },
    { id: 'precedence', title: 'Precedence of Work Orders' },
    { id: 'miscellaneous', title: 'Miscellaneous' },
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
              Acknowledgment of Terms and Policies
            </h1>
            <div className="text-lg text-brand-black">
              <p className="font-semibold">Independent Contractor Agreement</p>
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
                <p className="text-gray-700 text-sm mb-2">ATTACHMENT 2: INDEPENDENT CONTRACTOR AGREEMENT</p>
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-black mb-4 whitespace-nowrap">
                  INDEPENDENT CONTRACTOR AGREEMENT
                </h1>
              </div>

              {/* Engagement of Services */}
              <section id="engagement" className="mb-12 scroll-mt-24">
                <h2 className="text-2xl md:text-3xl font-bold text-brand-black mb-4 border-b-2 border-brand-gold pb-2">
                  Engagement of Services
                </h2>
                <div className="prose prose-lg max-w-none text-brand-black leading-relaxed space-y-4">
                  <p>
                    The Company hereby engages Contractor, and Contractor agrees to provide professional services in connection with live and virtual special events or business operations and consulting, including but not limited to:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Event planning and coordination</li>
                    <li>On-site setup and breakdown</li>
                    <li>Entertainment services (e.g., DJing, MCing, live performance, technical assistance)</li>
                    <li>Staffing support and guest engagement</li>
                    <li>Vendor or partner liaison support</li>
                    <li>Logistical and operational support</li>
                    <li>Brand activation and experiential services</li>
                    <li>Business Operations</li>
                    <li>Business Consulting</li>
                    <li>Any other event-related duties reasonably requested by the Company or its affiliates (collectively, the &quot;Services&quot;).</li>
                  </ul>
                  <p>Contractor agrees to:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Perform the Services in a timely, professional, and workmanlike manner, consistent with industry standards and the Company&apos;s expectations for quality, professionalism, and guest experience;</li>
                    <li>Follow all event instructions, schedules, appearance guidelines, and conduct protocols as provided by the Company;</li>
                    <li>Be available as reasonably needed for pre-event planning meetings, training, or coordination efforts as determined by the Company;</li>
                    <li>Take direction from designated Company representatives at all times while engaged for Services.</li>
                  </ul>
                  <p>
                    The Company may, at its sole discretion, offer the Contractor the opportunity to perform Services for one or more events through a written Work Order. Each Work Order shall specify the event details, scope of Services, compensation, location, schedule, attire, and any additional terms or requirements specific to that assignment.
                  </p>
                  <p>
                    Contractor must review and formally accept the Work Order and all associated terms in writing prior to being confirmed or authorized to perform Services for that assignment. No assignment shall be deemed accepted, and no obligation to perform shall exist, unless and until the Work Order has been expressly accepted by the Contractor in accordance with this requirement.
                  </p>
                  <p>
                    The Company reserves the right to withdraw, modify, or reassign any Work Order at its discretion prior to acceptance by the Contractor.
                  </p>
                  <p>
                    The Services may be provided at various venues or locations, including third-party sites or partner facilities, and may involve interaction with clients, guests, vendors, talent, and Company-affiliated personnel.
                  </p>
                </div>
              </section>

              {/* Independent Contractor Status */}
              <section id="independent-status" className="mb-12 scroll-mt-24">
                <h2 className="text-2xl md:text-3xl font-bold text-brand-black mb-4 border-b-2 border-brand-gold pb-2">
                  Independent Contractor Status
                </h2>
                <div className="prose prose-lg max-w-none text-brand-black leading-relaxed space-y-4">
                  <p>
                    Contractor acknowledges and agrees that they shall perform all Services as an independent contractor and not as an employee, agent, partner, or joint venturer of the Company. Nothing in this Agreement shall be construed to create or imply an employment relationship, partnership, joint venture, agency, or any other fiduciary relationship between the Company and Contractor.
                  </p>
                  <p>
                    Contractor shall have no authority to bind, obligate, or represent the Company in any manner unless expressly authorized in writing.
                  </p>
                  <p>Contractor shall be solely responsible for:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Payment of all federal, state, and local taxes, including income taxes, self-employment taxes, and any other taxes or levies related to compensation received under this Agreement;</li>
                    <li>All required withholdings, contributions, and filings, including but not limited to Social Security, Medicare, unemployment insurance, and workers&apos; compensation insurance;</li>
                    <li>Compliance with all laws, rules, and regulations applicable to Contractor&apos;s business and performance of the Services;</li>
                    <li>Maintaining appropriate insurance coverage, including liability and, if applicable, worker&apos;s compensation insurance as depicted below, at Contractor&apos;s sole cost and expense;</li>
                  </ul>
                  <div className="ml-4 space-y-2">
                    <p className="font-semibold">Commercial General Liability Insurance - $1,000,000 per occurrence, $2,000,000 general aggregate (per project basis), $2,000,000 products-completed operations aggregate.</p>
                    <p>Coverage must be primary and provided via endorsements CG 20 10, including completed operations coverage for at least two years post-contract completion.</p>
                  </div>
                  <p>
                    Contractor shall provide the Company with certificates of insurance evidencing such coverage prior to commencing Services, and shall name Olde Glory Entertainment, LLC as an additional insured on all applicable liability policies, for damages related to bodily injury, property damage, and personal/advertising injury.  Coverage must be primary and provided via endorsements CG 20 10 (or equivalent), including completed operations coverage for at least two years post-contract completion.  The Company shall be named as depicted below.
                  </p>
                  <div className="bg-brand-gray bg-opacity-10 p-4 rounded border-l-4 border-brand-gold ml-4">
                    <p className="font-semibold">Olde Glory Entertainment, LLC</p>
                    <p>dba Party Time Texas</p>
                    <p>330 Industrial Blvd STE 106</p>
                    <p>McKinney, Texas 75069</p>
                  </div>
                  <p>
                    The Company will not provide Contractor with any employee benefits, including but not limited to health insurance, retirement plans, paid leave, or workers&apos; compensation coverage.
                  </p>
                  <p>
                    Contractor agrees to defend, indemnify and hold harmless the Company from any claims, liabilities, penalties, loss, costs, attorney fees and other expenses arising out of Contractor&apos;s negligent or intentional acts or failure to comply with the obligations described herein.
                  </p>
                </div>
              </section>

              {/* Compensation */}
              <section id="compensation" className="mb-12 scroll-mt-24">
                <h2 className="text-2xl md:text-3xl font-bold text-brand-black mb-4 border-b-2 border-brand-gold pb-2">
                  Compensation
                </h2>
                <div className="prose prose-lg max-w-none text-brand-black leading-relaxed space-y-4">
                  <p>
                    As full and complete compensation for the Services performed under this Agreement, Contractor shall be paid at the base rate(s), calculated total compensation(s) for various Services as specified in an Annual Services & Compensation Agreement, if in place.  Each written Work Order will detail the scope, deliverables, schedule, and if any, event specific compensation adjustments applicable to the specific Services to be provided.
                  </p>
                  <p>
                    Payment shall be made on a weekly basis, following the submission of a proper and timely invoice by Contractor, which must include sufficient documentation as reasonably required by the Company to verify the Services performed (such as timesheets, delivery receipts, photos of setup, client signoffs, and post event reports).
                  </p>
                  <p>
                    Contractor agrees that no payment shall be due or payable unless and until the applicable Work Order has been accepted by Contractor in accordance with the terms of this Agreement, and Contractor has satisfactorily performed the Services described therein.
                  </p>
                  <p>
                    The Company reserves the right to withhold payment for any Services or Work Product that are incomplete, unsatisfactory, not in compliance with the Work Order, or in breach of this Agreement, until such deficiencies are remedied to the Company&apos;s reasonable satisfaction.
                  </p>
                  <p>
                    All payments shall be made via the Company&apos;s standard payment methods, and Contractor is responsible for any taxes, fees, or charges associated with payment processing.
                  </p>
                  <p>
                    Unless otherwise agreed in writing, Contractor shall bear all expenses incurred in performing the Services, and no reimbursement will be provided except as explicitly stated in the applicable Work Order.
                  </p>
                </div>
              </section>

              {/* Term and Termination */}
              <section id="term-termination" className="mb-12 scroll-mt-24">
                <h2 className="text-2xl md:text-3xl font-bold text-brand-black mb-4 border-b-2 border-brand-gold pb-2">
                  Term and Termination
                </h2>
                <div className="prose prose-lg max-w-none text-brand-black leading-relaxed space-y-4">
                  <p>
                    This Agreement shall commence on the Effective Date and shall continue in full force and effect until terminated by either party.
                  </p>
                  <p>
                    Either party may terminate this Agreement without cause by providing at least thirty (30) days&apos; prior written notice to the other party.
                  </p>
                  <p>The Company may terminate this Agreement immediately and without prior notice for cause, including but not limited to:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Any material breach of this Agreement by Contractor;</li>
                    <li>Failure to perform the Services in a professional or timely manner;</li>
                    <li>Violation of any applicable law, regulation, or Independent Contractor Company Policy & Guidelines;</li>
                    <li>Conduct by Contractor that, in the sole discretion of the Company, damages or threatens the Company&apos;s reputation, goodwill, or business interests.</li>
                  </ul>
                  <p>
                    Upon termination or expiration of this Agreement, Contractor shall promptly cease all Services and return to the Company any Company property, Confidential Information, and Work Product in Contractor&apos;s possession.
                  </p>
                  <p>
                    Termination shall not relieve either party of any obligations or liabilities accrued prior to the effective date of termination.
                  </p>
                  <p>
                    The provisions of this Agreement that by their nature are intended to survive termination or expiration, including but not limited to Confidentiality, Indemnification, Ownership of Work Product, Non-Solicitation and Non-Circumvention, and Payment obligations, shall survive such termination or expiration indefinitely.
                  </p>
                </div>
              </section>

              {/* Confidentiality and Non-Disparagement */}
              <section id="confidentiality" className="mb-12 scroll-mt-24">
                <h2 className="text-2xl md:text-3xl font-bold text-brand-black mb-4 border-b-2 border-brand-gold pb-2">
                  Confidentiality and Non-Disparagement
                </h2>
                <div className="prose prose-lg max-w-none text-brand-black leading-relaxed space-y-4">
                  <p>
                    Contractor agrees that during the term of this Agreement and at all times thereafter, they shall not use, disclose, publish, or disseminate, directly or indirectly, any Confidential Information of the Company, its clients, partners, affiliates, or vendors, except as strictly necessary to perform the Services under this Agreement and solely for the benefit of the Company.
                  </p>
                  
                  <div className="ml-4 space-y-4">
                    <h3 className="text-xl font-bold text-brand-black mt-6 mb-2">Definition of Confidential Information</h3>
                    <p>&quot;Confidential Information&quot; includes, without limitation:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Business strategies, event plans, pricing, and financial data;</li>
                      <li>Client, guest, and vendor identities, preferences, contact information, and communications;</li>
                      <li>Event scripts, run-of-show, music or cue sheets, talent riders, proprietary production processes, and other creative content;</li>
                      <li>Any personal, private, or sensitive information observed or accessed in the course of performing Services at Company or client events;</li>
                      <li>Any materials or communications labeled as confidential or that a reasonable person would understand to be confidential based on the context or nature of the information.</li>
                    </ul>

                    <h3 className="text-xl font-bold text-brand-black mt-6 mb-2">Event-Specific Confidentiality</h3>
                    <p>Contractor shall treat all client-related information and interactions at events as confidential, including but not limited to:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Private event details such as guest lists, schedules, and behind-the-scenes operations;</li>
                      <li>Personal or sensitive conversations, requests, or behaviors witnessed during event preparation or execution;</li>
                      <li>Any photographs, videos, or recordings taken at events (unless explicitly authorized in writing by the Company or client).</li>
                    </ul>
                    <p>Contractor may not share, post, or distribute any such information through social media, messaging apps, word-of-mouth, or any other means, unless explicitly authorized in writing.</p>

                    <h3 className="text-xl font-bold text-brand-black mt-6 mb-2">Obligations</h3>
                    <p>Contractor shall:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Use at least reasonable care to protect all Confidential Information;</li>
                      <li>Only share Confidential Information with personnel under their supervision who are bound by equivalent confidentiality obligations;</li>
                      <li>Promptly notify the Company of any unauthorized access, use, or disclosure of Confidential Information;</li>
                      <li>Return or permanently delete all Confidential Information, including all copies and notes, at the end of the engagement or upon Company request.</li>
                    </ul>

                    <h3 className="text-xl font-bold text-brand-black mt-6 mb-2">Exclusions</h3>
                    <p>The obligations in this section do not apply to information that:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Was already lawfully known by the Contractor without obligation of confidentiality;</li>
                      <li>Becomes publicly known through no fault or breach by Contractor;</li>
                      <li>Is disclosed by a third party lawfully and without confidentiality restrictions;</li>
                      <li>Is independently developed by the Contractor without use of or reference to Company Confidential Information.</li>
                    </ul>

                    <h3 className="text-xl font-bold text-brand-black mt-6 mb-2">Non-Disparagement</h3>
                    <p>Contractor agrees not to make, publish, or cause to be made any oral or written statements, whether publicly or privately, that:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Disparage, demean, or reflect negatively upon the Company, its brand, services, clients, partners, staff, or events;</li>
                      <li>Undermine the Company&apos;s reputation or business interests in any way;</li>
                      <li>Are made on social media, in the press, to clients, competitors, or any third party.</li>
                    </ul>
                    <p>This restriction does not prevent Contractor from making truthful statements required by law, subpoena, or legal proceeding.</p>

                    <h3 className="text-xl font-bold text-brand-black mt-6 mb-2">Injunctive Relief</h3>
                    <p>
                      Contractor acknowledges that any breach of this section may cause immediate and irreparable harm to the Company and/or its clients for which monetary damages may be inadequate. Accordingly, the Company shall be entitled to seek injunctive relief and any other remedies available under law or equity, without the necessity of posting bond.
                    </p>
                    <p>This section shall survive the termination or expiration of this Agreement indefinitely.</p>
                  </div>
                </div>
              </section>

              {/* Non-Solicitation and Non-Circumvention */}
              <section id="non-solicitation" className="mb-12 scroll-mt-24">
                <h2 className="text-2xl md:text-3xl font-bold text-brand-black mb-4 border-b-2 border-brand-gold pb-2">
                  Non-Solicitation and Non-Circumvention
                </h2>
                <div className="prose prose-lg max-w-none text-brand-black leading-relaxed space-y-4">
                  <p>
                    Contractor agrees that during the term of this Agreement and for a period of twelve (12) months following its termination or expiration, for any reason, they shall not, directly or indirectly, for themselves or on behalf of any other person or entity:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Solicit, recruit, hire, or attempt to hire any employee, contractor, representative, or agent of the Company or any of its affiliates, or otherwise induce or encourage any such individual to leave their relationship with the Company;</li>
                    <li>Engage in any business dealings with, solicit, or attempt to solicit business from any client, customer, vendor, sponsor, performer, or event partner of the Company or its affiliates with whom the Contractor had direct or indirect contact, or about whom the Contractor became aware, in connection with the performance of the Services under this Agreement;</li>
                    <li>Accept or perform services similar to those offered by the Company or its affiliates for any client, customer, or event partner of the Company in a manner that competes with or bypasses the Company;</li>
                    <li>Circumvent, disrupt or interfere with any contractual or prospective business relationships between the Company or its affiliates and any third party known to the Contractor through the course of this engagement.</li>
                  </ul>
                  
                  <div className="ml-4 space-y-4">
                    <h3 className="text-xl font-bold text-brand-black mt-6 mb-2">Definition of Affiliates</h3>
                    <p>
                      For the purposes of this Agreement, &quot;affiliates&quot; shall mean any entity that directly or indirectly controls, is controlled by, or is under common control with the Company, including but not limited to joint ventures, brand extensions, and related service entities owned or operated in partnership with the Company.
                    </p>

                    <h3 className="text-xl font-bold text-brand-black mt-6 mb-2">Acknowledgment and Reasonableness</h3>
                    <p>Contractor acknowledges that:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>These restrictions are reasonable and necessary to protect the Company&apos;s legitimate business interests, including its confidential information, goodwill, and client and contractor relationships;</li>
                      <li>A breach of this provision would cause substantial harm to the Company that cannot be adequately remedied by monetary damages alone.</li>
                    </ul>

                    <h3 className="text-xl font-bold text-brand-black mt-6 mb-2">Remedies and Injunctive Relief</h3>
                    <p>
                      In the event of a breach or threatened breach of this section, the Company shall be entitled to seek injunctive relief, specific performance, and/or any other remedies available at law or in equity, without the necessity of posting bond or proving actual damages.
                    </p>
                    <p>This provision shall survive the termination or expiration of this Agreement for a period of twelve (12) months.</p>
                  </div>
                </div>
              </section>

              {/* Ownership of Work Product */}
              <section id="work-product" className="mb-12 scroll-mt-24">
                <h2 className="text-2xl md:text-3xl font-bold text-brand-black mb-4 border-b-2 border-brand-gold pb-2">
                  Ownership of Work Product
                </h2>
                <div className="prose prose-lg max-w-none text-brand-black leading-relaxed space-y-4">
                  <p>
                    All materials, content, products, deliverables, works of authorship, inventions, discoveries, designs, documents, recordings, data, photographs, video, audio, graphics, software, ideas, and any other work product (whether tangible or intangible) created, developed, prepared, conceived, or reduced to practice by Contractor, alone or jointly with others, in connection with or related to the performance of the Services under this Agreement ( &quot;Work Product&quot;), shall be deemed &quot;work made for hire&quot; to the fullest extent permitted by law, and shall be the sole and exclusive property of the Company.
                  </p>
                  <p>
                    To the extent that any Work Product is not deemed a &quot;work made for hire&quot; or that Contractor retains any right, title, or interest in or to any Work Product, Contractor hereby irrevocably assigns, transfers, and conveys to the Company all right, title, and interest in and to such Work Product, including all intellectual property rights therein (including but not limited to copyrights, trademark rights, trade secrets, and moral rights, where applicable), without further compensation.
                  </p>
                  <p>Contractor agrees to:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Execute and deliver any documents and take all actions reasonably requested by the Company to effect, perfect, or confirm the Company&apos;s ownership of the Work Product;</li>
                    <li>Not use or disclose any Work Product for any purpose other than performance of the Services under this Agreement without the prior written consent of the Company;</li>
                    <li>Warrant that the Work Product is original and does not infringe upon or misappropriate the intellectual property or proprietary rights of any third party.</li>
                  </ul>
                  
                  <div className="ml-4 space-y-4">
                    <h3 className="text-xl font-bold text-brand-black mt-6 mb-2">Exclusions</h3>
                    <p>Notwithstanding the foregoing, the following shall be excluded from the definition of Work Product:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>
                        <span className="font-semibold">Pre-Existing Materials:</span> Any materials, content, or intellectual property that was developed or owned by Contractor prior to the effective date of this Agreement and that is clearly identified and disclosed to the Company in writing before being used in connection with the Services (&quot;Pre-Existing Materials&quot;). Contractor retains ownership of such Pre-Existing Materials, provided that Contractor grants the Company a non-exclusive, perpetual, royalty-free, worldwide license to use, reproduce, display, distribute, and create derivative works of any Pre-Existing Materials that are incorporated into the Work Product.
                      </li>
                      <li>
                        <span className="font-semibold">Third-Party Materials:</span> Any third-party content or assets (such as stock media, licensed music, or software libraries) used in connection with the Services, provided that Contractor has obtained appropriate licenses and permissions for such use. Contractor shall disclose the source and license terms of any third-party materials to the Company in writing prior to use.
                      </li>
                    </ul>
                    <p>This provision shall survive the termination or expiration of this Agreement.</p>
                  </div>
                </div>
              </section>

              {/* Representations and Warranties */}
              <section id="representations" className="mb-12 scroll-mt-24">
                <h2 className="text-2xl md:text-3xl font-bold text-brand-black mb-4 border-b-2 border-brand-gold pb-2">
                  Representations and Warranties
                </h2>
                <div className="prose prose-lg max-w-none text-brand-black leading-relaxed space-y-4">
                  <p>Contractor represents, warrants, and covenants that:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>
                      <span className="font-semibold">Qualifications and Authority:</span> Contractor has all necessary qualifications, certifications, licenses, experience, and expertise to perform the Services in a timely, professional, and workmanlike manner consistent with industry standards and best practices.
                    </li>
                    <li>
                      <span className="font-semibold">Compliance with Laws:</span> Contractor shall comply with all applicable federal, state, and local laws, regulations, ordinances, and codes in connection with the performance of the Services, including but not limited to labor, employment, health and safety, and tax laws.
                    </li>
                    <li>
                      <span className="font-semibold">No Conflict or Infringement:</span> The execution and performance of this Agreement by Contractor does not and will not violate or conflict with any other agreement, obligation, or restriction to which Contractor is subject. Contractor further warrants that no aspect of the Services infringes upon or misappropriates any third party&apos;s intellectual property or proprietary rights.
                    </li>
                    <li>
                      <span className="font-semibold">Independent Contractor Status:</span> Contractor is an independent contractor and not an employee, agent, or partner of the Company, and Contractor has no authority to bind the Company or incur obligations on its behalf.
                    </li>
                    <li>
                      <span className="font-semibold">Work Product and Materials:</span> Any materials, content, or deliverables provided to the Company under this Agreement shall be original to Contractor or properly licensed, and shall not infringe or violate the rights of any third party.
                    </li>
                    <li>
                      <span className="font-semibold">Condition and Conduct:</span> Contractor will conduct themselves in a professional, courteous, and safe manner at all times and shall not engage in any behavior that could reflect poorly on the Company or compromise the safety or experience of event participants, clients, or guests.
                    </li>
                  </ul>
                  <p>
                    Contractor has received from the Company, as confirmed by Attachment 1 Independent Contractor Company Policy & Guidelines Acknowledgement of Receipt and Review, a copy of the current Independent Contractor Company Policy & Guidelines and agrees that their engagement shall be governed by them.
                  </p>
                  <p>These representations and warranties shall survive the termination or expiration of this Agreement.</p>
                </div>
              </section>

              {/* Indemnification */}
              <section id="indemnification" className="mb-12 scroll-mt-24">
                <h2 className="text-2xl md:text-3xl font-bold text-brand-black mb-4 border-b-2 border-brand-gold pb-2">
                  Indemnification
                </h2>
                <div className="prose prose-lg max-w-none text-brand-black leading-relaxed space-y-4">
                  <p>
                    Contractor shall indemnify, defend, and hold harmless the Company, its officers, directors, employees, agents, affiliates, successors, and assigns (collectively, the &quot;Indemnified Parties&quot;) from and against any and all claims, demands, causes of action, losses, damages, liabilities, fines, penalties, judgments, settlements, costs, and expenses (including without limitation reasonable attorneys&apos; fees and court costs) of any kind or nature whatsoever, whether in contract, tort, statute, or otherwise (collectively, &quot;Claims&quot;), arising out of or related to:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>The performance or non-performance of the Services under this Agreement by Contractor or its employees, agents, subcontractors, or representatives;</li>
                    <li>Any act or omission, negligence, willful misconduct, or violation of law by Contractor or its personnel;</li>
                    <li>Injury to persons (including death) or damage to property resulting from or related to Contractor&apos;s activities;</li>
                    <li>Any breach of this Agreement by Contractor, including representations, warranties, and covenants;</li>
                    <li>Claims by third parties, including but not limited to clients, guests, or other vendors, arising from or related to Contractor&apos;s Services.</li>
                  </ul>
                  <p>
                    This indemnification obligation shall survive the termination or expiration of this Agreement and shall not be limited by any insurance maintained by the Contractor.
                  </p>
                </div>
              </section>

              {/* Precedence of Work Orders */}
              <section id="precedence" className="mb-12 scroll-mt-24">
                <h2 className="text-2xl md:text-3xl font-bold text-brand-black mb-4 border-b-2 border-brand-gold pb-2">
                  Precedence of Work Orders
                </h2>
                <div className="prose prose-lg max-w-none text-brand-black leading-relaxed space-y-4">
                  <p>
                    In the event of any conflict or inconsistency between the terms of this Agreement and the terms of any executed Work Order, the terms of the applicable Work Order shall control, but only with respect to the Services, compensation, or other specific matters expressly set forth in such Work Order. All other terms and conditions of this Agreement shall remain in full force and effect and shall govern the relationship between the parties.
                  </p>
                </div>
              </section>

              {/* Miscellaneous */}
              <section id="miscellaneous" className="mb-12 scroll-mt-24">
                <h2 className="text-2xl md:text-3xl font-bold text-brand-black mb-4 border-b-2 border-brand-gold pb-2">
                  Miscellaneous
                </h2>
                <div className="prose prose-lg max-w-none text-brand-black leading-relaxed space-y-4">
                  <div className="ml-4 space-y-4">
                    <div>
                      <h3 className="text-xl font-bold text-brand-black mt-6 mb-2">Governing Law and Jurisdiction</h3>
                      <p>
                        This Agreement shall be governed by, interpreted, and enforced in accordance with the laws of the State of Texas, without regard to its conflict of law principles. The parties agree that any legal action or proceeding arising out of or relating to this Agreement shall be brought exclusively in the state or federal courts located in Collin County, Texas, and the parties hereby irrevocably consent to the personal jurisdiction and venue of such courts.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-brand-black mt-6 mb-2">Entire Agreement</h3>
                      <p>
                        This Agreement, including all referenced Work Orders, Independent Contractor Company Policy & Guidelines, and attachments, constitutes the complete and exclusive statement of the understanding between the parties with respect to the subject matter hereof and supersedes all prior oral or written agreements, negotiations, understandings, or communications between the parties concerning such subject matter.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-brand-black mt-6 mb-2">Amendments and Waivers</h3>
                      <p>
                        No amendment, modification, or waiver of any provision of this Agreement shall be valid or binding unless in writing and signed by authorized representatives of both parties. The failure of either party to enforce any provision of this Agreement shall not constitute a waiver of future enforcement of that or any other provision.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-brand-black mt-6 mb-2">Severability</h3>
                      <p>
                        If any provision of this Agreement is found to be invalid, illegal, or unenforceable by a court of competent jurisdiction, the remaining provisions shall remain in full force and effect and be construed so as to best effectuate the intent of the parties.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-brand-black mt-6 mb-2">Assignment</h3>
                      <p>
                        Contractor may not assign or delegate any of its rights or obligations under this Agreement without the prior written consent of the Company. The Company may assign this Agreement or any rights hereunder to any affiliate or successor entity.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-brand-black mt-6 mb-2">No Third-Party Beneficiaries</h3>
                      <p>
                        Except as expressly set forth herein, this Agreement is intended solely for the benefit of the parties hereto and is not intended to confer any rights or remedies upon any third parties.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-brand-black mt-6 mb-2">Force Majeure</h3>
                      <p>
                        Neither party shall be liable for any delay or failure to perform its obligations under this Agreement due to causes beyond its reasonable control, including but not limited to acts of God, war, terrorism, labor disputes, government actions, or natural disasters.
                      </p>
                    </div>
                  </div>
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
              Party Time Texas 2025 • Agreement
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
