import { useEffect, useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Stats from './components/Stats'
import About from './components/About'
import Services from './components/Services'
import Projects from './components/Projects'
import Technologies from './components/Technologies'
import Process from './components/Process'
import Testimonials from './components/Testimonials'
import SocialLinks from './components/SocialLinks'
import Contact from './components/Contact'
import CTA from './components/CTA'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'
import WhatsAppButton from './components/WhatsAppButton'
import LoadingScreen from './components/LoadingScreen'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen bg-white dark:bg-dark-950 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <LoadingScreen loading={loading} />
      <Header />
      <main>
        <Hero />
        <Stats />
        <About />
        <Services />
        <Projects />
        <Technologies />
        <Process />
        <Testimonials />
        <SocialLinks />
        <Contact />
        <CTA />
      </main>
      <Footer />
      <BackToTop />
      <WhatsAppButton />
    </div>
  )
}

export default App