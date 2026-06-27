import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import FloatingButtons from "../components/FloatingButtons";
import Features from "../components/Features";
import About from "../components/About";
import Treatments from "../components/Treatments";
import Appointment from "../components/Appointment";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Treatments></Treatments>
      <Features></Features>
      <Appointment></Appointment>
      <Testimonials></Testimonials>
      <About></About>
      <Contact></Contact>
      <Footer></Footer>
      <FloatingButtons />
      
    </>
  );
};

export default Home;