import React from "react";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
// import About from "./components/about/About";
// import Experience from "./components/experience/Experience";
// import Services from "./components/services/Services";
import Portfolio from "./components/portfolio/Portfolio";
import Footer from "./components/footer/Footer";
import ProfileTabs from "./components/profile/ProfileTabs"

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <ProfileTabs />
      {/* <About />
      <Experience />
      <Services /> */}
      <Portfolio />
      <Footer />
    </>
  );
};

export default App;
