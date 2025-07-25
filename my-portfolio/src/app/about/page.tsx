import Image from "next/image";
import Link from "next/link";
import { profile } from "../../config/profile";
import TechBadge from "../../components/TechBadge";
import type { Technology } from "../../types";
import TechStackChart from "../../components/TechStackChart";
import TechStackBarChart from "../../components/TechStackBarChart";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <section className="max-w-4xl mx-auto px-6 pt-20 pb-12">
        <div className="flex flex-col md:flex-row md:items-center gap-12">
          <div className="mx-auto w-100 md:w-1/2">
            <div className="relative aspect-square overflow-hidden">
              <Image
                src="/images/mia-about1.jpg"
                alt="Mia Tapia"
                fill
                sizes="(max-width: 700px) 90vw, 40vw"
                className="object-cover rounded-lg shadow-lg"
                priority
              />
            </div>
          </div>
          
          <div className="w-full md:w-1/2 space-y-4 text-center md:text-left">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Hello, I'm <span className="font-bold">Mia</span> 👋
            </h1>
            
            <p className="text-gray-700 leading-relaxed">
              I'm a New York native building intelligent solutions with Python, Django, and modern web technologies. With 3+ years of experience transforming ideas into scalable applications, I pride myself on producing clean code, prioritizing user experience, and tackling large, complex problems.
            </p>
            <div className="border-t border-gray-100 my-4 w-16 mx-auto md:mx-0"></div>
            <div className="mb-2 text-left md:text-left">
              <span className="text-gray-600 font-medium">Currently learning:</span>
              <ul className="list-disc list-inside text-gray-700 text-base space-y-1 max-w-xs mx-auto md:mx-0">
                <li>System Design & Architecture</li>
                <li>Python for Data Science</li>
                <li>AI/ML Integration (Mistral AI)</li>
                <li>Advanced Algorithms & DSA</li>
                <li>Healthcare Standards (FHIR R4)</li>
              </ul>
            </div>
            
            <div className="flex gap-4 pt-3 justify-center md:justify-start">
              <Link 
                href={profile.links?.github || "https://github.com"}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-gray-900 transition-colors"
                aria-label="GitHub"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
                </svg>
              </Link>
              <Link 
                href={profile.links?.linkedIn || "https://linkedin.com"}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-gray-900 transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                </svg>
              </Link>
              <Link 
                href={`mailto:${profile.contact?.email}`}
                className="text-gray-700 hover:text-gray-900 transition-colors"
                aria-label="Email"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Core Technologies Section */}
      <div className="border-t border-gray-100 w-full max-w-4xl mx-auto"></div>
      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Core Technologies</h2>
          <p className="text-sm text-gray-500 mb-4">My primary languages and frameworks</p>
          <div className="flex flex-wrap justify-center gap-4 max-w-sm mx-auto">
            {profile.skills.map((tech) => (
              <TechBadge
                key={tech}
                tech={tech}
                size="lg"
                showLabel={true}
                showbg={true}
                className="hover:scale-105 transition-all duration-300"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Most Used Technologies Section */}
      <div className="border-t border-gray-100 w-full max-w-4xl mx-auto"></div>
      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Most Used Technologies</h2>
          <p className="text-sm text-gray-500 mb-4">Dynamically generated from my current projects</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="w-full max-w-2xl">
            <TechStackChart />
          </div>
        </div>
      </section>


      {/* Get in Touch Section */}
      <div className="border-t border-gray-100 w-full max-w-4xl mx-auto"></div>
      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Get in Touch</h2>
          <p className="text-gray-700 mb-6 max-w-sm">
            I'm always open to discussing new projects or opportunities.
          </p>
          <Link 
            href={`mailto:${profile.contact.email || "hello@example.com"}`}
            className="border border-gray-900 px-6 py-2 text-gray-900 hover:bg-gray-900 hover:text-white transition-colors"
          >
            Say Hello
          </Link>
        </div>
      </section>


      {/* Disqus comments */}
      {/* <div className="border-t border-gray-100 max-w-4xl mx-auto">
      <section className="mt-16">
        <h2 className="text-2xl font-bold mb-6">Comments</h2>
        <DisqusComments 
          pageIdentifier="about-page" 
          pageUrl="https://miaelena.vercel.app/about"
          title="About Me"
        />
      </section>
      </div> */}
    </main>
  );
}