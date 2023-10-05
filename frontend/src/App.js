import { Box, createTheme, responsiveFontSizes } from "@mui/material";
import Dashboard from "./pages/Dashboard";
import Experience from "./pages/Experience";
import React from "react";
import About from "./pages/About";

import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import Work from "./pages/Work";
import Header from "./pages/Header";
import Footer from "./pages/Footer";
import { ThemeProvider } from "@emotion/react";
import Technologies from "./pages/Technologies";
import Slider from "./pages/Slider";
import Projects from "./pages/Projects";
let theme = createTheme();
theme = responsiveFontSizes(theme);

function App() {
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <Header />
        <Dashboard />
        <Technologies />
        <About />
        <Experience />
        <Work />
        <Skills />
        <Contact />
        <Footer />
        {/* <Slider /> */}
        {/* <Projects /> */}
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
