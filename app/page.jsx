// import Navbar from '@/components/Navbar'
// import Hero from '@/components/Hero'
import About from '@/components/About'
import Packages from '@/components/Packages'
import WhyChooseUs from '@/components/WhyChooseUs'
import Testimonials from '@/components/Testimonials'
// import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="bg-white">
      {/* NAV BAR */}
      {/* <Navbar /> */}
      
      {/* Hero Section with Slider */}
      {/* <Hero /> */}

      {/* About Us Section */}
      <About />

      {/* Special Tour Packages */}
      <Packages />

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* Testimonials */}
      <Testimonials />

      {/* Footer */}
      {/* <Footer /> */}
    </div>
  )
}
