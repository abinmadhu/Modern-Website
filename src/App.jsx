import CaseStudies from "./components/CaseStudies";
import Clients from "./components/Clients";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Process from "./components/Process";
import Proposal from "./components/Proposal";
import { Services } from "./components/Services";
import Team from "./components/Team";
import Testimonials from "./components/Testimonials";
import styles from "./style";

function App() {
  return (
    <div className="overflow-hidden w-full">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <div className={`${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Clients />
          <Services/>
          <Proposal />
          <CaseStudies />
          <Process/>
          <Team/>
          <Testimonials/>
          <Contact />
          
        </div>
      </div>

      <div className={`${styles.paddingX} ${styles.paddingY} ${styles.flexCenter} bg-secondary md:bg-transparent mt-5 md:mt-0 md:pb-0`}>
        <div className={`${styles.boxWidth}`}>
          <Footer />
        </div>
      </div>

    </div>
  );
}

export default App;
