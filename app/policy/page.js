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
    { id: 'introductory-language', title: 'Introductory Language and Policies' },
    { id: 'hiring-orientation', title: 'Hiring and Orientation Policies' },
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

              {/* Introductory Language and Policies Section */}
              <section id="introductory-language" className="mb-12 scroll-mt-24">
                <h2 className="text-2xl md:text-3xl font-bold text-brand-black mb-4 border-b-2 border-brand-gold pb-2">
                  2.0 Introductory Language and Policies
                </h2>
                <div className="prose prose-lg max-w-none text-brand-black leading-relaxed space-y-4">
                  
                  <div className="mt-6">
                    <h3 className="text-xl font-bold text-brand-black mb-3">2.1 About the Company</h3>
                    <p>
                      Party Time Texas was founded by Bill Cody in 1977 following a pivotal moment in music history. While touring with Elvis impersonator Johnny Harra and performing in the band Benedict, Cody was in Dallas when news broke of Elvis Presley&apos;s passing. The band went on to perform to sold-out crowds, including a tribute concert at the Cotton Bowl. Shortly after, Bill Cody shifted his focus to building a career as a DJ and Master of Ceremonies in the Dallas area.
                    </p>
                    <p>
                      What began as one man&apos;s passion for music and entertainment evolved into Party Time Texas—a premier event entertainment company known for its interactive and crowd-engaging DJ/MCs. Over the past 47 years, the company has grown into a multimillion-dollar enterprise, offering services for weddings, birthdays, corporate events, and more.
                    </p>
                    <p>
                      In a major milestone, Party Time Texas was acquired by Olde Glory Entertainment, ushering in a new era of innovation and expansion. This strategic acquisition brought fresh energy and resources to the brand, enabling the implementation of world-class systems, best practices, and a renewed focus on elevating the client experience.
                    </p>
                    <p>
                      Under Olde Glory Entertainment&apos;s leadership, Party Time Texas is expanding its service offerings, reaching a broader client base, and delivering an even stronger value proposition. The company remains committed to exceeding expectations through high-energy entertainment, seamless event coordination, and a personalized approach to every celebration.
                    </p>
                    <p>
                      Today, Party Time Texas provides a full spectrum of event services, including:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Interactive DJ/MCs</li>
                      <li>Bands, Musicians, and Dancers</li>
                      <li>Photography and Videography</li>
                      <li>Audio-Visual Services and Special Event Lighting</li>
                      <li>Complete Party Planning Services</li>
                    </ul>
                    <p>
                      As one of the most requested entertainment groups in the DFW area, Party Time Texas is proud to offer everything clients need to create unforgettable events—from intimate gatherings to large-scale productions.
                    </p>
                  </div>

                  <div className="mt-6">
                    <h3 className="text-xl font-bold text-brand-black mb-3">2.2 Company Facilities</h3>
                    <p>
                      The main office is located at 330 Industrial BLVD, Suite 106, McKinney, Texas 75069.
                    </p>
                    <p>
                      The facility includes offices for all operations, including administration, sales, management, equipment storage, as well as a collaboration area for team members.  A conference room is available for both internal meetings, and for vendor and client-facing meetings.
                    </p>
                    <p>
                      In case of an emergency, all independent contractors should follow posted signs and rally across the parking lot to the north of the facility. From there, a roll call will be performed by the senior ranking member of the team on-site at the time.
                    </p>
                  </div>

                  <div className="mt-6">
                    <h3 className="text-xl font-bold text-brand-black mb-3">2.3 Ethics Code</h3>
                    <p>
                      Party Time Texas will conduct business honestly and ethically wherever operations are maintained. We strive to improve the quality of our services, products, and operations and will maintain a reputation for honesty, fairness, respect, responsibility, integrity, trust, and sound business judgment. Our managers, employees and independent contractors are expected to adhere to high standards of business and personal integrity as a representation of our business practices, always consistent with their duty to the Company.
                    </p>
                    <p>
                      We expect that officers, managers, employees and independent contractors will not knowingly misrepresent the Company and will not speak on behalf of the Company unless specifically authorized. The confidentiality of trade secrets, proprietary information, and similar confidential commercially-sensitive information (e.g., financial or sales  records/reports, marketing or business strategies/plans, product development, client lists, patents, or trademarks) about the Company or operations, or that of our clients or partners, is to be treated with discretion and only disseminated on a need-to-know basis (see policies relating to privacy).
                    </p>
                    <p>
                      Violation of the Ethics Code can result in discipline, up to and including termination of contracted services. The degree of discipline imposed may be influenced by the existence of voluntary disclosure of any ethical violation and whether or not the violator cooperated in any subsequent investigation.
                    </p>
                  </div>

                  <div className="mt-6">
                    <h3 className="text-xl font-bold text-brand-black mb-3">2.4 Mission, Vision and Values Statements</h3>
                    <p className="font-semibold">Our Mission:</p>
                    <p>To inspire and strengthen communities through collaboration, connection, and celebration.</p>
                    <p className="font-semibold mt-4">Our Vision:</p>
                    <p>To drive community, business, and individual growth through unity of purpose and celebration.</p>
                    <p className="font-semibold mt-4">Our Values: ROAD to Inspiration</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li><span className="font-semibold">Results:</span> Focus on outcomes and accomplishments, not efforts or intentions</li>
                      <li><span className="font-semibold">Ownership:</span> Take accountability of actions, outcomes, impact</li>
                      <li><span className="font-semibold">Alignment:</span> Goals, actions, communication, and decisions towards shared purpose</li>
                      <li><span className="font-semibold">Discipline:</span> Commitment to consistency, focus and excellence</li>
                      <li><span className="font-semibold">Transparency:</span> Open, honest, and clear in communications and actions</li>
                      <li><span className="font-semibold">Inspiration:</span> Energy, creativity, purpose in self and others</li>
                    </ul>
                    <p className="mt-4 font-semibold">Tagline: Collaboration, Connection, and Celebration</p>
                  </div>

                  <div className="mt-6">
                    <h3 className="text-xl font-bold text-brand-black mb-3">2.5 Our Organization</h3>
                    
                    <div className="mt-4">
                      <h4 className="text-lg font-bold text-brand-black mb-2">2.5.1 Leadership Team</h4>
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li><span className="font-semibold">CEO (Chief Executive Officer)</span> - The CEO oversees the company&apos;s overall direction, ensuring alignment with business goals and strategic objectives.</li>
                        <li><span className="font-semibold">COO (Chief Operating Officer)</span> - The COO manages day-to-day operations and ensures the efficiency of internal processes. They work closely with departments to ensure operational goals align with strategic priorities.</li>
                        <li><span className="font-semibold">CFO (Chief Financial Officer)</span> - The CFO manages the company&apos;s financial health, overseeing budgeting, financial reporting, and cost control. They play a key role in maintaining profitability and operational sustainability.</li>
                        <li><span className="font-semibold">CTO (Chief Technology Officer)</span> - The CTO leads the technology strategy and innovation, ensuring the company stays ahead with technological advancements and maintains efficient systems.</li>
                      </ul>
                    </div>

                    <div className="mt-6">
                      <h4 className="text-lg font-bold text-brand-black mb-2">2.5.2 Core Departments</h4>
                      <p>Each department has a leadership role (Director or VP) that ensures seamless communication and clear delegation of responsibilities.</p>
                      <p className="mt-2">Below are the core departments:</p>
                      
                      <div className="mt-4 ml-4">
                        <p className="font-semibold">• Sales and Marketing</p>
                        <p className="ml-4">VP of Sales & Marketing - Responsible for driving the company&apos;s sales growth, marketing initiatives, and client acquisition strategies.</p>
                        <p className="ml-4 mt-2">Communication: Regular meetings between sales and marketing teams to ensure alignment on campaigns, client feedback, and lead generation.</p>
                        <p className="ml-4">Workflow: Collaboration on content creation, lead nurturing, and conversion strategies.</p>
                        <p className="ml-4">Quality Standards: Client satisfaction is prioritized by maintaining high standards for communication and delivering tailored marketing messages.</p>
                      </div>

                      <div className="mt-4 ml-4">
                        <p className="font-semibold">• Product Development and R&D</p>
                        <p className="ml-4">VP of Product Development - Oversees the design, development, and launch of new products. They ensure that the products meet the company&apos;s high-quality standards and meet client needs.</p>
                        <p className="ml-4 mt-2">Communication: Close collaboration with the sales and client service teams for market insights. Regular updates to leadership on product progress.</p>
                        <p className="ml-4">Workflow: Clear stages for product development, from conceptualization to production, involving various teams (designers, engineers, quality control).</p>
                        <p className="ml-4">Quality Standards: Product testing and revisions ensure the highest level of quality before launch.</p>
                      </div>

                      <div className="mt-4 ml-4">
                        <p className="font-semibold">• Operations and Client Service</p>
                        <p className="ml-4">Director of Operations - Manages the supply chain, logistics, and client service operations. Ensure smooth and efficient daily operations and that client concerns are addressed promptly.</p>
                        <p className="ml-4 mt-2">Communication: Real-time updates between client service reps and operations teams to resolve issues quickly.</p>
                        <p className="ml-4">Workflow: Efficient handling of client inquiries, order fulfillment, and inventory management.</p>
                        <p className="ml-4">Quality Standards: Monitoring response times and client satisfaction metrics. Regular training for client service agents to uphold company values.</p>
                      </div>

                      <div className="mt-4 ml-4">
                        <p className="font-semibold">• Human Resources (HR)</p>
                        <p className="ml-4">HR Director - Manages recruitment, independent contractor engagement, compliance, and performance management. HR ensures a healthy work culture and facilitates independent contractor development programs.</p>
                        <p className="ml-4 mt-2">Communication: Clear communication channels for independent contractor concerns, feedback, and performance reviews.</p>
                        <p className="ml-4">Workflow: Streamlined onboarding, performance evaluation, and training programs.</p>
                        <p className="ml-4">Quality Standards: Regular independent contractor surveys and performance reviews to maintain a positive workplace culture.</p>
                      </div>

                      <div className="mt-4 ml-4">
                        <p className="font-semibold">• Finance and Accounting</p>
                        <p className="ml-4">VP of Finance - Responsible for all financial activities, including managing the company&apos;s budget, forecasts, accounting records, and tax obligations.</p>
                        <p className="ml-4 mt-2">Communication: Regular updates to the leadership team on financial performance.</p>
                        <p className="ml-4">Workflow: A structured approach to financial reporting, budgeting, and auditing.</p>
                        <p className="ml-4">Quality Standards: High standards for accuracy in reporting, compliance with financial regulations, and forecasting precision.</p>
                      </div>
                    </div>

                    <div className="mt-6">
                      <h4 className="text-lg font-bold text-brand-black mb-2">2.5.2 Cross-Departmental Collaboration</h4>
                      <p className="font-semibold">Project Teams:</p>
                      <p>Depending on the project, members from different departments (sales, marketing, product development, etc.) are selected to ensure comprehensive insights and efficient execution.</p>
                      <p className="font-semibold mt-4">Team Meetings:</p>
                      <p>Regular interdepartmental meetings ensure everyone is aligned on company goals, deadlines, and performance expectations.</p>
                      <p className="font-semibold mt-4">Communication Tools:</p>
                      <p>The company uses project management software to track tasks, share updates, and ensure clarity.</p>
                    </div>

                    <div className="mt-6">
                      <h4 className="text-lg font-bold text-brand-black mb-2">2.5.3 Workflow and Quality Standards</h4>
                      <p className="font-semibold">Clear Reporting Lines:</p>
                      <p>Every department head reports directly to the executive team, ensuring a clear flow of information and accountability.</p>
                      <p className="font-semibold mt-4">Performance Metrics:</p>
                      <p>Each department is assigned key performance indicators (KPIs) to ensure that the business remains on track to meet its strategic goals.</p>
                      <p className="font-semibold mt-4">Continuous Improvement:</p>
                      <p>There is a focus on continuous improvement, with regular assessments of processes to identify areas for optimization. Independent Contractors are encouraged to propose suggestions for improving workflows and maintaining high-quality standards.</p>
                    </div>
                  </div>

                  <div className="mt-6">
                    <h3 className="text-xl font-bold text-brand-black mb-3">2.6 Revisions to Company Policy & Guidelines</h3>
                    <p>
                      This Company Policy & Guidelines is our attempt to keep you informed of the terms and conditions of your contracted services, including Party Time Texas policies and procedures. The Company Policy & Guidelines is not a contract. The Company reserves the right to revise, add, or delete from this Company Policy & Guidelines as we determine to be in our best interest, except the policy concerning per the terms of the service agreement contracted services.
                    </p>
                    <p>
                      When changes are made to the policies and guidelines in this Company Policy & Guidelines, we will communicate them promptly, either in a written amendment or supplement to the Company Policy & Guidelines.
                    </p>
                  </div>
                </div>
              </section>

              {/* Hiring and Orientation Policies Section */}
              <section id="hiring-orientation" className="mb-12 scroll-mt-24">
                <h2 className="text-2xl md:text-3xl font-bold text-brand-black mb-4 border-b-2 border-brand-gold pb-2">
                  3.0 Hiring and Orientation Policies
                </h2>
                <div className="prose prose-lg max-w-none text-brand-black leading-relaxed space-y-4">
                  
                  <div className="mt-6">
                    <h3 className="text-xl font-bold text-brand-black mb-3">3.1 Accommodations for Pregnancy, Childbirth, and Related Medical Conditions</h3>
                    <p>
                      Party Time Texas provides reasonable accommodations to independent contractors experiencing limitations related to pregnancy, childbirth, or related medical conditions. We are committed to complying with the federal Pregnant Workers Fairness Act (PWFA) and any applicable state or local laws offering additional protections.
                    </p>
                    <p>Examples of reasonable accommodations may include:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Additional break time for restroom use, meals, hydration, and rest.</li>
                      <li>Seating options allowing for sitting or standing as needed.</li>
                      <li>Schedule changes, part-time work, and paid and unpaid leave.</li>
                      <li>Flexible work hours to accommodate medical appointments and physical needs.</li>
                      <li>Closer parking spots to the workplace entrance.</li>
                      <li>Light duty.</li>
                      <li>Making existing facilities accessible or modifying the work environment.</li>
                      <li>Job restructuring.</li>
                      <li>Temporarily suspending one or more essential functions of the job.</li>
                      <li>Acquiring or modifying equipment, uniforms, or devices.</li>
                      <li>Adjusting or modifying examinations or policies.</li>
                    </ul>
                    <p>
                      If you require an accommodation, notify your designated company representative. In instances where the need for a particular accommodation is not obvious, you may be asked to provide:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>The reason an accommodation is needed;</li>
                      <li>A description of the proposed accommodation; and</li>
                      <li>Information on how the accommodation will effectively address your limitations.</li>
                    </ul>
                    <p>Medical documentation will not be required in the following situations:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>When the limitation and need for an accommodation is obvious.</li>
                      <li>If the Company is already aware of the limitation due to previous disclosure.</li>
                      <li>If the requested accommodation is to do any of the following, as needed:</li>
                      <ul className="list-disc list-inside space-y-2 ml-8">
                        <li>Carry or keep water nearby and drink;</li>
                        <li>Take additional restroom breaks;</li>
                        <li>Sit, stand, or alternate between sitting and standing; or</li>
                        <li>Take breaks to eat and drink.</li>
                      </ul>
                      <li>For any lactation accommodations.</li>
                      <li>When a similar accommodation has been provided to other independent contractors without requiring documentation.</li>
                    </ul>
                    <p>
                      The Company will engage in an interactive process with you to identify suitable accommodation. While we strive to accommodate all requests, certain accommodations may not be provided if they would result in undue hardship to the Company. Factors considered include the nature and cost of the accommodation, the overall financial resources of the facility, and the impact on operations, including safety and efficiency.
                    </p>
                    <p>
                      If leave is provided as a reasonable accommodation, it may run concurrently with leave under the federal Family and Medical Leave Act (FMLA) and/or any other applicable leave as permitted by law.
                    </p>
                    <p>
                      The Company strictly prohibits retaliation against independent contractors who request or utilize an accommodation under this policy.
                    </p>
                  </div>

                  <div className="mt-6">
                    <h3 className="text-xl font-bold text-brand-black mb-3">3.2 Conflicts of Interest</h3>
                    <p>
                      Party Time Texas is concerned with conflicts of interest that create actual or potential job-related concerns, especially in the areas of confidentiality, client relations, safety, security, and morale. If there is any actual or potential conflict of interest between you and a competitor, supplier, distributor, or contractor to the Company, you must disclose it to your designated company representative. If an actual or potential conflict of interest is determined to exist, the Company will take such steps as it deems necessary to reduce or eliminate this conflict.
                    </p>
                  </div>

                  <div className="mt-6">
                    <h3 className="text-xl font-bold text-brand-black mb-3">3.3 Disability Accommodation</h3>
                    <p>
                      Party Time Texas complies with the Americans with Disabilities Act (ADA), the Pregnancy Discrimination Act, and all applicable state and local fair contracted services practices laws, and is committed to providing equal contracted services opportunities to qualified individuals with disabilities, including disabilities related to pregnancy, childbirth, and related conditions. Consistent with this commitment, the Company will provide reasonable accommodation to otherwise qualified individuals where appropriate to allow the individual to perform the essential functions of the job, unless doing so would create an undue hardship on the business.
                    </p>
                    <p>
                      If you require an accommodation because of your disability, it is your responsibility to notify your designated company representative. You may be asked to include relevant information such as:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>The reason you need an accommodation.</li>
                      <li>A description of the proposed accommodation.</li>
                      <li>How the accommodation will help you perform the essential functions of your job.</li>
                    </ul>
                    <p>
                      After receiving your request, the Company will engage in an interactive dialogue with you to determine the precise limitations of your disability and explore potential reasonable accommodations that could overcome those limitations. Where appropriate, we may need your permission to obtain additional information from your medical provider. All medical information received by the Company in connection with a request for accommodation will be treated as confidential.
                    </p>
                    <p>
                      The Company encourages you to suggest specific reasonable accommodations that you believe would allow you to perform your job. However, the Company is not required to make the specific accommodation requested by you and may provide an alternative accommodation, to the extent any reasonable accommodation can be made without imposing an undue hardship on the Company.
                    </p>
                    <p>
                      Where state or local law provides greater protections to independent contractors than federal law, the Company will apply the law that provides the greatest benefit to independent contractors.
                    </p>
                    <p>
                      The Company will not discriminate or retaliate against independent contractors for requesting an accommodation.
                    </p>
                  </div>

                  <div className="mt-6">
                    <h3 className="text-xl font-bold text-brand-black mb-3">3.5 Contracted Services of Relatives and Friends</h3>
                    <p>
                      We will not employ relatives or friends in circumstances where actual or potential conflicts may arise that could compromise supervision, safety, confidentiality, security, and morale at Party Time Texas. It is your obligation to inform the Company of any such potential conflict so we can determine how best to respond to the specific situation.
                    </p>
                  </div>

                  <div className="mt-6">
                    <h3 className="text-xl font-bold text-brand-black mb-3">3.6 S Service Descriptions</h3>
                    <p>
                      Work Orders, prepared by the Company, provide the details for the services to be rendered by the Contractor for each event, or a series of events.  On occasion, the Company may need to revise service descriptions, which would then be issued through a Work Order modification, which would then need to be accepted by the Contractor.
                    </p>
                  </div>

                  <div className="mt-6">
                    <h3 className="text-xl font-bold text-brand-black mb-3">3.8 Religious Accommodation</h3>
                    <p>
                      Party Time Texas recognizes the diversity of religious beliefs and is committed to providing equal contracted services opportunities to all independent contractors, regardless of their religious beliefs and practices or lack thereof. Consistent with this commitment, the Company complies with Title VII of the Civil Rights Act of 1964 and all applicable state and local laws that prohibit contracted services discrimination on the basis of religion. The Company will reasonably accommodate the sincerely held religious beliefs of independent contractors if the accommodations would resolve a conflict between the individual&apos;s religious belief or practice and a work requirement, unless doing so would create an undue hardship.
                    </p>
                    <p className="font-semibold mt-4">Requesting a Religious Accommodation</p>
                    <p>
                      If you need an accommodation because of your religious beliefs or practices, make the request with your designated company representative or Human Resources. You may be asked to include relevant information such as:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>A description of the proposed accommodation.</li>
                      <li>The reason you need the accommodation.</li>
                      <li>How the accommodation will help resolve the conflict between your religious beliefs or practices (or lack thereof) and your work requirements.</li>
                    </ul>
                    <p>
                      After receiving your request, the Company will engage in an interactive dialogue with you to explore potential accommodations that could resolve the conflict between your religious beliefs or practices and work requirements. The Company encourages you to suggest specific reasonable accommodations. However, the Company is not required to make the specific accommodation requested by you and may provide an alternative accommodation, to the extent any reasonable accommodation can be made without imposing an undue hardship on the Company.
                    </p>
                    <p>
                      The Company will not discriminate or retaliate against independent contractors who, in good faith, request a religious accommodation under this policy.
                    </p>
                  </div>

                  <div className="mt-6">
                    <h3 className="text-xl font-bold text-brand-black mb-3">3.9 Training Program</h3>
                    <p>
                      In most cases, and for most departments, training independent contractors is done on an individual basis by the department manager. Even if you have had previous experience in the specified functions of your job duties, it is necessary for you to learn our specific procedures, as well as the responsibilities of the specific position. If you ever feel you require additional training, consult your designated company representative.
                    </p>
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
              Party Time Texas 2025 • Company Policy & Guidelines
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

