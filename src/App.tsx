import { Route, Routes } from "react-router";

import Contact from "./pages/contact/contact";
import Home from "./pages/home/home";

import "./App.scss";

import Resume from "./pages/resume/resume";
import Skills from "./pages/skills/skills";
import Header from "./structure/header/header";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default App;
