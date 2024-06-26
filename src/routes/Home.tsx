//View
import LandingPage from "@/routes/LandingPage";
import Header from "@/layout/Header";
import Projects from "./Projects";
import About from "./About";
import Technologies from "./Technologies";
import Footer from "./Footer";

const Home = () => {
  return (
    <div className=" w-full h-auto flex flex-col overflow-auto snap-y">
      <Header />
      <div className=" w-full h-screen snap-center">
        <LandingPage />
      </div>
      {/* <div className=" w-full h-auto md:h-auto lg:h-auto xl:h-screen snap-center">
        <About />
      </div> */}

      <div className=" w-full h-auto md:h-auto lg:h-auto snap-center">
        <Technologies/>
      </div>
      <div className=" w-full h-auto snap-center">
        <Projects />
      </div>

      <div className=" w-full h-auto">
        <Footer/>
      </div>
    </div>
  );
};

export default Home;
