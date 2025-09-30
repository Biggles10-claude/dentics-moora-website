import { useState, useEffect } from 'react'

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMobileMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header/Navigation */}
      <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm shadow-sm'
      }`}>
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <h1 className="font-display text-3xl font-bold text-dental-navy">Dentics Moora</h1>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-dental-teal font-medium transition">Home</button>
              <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-dental-teal font-medium transition">About</button>
              <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-dental-teal font-medium transition">Services</button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-dental-teal font-medium transition">Contact</button>
              <a
                href="https://appointments.praktika.net.au/online-booking/step1?Apikey=7b7fc1d0-f42c-4769-a7df-ccf9bf953ff4"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-dental-teal text-white px-6 py-2.5 rounded-lg hover:bg-dental-teal/90 transition font-semibold shadow-subtle"
              >
                Book Appointment
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
                <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-dental-teal transition text-left font-medium">Home</button>
                <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-dental-teal transition text-left font-medium">About</button>
                <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-dental-teal transition text-left font-medium">Services</button>
                <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-dental-teal transition text-left font-medium">Contact</button>
                <a
                  href="https://appointments.praktika.net.au/online-booking/step1?Apikey=7b7fc1d0-f42c-4769-a7df-ccf9bf953ff4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-dental-teal text-white px-6 py-2.5 rounded-lg hover:bg-dental-teal/90 transition text-center font-semibold"
                >
                  Book Appointment
                </a>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-20 bg-gradient-to-br from-mint via-white to-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <h2 className="font-display text-5xl md:text-6xl font-bold text-dental-navy mb-6 leading-tight">
                Your Smile, Our Priority
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Comprehensive dental care from routine check-ups to advanced procedures. Experience modern dentistry with a personal touch in the heart of Moora.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <a
                  href="https://appointments.praktika.net.au/online-booking/step1?Apikey=7b7fc1d0-f42c-4769-a7df-ccf9bf953ff4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-dental-teal text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-dental-teal/90 transition shadow-card text-center"
                >
                  Book Online 24/7
                </a>
                <a
                  href="tel:0424000442"
                  className="bg-white text-dental-navy px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-50 transition border-2 border-dental-navy text-center"
                >
                  Call: 0424 000 442
                </a>
              </div>

              {/* Trust Bar */}
              <div className="bg-white rounded-2xl p-6 shadow-card">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                  <div>
                    <div className="text-3xl font-bold text-dental-teal mb-1">4.8★</div>
                    <div className="text-sm text-gray-600">Google Rating</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-dental-teal mb-1">10+</div>
                    <div className="text-sm text-gray-600">Years Experience</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-dental-teal mb-1">✓</div>
                    <div className="text-sm text-gray-600">ADA Member</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-dental-teal mb-1">✓</div>
                    <div className="text-sm text-gray-600">HICAPS Available</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content - Placeholder for clinic image */}
            <div className="relative">
              <div className="bg-gradient-to-br from-dental-navy to-dental-teal rounded-2xl p-12 shadow-card">
                <div className="text-white text-center">
                  <svg className="w-32 h-32 mx-auto mb-6 opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h3 className="font-display text-2xl font-bold mb-3">Modern Dental Care</h3>
                  <p className="text-white/90">State-of-the-art equipment and techniques for your comfort and health</p>
                </div>
              </div>

              {/* Emergency Badge */}
              <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-danger-red text-white px-8 py-3 rounded-xl shadow-lg">
                <p className="text-sm font-semibold">Emergency Patients Welcome</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Doctor Image Placeholder */}
            <div>
              <div className="bg-gradient-to-br from-dental-sky to-dental-teal rounded-2xl p-12 shadow-card">
                <div className="text-white text-center">
                  <div className="w-40 h-40 bg-white/20 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <svg className="w-24 h-24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <h3 className="font-display text-3xl font-bold mb-2">Dr. Hosa Byun</h3>
                  <p className="text-white/90 text-lg">Principal Dentist</p>
                </div>
              </div>
            </div>

            {/* Right: About Content */}
            <div>
              <h2 className="font-display text-4xl font-bold text-dental-navy mb-6">
                Meet Your Dentist
              </h2>
              <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                Welcome to Dentics Moora! I'm Dr. Hosa Byun, and I'm dedicated to providing exceptional dental care to the Moora community and surrounding districts.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                With a passion for modern dentistry and a commitment to patient comfort, I strive to make every visit a positive experience. Whether you need a routine cleaning or a complex procedure, you can trust that you're in capable, caring hands.
              </p>

              {/* Credentials */}
              <div className="bg-mint rounded-xl p-6 mb-6">
                <h3 className="font-semibold text-dental-navy text-lg mb-4">Qualifications & Memberships</h3>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 text-dental-teal mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Registered with AHPRA
                  </li>
                  <li className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 text-dental-teal mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Member of Australian Dental Association
                  </li>
                  <li className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 text-dental-teal mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Continuing Professional Development
                  </li>
                  <li className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 text-dental-teal mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Implant Surgery Qualified
                  </li>
                </ul>
              </div>

              <div className="bg-dental-navy rounded-xl p-6 text-white">
                <h3 className="font-semibold text-lg mb-2">Our Philosophy</h3>
                <p className="text-white/90">
                  Modern dentistry with a personal touch - combining advanced techniques with genuine care for our patients' wellbeing and comfort.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-dental-navy mb-4">
              Comprehensive Dental Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From preventative care to advanced procedures, we offer complete dental solutions for the whole family.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Service Cards */}
            {[
              {
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                ),
                title: 'Check-ups & Cleaning',
                desc: 'Regular examinations and professional cleaning to maintain optimal oral health and prevent problems.'
              },
              {
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                ),
                title: 'Fillings & Restorations',
                desc: 'Tooth-colored composite fillings to restore cavities and damaged teeth with natural-looking results.'
              },
              {
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                ),
                title: 'Crowns & Bridges',
                desc: 'Durable, custom-made crowns and bridges to restore damaged teeth or replace missing ones.'
              },
              {
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                ),
                title: 'Dental Implants',
                desc: 'Advanced implant surgery for permanent tooth replacement - the most natural solution available.'
              },
              {
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                ),
                title: 'Dentures',
                desc: 'Custom-fitted partial or full dentures to restore your smile and improve quality of life.'
              },
              {
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                ),
                title: 'Extractions',
                desc: 'Gentle tooth extractions when necessary, including wisdom teeth removal with care and precision.'
              }
            ].map((service, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-card hover:shadow-xl transition-all duration-300 group">
                <div className="w-14 h-14 bg-gradient-to-br from-dental-teal to-dental-sky rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {service.icon}
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-dental-navy mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-6 text-lg">
              Not sure which service you need? We'll assess your dental health and recommend the best treatment plan.
            </p>
            <a
              href="https://appointments.praktika.net.au/online-booking/step1?Apikey=7b7fc1d0-f42c-4769-a7df-ccf9bf953ff4"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-dental-teal text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-dental-teal/90 transition shadow-card"
            >
              Schedule a Consultation
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl font-bold text-dental-navy mb-4">
              What Our Patients Say
            </h2>
            <p className="text-xl text-gray-600">
              Trusted by families across Moora and surrounding districts
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Sarah M.',
                location: 'Moora',
                text: 'Dr. Byun is fantastic! The clinic is modern and clean, and the staff are so welcoming. Best dental experience I\'ve had.'
              },
              {
                name: 'James W.',
                location: 'Watheroo',
                text: 'Finally, quality dental care close to home. The online booking system makes it so easy to schedule appointments.'
              },
              {
                name: 'Linda K.',
                location: 'Moora',
                text: 'Gentle, professional, and thorough. Dr. Byun took the time to explain everything and made me feel comfortable.'
              }
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-mint rounded-2xl p-8 shadow-subtle">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-warning-amber" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic leading-relaxed">"{testimonial.text}"</p>
                <div>
                  <p className="font-semibold text-dental-navy">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-dental-navy mb-4">
              Visit Our Clinic
            </h2>
            <p className="text-xl text-gray-600">
              Conveniently located in the heart of Moora
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <div className="bg-gradient-to-br from-dental-navy to-dental-teal rounded-2xl p-8 text-white shadow-card h-full">
                <h3 className="font-display text-2xl font-bold mb-6">Get In Touch</h3>

                <div className="space-y-6 mb-8">
                  <div className="flex items-start">
                    <svg className="w-6 h-6 mr-4 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <div>
                      <p className="font-semibold mb-1">Address</p>
                      <p className="text-white/90">394 Dandaragan Road</p>
                      <p className="text-white/90">Moora, WA 6510</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <svg className="w-6 h-6 mr-4 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <div>
                      <p className="font-semibold mb-1">Phone</p>
                      <a href="tel:0424000442" className="text-white/90 hover:text-white transition">0424 000 442</a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <svg className="w-6 h-6 mr-4 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <div>
                      <p className="font-semibold mb-1">Email</p>
                      <a href="mailto:faisalssa@yahoo.com" className="text-white/90 hover:text-white transition">faisalssa@yahoo.com</a>
                    </div>
                  </div>
                </div>

                {/* Hours Table */}
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <h4 className="font-semibold mb-4 flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Opening Hours
                  </h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-white/90">Monday - Friday</span>
                      <span className="font-semibold">8:30 AM - 5:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/90">Saturday</span>
                      <span className="font-semibold">By Appointment</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/90">Sunday</span>
                      <span className="font-semibold">Closed</span>
                    </div>
                    <div className="border-t border-white/20 pt-2 mt-3">
                      <p className="text-white/90 text-xs">Emergency appointments available - please call</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-white/20">
                  <h4 className="font-semibold mb-3">Accepted Payments</h4>
                  <p className="text-sm text-white/90">Cash, EFTPOS, HICAPS, and most major health funds accepted</p>
                </div>
              </div>
            </div>

            {/* Map & Booking */}
            <div>
              <div className="bg-gray-200 rounded-2xl overflow-hidden mb-6 shadow-card" style={{ height: '400px' }}>
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

              <div className="bg-mint rounded-2xl p-8 shadow-card">
                <h3 className="text-2xl font-bold text-dental-navy mb-4">Ready to Book?</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Schedule your appointment online 24/7 or give us a call during business hours. New patients always welcome!
                </p>
                <div className="space-y-3">
                  <a
                    href="https://appointments.praktika.net.au/online-booking/step1?Apikey=7b7fc1d0-f42c-4769-a7df-ccf9bf953ff4"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-dental-teal text-white px-6 py-4 rounded-xl text-center font-semibold hover:bg-dental-teal/90 transition shadow-subtle"
                  >
                    Book Online Now
                  </a>
                  <a
                    href="tel:0424000442"
                    className="block w-full bg-white text-dental-navy px-6 py-4 rounded-xl text-center font-semibold hover:bg-gray-50 transition border-2 border-dental-navy"
                  >
                    Call to Book
                  </a>
                </div>
              </div>

              <div className="mt-6 bg-blue-50 border-2 border-dental-sky rounded-xl p-6">
                <h4 className="font-semibold text-dental-navy mb-2 flex items-center">
                  <svg className="w-5 h-5 mr-2 text-dental-sky" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                  New Patients Welcome!
                </h4>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Bring your health fund card and any relevant medical information to your first visit. We'll make sure you feel comfortable and informed every step of the way.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dental-navy text-white py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-display text-2xl font-bold mb-4">Dentics Moora</h3>
              <p className="text-white/80 leading-relaxed">
                Quality dental care for the Moora community and surrounding districts.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><button onClick={() => scrollToSection('home')} className="text-white/80 hover:text-white transition">Home</button></li>
                <li><button onClick={() => scrollToSection('about')} className="text-white/80 hover:text-white transition">About</button></li>
                <li><button onClick={() => scrollToSection('services')} className="text-white/80 hover:text-white transition">Services</button></li>
                <li><button onClick={() => scrollToSection('contact')} className="text-white/80 hover:text-white transition">Contact</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-white/80">
                <li>394 Dandaragan Road</li>
                <li>Moora, WA 6510</li>
                <li><a href="tel:0424000442" className="hover:text-white transition">0424 000 442</a></li>
                <li><a href="mailto:faisalssa@yahoo.com" className="hover:text-white transition">faisalssa@yahoo.com</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Accreditations</h4>
              <ul className="space-y-2 text-white/80 text-sm">
                <li>✓ AHPRA Registered</li>
                <li>✓ ADA Member</li>
                <li>✓ HICAPS Available</li>
                <li>✓ All Health Funds Welcome</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 text-center">
            <p className="text-white/80">&copy; {new Date().getFullYear()} Dentics Moora. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App