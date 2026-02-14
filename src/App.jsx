import { Routes, Route } from "react-router-dom";
import MainLayer from "./Layer/MainLayer";
import Home from './Page/Home';
import Contact from "./Page/Contact";
import ScrollToHash from "./components/ScrollToHarsh";
import Scheduled from "./Page/Scheduled";

function App() {
  return (
    <>
    <ScrollToHash />  
    <Routes>
      <Route element={<MainLayer />}>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/scheduled" element={<Scheduled />} />
      </Route>
    </Routes>
    </>
  );
}

export default App;