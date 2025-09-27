"use client";

import { Email } from "@mui/icons-material";
import { Box, Button, Container, Paper, Typography } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Profile from "@/features/aboutme/components/Profile";
import { Fade, Slide } from "react-awesome-reveal";

const bounceAnimation = {
  "@keyframes bounce": {
    "0%, 100%": {
      transform: "translateY(0)",
      opacity: 1,
    },
    "50%": {
      transform: "translateY(10px)",
      opacity: 0.6,
    },
  },
};

export default function Main() {
  return (
    <Container
      maxWidth="lg"
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        gap: { xs: 2, sm: 3, md: 6 },
      }}
    >
      <Box sx={{ order: { xs: 3, sm: 3, md: 0 } }}>
        <Slide direction="left" duration={1000}>
          <Profile />
        </Slide>
      </Box>

      {/* Middle Text */}
      <Slide direction="up" duration={1500} style={{ display: "flex" }}>
        <Fade cascade damping={0.2} duration={2000}>
          <Box
            sx={{
              flex: 1,
              textAlign: "left",
              mt: { md: 0 },
              display: { xs: "block", sm: "block" },
              order: { xs: 0, md: 2 },
            }}
          >
            <Typography
              variant="h2"
              sx={{
                color: "#57f2e5",
                fontFamily: "'Sansation', sans-serif",
                fontWeight: "bold",
                fontSize: {
                  xs: "2rem",
                  sm: "2.5rem",
                  md: "3rem",
                  lg: "3.5rem",
                },
                display: { xs: "none", md: "block" },
              }}
            >
              Let’s Build...
            </Typography>

            <Typography
              variant="h3"
              sx={{
                fontFamily: '"Zain", sans-serif',
                fontWeight: "bold",
                fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" },
                mt: { md: 3 },
              }}
            >
              Hey{" "}
              <Box
                component="br"
                sx={{ display: { xs: "none", md: "block" } }}
              />
              {`I'm `}
              <span style={{ color: "#57f2e5" }}>Rasmilan</span>
              <br />
              Full-Stack Developer
            </Typography>

            <Typography
              variant="body2"
              mt={2}
              sx={{
                fontFamily: '"Sansation", sans-serif',
                fontWeight: 300,
                alignItems: "center",
              }}
            >
              Passionate about building impactful digital products. I develop
              fast, scalable, and user-friendly web applications that deliver
              great experiences.
            </Typography>

            <Button
              variant="text"
              endIcon={<Email />}
              sx={{
                mt: 2,
                color: "#57f2e5",
              }}
            >
              Let’s Talk
            </Button>
          </Box>
        </Fade>
      </Slide>

      {/* Right Stat Box */}
      <Slide direction="right" duration={1000} style={{ display: "flex" }}>
        <Paper
          elevation={4}
          sx={{
            p: { xs: 2, sm: 3, md: 4 },
            borderRadius: 8,
            bgcolor: "#12161c",
            color: "#57f2e5",
            minWidth: { xs: "100%", sm: 200, md: 160 },
            textAlign: "center",
            mt: { xs: 3, md: 0 },
            display: { xs: "none", sm: "none", md: "flex" },
            flexDirection: "column",
            justifyContent: "space-around",
            alignItems: "center",
            order: { md: 3 },
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontFamily: "'Turret Road', sans-serif",
              fontWeight: 500,
              fontStyle: "normal",
            }}
          >
            Innovate
          </Typography>
          <KeyboardArrowDownIcon
            sx={{
              fontSize: 40,
              color: "#57f2e5",
              animation: "bounce 2s infinite",
              ...bounceAnimation,
            }}
          />
          <Typography
            variant="h4"
            sx={{
              fontFamily: "'Turret Road', sans-serif",
              fontWeight: 500,
              fontStyle: "normal",
            }}
          >
            Build
          </Typography>
          <KeyboardArrowDownIcon
            sx={{
              fontSize: 40,
              color: "#57f2e5",
              animation: "bounce 2s infinite",
              animationDelay: "0.5s",
              ...bounceAnimation,
            }}
          />
          <Typography
            variant="h4"
            sx={{
              fontFamily: "'Turret Road', sans-serif",
              fontWeight: 500,
              fontStyle: "normal",
            }}
          >
            Deliver
          </Typography>
        </Paper>
      </Slide>
    </Container>
  );
}
