import BlogSection from "@/components/BlogSection.tsx";
import Footer from "@/components/Footer.tsx";
import Topbar from "@/components/Topbar.tsx";
import Header from "@/components/Header.tsx";

const Blog = () => {
   return (
    <>
      <Topbar isVisible={true} />
      <Header topbarVisible={true} />
      <div className="pt-20"><BlogSection  /></div>
      <Footer />
    </>
   );
};

export default Blog;
