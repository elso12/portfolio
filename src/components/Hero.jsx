import React from "react";
import { Box, Container, Typography, Button, Link, Stack } from "@mui/material";

function Hero() {
  return (
    <Box
      id="hero"
      sx={{
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        background: "linear-gradient(135deg, #1A237E, #4527A0, #283593)", // smoother gradient
        backgroundSize: "400% 400%",
        animation: "gradientShift 12s ease infinite",
        color: "white",
        overflow: "hidden",
        "&:before": {
          // Overlay for readability
          content: '""',
          position: "absolute",
          inset: 0,
          bgcolor: "rgba(0,0,0,0.4)",
          zIndex: 0,
        },
        "@keyframes gradientShift": {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
      }}
    >
      <Container
        maxWidth="md"
        sx={{
          position: "relative",
          zIndex: 1,
          textAlign: "center",
          px: { xs: 3, sm: 6, md: 8 },
        }}
      >
        {/* Heading */}
        <Typography
          variant="h2"
          component="h1"
          fontWeight="bold"
          gutterBottom
          sx={{
            fontSize: { xs: "2.25rem", md: "4rem" },
            letterSpacing: "-0.5px",
            animation: "fadeInUp 1s ease-out",
          }}
        >
          Hi, I'm{" "}
          <Typography
            component="span"
            variant="inherit"
            sx={{
              color: "warning.main",
              textShadow: "0px 4px 12px rgba(0,0,0,0.5)",
            }}
          >
            Elsay Belude
          </Typography>
        </Typography>

        {/* Subtitle */}
        <Typography
          variant="h5"
          component="p"
          sx={{
            fontSize: { xs: "1.25rem", md: "1.75rem" },
            mb: 2,
            fontWeight: 300,
            animation: "fadeInUp 1.2s ease-out",
          }}
        >
          💻 Web Developer • 🎥 Video Editor • 🎨 Graphic Designer
        </Typography>

        {/* Tagline */}
        <Typography
          variant="body1"
          sx={{
            fontSize: { xs: "1rem", md: "1.2rem" },
            mb: 5,
            color: "grey.200",
            animation: "fadeInUp 1.3s ease-out",
          }}
        >
          I help ideas come alive through modern web experiences, creative media, and design.
        </Typography>

        {/* CTA Buttons */}
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={2}
          justifyContent="center"
          sx={{
            animation: "fadeInUp 1.4s ease-out",
            "& > a": { textDecoration: "none" },
          }}
        >
          <Button
            component={Link}
            href="#projects"
            variant="contained"
            size="large"
            sx={{
              bgcolor: "warning.main",
              color: "grey.900",
              px: 5,
              py: 2,
              borderRadius: "30px",
              fontWeight: "bold",
              boxShadow: "0 6px 20px rgba(0,0,0,0.3)",
              transition: "all 0.3s ease",
              "&:hover": {
                bgcolor: "warning.light",
                transform: "translateY(-3px) scale(1.05)",
                boxShadow: "0 8px 24px rgba(0,0,0,0.4)",
              },
            }}
          >
            View My Work 🚀
          </Button>
          <Button
            component={Link}
            href="#contact"
            variant="outlined"
            size="large"
            sx={{
              color: "white",
              borderColor: "white",
              px: 5,
              py: 2,
              borderRadius: "30px",
              fontWeight: "bold",
              transition: "all 0.3s ease",
              "&:hover": {
                bgcolor: "white",
                color: "grey.900",
                transform: "translateY(-3px) scale(1.05)",
                borderColor: "white",
                boxShadow: "0 8px 24px rgba(0,0,0,0.3)",
              },
            }}
          >
            Contact Me
          </Button>
        </Stack>
      </Container>
    </Box>
  );
}

export default Hero;
