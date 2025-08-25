import React from "react";
import { CssBaseline, Box, Container, ThemeProvider, createTheme } from "@mui/material";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

// Define a custom theme (you can tweak colors later)
const theme = createTheme({
  palette: {
    mode: "light", // change to "dark" for dark mode
    primary: {
      main: "#1976d2", // blue (you can change to your brand color)
    },
    secondary: {
      main: "#f50057", // pink
    },
    background: {
      default: "#f9f9f9",
      paper: "#ffffff",
    },
    text: {
      primary: "#222",
      secondary: "#555",
    },
  },
  typography: {
    fontFamily: "Roboto, Arial, sans-serif",
    h1: { fontWeight: 700 },
    h2: { fontWeight: 600 },
    body1: { lineHeight: 1.7 },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* Resets CSS and applies Material UI defaults */}
      <CssBaseline />

      <Box display="flex" flexDirection="column" minHeight="100vh">
        {/* Navbar fixed at top */}
        <header>
          <Navbar />
        </header>

        {/* Main content (auto grows to push footer down) */}
        <Box component="main" flexGrow={1}>
          <Hero />
          <Container maxWidth="lg">
            <About />
            <Projects />
            <Contact />
          </Container>
        </Box>

        {/* Footer always at bottom */}
        <footer>
          <Footer />
        </footer>
      </Box>
    </ThemeProvider>
  );
}

export default App;
