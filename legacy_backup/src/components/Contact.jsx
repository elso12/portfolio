import React from "react";
import {
  Container,
  Typography,
  Grid,
  Box,
  TextField,
  Button,
  Paper,
  Link,
} from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";

function Contact() {
  return (
    <section id="contact">
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography variant="h2" component="h2" align="center" gutterBottom>
          Get In Touch
        </Typography>

        <Grid container spacing={6} alignItems="center">
          {/* Contact Form Section */}
          <Grid item xs={12} md={6}>
            <Paper elevation={6} sx={{ p: { xs: 3, md: 5 } }}>
              <Box component="form" noValidate autoComplete="off">
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Your Name"
                      variant="outlined"
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Your Email"
                      variant="outlined"
                      type="email"
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Your Message"
                      variant="outlined"
                      multiline
                      rows={5}
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      fullWidth
                      variant="contained"
                      color="primary"
                      size="large"
                      type="submit"
                      sx={{ py: 2 }}
                    >
                      Send Message
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </Paper>
          </Grid>
          
          {/* Contact Info Section */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                height: "100%",
              }}
            >
              <Box display="flex" alignItems="center" mb={2}>
                <MailOutlineIcon color="primary" sx={{ mr: 2, fontSize: "2rem" }} />
                <Typography variant="h6" component="p">
                  <Link href="mailto:elseybag10@gmail.com" color="inherit" underline="hover">
                    elseybag10@gmail.com
                  </Link>
                </Typography>
              </Box>
              <Box display="flex" alignItems="center" mb={2}>
                <PhoneIphoneIcon color="primary" sx={{ mr: 2, fontSize: "2rem" }} />
                <Typography variant="h6" component="p">
                  <Link href="tel:+251942421338" color="inherit" underline="hover">
                    +251 942 421 338
                  </Link>
                </Typography>
              </Box>
              <Typography variant="body1" paragraph mt={4} color="text.secondary">
                I’m always open to discussing new projects, creative ideas, or
                opportunities. Feel free to drop a message!
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}

export default Contact;