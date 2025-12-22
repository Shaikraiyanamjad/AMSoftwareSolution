import Footer from "@/components/Footer.tsx";
import Header from "@/components/Header.tsx";
import PortfolioSection from "@/components/PortfolioSection.tsx";
import Topbar from "@/components/Topbar.tsx";

const Portfolio = () => {
    return (
    <>
      <Topbar isVisible={true} />
      <Header topbarVisible={true} />
      <div className="pt-20"><PortfolioSection /></div>
      <Footer />
    </>
  );
};

export default Portfolio;
