import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./Header";
import { About } from "../../features/About";
import { Home } from "../../features/Home";
import { Services } from "../../features/Services";
import { Pricing } from "../../features/Pricing";
import { Testimonials } from "../../features/Testimonials";
import { Contact } from "../../features/Contact";
import { Footer } from "./Footer";
import { Background } from "./Background";

const App = () => {
  return (
    <Router>
      <Background />
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/o-nas" element={<About />} />
        <Route path="/uslugi" element={<Services />} />
        <Route path="/cennik" element={<Pricing />} />
        <Route path="/opinie" element={<Testimonials />} />
        <Route path="/kontakt" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
