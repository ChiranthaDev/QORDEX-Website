import React from 'react';
import Header from './header';
import Footer from './footer';
import backgroundImage from '../img/2.jpg';

export default function About() {
  return (
    <div className="relative w-full min-h-screen overflow-x-hidden">
      {/* BACKGROUND */}
      <section className="relative w-full min-h-[50vh] flex flex-col">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-teal-900/95 via-teal-900/70 to-teal-900/50" />
        
        <Header />
        
        {/* Hero content */}
        <div className="relative w-full h-full pt-20 pb-10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              About Us
            </h1>
            <p className="text-xl text-teal-100 mt-4 max-w-3xl">
              Learn more about our mission, vision, and the team behind QorNet
            </p>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <div className="relative bg-white w-full overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* ABOUT CONTENT */}
            <div className="flex-1">
              <div className="prose prose-lg max-w-none">
                <h2 className="text-3xl font-bold text-teal-900 mb-6">Our Story</h2>
                <p className="text-gray-700 mb-6">
                  Founded with a vision to revolutionize digital experiences, QorNet has grown into a leading platform that connects innovation with practical solutions. Our journey began with a small team of passionate developers who believed in the power of technology to transform businesses and lives.
                </p>
                
                <h2 className="text-3xl font-bold text-teal-900 mb-6 mt-12">Our Mission</h2>
                <p className="text-gray-700 mb-6">
                  We are committed to delivering cutting-edge solutions that empower businesses to thrive in the digital era. Our mission is to bridge the gap between complex technological innovations and accessible, user-friendly applications that drive real value.
                </p>
                
                <h2 className="text-3xl font-bold text-teal-900 mb-6 mt-12">Core Values</h2>
                <ul className="list-disc list-inside text-gray-700 space-y-3 mb-6">
                  <li>Innovation at the heart of everything we do</li>
                  <li>Integrity in all our partnerships and dealings</li>
                  <li>User-centric design and development approaches</li>
                  <li>Continuous learning and improvement</li>
                  <li>Sustainability and responsible technology practices</li>
                </ul>
                
                <h2 className="text-3xl font-bold text-teal-900 mb-6 mt-12">Our Team</h2>
                <p className="text-gray-700 mb-6">
                  Our diverse team of experts brings together decades of experience across various domains including software engineering, UX/UI design, data science, and business strategy. Together, we work tirelessly to push boundaries and create solutions that make a difference.
                </p>
              </div>
            </div>
            
            {/* CONTACT DETAILS */}
            <div className="lg:w-1/3">
              <div className="bg-teal-50 rounded-xl p-8 shadow-lg border border-teal-100">
                <h2 className="text-3xl font-bold text-teal-900 mb-6">Contact Us</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-teal-800 mb-2">Headquarters</h3>
                    <p className="text-gray-700">
                      123 Innovation Street<br />
                      Tech District, CA 94103<br />
                      United States
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-teal-800 mb-2">Email</h3>
                    <p className="text-gray-700">
                      <a href="mailto:info@qornet.com" className="text-teal-600 hover:text-teal-800 transition">
                        info@qornet.com
                      </a>
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-teal-800 mb-2">Phone</h3>
                    <p className="text-gray-700">
                      <a href="tel:+11234567890" className="text-teal-600 hover:text-teal-800 transition">
                        +1 (123) 456-7890
                      </a>
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-teal-800 mb-2">Business Hours</h3>
                    <p className="text-gray-700">
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday: 10:00 AM - 4:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                  
                  <div className="pt-4">
                    <h3 className="text-lg font-semibold text-teal-800 mb-3">Follow Us</h3>
                    <div className="flex space-x-4">
                      <a href="#" className="w-10 h-10 bg-teal-600 hover:bg-teal-700 rounded-full flex items-center justify-center text-white transition">
                        <span className="sr-only">Facebook</span>
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                        </svg>
                      </a>
                      <a href="#" className="w-10 h-10 bg-teal-600 hover:bg-teal-700 rounded-full flex items-center justify-center text-white transition">
                        <span className="sr-only">Twitter</span>
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                        </svg>
                      </a>
                      <a href="#" className="w-10 h-10 bg-teal-600 hover:bg-teal-700 rounded-full flex items-center justify-center text-white transition">
                        <span className="sr-only">LinkedIn</span>
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}