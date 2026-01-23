import React from "react";
import { Box, Container, Typography, Grid } from "@mui/material";
import ProjectCard from "./ProjectCard"; // make sure ProjectCard has default export too

function Projects() {
  return (
    <Box
      id="projects"
      sx={{
        py: 8,
        bgcolor: "grey.50",
        color: "grey.800",
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          component="h2"
          fontWeight="bold"
          align="center"
          gutterBottom
          sx={{ mb: 6, color: "grey.900" }}
        >
          My Projects
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} sm={6} md={4}>
            <ProjectCard
              title="🌤️ Weather App"
              description="Live weather updates using modern API integrations and a clean, user-friendly interface."
              imageUrl="https://placehold.co/400x200/50b8e7/ffffff?text=Weather+App"
              liveLink="https://todayweatherfrc.netlify.app/"
              githubLink="https://github.com/elso12/weather-app"
            />
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <ProjectCard
              title="💬 Dev Quotes"
              description="A web app that provides motivational tech quotes with a smooth and clean UI, perfect for daily inspiration."
              imageUrl="https://placehold.co/400x200/8d8d8d/ffffff?text=Dev+Quotes"
              liveLink="https://devquotes1.netlify.app/"
              githubLink="https://github.com/elso12/devquotes"
            />
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <ProjectCard
              title="💊 Pharmacy Management System"
              description="A full-stack web application for pharmacy inventory and sales control built with PHP and MySQL."
              imageUrl="https://placehold.co/400x200/58c49c/ffffff?text=Pharmacy"
              githubLink="https://github.com/elso12"
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Projects;  // ✅ this was missing
