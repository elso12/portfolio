import React from "react";
import { Box, Container, Typography, IconButton, Link } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "grey.900",
        color: "grey.300",
        py: 4,
        textAlign: "center",
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/* Copyright Text */}
          <Typography variant="body2" sx={{ mb: { xs: 2, md: 0 } }}>
            &copy; {currentYear}{" "}
            <Link
              href="#"
              color="inherit"
              underline="none"
              sx={{ fontWeight: "bold" }}
            >
              Elsay Belude
            </Link>
            . All rights reserved.
          </Typography>

          {/* Social Icons */}
          <Box sx={{ display: "flex", spaceX: 2, mb: { xs: 2, md: 0 } }}>
            <IconButton
              component={Link}
              href="https://github.com/your-github"
              target="_blank"
              rel="noopener noreferrer"
              color="inherit"
              aria-label="GitHub"
              sx={{ "&:hover": { color: "primary.main" } }}
            >
              <GitHubIcon />
            </IconButton>
            <IconButton
              component={Link}
              href="https://linkedin.com/in/your-linkedin"
              target="_blank"
              rel="noopener noreferrer"
              color="inherit"
              aria-label="LinkedIn"
              sx={{ "&:hover": { color: "primary.main" } }}
            >
              <LinkedInIcon />
            </IconButton>
            <IconButton
              component={Link}
              href="https://twitter.com/your-twitter"
              target="_blank"
              rel="noopener noreferrer"
              color="inherit"
              aria-label="Twitter"
              sx={{ "&:hover": { color: "primary.main" } }}
            >
              <TwitterIcon />
            </IconButton>
          </Box>

          {/* Built With Text */}
          <Typography variant="caption" sx={{ color: "grey.500" }}>
            Built with ❤️ by Elsay Belude.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;
