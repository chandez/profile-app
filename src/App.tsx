import { Route, Routes } from "react-router-dom";

import Home from "./pages/home/home";
import Contact from "./pages/contact/contact";

import "./App.scss";

import Header from "./structure/header/header";
import Resume from "./pages/resume/resume";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default App;
