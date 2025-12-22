import ServicesSection from '@/components/ServicesSection.tsx'
import Topbar from '@/components/Topbar.tsx'
import Header from '@/components/Header.tsx'
import Footer from '@/components/Footer.tsx'
const Services = () => {
  return (
    <div>
      <Topbar isVisible={true} />
      <Header topbarVisible={true} />
      <div className="pt-20"><ServicesSection /></div>
      <Footer />
    </div>
  )
}

export default Services;