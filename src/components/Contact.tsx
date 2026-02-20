"use client";

import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { useRef, useState } from "react";
import emailjs from "emailjs-com";

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const [statusMessage, setStatusMessage] = useState<string>("");

  const sendEmail = (e?: React.MouseEvent) => {
    e?.preventDefault();

    const formEl = form.current;
    if (!formEl) return;

    if (!formEl.checkValidity()) {
      setStatusMessage("❌ Please fill all required fields correctly.");
      setTimeout(() => setStatusMessage(""), 3000);
      return;
    }

    emailjs
      .sendForm(
        "service_1jzfw64",
        "template_xgdjuu5",
        formEl,
        "Fqzbly285cLKDdQF1",
      )
      .then(
        () => {
          setStatusMessage("✅ Message sent successfully!");
          formEl.reset();
          setTimeout(() => setStatusMessage(""), 3000);
        },
        (error) => {
          setStatusMessage("❌ Failed to send message: " + error.text);
          setTimeout(() => setStatusMessage(""), 3000);
        },
      );
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          display: "block",
          gap: { xs: 2, sm: 3, md: 6 },
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Typography
            variant="h3"
            sx={{
              color: "#57f2e5",
              fontFamily: "'Sansation', sans-serif",
              fontWeight: 800,
              fontStyle: "normal",
            }}
          >
            Get in Touch
          </Typography>

          <Typography
            variant="caption"
            sx={{
              display: "block",
              mt: 1,
              mb: 4,
              fontFamily: "'Turret Road', sans-serif",
              fontWeight: 500,
              fontStyle: "normal",
            }}
          >
            Open to Collaboration and Opportunities
          </Typography>
        </Box>

        {/* Form */}
        <Grid
          container
          spacing={4}
          justifyContent="center"
          sx={{ mb: 6 }}
          component="form"
          ref={form}
        >
          {/* Name */}
          <Grid size={{ xs: 12, md: 4 }}>
            <TextField
              fullWidth
              label="Your name"
              required
              name="name"
              variant="standard"
              InputProps={{ sx: { color: "white" } }}
              InputLabelProps={{ sx: { color: "#aaa" } }}
            />
          </Grid>

          {/* Email */}
          <Grid size={{ xs: 12, md: 4 }}>
            <TextField
              fullWidth
              label="Your email"
              type="email"
              required
              name="email"
              variant="standard"
              InputProps={{ sx: { color: "white" } }}
              InputLabelProps={{ sx: { color: "#aaa" } }}
            />
          </Grid>

          {/* subject */}
          <Grid size={{ xs: 12, md: 4 }}>
            <TextField
              required
              fullWidth
              label="Topic"
              variant="standard"
              name="title"
              InputProps={{ sx: { color: "white" } }}
              InputLabelProps={{ sx: { color: "#aaa" } }}
            />
          </Grid>

          {/* Message - full width under name & email */}
          <Grid size={{ xs: 12 }}>
            <TextField
              fullWidth
              label="Your message"
              variant="standard"
              name="message"
              multiline
              required
              rows={3}
              InputProps={{ sx: { color: "white" } }}
              InputLabelProps={{ sx: { color: "#aaa" } }}
            />
          </Grid>
        </Grid>

        {/* Send Message Button */}

        <Box display="flex" justifyContent="center" alignItems="center">
          <Button
            variant="contained"
            type="submit"
            sx={{
              bgcolor: "#57f2e5",
              color: "#000",
              borderRadius: "30px",
              px: 5,
              py: 1,
              fontWeight: "bold",
              textTransform: "none",
              "&:hover": {
                bgcolor: "#7ff9ef",
              },
            }}
            onClick={sendEmail}
            endIcon={
              <Box
                component="span"
                sx={{
                  display: "inline-block",
                  transform: "rotate(-45deg)",
                }}
              >
                📨
              </Box>
            }
          >
            Send Message
          </Button>
        </Box>
        <Box sx={{ minHeight: 24, mt: 2 }}>
          {statusMessage && (
            <Typography
              variant="body2"
              align="center"
              sx={{
                color: statusMessage.startsWith("✅")
                  ? "success.main"
                  : "error.main",
              }}
            >
              {statusMessage}
            </Typography>
          )}
        </Box>
      </Container>
    </Box>
  );
}
