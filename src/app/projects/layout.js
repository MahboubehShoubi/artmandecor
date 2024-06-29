import Header from "@/layout/Header";
import Footer from "@/layout/Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Header
        imgheader="/images/background/about.png"
        part1="OUR"
        part2="PROJECTS"
        part3="OUR PROJECTS"
      />
      <div>{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
