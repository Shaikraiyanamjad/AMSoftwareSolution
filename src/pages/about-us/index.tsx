import Topbar from "@/components/Topbar.tsx";
import Header from "@/components/Header.tsx";
import AboutSection from "@/components/AboutSection.tsx";
import Footer from "@/components/Footer.tsx";

const About = () => {
  return (
    <>
      <Topbar isVisible={true} />
      <Header topbarVisible={true} />
     <div className="pt-20"> <AboutSection /></div>
      <Footer />
    </>
  );
};

export default About;
