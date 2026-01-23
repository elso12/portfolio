import React from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Link,
  IconButton,
  CardActions,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";

function ProjectCard({ title, description, imageUrl, liveLink, githubLink }) {
  return (
    <Card
      sx={{
        borderRadius: "16px",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        transition: "all 0.3s ease-in-out",
        "&:hover": {
          transform: "scale(1.03)",
          boxShadow: "0 8px 24px rgba(0, 0, 0, 0.2)",
        },
      }}
    >
      {imageUrl && (
        <CardMedia
          component="img"
          sx={{ height: 200 }}
          image={imageUrl}
          alt={`Screenshot of ${title} project`}
        />
      )}
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" fontWeight="bold">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Box sx={{ display: "flex", gap: 2 }}>
          {liveLink && (
            <Button
              component={Link}
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              size="small"
              startIcon={<LaunchIcon />}
            >
              Live Demo
            </Button>
          )}
          {githubLink && (
            <Button
              component={Link}
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              size="small"
              startIcon={<GitHubIcon />}
            >
              GitHub
            </Button>
          )}
        </Box>
      </CardActions>
    </Card>
  );
}

export default ProjectCard;
