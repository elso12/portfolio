import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Link,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

function Navbar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  const links = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  // Logic to highlight the active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = links.map((l) => document.querySelector(l.href));
      sections.forEach((sec) => {
        if (
          sec &&
          window.scrollY >= sec.offsetTop - 150 &&
          window.scrollY < sec.offsetTop + sec.offsetHeight - 150
        ) {
          setActiveSection(sec.id);
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setIsDrawerOpen(open);
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        bgcolor: "rgba(255, 255, 255, 0.9)",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        backdropFilter: "blur(5px)",
        transition: "all 0.3s ease-in-out",
        zIndex: 1100,
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {/* Logo/Site Name */}
        <Typography
          variant="h6"
          component={Link}
          href="#hero"
          noWrap
          sx={{
            fontWeight: "bold",
            color: "grey.800",
            textDecoration: "none",
            letterSpacing: 1.5,
          }}
        >
          Elsay
        </Typography>

        {/* Desktop Menu */}
        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 4 }}>
          {links.map((link) => (
            <Button
              key={link.name}
              href={link.href}
              sx={{
                color: "grey.700",
                fontWeight: activeSection === link.href.slice(1) ? "bold" : "medium",
                "&:hover": {
                  color: "primary.main",
                },
                "&::after": {
                  content: "''",
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  width: "100%",
                  height: "2px",
                  bgcolor: "primary.main",
                  transform: activeSection === link.href.slice(1) ? "scaleX(1)" : "scaleX(0)",
                  transformOrigin: "left",
                  transition: "transform 0.3s ease-out",
                },
                "&:hover::after": {
                  transform: "scaleX(1)",
                },
                position: "relative",
              }}
            >
              {link.name}
            </Button>
          ))}
        </Box>

        {/* Mobile Menu Toggle Button */}
        <IconButton
          edge="end"
          color="inherit"
          aria-label="menu"
          onClick={toggleDrawer(true)}
          sx={{
            display: { xs: "block", md: "none" },
            color: "grey.700",
          }}
        >
          <MenuIcon />
        </IconButton>

        {/* Mobile Drawer */}
        <Drawer
          anchor="top"
          open={isDrawerOpen}
          onClose={toggleDrawer(false)}
          PaperProps={{
            sx: {
              bgcolor: "white",
              boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
              top: "64px", // Matches toolbar height on desktop
            },
          }}
        >
          <Box
            sx={{ width: "auto" }}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                p: 2,
              }}
            >
              <IconButton onClick={toggleDrawer(false)}>
                <CloseIcon />
              </IconButton>
            </Box>
            <List>
              {links.map((link) => (
                <ListItem
                  button
                  key={link.name}
                  component={Link}
                  href={link.href}
                  sx={{
                    textAlign: "center",
                    bgcolor: activeSection === link.href.slice(1) ? "primary.main" : "transparent",
                    color: activeSection === link.href.slice(1) ? "white" : "grey.700",
                    "&:hover": {
                      bgcolor: activeSection === link.href.slice(1) ? "primary.dark" : "grey.200",
                    },
                  }}
                >
                  <ListItemText primary={link.name} />
                </ListItem>
              ))}
            </List>
          </Box>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
