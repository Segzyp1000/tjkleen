import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Showcase from "./components/Showcase";
import HowItWorks from "./components/HowItWork";
import Testimonial from "./components/Testimonial";
import Footer from "./components/Footer";


function App() {
  return (
      <div className="text-3xl text-blue-600">
        <Navbar />
        <Showcase />
        <Services />
        <HowItWorks/>
        <Testimonial />
        <Footer />
      </div>
  );
};

export default App;
