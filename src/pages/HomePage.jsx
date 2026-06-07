import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import Skills from "../components/Skills/Skills";
import Services from "../components/Services/Services";
import Projects from "../components/Projects/Projects";
import Experience from "../components/Experience/Experience";
import Education from "../components/Education/Education";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import AchievementsAndCertifications from "../components/AchievementsAndCertifications/AchievementsAndCertifications";
import CodingProfiles from "../components/CodingProfile/CodingProfiles";

const HomePage = () => {
  return (
    <div
      className="
      min-h-screen
      bg-slate-50
      dark:bg-[#020617]
      text-slate-900
      dark:text-white
      transition-all duration-500
    "
    >
      {/* Background Glow Effects */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div
          className="
    absolute
    top-[-150px]
    left-[-150px]
    w-[300px]
    h-[300px]
    sm:w-[500px]
    sm:h-[500px]
    bg-[#19A7CE]/25
    rounded-full
    blur-[120px]
    "
        />

        <div
          className="
    absolute
    bottom-[-150px]
    right-[-150px]
    w-[300px]
    h-[300px]
    sm:w-[500px]
    sm:h-[500px]
    bg-[#146C94]/25
    rounded-full
    blur-[120px]
    "
        />
      </div>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Services />
      <Projects />
      <Experience />
      <Education />
      <AchievementsAndCertifications />
      <CodingProfiles />
      <Contact />
      <Footer />
    </div>
  );
};

export default HomePage;
