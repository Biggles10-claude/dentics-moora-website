import { useState } from 'react'

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setMobileMenuOpen(false)
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <svg className="h-8 w-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
              </svg>
              <span className="text-xl font-bold text-slate-900">Dentics Moora</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <button
                onClick={() => scrollToSection('about')}
                className="text-slate-700 hover:text-blue-600 transition-colors font-medium"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="text-slate-700 hover:text-blue-600 transition-colors font-medium"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('testimonials')}
                className="text-slate-700 hover:text-blue-600 transition-colors font-medium"
              >
                Testimonials
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-slate-700 hover:text-blue-600 transition-colors font-medium"
              >
                Contact
              </button>
              <a
                href="tel:0424000442"
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
              >
                Book Now
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-slate-200 bg-white">
            <div className="px-4 py-4 space-y-3">
              <button
                onClick={() => scrollToSection('about')}
                className="block w-full text-left px-4 py-2 text-slate-700 hover:bg-slate-50 rounded-lg"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="block w-full text-left px-4 py-2 text-slate-700 hover:bg-slate-50 rounded-lg"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('testimonials')}
                className="block w-full text-left px-4 py-2 text-slate-700 hover:bg-slate-50 rounded-lg"
              >
                Testimonials
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left px-4 py-2 text-slate-700 hover:bg-slate-50 rounded-lg"
              >
                Contact
              </button>
              <a
                href="tel:0424000442"
                className="block w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium text-center transition-colors"
              >
                Book Now
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block bg-white/20 text-white border border-white/30 px-3 py-1 rounded-full text-sm">
                Trusted Dental Care Since 2023
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                Your Smile,<br/>Our Priority
              </h1>
              <p className="text-lg sm:text-xl text-blue-100 leading-relaxed">
                Modern dental care with a personal touch. Comprehensive family dentistry serving Moora and the Wheatbelt region with excellence and compassion.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <a
                  href="tel:0424000442"
                  className="bg-white text-blue-600 hover:bg-slate-50 px-6 py-3 rounded-lg font-medium transition-colors inline-flex items-center gap-2"
                >
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  0424 000 442
                </a>
              </div>
              <div className="flex flex-wrap gap-6 pt-6">
                <div className="flex items-center gap-2">
                  <svg className="h-5 w-5 text-blue-200" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                  <span className="text-sm">Emergency Care</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="h-5 w-5 text-blue-200" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                  <span className="text-sm">HICAPS Available</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                  <span className="text-sm font-semibold">4.8/5 on Google</span>
                </div>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 space-y-6">
                <div className="flex items-center gap-4 bg-white/10 rounded-xl p-4">
                  <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <span className="text-lg font-medium">AHPRA Registered</span>
                </div>
                <div className="flex items-center gap-4 bg-white/10 rounded-xl p-4">
                  <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                  <span className="text-lg font-medium">ADA Member</span>
                </div>
                <div className="flex items-center gap-4 bg-white/10 rounded-xl p-4">
                  <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <span className="text-lg font-medium">Family Friendly</span>
                </div>
                <div className="flex items-center gap-4 bg-white/10 rounded-xl p-4">
                  <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                  <span className="text-lg font-medium">Modern Equipment</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-gradient-to-br from-blue-50 to-slate-50 rounded-2xl p-8 lg:p-12">
                <div className="w-48 h-48 bg-slate-300 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-slate-500 text-sm">Dr. Byun Photo</span>
                </div>
                <div className="text-center space-y-4">
                  <div className="inline-block bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                    Principal Dentist
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-slate-900">Dr. Hosa Byun</h3>
                    <p className="text-slate-600">BDS, AHPRA Registered</p>
                  </div>
                  <div className="grid grid-cols-2 gap-3 pt-4">
                    <div className="bg-white rounded-lg p-3 text-sm font-medium text-slate-700">AHPRA Registered</div>
                    <div className="bg-white rounded-lg p-3 text-sm font-medium text-slate-700">ADA Member</div>
                    <div className="bg-white rounded-lg p-3 text-sm font-medium text-slate-700">Continuing CPD</div>
                    <div className="bg-white rounded-lg p-3 text-sm font-medium text-slate-700">Implant Qualified</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 space-y-6">
              <div className="space-y-3">
                <div className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">About Us</div>
                <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Excellence in Dental Care</h2>
              </div>
              <p className="text-lg text-slate-600 leading-relaxed">
                Welcome to Dentics Moora! Dr. Hosa Byun is dedicated to providing exceptional dental care to the Moora community and surrounding districts.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                With a passion for modern dentistry and a commitment to patient comfort, we strive to make every visit a positive experience. Whether you need a routine cleaning or a complex procedure, you can trust that you're in capable, caring hands.
              </p>
              <div className="border border-blue-200 bg-blue-50/50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2">Our Philosophy</h3>
                <p className="text-slate-700">
                  Modern dentistry with a personal touch — combining advanced techniques with genuine care for our patients' wellbeing and comfort.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 lg:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <div className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">Our Services</div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Comprehensive Dental Solutions</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              From preventative care to advanced procedures, we offer complete dental solutions for the whole family.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white border border-slate-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-3">🦷</div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Check-ups & Cleaning</h3>
              <p className="text-slate-600 leading-relaxed">
                Regular examinations and professional cleaning to maintain optimal oral health and prevent problems.
              </p>
            </div>
            <div className="bg-white border border-slate-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-3">✨</div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Fillings & Restorations</h3>
              <p className="text-slate-600 leading-relaxed">
                Tooth-colored composite fillings to restore cavities and damaged teeth with natural-looking results.
              </p>
            </div>
            <div className="bg-white border border-slate-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-3">👑</div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Crowns & Bridges</h3>
              <p className="text-slate-600 leading-relaxed">
                Durable, custom-made crowns and bridges to restore damaged teeth or replace missing ones.
              </p>
            </div>
            <div className="bg-white border border-slate-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-3">🔧</div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Dental Implants</h3>
              <p className="text-slate-600 leading-relaxed">
                Advanced implant surgery for permanent tooth replacement — the most natural solution available.
              </p>
            </div>
            <div className="bg-white border border-slate-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-3">😁</div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Dentures</h3>
              <p className="text-slate-600 leading-relaxed">
                Custom-fitted partial or full dentures to restore your smile and improve quality of life.
              </p>
            </div>
            <div className="bg-white border border-slate-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-3">💊</div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Extractions</h3>
              <p className="text-slate-600 leading-relaxed">
                Gentle tooth extractions when necessary, including wisdom teeth removal with care and precision.
              </p>
            </div>
          </div>

          <div className="mt-12 border border-blue-200 bg-gradient-to-br from-blue-50 to-white rounded-lg p-8 text-center">
            <p className="text-lg text-slate-700 mb-4">
              Not sure which service you need? We'll assess your dental health and recommend the best treatment plan.
            </p>
            <a
              href="tel:0424000442"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Schedule a Consultation
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <div className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">Testimonials</div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">What Our Patients Say</h2>
            <p className="text-lg text-slate-600">Trusted by families across Moora and surrounding districts</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white border border-slate-200 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-lg">
                  S
                </div>
                <div>
                  <p className="font-bold text-slate-900">Sarah M.</p>
                  <p className="text-sm text-slate-600">Moora</p>
                </div>
              </div>
              <div className="flex gap-1 mb-3">
                <svg className="h-4 w-4 text-yellow-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                <svg className="h-4 w-4 text-yellow-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                <svg className="h-4 w-4 text-yellow-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                <svg className="h-4 w-4 text-yellow-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                <svg className="h-4 w-4 text-yellow-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
              </div>
              <p className="text-slate-600 leading-relaxed">
                "Dr. Byun is fantastic! The clinic is modern and clean, and the staff are so welcoming. Best dental experience I've had."
              </p>
            </div>
            <div className="bg-white border border-slate-200 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-lg">
                  J
                </div>
                <div>
                  <p className="font-bold text-slate-900">James W.</p>
                  <p className="text-sm text-slate-600">Moora</p>
                </div>
              </div>
              <div className="flex gap-1 mb-3">
                <svg className="h-4 w-4 text-yellow-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                <svg className="h-4 w-4 text-yellow-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                <svg className="h-4 w-4 text-yellow-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                <svg className="h-4 w-4 text-yellow-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                <svg className="h-4 w-4 text-yellow-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
              </div>
              <p className="text-slate-600 leading-relaxed">
                "Finally, quality dental care close to home. The online booking system makes it so easy to schedule appointments."
              </p>
            </div>
            <div className="bg-white border border-slate-200 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-lg">
                  L
                </div>
                <div>
                  <p className="font-bold text-slate-900">Linda K.</p>
                  <p className="text-sm text-slate-600">Moora</p>
                </div>
              </div>
              <div className="flex gap-1 mb-3">
                <svg className="h-4 w-4 text-yellow-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                <svg className="h-4 w-4 text-yellow-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                <svg className="h-4 w-4 text-yellow-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                <svg className="h-4 w-4 text-yellow-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                <svg className="h-4 w-4 text-yellow-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
              </div>
              <p className="text-slate-600 leading-relaxed">
                "Gentle, professional, and thorough. Dr. Byun takes the time to explain everything and makes sure you're comfortable throughout."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 lg:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <div className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">Get In Touch</div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Visit Our Clinic</h2>
            <p className="text-lg text-slate-600">Conveniently located in the heart of Moora, serving the Wheatbelt region</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-white border border-slate-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <svg className="h-5 w-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Location
                </h3>
                <p className="text-slate-700 font-medium">394 Dandaragan Road</p>
                <p className="text-slate-600">Moora, WA 6510</p>
              </div>

              <div className="bg-white border border-slate-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <svg className="h-5 w-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Contact Details
                </h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm text-slate-500 mb-1">Phone</p>
                    <a href="tel:0424000442" className="text-blue-600 hover:text-blue-700 font-medium text-lg">
                      0424 000 442
                    </a>
                  </div>
                  <div className="border-t border-slate-200 pt-3">
                    <p className="text-sm text-slate-500 mb-1">Email</p>
                    <a href="mailto:faisalssa@yahoo.com" className="text-blue-600 hover:text-blue-700 font-medium">
                      faisalssa@yahoo.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-slate-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <svg className="h-5 w-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Opening Hours
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-slate-700">Monday - Friday</span>
                    <span className="font-medium text-slate-900">9:00 AM - 5:00 PM</span>
                  </div>
                  <div className="border-t border-slate-200 pt-3 flex justify-between">
                    <span className="text-slate-700">Saturday</span>
                    <span className="font-medium text-slate-900">By Appointment</span>
                  </div>
                  <div className="border-t border-slate-200 pt-3 flex justify-between">
                    <span className="text-slate-700">Sunday</span>
                    <span className="font-medium text-slate-900">Closed</span>
                  </div>
                  <div className="pt-3 bg-blue-50 -mx-6 -mb-6 px-6 py-4 mt-4 rounded-b-lg">
                    <p className="text-sm text-blue-900 font-medium">Emergency appointments available</p>
                  </div>
                </div>
              </div>

              <a
                href="tel:0424000442"
                className="block w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium text-center transition-colors"
              >
                Book Your Appointment Online
              </a>
            </div>

            <div className="h-[600px] rounded-xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3408.4!2d116.01!3d-30.64!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDM4JzI2LjQiUyAxMTbCsDAwJzM2LjAiRQ!5e0!3m2!1sen!2sau!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Dentics Moora Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <svg className="h-8 w-8 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                </svg>
                <span className="text-xl font-bold text-white">Dentics Moora</span>
              </div>
              <p className="text-sm leading-relaxed">
                Modern dental care with a personal touch, serving Moora and the Wheatbelt region.
              </p>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <button onClick={() => scrollToSection('about')} className="block hover:text-blue-400 transition-colors">
                  About Dr. Byun
                </button>
                <button onClick={() => scrollToSection('services')} className="block hover:text-blue-400 transition-colors">
                  Services
                </button>
                <button onClick={() => scrollToSection('testimonials')} className="block hover:text-blue-400 transition-colors">
                  Testimonials
                </button>
                <button onClick={() => scrollToSection('contact')} className="block hover:text-blue-400 transition-colors">
                  Contact Us
                </button>
              </div>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Contact Info</h4>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-2">
                  <svg className="h-4 w-4 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  </svg>
                  <span>394 Dandaragan Road<br/>Moora, WA 6510</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="h-4 w-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <a href="tel:0424000442" className="hover:text-blue-400">0424 000 442</a>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="h-4 w-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a href="mailto:faisalssa@yahoo.com" className="hover:text-blue-400">faisalssa@yahoo.com</a>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Opening Hours</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Mon - Fri</span>
                  <span className="text-white">9:00 - 17:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span className="text-white">By Appt</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span className="text-white">Closed</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-700 mt-8 pt-8 text-center text-sm">
            <p>© {new Date().getFullYear()} Dentics Moora. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
