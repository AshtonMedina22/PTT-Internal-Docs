'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function TermsPage() {
  const [activeSection, setActiveSection] = useState('')

  const sections = [
    { id: 'introduction', title: 'Introduction' },
    { id: 'welcome', title: 'Welcome' },
    { id: 'contracted-services', title: '1.2 Independent Contracted Services' },
    { id: 'introductory-policies', title: '2.0 Introductory Language and Policies' },
    { id: 'hiring-orientation', title: '3.0 Hiring and Orientation Policies' },
    { id: 'compensation-hour', title: '4.0 Compensation and Hour Policies' },
    { id: 'performance-discipline', title: '5.0 Performance, Discipline, Layoff, and Termination' },
    { id: 'general-policies', title: '6.0 General Policies' },
    { id: 'safety-loss', title: '8.0 Safety and Loss Prevention' },
    { id: 'trade-secrets', title: '9.0 Trade Secrets and Inventions' },
    { id: 'closing', title: '10.0 Closing Statement' },
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
      {/* Header with Home button */}
      <header className="sticky top-0 z-50 bg-brand-white border-b-2 border-brand-gray shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-end">
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
          <aside className="lg:w-64 lg:sticky lg:top-20 lg:h-fit">
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
                <p className="text-brand-gray text-sm mb-2">Independent Contractor Company Policy & Guidelines</p>
                <p className="text-brand-gray text-sm mb-4">Attachment 1 – Independent Contractor Company Policy & Guidelines</p>
                <h1 className="text-4xl md:text-5xl font-bold text-brand-black mb-4">
                  Terms & Conditions
                </h1>
              </div>

              {/* Introduction */}
              <section id="introduction" className="mb-12 scroll-mt-24">
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

              {/* Welcome */}
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
                  <p>We wish you success in your contracted services here at Party Time Texas!</p>
                  <div className="mt-6">
                    <p className="mb-2">All the best,</p>
                    <p className="font-semibold">Aaron Sheets, COO</p>
                    <p className="font-semibold">Party Time Texas</p>
                  </div>
                </div>
              </section>

              {/* 1.2 Independent Contracted Services */}
              <section id="contracted-services" className="mb-12 scroll-mt-24">
                <h2 className="text-2xl md:text-3xl font-bold text-brand-black mb-4 border-b-2 border-brand-gold pb-2">
                  1.2 Independent Contracted Services
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

              {/* 2.0 Introductory Language and Policies */}
              <section id="introductory-policies" className="mb-12 scroll-mt-24">
                <h2 className="text-2xl md:text-3xl font-bold text-brand-black mb-4 border-b-2 border-brand-gold pb-2">
                  2.0 Introductory Language and Policies
                </h2>
                
                <div className="ml-4 space-y-8">
                  {/* 2.1 About the Company */}
                  <div>
                    <h3 className="text-xl font-bold text-brand-black mb-3 mt-6">2.1 About the Company</h3>
                    <div className="prose prose-lg max-w-none text-brand-black leading-relaxed space-y-4">
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
                        Under Olde Glory Entertainment&apos;s leadership, Party Time Texas is expanding its service offerings, reaching a broader client base, and delivering an even stronger value proposition.
                      </p>
                      <p>
                        The company remains committed to exceeding expectations through high-energy entertainment, seamless event coordination, and a personalized approach to every celebration.
                      </p>
                      <p>Today, Party Time Texas provides a full spectrum of event services, including:</p>
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
                  </div>

                  {/* 2.2 Company Facilities */}
                  <div>
                    <h3 className="text-xl font-bold text-brand-black mb-3 mt-6">2.2 Company Facilities</h3>
                    <div className="prose prose-lg max-w-none text-brand-black leading-relaxed space-y-4">
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
                  </div>

                  {/* 2.3 Ethics Code */}
                  <div>
                    <h3 className="text-xl font-bold text-brand-black mb-3 mt-6">2.3 Ethics Code</h3>
                    <div className="prose prose-lg max-w-none text-brand-black leading-relaxed space-y-4">
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
                  </div>

                  {/* 2.4 Mission, Vision and Values Statements */}
                  <div>
                    <h3 className="text-xl font-bold text-brand-black mb-3 mt-6">2.4 Mission, Vision and Values Statements</h3>
                    <div className="prose prose-lg max-w-none text-brand-black leading-relaxed space-y-4">
                      <p><span className="font-semibold">Our Mission:</span> To inspire and strengthen communities through collaboration, connection, and celebration.</p>
                      <p><span className="font-semibold">Our Vision:</span> To drive community, business, and individual growth through unity of purpose and celebration.</p>
                      <p><span className="font-semibold">Our Values:</span> ROAD to Inspiration</p>
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li><span className="font-semibold">Results:</span> Focus on outcomes and accomplishments, not efforts or intentions</li>
                        <li><span className="font-semibold">Ownership:</span> Take accountability of actions, outcomes, impact</li>
                        <li><span className="font-semibold">Alignment:</span> Goals, actions, communication, and decisions towards shared purpose</li>
                        <li><span className="font-semibold">Discipline:</span> Commitment to consistency, focus and excellence</li>
                        <li><span className="font-semibold">Transparency:</span> Open, honest, and clear in communications and actions</li>
                        <li><span className="font-semibold">Inspiration:</span> Energy, creativity, purpose in self and others</li>
                      </ul>
                      <p><span className="font-semibold">Tagline:</span> Collaboration, Connection, and Celebration</p>
                    </div>
                  </div>

                  {/* 2.5 Our Organization */}
                  <div>
                    <h3 className="text-xl font-bold text-brand-black mb-3 mt-6">2.5 Our Organization</h3>
                    
                    <div className="ml-4 space-y-6">
                      <div>
                        <h4 className="text-lg font-bold text-brand-black mb-2">2.5.1 Leadership Team</h4>
                        <div className="prose prose-lg max-w-none text-brand-black leading-relaxed space-y-2">
                          <p><span className="font-semibold">CEO (Chief Executive Officer)</span> - The CEO oversees the company&apos;s overall direction, ensuring alignment with business goals and strategic objectives.</p>
                          <p><span className="font-semibold">COO (Chief Operating Officer)</span> - The COO manages day-to-day operations and ensures the efficiency of internal processes. They work closely with departments to ensure operational goals align with strategic priorities.</p>
                          <p><span className="font-semibold">CFO (Chief Financial Officer)</span> - The CFO manages the company&apos;s financial health, overseeing budgeting, financial reporting, and cost control. They play a key role in maintaining profitability and operational sustainability.</p>
                          <p><span className="font-semibold">CTO (Chief Technology Officer)</span> - The CTO leads the technology strategy and innovation, ensuring the company stays ahead with technological advancements and maintains efficient systems.</p>
                        </div>
                      </div>

                      <div>
                        <h4 className="text-lg font-bold text-brand-black mb-2">2.5.2 Core Departments</h4>
                        <p className="mb-3">Each department has a leadership role (Director or VP) that ensures seamless communication and clear delegation of responsibilities.</p>
                        <p className="mb-3 font-semibold">Below are the core departments:</p>
                        
                        <div className="space-y-4 ml-4">
                          <div>
                            <p className="font-semibold mb-1">Sales and Marketing</p>
                            <p className="ml-4 mb-2"><span className="font-semibold">VP of Sales & Marketing</span> - Responsible for driving the company&apos;s sales growth, marketing initiatives, and client acquisition strategies.</p>
                            <p className="ml-4 mb-1"><span className="font-semibold">Communication:</span> Regular meetings between sales and marketing teams to ensure alignment on campaigns, client feedback, and lead generation.</p>
                            <p className="ml-4 mb-1"><span className="font-semibold">Workflow:</span> Collaboration on content creation, lead nurturing, and conversion strategies.</p>
                            <p className="ml-4 mb-1"><span className="font-semibold">Quality Standards:</span> Client satisfaction is prioritized by maintaining high standards for communication and delivering tailored marketing messages.</p>
                          </div>

                          <div>
                            <p className="font-semibold mb-1">Product Development and R&D</p>
                            <p className="ml-4 mb-2"><span className="font-semibold">VP of Product Development</span> - Oversees the design, development, and launch of new products. They ensure that the products meet the company&apos;s high-quality standards and meet client needs.</p>
                            <p className="ml-4 mb-1"><span className="font-semibold">Communication:</span> Close collaboration with the sales and client service teams for market insights. Regular updates to leadership on product progress.</p>
                            <p className="ml-4 mb-1"><span className="font-semibold">Workflow:</span> Clear stages for product development, from conceptualization to production, involving various teams (designers, engineers, quality control).</p>
                            <p className="ml-4 mb-1"><span className="font-semibold">Quality Standards:</span> Product testing and revisions ensure the highest level of quality before launch.</p>
                          </div>

                          <div>
                            <p className="font-semibold mb-1">Operations and Client Service</p>
                            <p className="ml-4 mb-2"><span className="font-semibold">Director of Operations</span> - Manages the supply chain, logistics, and client service operations. Ensure smooth and efficient daily operations and that client concerns are addressed promptly.</p>
                            <p className="ml-4 mb-1"><span className="font-semibold">Communication:</span> Real-time updates between client service reps and operations teams to resolve issues quickly.</p>
                            <p className="ml-4 mb-1"><span className="font-semibold">Workflow:</span> Efficient handling of client inquiries, order fulfillment, and inventory management.</p>
                            <p className="ml-4 mb-1"><span className="font-semibold">Quality Standards:</span> Monitoring response times and client satisfaction metrics. Regular training for client service agents to uphold company values.</p>
                          </div>

                          <div>
                            <p className="font-semibold mb-1">Human Resources (HR)</p>
                            <p className="ml-4 mb-2"><span className="font-semibold">HR Director</span> - Manages recruitment, independent contractor engagement, compliance, and performance management. HR ensures a healthy work culture and facilitates independent contractor development programs.</p>
                            <p className="ml-4 mb-1"><span className="font-semibold">Communication:</span> Clear communication channels for independent contractor concerns, feedback, and performance reviews.</p>
                            <p className="ml-4 mb-1"><span className="font-semibold">Workflow:</span> Streamlined onboarding, performance evaluation, and training programs.</p>
                            <p className="ml-4 mb-1"><span className="font-semibold">Quality Standards:</span> Regular independent contractor surveys and performance reviews to maintain a positive workplace culture.</p>
                          </div>

                          <div>
                            <p className="font-semibold mb-1">Finance and Accounting</p>
                            <p className="ml-4 mb-2"><span className="font-semibold">VP of Finance</span> - Responsible for all financial activities, including managing the company&apos;s budget, forecasts, accounting records, and tax obligations.</p>
                            <p className="ml-4 mb-1"><span className="font-semibold">Communication:</span> Regular updates to the leadership team on financial performance.</p>
                            <p className="ml-4 mb-1"><span className="font-semibold">Workflow:</span> A structured approach to financial reporting, budgeting, and auditing.</p>
                            <p className="ml-4 mb-1"><span className="font-semibold">Quality Standards:</span> High standards for accuracy in reporting, compliance with financial regulations, and forecasting precision.</p>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="text-lg font-bold text-brand-black mb-2">2.5.2 Cross-Departmental Collaboration</h4>
                        <div className="prose prose-lg max-w-none text-brand-black leading-relaxed space-y-2">
                          <p><span className="font-semibold">Project Teams:</span> Depending on the project, members from different departments (sales, marketing, product development, etc.) are selected to ensure comprehensive insights and efficient execution.</p>
                          <p><span className="font-semibold">Team Meetings:</span> Regular interdepartmental meetings ensure everyone is aligned on company goals, deadlines, and performance expectations.</p>
                          <p><span className="font-semibold">Communication Tools:</span> The company uses project management software to track tasks, share updates, and ensure clarity.</p>
                        </div>
                      </div>

                      <div>
                        <h4 className="text-lg font-bold text-brand-black mb-2">2.5.3 Workflow and Quality Standards</h4>
                        <div className="prose prose-lg max-w-none text-brand-black leading-relaxed space-y-2">
                          <p><span className="font-semibold">Clear Reporting Lines:</span> Every department head reports directly to the executive team, ensuring a clear flow of information and accountability.</p>
                          <p><span className="font-semibold">Performance Metrics:</span> Each department is assigned key performance indicators (KPIs) to ensure that the business remains on track to meet its strategic goals.</p>
                          <p><span className="font-semibold">Continuous Improvement:</span> There is a focus on continuous improvement, with regular assessments of processes to identify areas for optimization.</p>
                          <p>Independent Contractors are encouraged to propose suggestions for improving workflows and maintaining high-quality standards.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* 2.6 Revisions to Company Policy & Guidelines */}
                  <div>
                    <h3 className="text-xl font-bold text-brand-black mb-3 mt-6">2.6 Revisions to Company Policy & Guidelines</h3>
                    <div className="prose prose-lg max-w-none text-brand-black leading-relaxed space-y-4">
                      <p>
                        This Company Policy & Guidelines is our attempt to keep you informed of the terms and conditions of your contracted services, including Party Time Texas policies and procedures. The Company Policy & Guidelines is not a contract. The Company reserves the right to revise, add, or delete from this Company Policy & Guidelines as we determine to be in our best interest, except the policy concerning per the terms of the service agreement contracted services.
                      </p>
                      <p>
                        When changes are made to the policies and guidelines in this Company Policy & Guidelines, we will communicate them promptly, either in a written amendment or supplement to the Company Policy & Guidelines.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Due to length, continuing with remaining sections... */}
              {/* I'll continue with the remaining major sections in the next part of the file */}
              
              {/* 3.0 Hiring and Orientation Policies */}
              <section id="hiring-orientation" className="mb-12 scroll-mt-24">
                <h2 className="text-2xl md:text-3xl font-bold text-brand-black mb-4 border-b-2 border-brand-gold pb-2">
                  3.0 Hiring and Orientation Policies
                </h2>
                <div className="ml-4 space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-brand-black mb-3 mt-6">3.1 Accommodations for Pregnancy, Childbirth, and Related Medical Conditions</h3>
                    <div className="prose prose-lg max-w-none text-brand-black leading-relaxed space-y-4">
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
                        <li>If the requested accommodation is to do any of the following, as needed:
                          <ul className="list-disc list-inside space-y-1 ml-6">
                            <li>Carry or keep water nearby and drink;</li>
                            <li>Take additional restroom breaks;</li>
                            <li>Sit, stand, or alternate between sitting and standing; or</li>
                            <li>Take breaks to eat and drink.</li>
                          </ul>
                        </li>
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
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-brand-black mb-3 mt-6">3.2 Conflicts of Interest</h3>
                    <div className="prose prose-lg max-w-none text-brand-black leading-relaxed space-y-4">
                      <p>
                        Party Time Texas is concerned with conflicts of interest that create actual or potential job-related concerns, especially in the areas of confidentiality, client relations, safety, security, and morale. If there is any actual or potential conflict of interest between you and a competitor, supplier, distributor, or contractor to the Company, you must disclose it to your designated company representative. If an actual or potential conflict of interest is determined to exist, the Company will take such steps as it deems necessary to reduce or eliminate this conflict.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-brand-black mb-3 mt-6">3.3 Disability Accommodation</h3>
                    <div className="prose prose-lg max-w-none text-brand-black leading-relaxed space-y-4">
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
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-brand-black mb-3 mt-6">3.5 Contracted Services of Relatives and Friends</h3>
                    <div className="prose prose-lg max-w-none text-brand-black leading-relaxed space-y-4">
                      <p>
                        We will not employ relatives or friends in circumstances where actual or potential conflicts may arise that could compromise supervision, safety, confidentiality, security, and morale at Party Time Texas. It is your obligation to inform the Company of any such potential conflict so we can determine how best to respond to the specific situation.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-brand-black mb-3 mt-6">3.6 S Service Descriptions</h3>
                    <div className="prose prose-lg max-w-none text-brand-black leading-relaxed space-y-4">
                      <p>
                        Work Orders, prepared by the Company, provide the details for the services to be rendered by the Contractor for each event, or a series of events.  On occasion, the Company may need to revise service descriptions, which would then be issued through a Work Order modification, which would then need to be accepted by the Contractor.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-brand-black mb-3 mt-6">3.8 Religious Accommodation</h3>
                    <div className="prose prose-lg max-w-none text-brand-black leading-relaxed space-y-4">
                      <p>
                        Party Time Texas recognizes the diversity of religious beliefs and is committed to providing equal contracted services opportunities to all independent contractors, regardless of their religious beliefs and practices or lack thereof. Consistent with this commitment, the Company complies with Title VII of the Civil Rights Act of 1964 and all applicable state and local laws that prohibit contracted services discrimination on the basis of religion. The Company will reasonably accommodate the sincerely held religious beliefs of independent contractors if the accommodations would resolve a conflict between the individual&apos;s religious belief or practice and a work requirement, unless doing so would create an undue hardship.
                      </p>
                      <p className="font-semibold">Requesting a Religious Accommodation</p>
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
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-brand-black mb-3 mt-6">3.9 Training Program</h3>
                    <div className="prose prose-lg max-w-none text-brand-black leading-relaxed space-y-4">
                      <p>
                        In most cases, and for most departments, training independent contractors is done on an individual basis by the department manager. Even if you have had previous experience in the specified functions of your job duties, it is necessary for you to learn our specific procedures, as well as the responsibilities of the specific position. If you ever feel you require additional training, consult your designated company representative.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Continue with remaining sections - this is getting very long, so I'll continue in the next response if needed, but let me try to complete it all in one file */}
              
              {/* 4.0 Compensation and Hour Policies */}
              <section id="compensation-hour" className="mb-12 scroll-mt-24">
                <h2 className="text-2xl md:text-3xl font-bold text-brand-black mb-4 border-b-2 border-brand-gold pb-2">
                  4.0 Compensation and Hour Policies
                </h2>
                <div className="ml-4 space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-brand-black mb-3 mt-6">4.1 Attendance</h3>
                    <div className="prose prose-lg max-w-none text-brand-black leading-relaxed space-y-4">
                      <p>
                        The Company requires regular and punctual attendance by independent contractors, as dictated by Work Orders. You are expected to arrive at the workplace on time and ready to perform your job. Failure to comply with this policy may result in penalties (fines) and disciplinary action, up to and including termination of the Independent Contractor Agreement.
                      </p>
                      <p>
                        If you are not going to arrive at work or return from a break on time, you must notify your designated company representative as soon as possible but at least 4 hours before your scheduled start time. If your designated company representative is not available, contact another member of management.
                      </p>
                      <p>
                        If you must miss work due to an emergency or other unexpected circumstance, notify your designated company representative or if your designated company representative is not available, contact another member of management as soon as possible. Notice should include the expected duration of your absence and your expected time or date of return. You may be required to provide documentation of the need for the absence, as permitted by applicable law.
                      </p>
                      <p>
                        If you become ill during your scheduled work hours and need to leave before the end of your shift, notify your designated company representative immediately. If you are unable to perform your job at an acceptable level due to illness, you may be sent home until you are well enough to work.
                      </p>
                      <p>
                        Absences will be considered unexcused if you are absent from work during scheduled work hours without permission and do not receive retroactive approval. This policy applies to all absences, including full- or partial-day absences, late arrivals, and early departures.
                      </p>
                      <p>
                        Planned absences, such as vacations or medical appointments, should be arranged as far in advance as possible, so that Work Orders can be issued or modified as early as possible.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-brand-black mb-3 mt-6">4.2 Business & Travel Expenses</h3>
                    <div className="prose prose-lg max-w-none text-brand-black leading-relaxed space-y-4">
                      <p>
                        All Contractor incurred expenses associated with the performance of a Work Order must be included in the compensation of the accepted Work Order.  Any additional compensation must be approved by the Company and the Contractor as a Work Order Modification prior to the Contractor incurring the expense.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-brand-black mb-3 mt-6">4.3 Direct Deposit</h3>
                    <div className="prose prose-lg max-w-none text-brand-black leading-relaxed space-y-4">
                      <p>
                        The Company encourages all independent contractors to enroll in direct deposit. If you would like to take advantage of direct deposit, ask the designated Company representative.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-brand-black mb-3 mt-6">4.6 Compensation Deductions</h3>
                    <div className="prose prose-lg max-w-none text-brand-black leading-relaxed space-y-4">
                      <p>
                        Party Time Texas reserves the right to withhold compensation of a Work Order for any Services or Work Product that are incomplete, unsatisfactory, not in compliance with the Work Order, until such deficiencies are remedied to the Company&apos;s reasonable satisfaction. Additionally, the Company may deduct penalties (fines) from the compensation of a Work Order based on the terms of the Work Orders.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-brand-black mb-3 mt-6">4.7 Recording Hours</h3>
                    <div className="prose prose-lg max-w-none text-brand-black leading-relaxed space-y-4">
                      <p>
                        Party Time Texas requires independent contractors to accurately report their work hours, services and obligations performed on Work Orders as dictated by the Word Order.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-brand-black mb-3 mt-6">4.10 Workday/Workweek</h3>
                    <div className="prose prose-lg max-w-none text-brand-black leading-relaxed space-y-4">
                      <p>
                        Party Time Texas&apos;s office hours run from Monday to Friday and begins at 9:00 a.m. and ends at 5:00 p.m.
                      </p>
                      <p>
                        Due to the nature of our business, employees and Independent Contractors are required to work varying hours depending on our client&apos;s needs.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* 5.0 Performance, Discipline, Layoff, and Termination */}
              <section id="performance-discipline" className="mb-12 scroll-mt-24">
                <h2 className="text-2xl md:text-3xl font-bold text-brand-black mb-4 border-b-2 border-brand-gold pb-2">
                  5.0 Performance, Discipline, Layoff, and Termination
                </h2>
                <div className="ml-4 space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-brand-black mb-3 mt-6">5.1 Criminal Activity/Arrests</h3>
                    <div className="prose prose-lg max-w-none text-brand-black leading-relaxed space-y-4">
                      <p>
                        Party Time Texas will report all criminal activity in accordance with applicable law. Involvement in criminal activity while contracted by the Company, whether on or off Company property, may result in penalties (fines) and disciplinary action including suspension or termination of contracted services.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-brand-black mb-3 mt-6">5.2 Penalties (fines) and disciplinary Process</h3>
                    <div className="prose prose-lg max-w-none text-brand-black leading-relaxed space-y-4">
                      <p>
                        Violation of Party Time Texas&apos;s policies or procedures may result in penalties (fines) and disciplinary action, including up to termination of contracted services.
                      </p>
                      <p>
                        The Company encourages a system of progressive discipline depending on the type of prohibited conduct. However, the Company is not required to engage in progressive discipline and may discipline or terminate independent contractors who violate the rules of conduct, or where the quality or value of their work fails to meet expectations at any time. Again, any attempt at progressive discipline does not imply that your contracted services is anything other than on an &quot;per the terms of the service agreement&quot; basis consistent with applicable law.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-brand-black mb-3 mt-6">5.5 Open Door/Conflict Resolution Process</h3>
                    <div className="prose prose-lg max-w-none text-brand-black leading-relaxed space-y-4">
                      <p>
                        Party Time Texas strives to provide a comfortable, productive, legal, and ethical work environment. To this end, we want you to bring any problems, concerns, or grievances you have about the work place to the attention of your designated company representative and, if necessary, to upper-level management. To help manage conflict resolution we have instituted the following problem solving procedure:
                      </p>
                      <p>
                        If you believe there is inappropriate conduct or activity on the part of the Company, management, its employees, independent contractors, vendors, clients, or any other persons or entities related to the Company, bring your concerns to the attention of your designated company representative at a time and place that will allow the person to properly listen to your concern. Most problems can be resolved informally through dialogue between you and your immediate designated company representative. If you have already brought this matter to the attention of your designated company representative before and do not believe you have received a sufficient response, or if you believe that person is the source of the problem, present your concerns to Human Resources or upper-level management. Describe the problem, those person(s) involved in the problem, efforts you have made to resolve the problem, and any suggested solution you may have.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-brand-black mb-3 mt-6">5.11 Standards of Conduct</h3>
                    <div className="prose prose-lg max-w-none text-brand-black leading-relaxed space-y-4">
                      <p>
                        Party Time Texas wishes to create a work environment that promotes job satisfaction, respect, responsibility, integrity, and value for all our employees, independent contractors, clients, and other stakeholders. We all share the responsibility of improving the quality of our work environment. By deciding to work with the Company, you agree to follow our rules.
                      </p>
                      <p>
                        While it is impossible to list everything that could be considered misconduct in the workplace, what is outlined here is a list of commonsense infractions that could result in discipline, up to and including immediate termination of contracted services. This policy is not intended to limit our right to discipline or discharge independent contractors for any reason permitted by law.
                      </p>
                      <p>Examples of inappropriate conduct include:</p>
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>Violation of the policies and procedures set forth in this Company Policy & Guidelines or agreed to directly between Company and independent contractors.</li>
                        <li>Possessing, using, distributing, selling, or negotiating the sale of illegal drugs or other controlled substances.</li>
                        <li>Being under the influence of alcohol during working hours on Company property (including in Company vehicles), or on Company business.</li>
                        <li>Inaccurate reporting of the hours worked, and services performed.</li>
                        <li>Providing knowingly inaccurate, incomplete, or misleading information when speaking on behalf of the Company or in the preparation of any contracted services-related documents including, but not limited to, job applications, personnel files, contracted services review, documents, intra-company communications, or expense records.</li>
                        <li>Taking or destroying Company property.</li>
                        <li>Possession of potentially hazardous or dangerous property (where not permitted) such as firearms, weapons, chemicals, etc., without prior authorization.</li>
                        <li>Fighting with, or harassment of any fellow independent contractor, employee, vendor, or client.</li>
                        <li>Disclosure of Company trade secrets and proprietary and confidential commercially sensitive information (e.g., financial or sales records/reports, marketing or business strategies/plans, product development information, client lists, patents, or trademarks) of the Company or its clients, contractors, suppliers, or vendors.</li>
                        <li>Refusal or failure to follow directions or to perform a requested or required job task.</li>
                        <li>Refusal or failure to follow safety rules and procedures.</li>
                        <li>Excessive tardiness or absences.</li>
                        <li>Smoking in non-designated areas.</li>
                        <li>Solicitation of employees or fellow independent contractors on Company premises during working hours.</li>
                        <li>Failure to dress according to Company policy.</li>
                        <li>Use of obscene or harassing (as defined by our EEO policy) language in the workplace.</li>
                        <li>Engaging in outside contracted services that interferes with your ability to perform your job at this Company.</li>
                        <li>Gambling on Company premises.</li>
                        <li>Lending keys or keycards to Company property to unauthorized persons.</li>
                      </ul>
                      <p>
                        Nothing in this policy is intended to modify the per the terms of the service agreement, contracted services status where per the terms of the service agreement is not prohibited by state law.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* 6.0 General Policies - This section has many subsections */}
              <section id="general-policies" className="mb-12 scroll-mt-24">
                <h2 className="text-2xl md:text-3xl font-bold text-brand-black mb-4 border-b-2 border-brand-gold pb-2">
                  6.0 General Policies
                </h2>
                <div className="ml-4 space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-brand-black mb-3 mt-6">6.1 Authorization for Use of Personal Vehicle</h3>
                    <div className="prose prose-lg max-w-none text-brand-black leading-relaxed space-y-4">
                      <p>
                        All independent contractors required to operate a motor vehicle as part of their contracted services duties must maintain a valid driver&apos;s license, acceptable driving record, and appropriate insurance coverage. Party Time Texas may run a motor vehicle department check to determine your driving record. It is your responsibility to provide a copy of your current driver&apos;s license and insurance coverage for your contractor file as requested by the Company. Any changes in your driving record, including, but not limited to, driving infractions or changes to your insurance policy, must be reported to the Company.
                      </p>
                      <p>If you use your personal vehicle in the course and scope of contracted services, you may not operate such vehicle while:</p>
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>Under the influence of drugs, alcohol, or any other substance that might impair your judgment or ability to drive; or</li>
                        <li>Texting, emailing, or otherwise using a cell phone or other handheld device without utilizing a hands-free device.</li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-brand-black mb-3 mt-6">6.3 Computer Security and Copying of Software</h3>
                    <div className="prose prose-lg max-w-none text-brand-black leading-relaxed space-y-4">
                      <p>
                        Software programs purchased and provided by Party Time Texas are to be used only for creating, researching, and processing materials for Company use. By using Company hardware, software, and networking systems you assume personal responsibility for their use and agree to comply with this policy and other applicable Company policies, as well as city, state, and federal laws and regulations.
                      </p>
                      <p>
                        All software acquired for or on behalf of the Company or developed by Company independent contractors or contract personnel on behalf of the Company, is and will be deemed Company property. It is the policy of the Company to respect all computer software rights and to adhere to the terms of all software licenses to which the Company is a party. Aaron Sheets, COO, is responsible for enforcing these guidelines.
                      </p>
                      <p>
                        You may not illegally duplicate any licensed software or related documentation.  unauthorized duplication of software may subject you and/or the Company to both civil and criminal penalties under the United States Copyright Act. To purchase software, obtain your manager&apos;s approval. All software acquired by the Company must be purchased through Aaron Sheets, COO.
                      </p>
                      <p>
                        You may not duplicate, copy, or give software to any outsiders including clients, contractors, clients, and others. You may use software on local area networks or on multiple machines only in accordance with applicable license agreements entered into by the Company.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-brand-black mb-3 mt-6">6.5 Employer Sponsored Social Events</h3>
                    <div className="prose prose-lg max-w-none text-brand-black leading-relaxed space-y-4">
                      <p>
                        Party Time Texas holds periodic social events for employees and independent contractors. Be advised that your attendance at these events is voluntary and does not constitute part of your work-related duties. Any exceptions to this policy must be in writing and signed by a designated company representative prior to the event.
                      </p>
                      <p>
                        Alcoholic beverages may be available at these events. If you choose to drink alcoholic beverages, you must do so in a responsible manner. Do not drink and drive. Instead, please call a taxi or appoint a designated driver.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-brand-black mb-3 mt-6">6.7 Nonsolicitation/Nondistribution Policy</h3>
                    <div className="prose prose-lg max-w-none text-brand-black leading-relaxed space-y-4">
                      <p>
                        Party Time Texas prioritizes a harmonious work environment that minimizes disruption to business operations and respects the focus of independent contractors, visitors, and others. Our nonsolicitation/nondistribution policy aims to ensure a balanced approach to interactions within the workplace.
                      </p>
                      <div className="ml-4 space-y-4">
                        <div>
                          <h4 className="text-lg font-bold text-brand-black mb-2">6.7.1 Solicitation</h4>
                          <p>
                            For the purposes of this policy, solicitation includes various activities such as selling items or services, seeking contributions, or seeking support for an organization. Solicitation, whether conducted verbally, in writing, or electronically, falls under this policy&apos;s scope.
                          </p>
                          <p>
                            During your assigned working hours, soliciting employees and other independent contractors is prohibited. Working hours refers to periods when either you or the individuals you intend to solicit are expected to be actively engaged in work-related activities. You are permitted to engage in solicitation during authorized nonworking times, such as breaks, provided that the recipients of the solicitation are also on nonworking time.
                          </p>
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-brand-black mb-2">6.7.2 Distribution</h4>
                          <p>
                            To ensure cleanliness, organization, and safety, the distribution of nonwork-related literature or items within working areas is prohibited at all times. Working areas do not include break/rest areas, lunchrooms, and parking lots. Electronic distribution of materials during work hours is also not allowed. Any literature that violates the Company&apos;s equal contracted services opportunity (EEO) and nonharassment policies is strictly prohibited.
                          </p>
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-brand-black mb-2">6.7.3 Statutory Rights and Communication</h4>
                          <p>
                            This policy is not meant to curtail the statutory rights of employees and independent contractors, including their right to discuss terms and conditions of contracted services. Open communication remains a vital part of our workplace culture.
                          </p>
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-brand-black mb-2">6.7.4 Reporting Violations</h4>
                          <p>
                            If you become aware of violations of this policy, report them to your designated company representative.
                          </p>
                          <p>
                            We appreciate your cooperation in maintaining a respectful and focused work environment.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-brand-black mb-3 mt-6">6.8 Off-Duty Use of Employer Property or Premises</h3>
                    <div className="prose prose-lg max-w-none text-brand-black leading-relaxed space-y-4">
                      <p>
                        You may not use Party Time Texas property for personal use during working time. You are responsible for returning Company property in good condition and repairing or replacing any property damaged as the result of personal use or as the result of negligence. This includes use of copy machines, computers, Company products, or office supplies for personal use without prior authorization.
                      </p>
                      <p>
                        It is Company policy to control off duty and nonworking hour use of Company facilities either for business or personal reasons. You are prohibited from using Company facilities during off duty or nonworking hours without the written consent of your designated company representative.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-brand-black mb-3 mt-6">6.9 Personal Appearance – REVIEW IN DETAIL</h3>
                    <div className="prose prose-lg max-w-none text-brand-black leading-relaxed space-y-4">
                      <p>
                        Your personal appearance reflects on the reputation, integrity, and public image of Party Time Texas. All independent contractors are required to report to work neatly groomed and dressed. You are expected to maintain personal hygiene habits that are generally accepted in the community, including clean clothing, good grooming and personal hygiene, and appropriate attire for the workplace and the work being performed. This may include wearing uniforms or protective safety clothing and equipment, depending upon the job. Use common sense and good judgment in determining what to wear to work.  Specific attire will be dictated per the terms of each Work Order.
                      </p>
                      <p>
                        Fragrant products, including but not limited to perfumes, colognes, and scented body lotions or hair products, should be used in moderation out of concern for others with sensitivities or allergies.
                      </p>
                      <p>
                        The Company, in accordance with applicable law, will reasonably accommodate independent contractors with disabilities or religious beliefs that make it difficult for them to comply fully with the personal appearance policy unless doing so would impose an undue hardship on the Company. Contact your designated company representative to request reasonable accommodation.
                      </p>
                      <p>
                        Failure to comply with the personal appearance standards may result in being sent home to groom or change clothes. Any violation may result in penalties (fines) and disciplinary action, up to and including termination of contracted services.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-brand-black mb-3 mt-6">6.10 Personal Cell Phone/Mobile Device Use</h3>
                    <div className="prose prose-lg max-w-none text-brand-black leading-relaxed space-y-4">
                      <p>
                        While Party Time Texas permits independent contractors to bring personal cell phones and other mobile devices (i.e. smart phones, tablets, laptops) into the workplace, you must not allow the use of such devices to interfere with your job duties or impact workplace safety and health.
                      </p>
                      <p>
                        Use of personal cell phones and mobile devices at work can be distracting and disruptive and cause a loss of productivity. Thus, you should primarily use such personal devices during nonworking time, such as break periods. During this time, use devices in a manner that is courteous to those around you. Outside of nonworking time, use of such devices should be minimal and limited to emergency use only. If you have a device that has a camera and/or audio/video recording capability, you are restricted from using those functions on Company property unless authorized in advance by management.
                      </p>
                      <p>
                        You are expected to comply with Company policies regarding the protection of confidential and proprietary information when using personal devices.
                      </p>
                      <p>
                        While operating a vehicle on work time, the Company requires that the driver&apos;s personal cell phone/mobile device to not be used. If you need to make or receive a phone call while driving, pull off the road to a safe location unless you have the correct hands-free equipment for the device that is in compliance with applicable state laws.
                      </p>
                      <p>
                        You may connect your personal device to the Company network or to Company equipment (computers, printers, etc.) if required for business purposes and prior approval has been provided.
                      </p>
                      <p>
                        You may have the opportunity to use your personal devices for work purposes. Before using a personal device for work-related purposes, you must obtain written authorization from Aaron Sheets, COO. The use of personal devices is limited to certain independent contractors and may be limited based on compatibility of technology. To ensure the security of Company information, additional software requirements (antivirus, firewall, VPN, etc.) may be required to be installed on the personal device. If you are authorized to use a personal device, you will receive a monthly stipend based on the estimated use of the device. If you obtain or currently have a plan that exceeds the monthly stipend, the Company will not be liable for the cost difference.
                      </p>
                      <p>
                        You will be subject to penalties (fines) and disciplinary action up to and including termination of contracted services for violation of this policy.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-brand-black mb-3 mt-6">6.11 Personal Data Changes</h3>
                    <div className="prose prose-lg max-w-none text-brand-black leading-relaxed space-y-4">
                      <p>
                        It is your obligation to provide Party Time Texas with your current contact information, including current mailing address and telephone number. You should also inform the Company of any changes to your information. To make changes to this information, contact designated company representative.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-brand-black mb-3 mt-6">6.12 Security</h3>
                    <div className="prose prose-lg max-w-none text-brand-black leading-relaxed space-y-4">
                      <p>
                        All independent contractors are responsible for helping to make Party Time Texas a secure work environment. Upon leaving work, lock all desks, lockers, and doors protecting valuable or sensitive material in your work area and report any lost or stolen keys, passes, or similar devices to your designated company representative immediately. Refrain from discussing specifics regarding Company security systems, alarms, passwords, etc. with those outside of the Company.
                      </p>
                      <p>
                        Immediately advise your designated company representative of any known or potential security risks and/or suspicious conduct of independent contractors, clients, or guests of the Company. Safety and security is the responsibility of all independent contractors and we rely on you to help us keep our premises secure.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-brand-black mb-3 mt-6">6.13 Social Media</h3>
                    <div className="prose prose-lg max-w-none text-brand-black leading-relaxed space-y-4">
                      <p>
                        Party Time Texas acknowledges that social media has become an integral part of modern life that provides us with unique opportunities to communicate and share information with others. However, we also want to educate independent contractors that their social media use can:
                      </p>
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>Pose risks to the Company&apos;s confidential and proprietary information, reputation, and brand;</li>
                        <li>Expose the Company to discrimination, harassment, and other claims; and</li>
                        <li>Jeopardize the Company&apos;s compliance with business rules and laws.</li>
                      </ul>
                      <p>
                        To minimize legal risks, avoid loss of productivity and distraction, and ensure that the Company&apos;s IT resources and communications systems are used appropriately, all independent contractors must abide by the following policy regarding social media use.
                      </p>
                      <p>
                        For purposes of this policy, social media refers to any means of posting content on the internet, including personal websites, social networking sites, blogs, chat rooms, and other online platforms, whether affiliated with the Company or not.
                      </p>
                      <div className="ml-4 space-y-4">
                        <div>
                          <h4 className="text-lg font-bold text-brand-black mb-2">6.13.1 Use Good Judgment</h4>
                          <p>
                            While the Company respects your right to personal expression, you should assume that anything you do on social media, whether on a business or personal account, could be viewed by a colleague, designated company representative, partner, supplier, competitor, investor, client, or potential client. As such, any social media activity, even from your personal account, reflects on the Company as well as on yourself. It is important to remember that anyone can see what you post (or what you posted five years ago).
                          </p>
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-brand-black mb-2">6.13.2 Guidelines for Posting on Social Media</h4>
                          <p>When posting:</p>
                          <ul className="list-disc list-inside space-y-2 ml-4">
                            <li>Protect trade secrets, intellectual property, and confidential information related to the Company.</li>
                            <li>Do not make statements that are maliciously false or defamatory or would constitute unlawful harassment or discrimination.</li>
                            <li>Do not make express or implied threats of violence.</li>
                            <li>Avoid linking personal accounts to the Company as an official source.</li>
                            <li>Respect copyright, trademark, and third-party rights.</li>
                            <li>If you identify yourself as an independent contractor of Party Time Texas on your personal account and are posting about the Company, make it clear that your views are your own and that you are not speaking on behalf of the Company.</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-brand-black mb-2">6.13.3 Using Social Media at Work</h4>
                          <p>
                            Do not use social media while on your work time, unless it is work related as authorized by your designated company representative or consistent with policies that cover equipment owned by the Company.
                          </p>
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-brand-black mb-2">6.13.4. Media Contacts</h4>
                          <p>
                            If you are not authorized to speak on behalf of the Company, do not speak to the media on behalf of the Company. Direct all media inquiries for official Company responses to designated Company representative.
                          </p>
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-brand-black mb-2">6.13.5 Retaliation</h4>
                          <p>
                            Retaliation against those reporting policy violations or cooperating in investigations is prohibited. Retaliatory actions may lead to penalties (fines) and disciplinary measures.
                          </p>
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-brand-black mb-2">6.13.6 Violations</h4>
                          <p>
                            Violations of this policy may result in discipline, up to and including termination.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-brand-black mb-3 mt-6">6.14 Suggestion Policy</h3>
                    <div className="prose prose-lg max-w-none text-brand-black leading-relaxed space-y-4">
                      <p>
                        At Party Time Texas, we welcome suggestions for continued improvement and welcome your ideas for better ways to do your job, produce or sell the products or services of our Company, or meet client and client needs. Discuss your ideas with your designated company representative or another member of the management team.
                      </p>
                      <p>
                        We also encourage you to offer any suggestions derived from seminars, magazines, or other outside sources of information you believe would add value to the Company.
                      </p>
                      <p>
                        Understand that any suggestions, innovations, inventions, or other matter created by you on work time or with Company tools or property are considered to be the property of the Company.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-brand-black mb-3 mt-6">6.16 Telephone Use</h3>
                    <div className="prose prose-lg max-w-none text-brand-black leading-relaxed space-y-4">
                      <p>
                        Party Time Texas phones are principally for work-related communications. Unless there is an emergency, limit telephone calls to business purposes only. Limit personal use of Company telephones to brief communications during rest periods where possible. Casual conversation with friends and relatives during working hours is strongly discouraged.
                      </p>
                      <p>
                        Telephone use is subject to the Use of Company Technology Policy.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-brand-black mb-3 mt-6">6.17 Third Party Disclosures</h3>
                    <div className="prose prose-lg max-w-none text-brand-black leading-relaxed space-y-4">
                      <p>
                        From time to time, Party Time Texas may become involved in news stories or potential or actual legal proceedings of various kinds. When that happens, lawyers, former employees and independent contractors, newspapers, law enforcement agencies, and other outside persons may contact our independent contractors to obtain information about the incident or the actual or potential lawsuit.
                      </p>
                      <p>
                        If you receive such a contact, you should not speak on behalf of the Company and should refer any call requesting the position of the Company to Arlan Sheets, CEO. If you have any questions about this policy or are not certain what to do when such a contact is made, contact Arlan Sheets, CEO.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-brand-black mb-3 mt-6">6.18 Use of Company Technology</h3>
                    <div className="prose prose-lg max-w-none text-brand-black leading-relaxed space-y-4">
                      <p>
                        This policy is intended to provide Party Time Texas independent contractors with the guidelines associated with the use of the Company information technology (IT) resources and communications systems.
                      </p>
                      <p>
                        This policy governs the use of all IT resources and communications systems owned by or available at the Company, and all use of such resources and systems when accessed using your own devices, including but not limited to:
                      </p>
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>Email systems and accounts.</li>
                        <li>Internet and intranet access.</li>
                        <li>Telephones and voicemail systems.</li>
                        <li>Printers, photocopiers, and scanners.</li>
                        <li>Fax machines, e-fax systems, and modems.</li>
                        <li>All other associated computer, network, and communications systems, hardware, peripherals, and software, including network key fobs and other devices.</li>
                        <li>Closed-circuit television (CCTV) and all other physical security systems and devices, including access key cards and fobs.</li>
                      </ul>
                      <div className="ml-4 space-y-4">
                        <div>
                          <h4 className="text-lg font-bold text-brand-black mb-2">6.18.1 General Provisions</h4>
                          <p>
                            Company IT resources and communications systems are to be used for business purposes only unless otherwise permitted under applicable law.
                          </p>
                          <p>
                            All content maintained in Company IT resources and communications systems are the property of the Company. Therefore, independent contractors should have no expectation of privacy in any message, file, data, document, facsimile, telephone conversation, social media post, conversation, or any other kind or form of information or communication transmitted to, received, or printed from, or stored or recorded on Company electronic information and communications systems.
                          </p>
                          <p>
                            The Company reserves the right to monitor, intercept, and/or review all data transmitted, received, or downloaded over Company IT resources and communications systems in accordance with applicable law. Any individual who is given access to the system is hereby given notice that the Company will exercise this right periodically, without prior notice and without prior consent.
                          </p>
                          <p>
                            The interests of the Company in monitoring and intercepting data include, but are not limited to: protection of Company trade secrets, proprietary information, and similar confidential commercially-sensitive information (i.e. financial or sales records/reports, marketing or business strategies/plans, product development, client lists, patents, trademarks, etc.); managing the use of the computer system; and/or assisting independent contractors in the management of electronic data during periods of absence.
                          </p>
                          <p>
                            You should not interpret the use of password protection as creating a right or expectation of privacy, nor should you have a right or expectation of privacy regarding the receipt, transmission, or storage of data on Company IT resources and communications systems.
                          </p>
                          <p>
                            Do not use Company IT resources and communications systems for any matter that you would like to be kept private or confidential.
                          </p>
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-brand-black mb-2">6.18.2 Violations</h4>
                          <p>
                            If you violate this policy, you will be subject to corrective action, up to and including termination of contracted services. If necessary, the Company will also advise law enforcement officials of any illegal conduct.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-brand-black mb-3 mt-6">6.19 Use of Employer Vehicles</h3>
                    <div className="prose prose-lg max-w-none text-brand-black leading-relaxed space-y-4">
                      <p>
                        Company vehicles are to be used for Party Time Texas business only. Unless the use of the vehicle has been approved for personal use, personal or outside business use is strictly prohibited.
                      </p>
                      <p>
                        If you drive a Company vehicle, all infractions or violations while driving the vehicle and all restrictions, suspensions, or revocations against your driver&apos;s license must be immediately reported to your designated company representative.
                      </p>
                      <p>
                        When a Company vehicle cannot be operated, is unsafe for use, or has been damaged, notify your designated company representative immediately.
                      </p>
                      <p>
                        As the driver of a Company vehicle, you are responsible for the vehicle while in your charge and must not permit unauthorized persons to drive it. You are also responsible for keeping the vehicle clean and uncluttered.
                      </p>
                      <p>
                        You may not operate a motor vehicle while under the influence of alcohol, a chemical substance, or other substances that can impair judgment. You may not operate a motor vehicle while texting, emailing, or otherwise using a cell phone or other handheld device without utilizing hands-free technology.
                      </p>
                      <p>
                        Multiple driving moving violations that appear on the annual state department of motor vehicle check may result in suspension of rights to drive a Company vehicle. Suspension of rights will continue until one year has passed with no infractions. If there are persistent and ongoing problems with driving infractions, and driving a vehicle is a part of successful execution of job responsibilities, you may be terminated.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* 8.0 Safety and Loss Prevention */}
              <section id="safety-loss" className="mb-12 scroll-mt-24">
                <h2 className="text-2xl md:text-3xl font-bold text-brand-black mb-4 border-b-2 border-brand-gold pb-2">
                  8.0 Safety and Loss Prevention
                </h2>
                <div className="ml-4 space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-brand-black mb-3 mt-6">8.1 Drug and Alcohol Policy</h3>
                    <div className="prose prose-lg max-w-none text-brand-black leading-relaxed space-y-4">
                      <p>
                        Party Time Texas is committed to providing a safe, healthy, and productive work environment. Consistent with this commitment, it is the intent of the Company to maintain a drug and alcohol-free workplace. Being under the influence of alcohol, illegal drugs (as classified under federal, state, or local laws), or other impairing substances while on the job may pose a serious health and safety risk to others, and will not be tolerated.
                      </p>
                      <div className="ml-4 space-y-4">
                        <div>
                          <h4 className="text-lg font-bold text-brand-black mb-2">8.1.1 Prohibited Conduct</h4>
                          <p>
                            The Company expressly prohibits independent contractors from engaging in the following activities when they are on duty or conducting Company business or on Company premises (whether or not they are working):
                          </p>
                          <ul className="list-disc list-inside space-y-2 ml-4">
                            <li>The use, abuse, or being under the influence of alcohol, illegal drugs, or other impairing substances.</li>
                            <li>The possession, sale, purchase, transfer, or transit of any illegal or unauthorized drug, including prescription medication that is not prescribed to the individual, or drug-related paraphernalia.</li>
                            <li>The illegal use or abuse of prescription drugs.</li>
                          </ul>
                          <p>
                            While the use of marijuana has been legalized under some state laws for medicinal and/or recreational uses, it remains an illegal drug under federal law. The Company does not discriminate against independent contractors solely on the basis of their lawful off-duty use of marijuana. You may not consume or be under the influence of marijuana while on duty or at work. If you have a valid prescription for medical marijuana, refer to the Company Disability Accommodation policy for additional information.
                          </p>
                          <p>
                            Nothing in this policy is meant to prohibit your appropriate use of over-the-counter medication or other medication that can legally be prescribed under both federal and state law, if it does not impair your job performance or safety or the safety of others. If you take over- the-counter medication or other medication that can legally be prescribed under both federal and state law to treat a disability, inform your designated company representative if you believe the medication may impair your job performance, safety, or the safety of others or if you believe you need a reasonable accommodation before reporting to work while under the influence of that medication.
                          </p>
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-brand-black mb-2">8.1.2 Employer-Sponsored Events</h4>
                          <p>
                            From time to time, the Company may sponsor social or business-related events where alcohol may be served. This policy does not prohibit the use or consumption of alcohol at these events. However, if you choose to consume alcohol at such events, you must do so responsibly and maintain your obligation to conduct yourself properly and professionally at all times.
                          </p>
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-brand-black mb-2">8.1.3 Violations</h4>
                          <p>
                            Violation of this policy may result in penalties (fines) and disciplinary action, up to and including termination of contracted services.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-brand-black mb-3 mt-6">8.2 Drug-Free Workplace (Federal Contractors)</h3>
                    <div className="prose prose-lg max-w-none text-brand-black leading-relaxed space-y-4">
                      <div className="ml-4 space-y-4">
                        <div>
                          <h4 className="text-lg font-bold text-brand-black mb-2">8.2.1 Drug-Free Workplace Act</h4>
                          <p>
                            As a federal contractor, Party Time Texas must comply with the requirements of the Drug-Free Workplace Act of 1988, which is a part of Public Law 100-690, Anti-Drug Abuse Act of 1988. The federal Drug-Free Workplace Act of 1988 (§ 5152) covers grants and contracts for the procurement of any service with a value of $25,000 or more.
                          </p>
                          <p>
                            To comply with the act, federal agency contractors and federal grant recipients must provide a drug-free workplace. These federal contractors and grant recipients will:
                          </p>
                          <ul className="list-disc list-inside space-y-2 ml-4">
                            <li>Publish a statement prohibiting the unlawful manufacture, distribution, dispensation, possession, or use of illegal drugs in the workplace and specify the actions that will be taken against independent contractors for violations.</li>
                            <li>Distribute a copy of the policy statement to independent contractors engaged in the performance of a federal grant or contract.</li>
                            <li>Notify independent contractors that compliance with the policy is a condition of contracted services on such grant or contract and that independent contractors must abide by the terms of the policy statement. The policy statement includes the requirement that independent contractors notify the Company of any criminal drug statute conviction for a violation occurring in the workplace no later than five days after such conviction.</li>
                            <li>Notify the granting or contracting agency within 10 days after learning of a criminal drug statute conviction.</li>
                            <li>Impose a sanction as required under this act on independent contractors who are so convicted.</li>
                            <li>Establish a program of drug-free awareness, informing independent contractors about the organization&apos;s policy of maintaining a drug-free workplace, the penalties that may be imposed upon independent contractors for drug-abuse violations, the dangers of drug abuse in the workplace, and any available drug counseling, rehabilitation, and assistance programs.</li>
                            <li>Make a good faith effort to continue to maintain a drug-free workplace through implementation of these requirements.</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-brand-black mb-2">8.2.2 Americans with Disabilities Act</h4>
                          <p>
                            In addition to complying with the federal Drug-Free Workplace Act of 1988, the Company must comply with the requirements of the Americans with Disabilities Act of 1990 (ADA). Individuals who currently use drugs illegally are not individuals with disabilities protected under the ADA when an employer takes action because of their continued use of drugs. This includes people who use prescription drugs illegally as well as those who use illegal drugs. However, people who have been rehabilitated and do not currently use drugs illegally, or who are in the process of completing a rehabilitation program, may be protected by the ADA.
                          </p>
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-brand-black mb-2">8.2.3 Drug-Free Workplace Policy</h4>
                          <p>
                            The Company, in compliance with the federal Drug-Free Workplace Act of 1988, has adopted the following policy that must be adhered to as a condition of contracted services:
                          </p>
                          <ul className="list-disc list-inside space-y-2 ml-4">
                            <li>The unlawful use, possession, manufacture, dispensation, or distribution of controlled substances in all work locations is prohibited.</li>
                            <li>Any independent contractors convicted of a criminal drug statute violation occurring in the workplace must notify their designated company representative of the conviction within five days after the conviction. As required by the federal Drug-Free Workplace Act of 1988, the Company must inform contracting or granting agencies of such convictions within 10 days after receiving notification or otherwise receiving notice of a conviction.</li>
                            <li>Upon receiving such notification, the Company, in conjunction with the location concerned, will take all steps necessary to assure the proper conduct of sponsored projects and programs. If a decision is reached to allow the affected individual to continue contracted services with the Company, the individual must participate in and satisfactorily complete an approved drug abuse assistance or rehabilitation program.</li>
                            <li>The Company will evaluate its obligations in accordance with state and other applicable laws where required, on a case by case basis.</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-brand-black mb-3 mt-6">8.3 General Safety</h3>
                    <div className="prose prose-lg max-w-none text-brand-black leading-relaxed space-y-4">
                      <p>
                        It is the responsibility of all Party Time Texas independent contractors to maintain a healthy and safe work environment, report any health or safety hazards, and follow the Company health and safety rules. Failure to do so may result in penalties (fines) and disciplinary action, up to and including termination of contracted services. The Company also requires that all occupational illnesses or injuries be reported to your designated company representative as soon as reasonably possible and that an occupational illness or injury form be completed on each reported incident.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-brand-black mb-3 mt-6">8.4 Workplace Tobacco Usage</h3>
                    <div className="prose prose-lg max-w-none text-brand-black leading-relaxed space-y-4">
                      <p>
                        Party Time Texas is concerned about the detrimental effects of smoking and secondhand smoke inhalation. Smoking is prohibited in the following:
                      </p>
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>Company offices</li>
                        <li>Company vehicles</li>
                        <li>Client and Vendor facilities and event locations</li>
                        <li>Restrooms</li>
                        <li>Areas where signs are posted prohibiting smoking</li>
                      </ul>
                      <p>
                        The Company will not discriminate against independent contractors based on their off-premises, off-duty tobacco usage.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-brand-black mb-3 mt-6">8.5 Workplace Violence</h3>
                    <div className="prose prose-lg max-w-none text-brand-black leading-relaxed space-y-4">
                      <p>
                        As the safety and security of our independent contractors, vendors, contractors, and the general public is in the best interests of Party Time Texas, we are committed to working with our independent contractors to provide a work environment free from violence, intimidation, and other disruptive behavior.
                      </p>
                      <div className="ml-4 space-y-4">
                        <div>
                          <h4 className="text-lg font-bold text-brand-black mb-2">8.5.1 Zero Tolerance Policy</h4>
                          <p>
                            The Company has a zero-tolerance policy regarding workplace violence and will not tolerate acts or threats of violence, harassment, intimidation, and other disruptive behavior, either physical or verbal, that occurs in the workplace or other areas. This applies to management, employees, and non-employees such as contractors, clients, and visitors.
                          </p>
                          <p>
                            Workplace violence can include oral or written statements, gestures, or expressions that communicate a direct or indirect threat of physical harm, damage to property, or any intentional behavior that may cause a person to feel threatened.
                          </p>
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-brand-black mb-2">8.5.2 Prohibited Conduct</h4>
                          <p>Prohibited conduct includes, but is not limited to:</p>
                          <ul className="list-disc list-inside space-y-2 ml-4">
                            <li>Physically injuring another person.</li>
                            <li>Threatening to injure a person or damage property by any means, including verbal, written, direct, indirect, or electronic means.</li>
                            <li>Taking any action to place a person in reasonable fear of imminent harm or offensive contact.</li>
                            <li>Possessing, brandishing, or using a firearm on Company property or while performing Company business except as permitted by state law.</li>
                            <li>Violating a restraining order, order of protection, injunction against harassment, or other court order.</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-brand-black mb-2">8.5.3. Reporting Incidents of Violence</h4>
                          <p>
                            Report to your designated company representative of Human Resources, in accordance with this policy, any behavior that compromises our ability to maintain a safe work environment. All reports will be investigated immediately and kept confidential, except where there is a legitimate need to know. You are expected to cooperate in any investigation of workplace violence.
                          </p>
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-brand-black mb-2">8.5.4. Violations</h4>
                          <p>
                            Violating this policy may subject you to criminal charges as well as discipline up to and including immediate termination of contracted services.
                          </p>
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-brand-black mb-2">8.5.5. Retaliation</h4>
                          <p>
                            Victims and witnesses of workplace violence will not be retaliated against in any manner. In addition, you will not be subject to discipline for, based on a reasonable belief, reporting a threat or for cooperating in an investigation.
                          </p>
                          <p>
                            If you initiate, participate, are involved in retaliation, or obstruct an investigation into conduct prohibited by this policy, you will be subject to discipline up to and including termination.
                          </p>
                          <p>
                            If you believe you have been wrongfully retaliated against, immediately report the matter to Human Resources.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* 9.0 Trade Secrets and Inventions */}
              <section id="trade-secrets" className="mb-12 scroll-mt-24">
                <h2 className="text-2xl md:text-3xl font-bold text-brand-black mb-4 border-b-2 border-brand-gold pb-2">
                  9.0 Trade Secrets and Inventions
                </h2>
                <div className="ml-4 space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-brand-black mb-3 mt-6">9.1 Confidentiality and Nondisclosure of Trade Secrets</h3>
                    <div className="prose prose-lg max-w-none text-brand-black leading-relaxed space-y-4">
                      <p>
                        As a condition of contracted services, Party Time Texas independent contractors are required to protect the confidentiality of Company trade secrets, proprietary information, and confidential commercially sensitive information (i.e. financial or sales records/reports, marketing or business strategies/plans, product development, client lists, patents, trademarks, etc.) related to the Company. Access to this information should be limited to a &quot;need to know&quot; basis and should not be used for personal benefit, disclosed, or released without prior authorization from management.
                      </p>
                      <p>
                        If you have information that leads you to suspect that independent contractors are sharing such information in violation of this policy and/or competitors are obtaining such information, you are required to inform your designated company representative or Human Resources.
                      </p>
                      <p>
                        Violation of this policy may result in penalties (fines) and disciplinary action up to and including termination and may subject the violator to civil liability.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-brand-black mb-3 mt-6">9.2 Inventions</h3>
                    <div className="prose prose-lg max-w-none text-brand-black leading-relaxed space-y-4">
                      <p>
                        Any invention created, in whole or in part, during your work hours, or from the use of equipment or facilities belonging to Party Time Texas, is a &quot;work for hire&quot; and is the property of the Company.
                      </p>
                      <p>
                        If you intend to develop and maintain property rights to any invention that relates in any way to products or services of the Company, you are required to obtain a written waiver of this policy, signed by both you and the CEO or COO.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* 10.0 Closing Statement */}
              <section id="closing" className="mb-12 scroll-mt-24">
                <h2 className="text-2xl md:text-3xl font-bold text-brand-black mb-4 border-b-2 border-brand-gold pb-2">
                  10.0 Closing Statement
                </h2>
                <div className="prose prose-lg max-w-none text-brand-black leading-relaxed space-y-4">
                  <p>
                    Thank you for reading our Independent Contractor Company Policy & Guidelines. We hope it has provided you with an understanding of our history, mission and structure as well as our current policies and guidelines. We look forward to working with you to create a successful Company and a safe, productive, and pleasant workplace.
                  </p>
                </div>
              </section>

              {/* Remove the placeholder note */}
              
            </div>
          </main>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-brand-gray bg-opacity-20 border-t-2 border-brand-gray mt-auto">
        <div className="container mx-auto px-4 py-6">
          <div className="text-center">
            <p className="text-brand-black font-semibold">
              Party Time Texas 2025 • Terms & Conditions
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
