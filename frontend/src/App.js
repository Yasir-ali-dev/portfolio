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

let theme = createTheme();
theme = responsiveFontSizes(theme);

function App() {
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <Header />
        <Dashboard />
        <About />
        <Experience />
        <Work />
        <Skills />
        <Contact />
        <Footer />
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
