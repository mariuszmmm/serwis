import { HashRouter, Route, Routes } from "react-router-dom";
import { Header } from "./Header";
import { About } from "../../features/About";
import { Home } from "../../features/Home";
import { Services } from "../../features/Services";
import { Pricing } from "../../features/Pricing";
import { Testimonials } from "../../features/Testimonials";
import { Contact } from "../../features/Contact";
import { Footer } from "./Footer";
import { Decoration } from "./Decoration";

const App = () => {
  return (
    <HashRouter>
      <Decoration />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
};

export default App;
