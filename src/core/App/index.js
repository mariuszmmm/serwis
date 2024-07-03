import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./Header";
import { About } from "../../features/About";
import { Home } from "../../features/Home";
import { Services } from "../../features/Services";
import { Pricing } from "../../features/Pricing";
import { Testimonials } from "../../features/Testimonials";
import { Contact } from "../../features/Contact";
import { Footer } from "./Footer";
import { Decoration } from "./Decoration";
import { Background, Circle, Rotating } from "./Background";

const App = () => {
  return (
    <BrowserRouter>
      {/* <Decoration /> */}
      <Background>
        <Rotating>
          <Circle $top={"0"} $left={"0"}></Circle>
          <Circle $top={"-80%"} $left={"30%"}></Circle>
          <Circle $top={"-20%"} $left={"70%"}></Circle>
        </Rotating>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Background>
    </BrowserRouter>
  );
};

export default App;
