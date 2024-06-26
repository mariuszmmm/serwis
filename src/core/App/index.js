import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import { Example1Page } from "../../features/example1/Example1Page";
import { Example2Page } from "../../features/example2/Example2Page";
import { Wrapper } from "./styled";
import { Navigation } from "./Navigation";
import { AboutPage } from "../../features/AboutPage";
import { Example1PageId } from "../../features/example1/Example1Page/Example1PageId";

const App = () => {
  return (
    <HashRouter>
      <Navigation />
      <Wrapper>
        <Routes>
          <Route path="/page1/:id" element={<Example1PageId />} />
          <Route path="/page2" element={<Example2Page />} />
          <Route path="/page1" element={<Example1Page />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/" element={<Navigate to="/page1" />} />
        </Routes>
      </Wrapper>
    </HashRouter>
  );
};

export default App;
