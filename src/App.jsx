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
    const element = document.getElementById(id)
    if (element) {
      const offset = 64
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' })
    }
    setMobileMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header/Navigation */}
      <header className={`fixed w-full top-0 z-50 transition-all duration-200 ${
        scrolled ? 'bg-white border-b border-neutral-200' : 'bg-white/95 backdrop-blur-sm border-b border-transparent'
      }`}>
        <nav className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="font-display text-2xl md:text-3xl font-bold text-brand-800">Dentics Moora</h1>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection('home')}
                className="text-neutral-700 hover:text-brand-800 font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 rounded-md px-2 py-1"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-neutral-700 hover:text-brand-800 font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 rounded-md px-2 py-1"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="text-neutral-700 hover:text-brand-800 font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 rounded-md px-2 py-1"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-neutral-700 hover:text-brand-800 font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 rounded-md px-2 py-1"
              >
                Contact
              </button>
              <a
                href="https://appointments.praktika.net.au/online-booking/step1?Apikey=7b7fc1d0-f42c-4769-a7df-ccf9bf953ff4"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-xl bg-accent-600 hover:bg-accent-700 text-white px-5 py-2 font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 focus-visible:ring-offset-2"
              >
                Book Online
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-neutral-700 hover:text-brand-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 rounded-md"
              aria-label="Toggle menu"
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
            <div className="md:hidden pb-4 border-t border-neutral-100 mt-2 pt-4">
              <div className="flex flex-col space-y-3">
                <button
                  onClick={() => scrollToSection('home')}
                  className="text-neutral-700 hover:text-brand-800 transition text-left font-medium px-2 py-1 rounded-md hover:bg-neutral-50"
                >
                  Home
                </button>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-neutral-700 hover:text-brand-800 transition text-left font-medium px-2 py-1 rounded-md hover:bg-neutral-50"
                >
                  About
                </button>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-neutral-700 hover:text-brand-800 transition text-left font-medium px-2 py-1 rounded-md hover:bg-neutral-50"
                >
                  Services
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-neutral-700 hover:text-brand-800 transition text-left font-medium px-2 py-1 rounded-md hover:bg-neutral-50"
                >
                  Contact
                </button>
                <a
                  href="https://appointments.praktika.net.au/online-booking/step1?Apikey=7b7fc1d0-f42c-4769-a7df-ccf9bf953ff4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-accent-600 text-white px-5 py-2.5 rounded-xl hover:bg-accent-700 transition text-center font-semibold"
                >
                  Book Online
                </a>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="scroll-mt-16 relative overflow-hidden bg-neutral-50 pt-16">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <h2 className="font-display text-5xl md:text-6xl font-bold text-brand-800 mb-6 leading-tight tracking-tight">
                Modern dental care in Moora
              </h2>
              <p className="text-lg md:text-xl text-neutral-700 mb-8 leading-relaxed max-w-prose">
                Comprehensive family dentistry with a gentle, caring approach. From routine check-ups to advanced procedures, we're here for your smile.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a
                  href="https://appointments.praktika.net.au/online-booking/step1?Apikey=7b7fc1d0-f42c-4769-a7df-ccf9bf953ff4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-xl bg-accent-600 hover:bg-accent-700 text-white px-6 py-3.5 font-semibold transition shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 focus-visible:ring-offset-2"
                >
                  Book Online 24/7
                </a>
                <a
                  href="tel:0424000442"
                  className="inline-flex items-center justify-center rounded-xl border-2 border-brand-800 text-brand-800 hover:bg-brand-50 px-6 py-3.5 font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  0424 000 442
                </a>
              </div>

              {/* Emergency Banner */}
              <div className="inline-flex items-center gap-2 bg-accent-50 border border-accent-200 rounded-lg px-4 py-2 text-sm text-accent-900 mb-8">
                <svg className="w-5 h-5 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="font-medium">Emergency patients welcome</span>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap gap-6 text-sm text-neutral-600">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-warning" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span>4.8 on Google</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>AHPRA Registered</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                  <span>HICAPS Available</span>
                </div>
              </div>
            </div>

            {/* Right Image Placeholder */}
            <div className="relative hidden md:block">
              <div className="relative w-full h-[460px] bg-gradient-to-br from-brand-100 to-accent-100 rounded-2xl shadow-card overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-8">
                    <svg className="w-24 h-24 mx-auto mb-4 text-brand-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="text-neutral-500 text-sm">Add clinic photo here</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="scroll-mt-16 py-24 md:py-32 bg-white">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Image */}
            <div className="relative order-2 md:order-1">
              <div className="relative w-full h-[400px] bg-gradient-to-br from-accent-100 to-brand-100 rounded-2xl shadow-card overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-8">
                    <svg className="w-20 h-20 mx-auto mb-4 text-brand-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    <p className="text-neutral-500 text-sm">Add Dr. Byun photo here</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="order-1 md:order-2">
              <div className="inline-flex items-center gap-2 bg-accent-50 text-accent-800 px-3 py-1 rounded-full text-sm font-medium mb-4">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Principal Dentist
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-800 mb-6 leading-tight">
                Meet Dr. Hosa Byun
              </h2>
              <div className="space-y-4 text-neutral-700 text-lg leading-relaxed">
                <p>
                  Welcome to Dentics Moora! I'm dedicated to providing exceptional dental care to the Moora community and surrounding districts.
                </p>
                <p>
                  With a passion for modern dentistry and a commitment to patient comfort, I strive to make every visit a positive experience. Whether you need a routine cleaning or a complex procedure, you can trust that you're in capable, caring hands.
                </p>
              </div>

              {/* Qualifications */}
              <div className="mt-8 space-y-3">
                <h3 className="text-lg font-semibold text-brand-800 mb-4">Qualifications & Memberships</h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-accent-50 flex items-center justify-center">
                      <svg className="w-5 h-5 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-neutral-900">AHPRA Registered</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-accent-50 flex items-center justify-center">
                      <svg className="w-5 h-5 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-neutral-900">ADA Member</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-accent-50 flex items-center justify-center">
                      <svg className="w-5 h-5 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-neutral-900">Continuing CPD</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-accent-50 flex items-center justify-center">
                      <svg className="w-5 h-5 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-neutral-900">Implant Qualified</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Philosophy */}
              <div className="mt-8 p-6 bg-brand-50 border border-brand-100 rounded-xl">
                <h3 className="text-lg font-semibold text-brand-800 mb-2">Our Philosophy</h3>
                <p className="text-neutral-700">
                  Modern dentistry with a personal touch - combining advanced techniques with genuine care for our patients' wellbeing and comfort.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="scroll-mt-16 py-24 md:py-32 bg-neutral-50">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-800 mb-4">
              Comprehensive Dental Services
            </h2>
            <p className="text-lg text-neutral-700">
              From preventative care to advanced procedures, we offer complete dental solutions for the whole family.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Service Card 1 */}
            <article className="bg-white hover:bg-white border border-neutral-200 hover:border-accent-200 rounded-2xl p-6 transition hover:shadow-card group">
              <div className="w-12 h-12 rounded-xl bg-accent-50 group-hover:bg-accent-100 text-accent-700 flex items-center justify-center mb-4 transition">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-brand-800 mb-2">Check-ups & Cleaning</h3>
              <p className="text-neutral-700 leading-relaxed">
                Regular examinations and professional cleaning to maintain optimal oral health and prevent problems.
              </p>
            </article>

            {/* Service Card 2 */}
            <article className="bg-white hover:bg-white border border-neutral-200 hover:border-accent-200 rounded-2xl p-6 transition hover:shadow-card group">
              <div className="w-12 h-12 rounded-xl bg-accent-50 group-hover:bg-accent-100 text-accent-700 flex items-center justify-center mb-4 transition">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-brand-800 mb-2">Fillings & Restorations</h3>
              <p className="text-neutral-700 leading-relaxed">
                Tooth-colored composite fillings to restore cavities and damaged teeth with natural-looking results.
              </p>
            </article>

            {/* Service Card 3 */}
            <article className="bg-white hover:bg-white border border-neutral-200 hover:border-accent-200 rounded-2xl p-6 transition hover:shadow-card group">
              <div className="w-12 h-12 rounded-xl bg-accent-50 group-hover:bg-accent-100 text-accent-700 flex items-center justify-center mb-4 transition">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-brand-800 mb-2">Crowns & Bridges</h3>
              <p className="text-neutral-700 leading-relaxed">
                Durable, custom-made crowns and bridges to restore damaged teeth or replace missing ones.
              </p>
            </article>

            {/* Service Card 4 */}
            <article className="bg-white hover:bg-white border border-neutral-200 hover:border-accent-200 rounded-2xl p-6 transition hover:shadow-card group">
              <div className="w-12 h-12 rounded-xl bg-accent-50 group-hover:bg-accent-100 text-accent-700 flex items-center justify-center mb-4 transition">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-brand-800 mb-2">Dental Implants</h3>
              <p className="text-neutral-700 leading-relaxed">
                Advanced implant surgery for permanent tooth replacement - the most natural solution available.
              </p>
            </article>

            {/* Service Card 5 */}
            <article className="bg-white hover:bg-white border border-neutral-200 hover:border-accent-200 rounded-2xl p-6 transition hover:shadow-card group">
              <div className="w-12 h-12 rounded-xl bg-accent-50 group-hover:bg-accent-100 text-accent-700 flex items-center justify-center mb-4 transition">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-brand-800 mb-2">Dentures</h3>
              <p className="text-neutral-700 leading-relaxed">
                Custom-fitted partial or full dentures to restore your smile and improve quality of life.
              </p>
            </article>

            {/* Service Card 6 */}
            <article className="bg-white hover:bg-white border border-neutral-200 hover:border-accent-200 rounded-2xl p-6 transition hover:shadow-card group">
              <div className="w-12 h-12 rounded-xl bg-accent-50 group-hover:bg-accent-100 text-accent-700 flex items-center justify-center mb-4 transition">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-brand-800 mb-2">Extractions</h3>
              <p className="text-neutral-700 leading-relaxed">
                Gentle tooth extractions when necessary, including wisdom teeth removal with care and precision.
              </p>
            </article>
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <p className="text-neutral-700 mb-6 max-w-2xl mx-auto">
              Not sure which service you need? We'll assess your dental health and recommend the best treatment plan.
            </p>
            <a
              href="https://appointments.praktika.net.au/online-booking/step1?Apikey=7b7fc1d0-f42c-4769-a7df-ccf9bf953ff4"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-xl bg-accent-600 hover:bg-accent-700 text-white px-6 py-3 font-semibold transition shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 focus-visible:ring-offset-2"
            >
              Schedule a Consultation
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-800 mb-4">
              What Our Patients Say
            </h2>
            <p className="text-lg text-neutral-700">
              Trusted by families across Moora and surrounding districts
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Testimonial 1 */}
            <figure className="bg-neutral-50 rounded-2xl p-6 border border-neutral-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent-400 to-brand-400 flex items-center justify-center text-white font-semibold">
                  SM
                </div>
                <div>
                  <figcaption className="font-semibold text-brand-800">Sarah M.</figcaption>
                  <div className="flex items-center gap-1">
                    <div className="flex text-warning text-sm">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-xs text-neutral-600 ml-1">Moora</span>
                  </div>
                </div>
              </div>
              <blockquote className="text-neutral-700 leading-relaxed">
                "Dr. Byun is fantastic! The clinic is modern and clean, and the staff are so welcoming. Best dental experience I've had."
              </blockquote>
            </figure>

            {/* Testimonial 2 */}
            <figure className="bg-neutral-50 rounded-2xl p-6 border border-neutral-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-400 to-accent-400 flex items-center justify-center text-white font-semibold">
                  JW
                </div>
                <div>
                  <figcaption className="font-semibold text-brand-800">James W.</figcaption>
                  <div className="flex items-center gap-1">
                    <div className="flex text-warning text-sm">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-xs text-neutral-600 ml-1">Moora</span>
                  </div>
                </div>
              </div>
              <blockquote className="text-neutral-700 leading-relaxed">
                "Finally, quality dental care close to home. The online booking system makes it so easy to schedule appointments."
              </blockquote>
            </figure>

            {/* Testimonial 3 */}
            <figure className="bg-neutral-50 rounded-2xl p-6 border border-neutral-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent-400 to-brand-500 flex items-center justify-center text-white font-semibold">
                  LK
                </div>
                <div>
                  <figcaption className="font-semibold text-brand-800">Linda K.</figcaption>
                  <div className="flex items-center gap-1">
                    <div className="flex text-warning text-sm">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-xs text-neutral-600 ml-1">Moora</span>
                  </div>
                </div>
              </div>
              <blockquote className="text-neutral-700 leading-relaxed">
                "Gentle, professional, and thorough. Dr. Byun takes the time to explain everything and makes sure you're comfortable throughout."
              </blockquote>
            </figure>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="scroll-mt-16 py-24 md:py-32 bg-neutral-50">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-800 mb-4">
              Visit Our Clinic
            </h2>
            <p className="text-lg text-neutral-700">
              Conveniently located in the heart of Moora, serving the Wheatbelt region
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-brand-800 mb-6">Get In Touch</h3>
                <div className="space-y-4">
                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-accent-50 flex items-center justify-center">
                      <svg className="w-5 h-5 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-brand-800">Phone</p>
                      <a href="tel:0424000442" className="text-accent-600 hover:text-accent-700 transition">
                        0424 000 442
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-accent-50 flex items-center justify-center">
                      <svg className="w-5 h-5 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-brand-800">Email</p>
                      <a href="mailto:faisalssa@yahoo.com" className="text-accent-600 hover:text-accent-700 transition">
                        faisalssa@yahoo.com
                      </a>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-accent-50 flex items-center justify-center">
                      <svg className="w-5 h-5 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-brand-800">Address</p>
                      <a
                        href="https://www.google.com/maps/search/?api=1&query=394+Dandaragan+Road+Moora+WA+6510"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent-600 hover:text-accent-700 transition"
                      >
                        394 Dandaragan Road<br />
                        Moora, WA 6510
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div>
                <h3 className="text-xl font-semibold text-brand-800 mb-4">Opening Hours</h3>
                <div className="bg-white border border-neutral-200 rounded-xl p-6 space-y-2">
                  <div className="flex justify-between">
                    <span className="text-neutral-700">Monday - Friday</span>
                    <span className="font-medium text-brand-800">9:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-700">Saturday</span>
                    <span className="font-medium text-brand-800">By Appointment</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-700">Sunday</span>
                    <span className="font-medium text-brand-800">Closed</span>
                  </div>
                  <div className="pt-3 mt-3 border-t border-neutral-200">
                    <p className="text-sm text-accent-700 font-medium">Emergency appointments available</p>
                  </div>
                </div>
              </div>

              {/* Book Online CTA */}
              <a
                href="https://appointments.praktika.net.au/online-booking/step1?Apikey=7b7fc1d0-f42c-4769-a7df-ccf9bf953ff4"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-accent-600 hover:bg-accent-700 text-white text-center px-6 py-4 rounded-xl font-semibold transition shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 focus-visible:ring-offset-2"
              >
                Book Your Appointment Online
              </a>
            </div>

            {/* Map */}
            <div className="h-[500px] bg-neutral-200 rounded-2xl overflow-hidden shadow-card">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3436.8634563829375!2d116.01112!3d-30.63966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2bd8b0f0f0f0f0f0%3A0x0!2zMzDCsDM4JzIyLjgiUyAxMTbCsDAwJzQwLjAiRQ!5e0!3m2!1sen!2sau!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Dentics Moora Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-neutral-900 text-neutral-300 py-12">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div>
              <h3 className="font-display text-2xl font-bold text-white mb-4">Dentics Moora</h3>
              <p className="text-neutral-400 mb-4">
                Modern dental care with a personal touch, serving Moora and the Wheatbelt region.
              </p>
              <div className="flex gap-4">
                <a href="tel:0424000442" className="text-neutral-400 hover:text-white transition" aria-label="Phone">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </a>
                <a href="mailto:faisalssa@yahoo.com" className="text-neutral-400 hover:text-white transition" aria-label="Email">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <button onClick={() => scrollToSection('home')} className="text-neutral-400 hover:text-white transition">
                    Home
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('about')} className="text-neutral-400 hover:text-white transition">
                    About Dr. Byun
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('services')} className="text-neutral-400 hover:text-white transition">
                    Services
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('contact')} className="text-neutral-400 hover:text-white transition">
                    Contact Us
                  </button>
                </li>
                <li>
                  <a
                    href="https://appointments.praktika.net.au/online-booking/step1?Apikey=7b7fc1d0-f42c-4769-a7df-ccf9bf953ff4"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent-400 hover:text-accent-300 transition font-medium"
                  >
                    Book Appointment
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-white font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-neutral-400">
                <p>394 Dandaragan Road</p>
                <p>Moora, WA 6510</p>
                <p className="pt-2">
                  <a href="tel:0424000442" className="hover:text-white transition">
                    0424 000 442
                  </a>
                </p>
                <p>
                  <a href="mailto:faisalssa@yahoo.com" className="hover:text-white transition">
                    faisalssa@yahoo.com
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-neutral-800 text-center text-neutral-500 text-sm">
            <p>&copy; {new Date().getFullYear()} Dentics Moora. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App