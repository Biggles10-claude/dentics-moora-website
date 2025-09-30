import { useState } from 'react'

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMobileMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header/Navigation */}
      <header className="bg-white shadow-sm fixed w-full top-0 z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-dental-blue">Dentics Moora</h1>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-dental-blue transition">Home</button>
              <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-dental-blue transition">About</button>
              <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-dental-blue transition">Services</button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-dental-blue transition">Contact</button>
              <a
                href="https://appointments.praktika.net.au/online-booking/step1?Apikey=7b7fc1d0-f42c-4769-a7df-ccf9bf953ff4"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-dental-teal text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition"
              >
                Book Now
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden pb-4">
              <div className="flex flex-col space-y-3">
                <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-dental-blue transition text-left">Home</button>
                <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-dental-blue transition text-left">About</button>
                <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-dental-blue transition text-left">Services</button>
                <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-dental-blue transition text-left">Contact</button>
                <a
                  href="https://appointments.praktika.net.au/online-booking/step1?Apikey=7b7fc1d0-f42c-4769-a7df-ccf9bf953ff4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-dental-teal text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition text-center"
                >
                  Book Now
                </a>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-16 bg-gradient-to-br from-blue-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Your Trusted Dental Care in Moora
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Comprehensive dental services from routine check-ups to complex procedures - all under one roof in a comfortable, welcoming atmosphere.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://appointments.praktika.net.au/online-booking/step1?Apikey=7b7fc1d0-f42c-4769-a7df-ccf9bf953ff4"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-dental-teal text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-teal-700 transition shadow-lg"
              >
                Book Appointment
              </a>
              <a
                href="tel:0424000442"
                className="bg-white text-dental-blue px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-50 transition border-2 border-dental-blue"
              >
                Call: 0424 000 442
              </a>
            </div>
          </div>
        </div>

        {/* Emergency Banner */}
        <div className="bg-red-50 border-t border-b border-red-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <p className="text-center text-red-800">
              <span className="font-semibold">Dental Emergency?</span> Call us immediately at{' '}
              <a href="tel:0424000442" className="underline font-bold">0424 000 442</a>
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Meet Dr. Hosa Byun
              </h2>
              <p className="text-lg text-gray-600 mb-4">
                Welcome to Dentics Moora! I'm Dr. Hosa Byun, and I'm dedicated to providing exceptional dental care to the Moora community and surrounding districts.
              </p>
              <p className="text-lg text-gray-600 mb-4">
                With a passion for modern dentistry and a commitment to patient comfort, I strive to make every visit a positive experience. Whether you need a routine cleaning or a complex procedure, you can trust that you're in capable, caring hands.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                At Dentics Moora, we believe quality dental care should be accessible and affordable for everyone in our rural community.
              </p>
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="font-semibold text-dental-blue mb-2">Our Philosophy</h3>
                <p className="text-gray-700">
                  Modern dentistry with a personal touch - combining advanced techniques with genuine care for our patients' wellbeing and comfort.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-dental-blue to-dental-teal rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Why Choose Dentics Moora?</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="w-6 h-6 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Comprehensive services from simple cleanings to complex implant surgeries</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Modern equipment and latest dental techniques</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Comfortable, welcoming atmosphere</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Affordable pricing for rural families</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Convenient online booking available 24/7</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From preventative care to advanced procedures, we offer comprehensive dental services for the whole family.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service Card 1 */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition">
              <div className="w-12 h-12 bg-dental-teal rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Check-ups & Cleaning</h3>
              <p className="text-gray-600">
                Regular dental examinations and professional cleaning to maintain optimal oral health and prevent problems before they start.
              </p>
            </div>

            {/* Service Card 2 */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition">
              <div className="w-12 h-12 bg-dental-blue rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Fillings</h3>
              <p className="text-gray-600">
                Tooth-colored composite fillings to restore cavities and damaged teeth with natural-looking results.
              </p>
            </div>

            {/* Service Card 3 */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition">
              <div className="w-12 h-12 bg-dental-teal rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Crowns & Bridges</h3>
              <p className="text-gray-600">
                Durable, custom-made crowns and bridges to restore damaged teeth or replace missing ones.
              </p>
            </div>

            {/* Service Card 4 */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition">
              <div className="w-12 h-12 bg-dental-blue rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Dental Implants</h3>
              <p className="text-gray-600">
                Advanced implant surgery for permanent tooth replacement - the most natural-looking and functional solution.
              </p>
            </div>

            {/* Service Card 5 */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition">
              <div className="w-12 h-12 bg-dental-teal rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Dentures</h3>
              <p className="text-gray-600">
                Custom-fitted partial or full dentures to restore your smile and improve quality of life.
              </p>
            </div>

            {/* Service Card 6 */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition">
              <div className="w-12 h-12 bg-dental-blue rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Extractions</h3>
              <p className="text-gray-600">
                Gentle tooth extractions when necessary, including wisdom teeth removal, performed with care and precision.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-6">
              Not sure which service you need? We'll assess your dental health and recommend the best treatment plan for you.
            </p>
            <a
              href="https://appointments.praktika.net.au/online-booking/step1?Apikey=7b7fc1d0-f42c-4769-a7df-ccf9bf953ff4"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-dental-teal text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-teal-700 transition"
            >
              Schedule a Consultation
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Visit Us
            </h2>
            <p className="text-xl text-gray-600">
              Conveniently located in the heart of Moora
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <div className="bg-gradient-to-br from-dental-blue to-dental-teal rounded-2xl p-8 text-white h-full">
                <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <svg className="w-6 h-6 mr-4 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <div>
                      <p className="font-semibold mb-1">Address</p>
                      <p>394 Dandaragan Road</p>
                      <p>Moora, WA 6510</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <svg className="w-6 h-6 mr-4 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <div>
                      <p className="font-semibold mb-1">Phone</p>
                      <a href="tel:0424000442" className="hover:underline">0424 000 442</a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <svg className="w-6 h-6 mr-4 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <div>
                      <p className="font-semibold mb-1">Email</p>
                      <a href="mailto:faisalssa@yahoo.com" className="hover:underline">faisalssa@yahoo.com</a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <svg className="w-6 h-6 mr-4 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <p className="font-semibold mb-1">Hours</p>
                      <p className="text-sm">Please call to confirm current hours</p>
                      <p className="text-sm mt-2">Emergency appointments available</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-white/20">
                  <h4 className="font-semibold mb-4">Accepted Payments</h4>
                  <p className="text-sm">Cash, EFTPOS, and most major health funds accepted</p>
                </div>
              </div>
            </div>

            {/* Map & Booking */}
            <div>
              <div className="bg-gray-100 rounded-2xl overflow-hidden mb-6" style={{ height: '400px' }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3427.8!2d116.0!3d-30.64!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDM4JzI2LjQiUyAxMTbCsDAwJzAwLjAiRQ!5e0!3m2!1sen!2sau!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Dentics Moora Location"
                ></iframe>
              </div>

              <div className="bg-blue-50 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Ready to Book?</h3>
                <p className="text-gray-600 mb-6">
                  Schedule your appointment online 24/7 or give us a call during business hours.
                </p>
                <div className="space-y-3">
                  <a
                    href="https://appointments.praktika.net.au/online-booking/step1?Apikey=7b7fc1d0-f42c-4769-a7df-ccf9bf953ff4"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-dental-teal text-white px-6 py-3 rounded-lg text-center font-semibold hover:bg-teal-700 transition"
                  >
                    Book Online Now
                  </a>
                  <a
                    href="tel:0424000442"
                    className="block w-full bg-white text-dental-blue px-6 py-3 rounded-lg text-center font-semibold hover:bg-gray-50 transition border-2 border-dental-blue"
                  >
                    Call to Book
                  </a>
                </div>
              </div>

              <div className="mt-6 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <h4 className="font-semibold text-yellow-900 mb-2">New Patients Welcome!</h4>
                <p className="text-sm text-yellow-800">
                  We're always happy to welcome new patients to our practice. Bring your health fund card and any relevant medical information to your first visit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Dentics Moora</h3>
              <p className="text-gray-400">
                Quality dental care for the Moora community and surrounding districts.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><button onClick={() => scrollToSection('home')} className="hover:text-white transition">Home</button></li>
                <li><button onClick={() => scrollToSection('about')} className="hover:text-white transition">About</button></li>
                <li><button onClick={() => scrollToSection('services')} className="hover:text-white transition">Services</button></li>
                <li><button onClick={() => scrollToSection('contact')} className="hover:text-white transition">Contact</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact Info</h4>
              <ul className="space-y-2 text-gray-400">
                <li>394 Dandaragan Road</li>
                <li>Moora, WA 6510</li>
                <li><a href="tel:0424000442" className="hover:text-white transition">0424 000 442</a></li>
                <li><a href="mailto:faisalssa@yahoo.com" className="hover:text-white transition">faisalssa@yahoo.com</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Dentics Moora. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App