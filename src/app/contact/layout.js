import Header from "@/layout/Header";
import Footer from "@/layout/Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Header
        imgheader="/images/background/about.png"
        part1="CONTACT"
        part2="US"
        part3="CONTACT US"
      />
      <div>{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
