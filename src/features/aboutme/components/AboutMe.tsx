"use client";

import { Box, Container, Grid, Paper, Typography } from "@mui/material";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { Fade, Slide } from "react-awesome-reveal";
export default function AboutMe() {
  return (
    <Container
      maxWidth="lg"
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: { xs: 2, sm: 3, md: 6 },
        minHeight: "100vh",
        width: "100%",
        justifyContent: "center",
      }}
    >
      <Fade cascade damping={0.2} duration={2000}>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Typography
            variant="h3"
            sx={{
              color: "white",
              fontFamily: "'Sansation', sans-serif",
              fontWeight: "bold",
              display: "inline-block",
              border: "2px 2px solid #2f3f3eff",
              borderRadius: "30px 0px 30px 0px",
              borderStyle: "solid",
              borderColor: "#57f2e5",
              borderWidth: "0 2px 0px 2px",
              px: 3,
            }}
          >
            About Me
          </Typography>
        </Box>
      </Fade>

      <Grid container spacing={6} alignItems="stretch" mt={4}>
        <Grid size={{ xs: 12, md: 6 }}>
          <Slide direction="left" duration={500} triggerOnce={false}>
            <Paper
              sx={{
                bgcolor: "#1f2329",
                p: 4,
                border: { xs: "2px solid #929e9dff", md: "1px solid #57f2e5" },
                color: "white",
                borderRadius: 4,
                fontFamily: "monospace",
                transition: "transform 0.4s ease, box-shadow 0.4s ease",
                "&:hover": {
                  transform: "scale(1.009)",
                  zIndex: 1,
                  height: "100%",
                },
              }}
            >
              <Typography
                variant="h6"
                color="#57f2e5"
                sx={{
                  fontFamily: '"Zain", sans-serif',
                  fontWeight: "bold",
                  fontStyle: "normal",
                }}
              >
                Hello!
              </Typography>

              <Typography
                variant="body2"
                mt={2}
                sx={{
                  fontFamily: "var(--font-lexend-deca), sans-serif",
                  fontWeight: 400,
                  textAlign: "justify",
                  wordSpacing: "0.03em",
                }}
              >
                My name is Selvachandran Rasmilan. I’m a passionate full-stack
                developer who loves solving problems and building secure,
                scalable, and user-friendly applications.
              </Typography>
              <Typography
                variant="body2"
                mt={2}
                sx={{
                  fontFamily: "var(--font-lexend-deca), sans-serif",
                  fontWeight: 400,
                  textAlign: "justify",
                  wordSpacing: "0.03em",
                }}
              >
                {`I'm`} a fast learner who thrives in collaborative team
                environments and enjoys challenges that push me to grow — both
                technically and creatively. Beyond coding, I’m dedicated to
                continuous learning, exploring new technologies, and
                contributing to tech initiatives that empower others through
                innovation and education.
              </Typography>
            </Paper>
          </Slide>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }} display={{ xs: "none", md: "block" }}>
          <Slide direction="right" duration={500} triggerOnce={false}>
            <Box
              sx={{
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                bgcolor: "#1f2329",
                borderRadius: 4,
                p: 2,
                border: { xs: "2px solid #929e9dff", md: "1px solid #57f2e5" },
                transition: "transform 0.4s ease, box-shadow 0.4s ease",
                "&:hover": {
                  transform: "scale(1.009)",
                  zIndex: 1,
                  height: "100%",
                },
              }}
            >
              <DotLottieReact
                src="aboutme/Developer.lottie"
                autoplay
                loop
                style={{ width: "100%", height: "auto" }}
              />
            </Box>
          </Slide>
        </Grid>
      </Grid>
    </Container>
  );
}
