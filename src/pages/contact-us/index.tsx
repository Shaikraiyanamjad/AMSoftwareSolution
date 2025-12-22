import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer.tsx";
import Header from "@/components/Header.tsx";
import Topbar from "@/components/Topbar.tsx";

const Contact = () => {
    return (
    <>
      <Topbar isVisible={true} />
      <Header topbarVisible={true} />
      <div className="pt-20"><ContactSection/></div>
      <Footer />
    </>
  );
};

export default Contact;
