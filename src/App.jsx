import { useState, useEffect } from 'react'

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [bookingModalOpen, setBookingModalOpen] = useState(false)
  const [activeService, setActiveService] = useState(null)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setMobileMenuOpen(false)
    }
  }

  const services = [
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Preventative Care',
      description: 'Comprehensive examinations, professional cleaning, and oral health education to keep your smile healthy.',
      details: ['Dental Examinations', 'Scale & Clean', 'Fluoride Treatment', 'Oral Cancer Screening']
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
        </svg>
      ),
      title: 'Restorative Dentistry',
      description: 'Natural-looking fillings, crowns, and bridges to restore function and aesthetics to damaged teeth.',
      details: ['Composite Fillings', 'Ceramic Crowns', 'Dental Bridges', 'Inlays & Onlays']
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'Emergency Dental',
      description: 'Prompt care for dental emergencies including severe pain, trauma, and urgent treatment needs.',
      details: ['Same-Day Appointments', 'Pain Relief', 'Trauma Management', 'After-Hours Support']
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      title: 'Dental Implants',
      description: 'Permanent tooth replacement solution that looks, feels, and functions like natural teeth.',
      details: ['Implant Surgery', 'Bone Grafting', 'Implant Crowns', 'Full Arch Restoration']
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      title: 'Cosmetic Dentistry',
      description: 'Transform your smile with professional whitening, veneers, and smile makeovers.',
      details: ['Teeth Whitening', 'Porcelain Veneers', 'Smile Design', 'Gum Contouring']
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: 'Family Dentistry',
      description: 'Comprehensive dental care for all ages, from children to seniors, in a welcoming environment.',
      details: ['Pediatric Care', 'Teen Dentistry', 'Adult Services', 'Senior Care']
    }
  ]

  const testimonials = [
    {
      name: 'Sarah Mitchell',
      location: 'Moora',
      rating: 5,
      text: 'Dr. Byun is exceptional! The practice is modern, clean, and the team makes you feel genuinely welcome. Best dental experience I have ever had.',
      date: 'October 2024'
    },
    {
      name: 'James Wilson',
      location: 'Moora',
      rating: 5,
      text: 'Finally, quality dental care close to home. The online booking system is seamless, and the staff are incredibly professional. Highly recommend!',
      date: 'September 2024'
    },
    {
      name: 'Linda Kowalski',
      location: 'Moora',
      rating: 5,
      text: 'Gentle, professional, and thorough. Dr. Byun takes time to explain everything and ensures you are comfortable throughout the entire process.',
      date: 'November 2024'
    },
    {
      name: 'Michael Chen',
      location: 'Dalwallinu',
      rating: 5,
      text: 'Traveled from Dalwallinu and it was absolutely worth it. Top-notch care, modern equipment, and a friendly atmosphere. Will not go anywhere else!',
      date: 'October 2024'
    }
  ]

  return (
    <div className="min-h-screen bg-[var(--warm-white)]">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center gap-3 group cursor-pointer">
              <div className="relative">
                <svg className="w-10 h-10 text-[var(--terracotta)] transition-transform group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5-9c.83 0 1.5-.67 1.5-1.5S7.83 8 7 8s-1.5.67-1.5 1.5S6.17 11 7 11zm10 0c.83 0 1.5-.67 1.5-1.5S17.83 8 17 8s-1.5.67-1.5 1.5S16.17 11 17 11zm-5 5.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"/>
                </svg>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-[var(--sage)] rounded-full animate-pulse"></div>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-[var(--charcoal)]" style={{ fontFamily: 'var(--font-display)' }}>
                  Dentics Moora
                </h1>
                <p className="text-xs text-[var(--soft-gray)]">Quality Dental Care</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <button
                onClick={() => scrollToSection('about')}
                className="text-[var(--charcoal)] hover:text-[var(--terracotta)] transition-colors font-medium relative group"
              >
                About
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[var(--terracotta)] transition-all group-hover:w-full"></span>
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="text-[var(--charcoal)] hover:text-[var(--terracotta)] transition-colors font-medium relative group"
              >
                Services
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[var(--terracotta)] transition-all group-hover:w-full"></span>
              </button>
              <button
                onClick={() => scrollToSection('testimonials')}
                className="text-[var(--charcoal)] hover:text-[var(--terracotta)] transition-colors font-medium relative group"
              >
                Testimonials
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[var(--terracotta)] transition-all group-hover:w-full"></span>
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-[var(--charcoal)] hover:text-[var(--terracotta)] transition-colors font-medium relative group"
              >
                Contact
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[var(--terracotta)] transition-all group-hover:w-full"></span>
              </button>
              <button
                onClick={() => setBookingModalOpen(true)}
                className="bg-[var(--terracotta)] hover:bg-[var(--deep-teal)] text-white px-6 py-3 rounded-full font-semibold transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Book Now
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-[var(--charcoal)]"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
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
          <div className="md:hidden bg-white border-t border-[var(--cream)] shadow-xl">
            <div className="px-4 py-6 space-y-4">
              <button
                onClick={() => scrollToSection('about')}
                className="block w-full text-left px-4 py-3 text-[var(--charcoal)] hover:bg-[var(--cream)] rounded-lg transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="block w-full text-left px-4 py-3 text-[var(--charcoal)] hover:bg-[var(--cream)] rounded-lg transition-colors"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('testimonials')}
                className="block w-full text-left px-4 py-3 text-[var(--charcoal)] hover:bg-[var(--cream)] rounded-lg transition-colors"
              >
                Testimonials
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left px-4 py-3 text-[var(--charcoal)] hover:bg-[var(--cream)] rounded-lg transition-colors"
              >
                Contact
              </button>
              <button
                onClick={() => {
                  setBookingModalOpen(true)
                  setMobileMenuOpen(false)
                }}
                className="block w-full bg-[var(--terracotta)] text-white px-6 py-3 rounded-full font-semibold text-center transition-colors hover:bg-[var(--deep-teal)]"
              >
                Book Now
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center gradient-mesh texture-overlay overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-64 h-64 bg-[var(--terracotta)] opacity-10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[var(--deep-teal)] opacity-10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-[var(--sage)] opacity-10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 animate-fadeInUp">
              <div className="inline-block">
                <span className="bg-[var(--terracotta)]/10 text-[var(--terracotta)] border border-[var(--terracotta)]/20 px-4 py-2 rounded-full text-sm font-medium">
                  ✨ Serving Moora Since 2023
                </span>
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight text-[var(--charcoal)]" style={{ fontFamily: 'var(--font-display)' }}>
                Your Smile,
                <br />
                <span className="text-[var(--terracotta)]">Our Priority</span>
              </h1>

              <p className="text-lg sm:text-xl text-[var(--soft-gray)] leading-relaxed max-w-xl">
                Experience modern dental care with a personal touch. Dr. Hosa Byun and our dedicated team provide comprehensive family dentistry with compassion and excellence.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <a
                  href="tel:0424000442"
                  className="group bg-[var(--deep-teal)] hover:bg-[var(--terracotta)] text-white px-8 py-4 rounded-full font-semibold transition-all transform hover:scale-105 shadow-lg hover:shadow-2xl flex items-center gap-3"
                >
                  <svg className="w-5 h-5 transition-transform group-hover:rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  0424 000 442
                </a>
                <button
                  onClick={() => setBookingModalOpen(true)}
                  className="bg-white hover:bg-[var(--cream)] text-[var(--charcoal)] px-8 py-4 rounded-full font-semibold transition-all transform hover:scale-105 shadow-lg border border-[var(--charcoal)]/10"
                >
                  Book Online
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="grid grid-cols-3 gap-6 pt-8 animate-fadeIn" style={{ animationDelay: '0.3s' }}>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[var(--terracotta)]" style={{ fontFamily: 'var(--font-display)' }}>500+</div>
                  <div className="text-sm text-[var(--soft-gray)]">Happy Patients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[var(--terracotta)]" style={{ fontFamily: 'var(--font-display)' }}>4.9★</div>
                  <div className="text-sm text-[var(--soft-gray)]">Google Rating</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[var(--terracotta)]" style={{ fontFamily: 'var(--font-display)' }}>24/7</div>
                  <div className="text-sm text-[var(--soft-gray)]">Emergency Care</div>
                </div>
              </div>
            </div>

            {/* Credentials Card */}
            <div className="hidden lg:block animate-fadeIn" style={{ animationDelay: '0.6s' }}>
              <div className="bg-white/60 backdrop-blur-xl rounded-3xl p-10 border border-[var(--terracotta)]/20 shadow-2xl space-y-6">
                <h3 className="text-2xl font-bold text-[var(--charcoal)]" style={{ fontFamily: 'var(--font-display)' }}>
                  Trusted Excellence
                </h3>

                <div className="space-y-4">
                  {[
                    { icon: '🏥', title: 'AHPRA Registered', desc: 'Fully certified Australian practitioner' },
                    { icon: '🎓', title: 'ADA Member', desc: 'Australian Dental Association' },
                    { icon: '👨‍👩‍👧‍👦', title: 'Family Friendly', desc: 'Care for all ages' },
                    { icon: '💎', title: 'Modern Equipment', desc: 'Latest dental technology' },
                    { icon: '🏆', title: 'HICAPS Available', desc: 'Instant health fund claims' }
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-4 bg-white/80 rounded-xl p-4 hover:shadow-lg transition-all cursor-pointer group"
                    >
                      <span className="text-3xl group-hover:scale-110 transition-transform">{item.icon}</span>
                      <div>
                        <h4 className="font-semibold text-[var(--charcoal)]">{item.title}</h4>
                        <p className="text-sm text-[var(--soft-gray)]">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Doctor Profile */}
            <div className="order-2 lg:order-1">
              <div className="bg-gradient-to-br from-[var(--cream)] to-[var(--sage)]/20 rounded-3xl p-12 relative overflow-hidden">
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-[var(--terracotta)]/10 rounded-full -mr-20 -mt-20"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-[var(--deep-teal)]/10 rounded-full -ml-16 -mb-16"></div>

                <div className="relative text-center space-y-6">
                  <div className="w-56 h-56 bg-gradient-to-br from-[var(--terracotta)]/20 to-[var(--deep-teal)]/20 rounded-full mx-auto flex items-center justify-center border-4 border-white shadow-xl">
                    <div className="w-48 h-48 bg-white rounded-full flex items-center justify-center">
                      <svg className="w-24 h-24 text-[var(--terracotta)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="inline-block bg-[var(--deep-teal)] text-white px-4 py-1.5 rounded-full text-sm font-medium">
                      Principal Dentist
                    </div>
                    <h3 className="text-4xl font-bold text-[var(--charcoal)]" style={{ fontFamily: 'var(--font-display)' }}>
                      Dr. Hosa Byun
                    </h3>
                    <p className="text-[var(--soft-gray)] font-medium">BDS, AHPRA Registered</p>
                  </div>

                  <div className="grid grid-cols-2 gap-3 pt-6">
                    {['AHPRA Certified', 'ADA Member', 'CPD Qualified', 'Implant Specialist'].map((cert, i) => (
                      <div key={i} className="bg-white/80 backdrop-blur rounded-lg p-3 text-sm font-medium text-[var(--charcoal)] shadow">
                        {cert}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* About Content */}
            <div className="order-1 lg:order-2 space-y-8">
              <div className="space-y-4">
                <span className="inline-block bg-[var(--terracotta)]/10 text-[var(--terracotta)] px-4 py-2 rounded-full text-sm font-medium">
                  About Our Practice
                </span>
                <h2 className="text-4xl sm:text-5xl font-bold text-[var(--charcoal)]" style={{ fontFamily: 'var(--font-display)' }}>
                  Excellence in
                  <br />
                  Dental Care
                </h2>
              </div>

              <div className="space-y-6 text-lg text-[var(--soft-gray)] leading-relaxed">
                <p>
                  Welcome to Dentics Moora! Dr. Hosa Byun is dedicated to providing exceptional dental care to the Moora community and surrounding districts.
                </p>
                <p>
                  With a passion for modern dentistry and a commitment to patient comfort, we strive to make every visit a positive experience. Whether you need a routine cleaning or a complex procedure, you can trust that you're in capable, caring hands.
                </p>
              </div>

              {/* Philosophy Box */}
              <div className="border-l-4 border-[var(--terracotta)] bg-[var(--cream)]/50 rounded-r-2xl p-8">
                <h3 className="text-2xl font-bold text-[var(--charcoal)] mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                  Our Philosophy
                </h3>
                <p className="text-[var(--soft-gray)] leading-relaxed">
                  Modern dentistry with a personal touch — combining advanced techniques with genuine care for our patients' wellbeing and comfort.
                </p>
              </div>

              {/* Why Choose Us */}
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  'Personalized Treatment Plans',
                  'State-of-the-Art Technology',
                  'Flexible Payment Options',
                  'Emergency Appointments Available'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <svg className="w-6 h-6 text-[var(--terracotta)] flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                    <span className="font-medium text-[var(--charcoal)]">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 lg:py-32 gradient-mesh">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 space-y-6">
            <span className="inline-block bg-[var(--terracotta)]/10 text-[var(--terracotta)] px-4 py-2 rounded-full text-sm font-medium">
              Our Services
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-[var(--charcoal)]" style={{ fontFamily: 'var(--font-display)' }}>
              Comprehensive
              <br />
              Dental Solutions
            </h2>
            <p className="text-lg text-[var(--soft-gray)] max-w-2xl mx-auto leading-relaxed">
              From preventative care to advanced procedures, we offer complete dental solutions for the whole family.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all cursor-pointer group border border-[var(--charcoal)]/5 relative overflow-hidden"
                onMouseEnter={() => setActiveService(i)}
                onMouseLeave={() => setActiveService(null)}
              >
                {/* Hover Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--terracotta)]/5 to-[var(--deep-teal)]/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>

                <div className="relative z-10">
                  <div className="text-[var(--terracotta)] mb-6 transform group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>

                  <h3 className="text-2xl font-bold text-[var(--charcoal)] mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                    {service.title}
                  </h3>

                  <p className="text-[var(--soft-gray)] leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Service Details - Show on hover */}
                  <div className={`space-y-2 transition-all ${activeService === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                    <div className="border-t border-[var(--charcoal)]/10 pt-4">
                      {service.details.map((detail, j) => (
                        <div key={j} className="flex items-center gap-2 py-1">
                          <svg className="w-4 h-4 text-[var(--terracotta)]" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                          </svg>
                          <span className="text-sm text-[var(--soft-gray)]">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Box */}
          <div className="mt-16 bg-gradient-to-br from-[var(--deep-teal)] to-[var(--terracotta)] rounded-3xl p-12 text-center text-white shadow-2xl">
            <h3 className="text-3xl font-bold mb-4" style={{ fontFamily: 'var(--font-display)' }}>
              Not Sure Which Service You Need?
            </h3>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Schedule a comprehensive consultation and we'll assess your dental health to recommend the best treatment plan for you.
            </p>
            <button
              onClick={() => setBookingModalOpen(true)}
              className="bg-white text-[var(--deep-teal)] px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-lg"
            >
              Book Consultation
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 space-y-6">
            <span className="inline-block bg-[var(--terracotta)]/10 text-[var(--terracotta)] px-4 py-2 rounded-full text-sm font-medium">
              Patient Reviews
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-[var(--charcoal)]" style={{ fontFamily: 'var(--font-display)' }}>
              What Our Patients Say
            </h2>
            <p className="text-lg text-[var(--soft-gray)]">
              Trusted by families across Moora and the Wheatbelt region
            </p>
          </div>

          {/* Testimonial Carousel */}
          <div className="relative max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-[var(--cream)] to-white rounded-3xl p-12 shadow-xl border border-[var(--charcoal)]/5">
              <div className="text-center space-y-8">
                {/* Stars */}
                <div className="flex justify-center gap-1">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <svg key={i} className="w-8 h-8 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-2xl text-[var(--charcoal)] leading-relaxed" style={{ fontFamily: 'var(--font-display)' }}>
                  "{testimonials[currentTestimonial].text}"
                </blockquote>

                {/* Author */}
                <div className="space-y-2">
                  <p className="font-bold text-xl text-[var(--charcoal)]">
                    {testimonials[currentTestimonial].name}
                  </p>
                  <p className="text-[var(--soft-gray)]">
                    {testimonials[currentTestimonial].location} • {testimonials[currentTestimonial].date}
                  </p>
                </div>

                {/* Dots */}
                <div className="flex justify-center gap-2 pt-6">
                  {testimonials.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentTestimonial(i)}
                      className={`w-3 h-3 rounded-full transition-all ${
                        i === currentTestimonial
                          ? 'bg-[var(--terracotta)] w-8'
                          : 'bg-[var(--charcoal)]/20'
                      }`}
                      aria-label={`Go to testimonial ${i + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={() => setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 bg-white p-4 rounded-full shadow-lg hover:bg-[var(--terracotta)] hover:text-white transition-all hidden lg:block"
              aria-label="Previous testimonial"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 bg-white p-4 rounded-full shadow-lg hover:bg-[var(--terracotta)] hover:text-white transition-all hidden lg:block"
              aria-label="Next testimonial"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Google Reviews Link */}
          <div className="text-center mt-12">
            <a
              href="https://www.google.com/search?q=dentics+moora"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[var(--soft-gray)] hover:text-[var(--terracotta)] transition-colors"
            >
              <span>View all reviews on Google</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 lg:py-32 gradient-mesh">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 space-y-6">
            <span className="inline-block bg-[var(--terracotta)]/10 text-[var(--terracotta)] px-4 py-2 rounded-full text-sm font-medium">
              Get In Touch
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-[var(--charcoal)]" style={{ fontFamily: 'var(--font-display)' }}>
              Visit Our Clinic
            </h2>
            <p className="text-lg text-[var(--soft-gray)]">
              Conveniently located in the heart of Moora
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info Cards */}
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-[var(--charcoal)]/5">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[var(--terracotta)]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-[var(--terracotta)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[var(--charcoal)] mb-2">Location</h3>
                    <p className="text-[var(--charcoal)] font-medium">394 Dandaragan Road</p>
                    <p className="text-[var(--soft-gray)]">Moora, WA 6510</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border border-[var(--charcoal)]/5">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[var(--terracotta)]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-[var(--terracotta)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[var(--charcoal)] mb-2">Contact</h3>
                    <a href="tel:0424000442" className="block text-[var(--terracotta)] hover:text-[var(--deep-teal)] font-bold text-xl mb-1 transition-colors">
                      0424 000 442
                    </a>
                    <a href="mailto:faisalssa@yahoo.com" className="block text-[var(--soft-gray)] hover:text-[var(--terracotta)] transition-colors">
                      faisalssa@yahoo.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border border-[var(--charcoal)]/5">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[var(--terracotta)]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-[var(--terracotta)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-[var(--charcoal)] mb-4">Opening Hours</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center pb-3 border-b border-[var(--charcoal)]/10">
                        <span className="text-[var(--soft-gray)]">Monday - Friday</span>
                        <span className="font-semibold text-[var(--charcoal)]">9:00 AM - 5:00 PM</span>
                      </div>
                      <div className="flex justify-between items-center pb-3 border-b border-[var(--charcoal)]/10">
                        <span className="text-[var(--soft-gray)]">Saturday</span>
                        <span className="font-semibold text-[var(--charcoal)]">By Appointment</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-[var(--soft-gray)]">Sunday</span>
                        <span className="font-semibold text-[var(--charcoal)]">Closed</span>
                      </div>
                    </div>
                    <div className="mt-4 bg-[var(--terracotta)]/10 rounded-xl p-4">
                      <p className="text-sm text-[var(--terracotta)] font-semibold">✨ Emergency appointments available</p>
                    </div>
                  </div>
                </div>
              </div>

              <button
                onClick={() => setBookingModalOpen(true)}
                className="w-full bg-gradient-to-r from-[var(--terracotta)] to-[var(--deep-teal)] text-white px-8 py-5 rounded-2xl font-bold text-lg hover:scale-105 transition-transform shadow-xl"
              >
                Book Your Appointment Now
              </button>
            </div>

            {/* Map */}
            <div className="h-[700px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
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
      <footer className="bg-[var(--charcoal)] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <svg className="w-10 h-10 text-[var(--terracotta)]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5-9c.83 0 1.5-.67 1.5-1.5S7.83 8 7 8s-1.5.67-1.5 1.5S6.17 11 7 11zm10 0c.83 0 1.5-.67 1.5-1.5S17.83 8 17 8s-1.5.67-1.5 1.5S16.17 11 17 11zm-5 5.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"/>
                </svg>
                <div>
                  <h3 className="text-xl font-bold" style={{ fontFamily: 'var(--font-display)' }}>Dentics Moora</h3>
                  <p className="text-sm text-gray-400">Quality Dental Care</p>
                </div>
              </div>
              <p className="text-sm text-gray-400 leading-relaxed">
                Modern dental care with a personal touch, serving Moora and the Wheatbelt region with excellence.
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-lg">Quick Links</h4>
              <div className="space-y-3">
                {['about', 'services', 'testimonials', 'contact'].map((link) => (
                  <button
                    key={link}
                    onClick={() => scrollToSection(link)}
                    className="block text-gray-400 hover:text-[var(--terracotta)] transition-colors capitalize"
                  >
                    {link}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-lg">Contact Info</h4>
              <div className="space-y-3 text-sm">
                <p className="text-gray-400">394 Dandaragan Road<br/>Moora, WA 6510</p>
                <a href="tel:0424000442" className="block text-gray-400 hover:text-[var(--terracotta)] transition-colors">
                  0424 000 442
                </a>
                <a href="mailto:faisalssa@yahoo.com" className="block text-gray-400 hover:text-[var(--terracotta)] transition-colors">
                  faisalssa@yahoo.com
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-lg">Hours</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between text-gray-400">
                  <span>Mon - Fri</span>
                  <span className="text-white">9:00 - 17:00</span>
                </div>
                <div className="flex justify-between text-gray-400">
                  <span>Saturday</span>
                  <span className="text-white">By Appt</span>
                </div>
                <div className="flex justify-between text-gray-400">
                  <span>Sunday</span>
                  <span className="text-white">Closed</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
            <p>© {new Date().getFullYear()} Dentics Moora. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Booking Modal */}
      {bookingModalOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-md w-full p-8 shadow-2xl relative animate-fadeIn">
            <button
              onClick={() => setBookingModalOpen(false)}
              className="absolute top-6 right-6 text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Close modal"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="text-center space-y-6">
              <div className="w-16 h-16 bg-[var(--terracotta)]/10 rounded-full flex items-center justify-center mx-auto">
                <svg className="w-8 h-8 text-[var(--terracotta)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>

              <h3 className="text-3xl font-bold text-[var(--charcoal)]" style={{ fontFamily: 'var(--font-display)' }}>
                Book Appointment
              </h3>

              <p className="text-[var(--soft-gray)]">
                Call us directly to schedule your appointment or discuss your dental needs.
              </p>

              <div className="space-y-4">
                <a
                  href="tel:0424000442"
                  className="flex items-center justify-center gap-3 bg-gradient-to-r from-[var(--terracotta)] to-[var(--deep-teal)] text-white px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-lg"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call 0424 000 442
                </a>

                <a
                  href="mailto:faisalssa@yahoo.com"
                  className="flex items-center justify-center gap-3 bg-[var(--cream)] text-[var(--charcoal)] px-8 py-4 rounded-full font-semibold hover:bg-[var(--sage)]/20 transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Email Us
                </a>
              </div>

              <div className="text-sm text-[var(--soft-gray)] pt-4">
                <p className="font-medium text-[var(--charcoal)] mb-2">Opening Hours:</p>
                <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
                <p>Saturday: By Appointment</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
