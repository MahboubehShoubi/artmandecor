import Header from "@/layout/Header";
import Footer from "@/layout/Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Header
        imgheader="/images/background/about.png"
        part1="ABOUT"
        part2="US"
        part3="ABOUT US"
      />
      <div>{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
