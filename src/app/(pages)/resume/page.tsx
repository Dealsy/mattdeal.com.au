'use client'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Download, Linkedin, Github, Globe, Mail, Phone, MapPin } from 'lucide-react'
import Image from 'next/image'

export default function ResumePage() {
  const handlePrint = () => {
    window.print()
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50  to-slate-100 py-8 px-4 sm:px-6 lg:px-8 print:bg-white print:p-0">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-end mb-4 print:hidden">
          <Button
            onClick={handlePrint}
            className="flex text-white items-center gap-2 bg-indigo-600 hover:bg-indigo-700 transition-colors"
          >
            <Download className="h-4 w-4 " />
            Print Resume
          </Button>
        </div>

        <Card
          className="p-8 shadow-xl bg-white border-0 rounded-xl print:shadow-none"
          id="resume-content"
        >
          <header className="mb-8 relative print:mb-12">
            <div className="absolute top-10 right-10 w-36 h-36 -mt-8 -mr-8 z-0 rounded-full overflow-hidden bg-white shadow-xl border-4 border-white  print:mt-0 print:mr-0 print:shadow-none">
              <Image
                src="/images/avatar-matt.webp"
                alt="Matthew Deal"
                width={144}
                height={144}
                className="w-full h-full object-cover rounded-full print:border print:border-slate-200"
                priority
              />
            </div>
            <div className="relative z-10 max-w-[calc(100%-9rem)] print:max-w-[calc(100%-8rem)]">
              <h1 className="text-4xl font-bold text-indigo-700 mb-3 print:text-3xl">
                MATTHEW DEAL
              </h1>
              <div className="flex flex-wrap gap-4 text-sm text-slate-600 mb-4">
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-1 text-indigo-500 print:text-current" />
                  available upon request
                </div>
                <div className="flex items-center">
                  <Phone className="h-4 w-4 mr-1 text-indigo-500 print:text-current" />
                  available upon request
                </div>
                <div className="flex items-center">
                  <Mail className="h-4 w-4 mr-1 text-indigo-500 print:text-current" />
                  available upon request
                </div>
              </div>
              <div className="flex flex-wrap gap-5 text-sm print:text-[10pt]">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center">
                    <span className="font-bold text-slate-700 mr-2">LinkedIn:</span>
                    <a
                      href="https://www.linkedin.com/in/matthew-j-deal/"
                      target="_blank"
                      className="flex items-center mr-3 text-indigo-600 hover:text-indigo-800 transition-colors"
                    >
                      <Linkedin className="h-4 w-4 mr-1" />
                      matthew-j-deal
                    </a>

                    <span className="font-bold text-slate-700 mr-2">Portfolio:</span>
                    <a
                      href="https://mattdeal.com.au"
                      target="_blank"
                      className="flex items-center mr-3 text-indigo-600 hover:text-indigo-800 transition-colors"
                    >
                      <Globe className="h-4 w-4 mr-1" />
                      mattdeal.com.au
                    </a>
                  </div>

                  <div className="flex items-center">
                    <span className="font-bold text-slate-700 mr-2">GitHub:</span>
                    <div className="flex gap-4">
                      <a
                        href="https://github.com/Dealsy"
                        target="_blank"
                        className="flex items-center text-indigo-600 hover:text-indigo-800 transition-colors"
                      >
                        <Github className="h-4 w-4 mr-1" />
                        Personal
                      </a>
                      <a
                        href="https://github.com/matthew-deal-rocketlab"
                        target="_blank"
                        className="flex items-center text-indigo-600 hover:text-indigo-800 transition-colors"
                      >
                        <Github className="h-4 w-4 mr-1" />
                        Rocketlab-personal
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </header>

          <section className="mb-8 relative">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-indigo-500 bg-clip-text text-transparent mb-6 pb-2 border-b border-indigo-100 flex items-center group transition-all print:text-indigo-600">
              <span className="bg-gradient-to-r from-indigo-600 to-indigo-500 w-2 h-8 mr-3 rounded-sm group-hover:scale-105 transition-transform"></span>
              PROFESSIONAL EXPERIENCE
            </h2>

            <div className="mb-8 relative group">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold text-slate-800 group-hover:text-indigo-600 transition-colors">
                  ROCKETLAB PTY LTD
                </h3>
                <span className="text-indigo-600 text-sm font-medium px-4 py-1.5 mr-5 bg-indigo-50 rounded-full print:bg-indigo-50">
                  Dec 2022 – March 2025
                </span>
              </div>
              <p className="text-slate-700 italic mb-3 font-medium">Software Engineer – Remote</p>
              <p className="font-medium mb-2 text-slate-700">Responsibilities:</p>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start">
                  <span className="text-indigo-500 mr-2 h-[lh]">•</span>
                  Helped build an internal reporting tool for Rocketlab to show employment and
                  project data, this was a Full stack Next.js application where I was responsible
                  for both frontend and backend development.
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-500 mr-2 h-[lh]">•</span>
                  Led the Frontend development of a new app for Quantco hospitality, to help their
                  clients track data for sales across the platform.
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-500 mr-2 h-[lh]">•</span>
                  Was the main Frontend developer for Formalised, a web application built to manage
                  online digital contracts, overseeing the project from initial design to successful
                  deployment and continued support thereafter.
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-500 mr-2 h-[lh]">•</span>
                  Led the development of HouseTracker, a web application for managing property
                  documents, overseeing the project from initial design to successful deployment.
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-500 mr-2 h-[lh]">•</span>
                  Worked on Zedrun to implement a new first-time user experience flow.
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-500 mr-2 h-[lh]">•</span>
                  Collaborated with clients, developers, and product teams to ensure clear
                  understanding and delivery of project requirements within specified timelines.
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-500 mr-2 h-[lh]">•</span>
                  Utilized a diverse tech stack, including Next JS, React, TypeScript, Node.js,{' '}
                  express.js, Zod, REST, GraphQL, React Query, React Hook Form, Tailwind CSS,
                  ShadCn, Charaka UI, Styled components, postgresSQL and Directus to create
                  high-quality web applications.
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-500 mr-2 h-[lh]">•</span>
                  Focused on enhancing user experience by integrating frontend technologies with
                  backend APIs.
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-500 mr-2 h-[lh]">•</span>
                  Maintained and managed project workflows using Clickup as a ticketing system,
                  ensuring efficient and on-time delivery of milestones and sprints.
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-500 mr-2 h-[lh]">•</span>
                  Created and presented workshops that are presented to the Rocket lab team on
                  topics such as TypeScript, Next JS, Tailwind, Accessibility. These workshops are
                  then given to the team to learn from in the form of a github Repo.
                </li>
              </ul>
            </div>

            <div className="mb-8">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold text-slate-800">The Hero, Global (Remote)</h3>
                <span className="text-indigo-600 text-sm font-medium px-4 py-1.5 mr-5 bg-indigo-50 rounded-full print:bg-indigo-50">
                  March 2022 – Dec 2022
                </span>
              </div>
              <p className="text-slate-700 italic mb-3 font-medium">Frontend React Developer</p>
              <p className="font-medium mb-2 text-slate-700">Responsibilities:</p>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start">
                  <span className="text-indigo-500 mr-2 h-[lh]">•</span>
                  Developing a white label dashboard for managing research notes, featuring complex
                  functionalities like user creation and drag-and-drop interfaces.
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-500 mr-2 h-[lh]">•</span>
                  Tools and technologies used: Next JS, React, TypeScript, TailwindCSS, Git,
                  Bitbucket, Jira, Confluence, VS Code.
                </li>
              </ul>
            </div>

            <div className="mb-8">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold text-slate-800">LA Neon Events</h3>
                <span className="text-indigo-600 text-sm font-medium px-4 py-1.5 mr-5 bg-indigo-50 rounded-full print:bg-indigo-50">
                  September 2021 – August 2022
                </span>
              </div>
              <p className="text-slate-700 italic mb-3 font-medium">Frontend React Developer</p>
              <p className="font-medium mb-2 text-slate-700">Responsibilities:</p>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start">
                  <span className="text-indigo-500 mr-2 h-[lh]">•</span>
                  Engineered an e-commerce site for custom neon light signage, incorporating
                  Storyblok as a headless CMS.
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-500 mr-2 h-[lh]">•</span>
                  Implemented Stripe for payments and integrated Snipcart for a seamless shopping
                  experience.
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-500 mr-2 h-[lh]">•</span>
                  Tools and technologies used: React, JavaScript, TypeScript, TailwindCSS, Stripe,
                  Firebase, Git, GitHub, VSCode, Netlify.
                </li>
              </ul>
            </div>

            <div className="mb-8">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold text-slate-800">Datapipeline</h3>
                <span className="text-indigo-600 text-sm font-medium px-4 py-1.5 mr-5 bg-indigo-50 rounded-full print:bg-indigo-50">
                  2017 – 2019
                </span>
              </div>
              <p className="text-slate-700 italic mb-3 font-medium">Frontend Developer</p>
              <p className="font-medium mb-2 text-slate-700">Responsibilities:</p>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start">
                  <span className="text-indigo-500 mr-2 h-[lh]">•</span>
                  Designed and executed a GPS tracking platform for asset protection.
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-500 mr-2 h-[lh]">•</span>
                  Developed and tested mobile applications and conducted Linux system
                  troubleshooting.
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-500 mr-2 h-[lh]">•</span>
                  Tools and technologies used: HTML5, CSS3, JavaScript, React, Node.js, AWS.
                </li>
              </ul>
            </div>

            <div className="mb-8">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold text-slate-800">Pro-tekt GPS Tracking</h3>
                <span className="text-indigo-600 text-sm font-medium px-4 py-1.5 mr-5 bg-indigo-50 rounded-full print:bg-indigo-50">
                  2015 – 2017
                </span>
              </div>
              <p className="text-slate-700 italic mb-3 font-medium">Frontend Developer</p>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start">
                  <span className="text-indigo-500 mr-2 h-[lh]">•</span>
                  Contributed to the creation of a GPS asset tracking system.
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-500 mr-2 h-[lh]">•</span>
                  Tools and technologies used: JavaScript, jQuery, HTML5, CSS3, Python, Flask,
                  GitHub.
                </li>
              </ul>
            </div>

            <div className="mb-8">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold text-slate-800">AUS-IP Services</h3>
                <span className="text-indigo-600 text-sm font-medium px-4 py-1.5 mr-5 bg-indigo-50 rounded-full print:bg-indigo-50">
                  2019 – 2022
                </span>
              </div>
              <p className="text-slate-700 italic mb-3 font-medium">ICT Engineer</p>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start">
                  <span className="text-indigo-500 mr-2 h-[lh]">•</span>
                  Delivered comprehensive IT solutions including cloud computing services, server
                  administration, and network security.
                </li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-indigo-500 bg-clip-text text-transparent mb-6 pb-2 border-b border-indigo-100 flex items-center group transition-all print:text-indigo-600">
              <span className="bg-gradient-to-r from-indigo-600 to-indigo-500 w-2 h-8 mr-3 rounded-sm group-hover:scale-105 transition-transform"></span>
              WORKSHOPS
            </h2>
            <ul className="space-y-3 text-slate-600">
              <li className="group p-4 bg-gradient-to-br from-white to-slate-50 rounded-lg border border-slate-100 shadow-sm hover:shadow-md transition-all print:bg-transparent print:shadow-none print:p-2">
                <a
                  href="https://github.com/Dealsy/Next-JS-Workshop"
                  className="flex items-center text-indigo-600 hover:text-indigo-800 transition-colors"
                >
                  <div className="w-2 h-2 rounded-full bg-indigo-500 mr-3 group-hover:scale-150 transition-transform"></div>
                  <span className="group-hover:translate-x-1 transition-transform">
                    Next JS Workshop
                  </span>
                </a>
              </li>
              <li className="group p-4 bg-gradient-to-br from-white to-slate-50 rounded-lg border border-slate-100 shadow-sm hover:shadow-md transition-all print:bg-transparent print:shadow-none print:p-2">
                <a
                  href="https://github.com/Dealsy/TypeScript-Workshop"
                  className="flex items-center text-indigo-600 hover:text-indigo-800 transition-colors"
                >
                  <div className="w-2 h-2 rounded-full bg-indigo-500 mr-3 group-hover:scale-150 transition-transform"></div>
                  <span className="group-hover:translate-x-1 transition-transform">
                    TypeScript Workshop
                  </span>
                </a>
              </li>
              <li className="group p-4 bg-gradient-to-br from-white to-slate-50 rounded-lg border border-slate-100 shadow-sm hover:shadow-md transition-all print:bg-transparent print:shadow-none print:p-2">
                <a
                  href="https://github.com/matthew-deal-rocketlab/Accessibility"
                  className="flex items-center text-indigo-600 hover:text-indigo-800 transition-colors"
                >
                  <div className="w-2 h-2 rounded-full bg-indigo-500 mr-3 group-hover:scale-150 transition-transform"></div>
                  <span className="group-hover:translate-x-1 transition-transform">
                    Accessibility Workshop
                  </span>
                </a>
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-indigo-500 bg-clip-text text-transparent mb-6 pb-2 border-b border-indigo-100 flex items-center group transition-all print:text-indigo-600">
              <span className="bg-gradient-to-r from-indigo-600 to-indigo-500 w-2 h-8 mr-3 rounded-sm group-hover:scale-105 transition-transform"></span>
              SKILLS & VALUES
            </h2>

            <div className="grid grid-cols-1">
              <div className="bg-gradient-to-br from-white to-slate-50 p-6 rounded-lg border border-slate-100 shadow-sm hover:shadow-md transition-all print:bg-transparent print:shadow-none print:border-slate-100">
                <h3 className="text-xl font-semibold text-slate-800 mb-4 flex items-center">
                  <span className="w-2 h-2 rounded-full bg-indigo-500 mr-2"></span>
                  Technical Skills
                </h3>
                <p className="text-slate-600 mb-3 leading-relaxed">
                  Experienced in frontend development software including React, Next JS, TypeScript,
                  Zod, React Query, React hook form, Tailwind CSS, Shadcn, Styled Components, Ant
                  Design, Charak UI, REST API, GraphQL, Directus and Storyblok.
                </p>
                <p className="text-slate-600 mb-3 leading-relaxed">
                  Backend familiarity with Node.JS, postgresSQL, Directus and Sainty.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  Confident with tools including GIT, Github, Bitbucket, VS Code, Cursor, Prettier,
                  Clickup, Warp.
                </p>
              </div>

              <div className="space-y-6">
                <div className="bg-gradient-to-br from-white to-slate-50 p-6 rounded-lg border border-slate-100 shadow-sm hover:shadow-md transition-all print:bg-transparent print:shadow-none print:border-slate-100">
                  <h3 className="text-xl font-semibold text-slate-800 mb-4 flex items-center">
                    <span className="w-2 h-2 rounded-full bg-indigo-500 mr-2"></span>
                    Teamwork skills
                  </h3>
                  <p className="text-slate-600 mb-3 leading-relaxed">
                    Positive, supportive team player displaying strong communication for internal
                    and external stakeholders.
                  </p>
                  <p className="text-slate-600 leading-relaxed">
                    Ability to work cross functionally and build consensus in a team environment to
                    deliver solutions.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-white to-slate-50 p-6 rounded-lg border border-slate-100 shadow-sm hover:shadow-md transition-all print:bg-transparent print:shadow-none print:border-slate-100">
                  <h3 className="text-xl font-semibold text-slate-800 mb-4 flex items-center">
                    <span className="w-2 h-2 rounded-full bg-indigo-500 mr-2"></span>
                    Willing to Learn
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    I take great pride in continuously learning new skills in all aspects of work
                    and life. I am always looking to learn the latest and greatest tech to be sure I
                    am always up to date on the forever changing landscape that is web development.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent my-8 print:hidden"></div>

          <section>
            <h2 className="text-2xl font-bold text-indigo-600 mb-6 pb-2 border-b border-indigo-100 flex items-center">
              <span className="bg-gradient-to-r from-indigo-600 to-indigo-500 w-2 h-8 mr-3 rounded-sm group-hover:scale-105 transition-transform"></span>
              REFERENCES
            </h2>
            <div className="bg-slate-50 p-5 rounded-lg border border-slate-100">
              <p className="font-semibold text-slate-800">Available upon request</p>
            </div>
          </section>
        </Card>
      </div>
    </div>
  )
}
