import { Box } from "@mui/material";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Experience from "./pages/Experience";
import React from "react";
import About from "./pages/About";

import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import Work from "./pages/Work";
import Header from "./pages/Header";
import Footer from "./pages/Footer";

function App() {
  return (
    <React.Fragment>
      <Header />
      <Dashboard />
      <About />
      <Experience />
      <Work />
      <Skills />
      <Contact />
      <Footer />
    </React.Fragment>
  );
}

export default App;
