import React from "react";
import {
  Container,
  Typography,
  Grid,
  Box,
  Avatar,
  Chip,
  Button,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import WebIcon from "@mui/icons-material/Web";
import VideoCameraBackIcon from "@mui/icons-material/VideoCameraBack";
import PaletteIcon from "@mui/icons-material/Palette";

// Styled container for skills
const SkillsContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  gap: theme.spacing(1.5),
}));

function About() {
  return (
    <section id="about">
      <Box
        sx={{
          py: { xs: 6, md: 10 },
          bgcolor: "linear-gradient(135deg, #f9fafb, #eef2f7)",
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            {/* Image Section */}
            <Grid
              item
              xs={12}
              md={5}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Avatar
                alt="Elsay Belude"
                src="/profile.jpg"
                sx={{
                  width: { xs: 180, md: 260 },
                  height: { xs: 180, md: 260 },
                  border: "5px solid",
                  borderColor: "primary.main",
                  boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
                  transition: "transform 0.4s, box-shadow 0.4s",
                  "&:hover": {
                    transform: "scale(1.07)",
                    boxShadow: "0 12px 32px rgba(0,0,0,0.25)",
                  },
                }}
              />
            </Grid>

            {/* Content Section */}
            <Grid item xs={12} md={7}>
              <Typography
                variant="h3"
                component="h2"
                fontWeight="bold"
                gutterBottom
              >
                About Me
              </Typography>

              <Typography
                variant="body1"
                paragraph
                sx={{ fontSize: "1.1rem", color: "text.secondary", mb: 3 }}
              >
                I’m a passionate creative who loves turning ideas into digital
                experiences. From building modern websites to editing engaging
                videos and crafting eye-catching designs — I bring creativity
                and technology together to deliver meaningful results.
              </Typography>

              {/* Skills */}
              <Box mb={4}>
                <Typography
                  variant="h5"
                  component="h3"
                  fontWeight="600"
                  gutterBottom
                >
                  My Skills
                </Typography>
                <SkillsContainer>
                  <Chip
                    icon={<WebIcon />}
                    label="Web Development (React, MUI)"
                    color="primary"
                    sx={{ fontWeight: 500 }}
                  />
                  <Chip
                    icon={<VideoCameraBackIcon />}
                    label="Video Editing (Premiere Pro, After Effects)"
                    color="success"
                    sx={{ fontWeight: 500 }}
                  />
                  <Chip
                    icon={<PaletteIcon />}
                    label="Graphic Design (Photoshop, Illustrator)"
                    color="secondary"
                    sx={{ fontWeight: 500 }}
                  />
                </SkillsContainer>
              </Box>

              {/* CTA Button */}
              <Button
                variant="contained"
                color="primary"
                size="large"
                href="#contact"
                sx={{
                  px: 4,
                  py: 1.5,
                  fontWeight: "bold",
                  borderRadius: "30px",
                  textTransform: "none",
                  boxShadow: "0 4px 14px rgba(0,0,0,0.2)",
                  transition: "all 0.3s",
                  "&:hover": {
                    transform: "translateY(-3px)",
                    boxShadow: "0 6px 20px rgba(0,0,0,0.3)",
                  },
                }}
              >
                Let’s Work Together 🚀
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </section>
  );
}

export default About;
