"use client";

import SequentialIconScroll from "@/features/skills/components/SequentialIconScroll";
import { Box, Typography, Container, Paper, Stack } from "@mui/material";
import { useEffect, useState } from "react";
import { Fade, Flip } from "react-awesome-reveal";

export default function SkillsSection() {
  const [dots, setDots] = useState(".");

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((d) => (d.length < 3 ? d + "." : "."));
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <Container
      maxWidth="lg"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        mb={{ md: 7 }}
      >
        <Fade cascade damping={0.2} duration={2000}>
          <Typography
            variant="h3"
            sx={{
              color: "white",
              fontFamily: "'Sansation', sans-serif",
              fontWeight: "bold",
              display: "flex",
              borderStyle: "solid",
              borderColor: "#57f2e5",
              borderWidth: "0 2px 0px 2px",
              borderRadius: "30px 0px 30px 0px",
              px: 4,
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            Skills
            <Typography
              variant="caption"
              sx={{
                fontFamily: "'Turret Road', sans-serif",
                fontWeight: "bold",
                textAlign: "center",
                display: { xs: "none", sm: "flex" },
              }}
            >
              I am striving to never stop learning and improving
            </Typography>
          </Typography>

          <Typography
            variant="caption"
            sx={{
              fontFamily: "'Turret Road', sans-serif",
              fontWeight: "bold",
              textAlign: "center",
              display: { xs: "block", sm: "none" },
            }}
          >
            Always Improving
          </Typography>
        </Fade>
      </Box>

      <Box textAlign="center">
        {/* Web & App Boxes */}
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={4}
          justifyContent="center"
          mb={6}
          flexWrap="wrap"
        >
          <Flip direction="vertical" duration={1000}>
            <Paper
              elevation={3}
              sx={{
                px: 4,
                py: 3,
                borderRadius: 4,
                bgcolor: "#a5fdf6",
                color: "#000",
                minWidth: 220,
                mb: 2,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <Typography variant="h6">🖥️ </Typography>

              <Typography variant="h6"> Web Developement</Typography>
              <Typography variant="caption">desktop & mobile web</Typography>
            </Paper>
          </Flip>
          <Flip direction="vertical" duration={1000}>
            <Paper
              elevation={3}
              sx={{
                position: "relative",
                px: 4,
                py: 3,
                borderRadius: 4,
                bgcolor: "rgba(201, 229, 227, 0.8)",
                color: "#000",
                minWidth: 220,
                mb: 2,
                overflow: "hidden",
              }}
            >
              {/* Blurred content */}
              <Box
                sx={{
                  filter: "blur(0.9px)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "column",
                }}
              >
                <Typography variant="h6">📱 </Typography>
                <Typography variant="h6"> App Development</Typography>
                {/* <Typography variant="caption">iOS & Android</Typography> */}
                <Typography
                  variant="caption"
                  sx={{ display: "flex", alignItems: "center", gap: 0.5 }}
                >
                  🧠 Initializing
                  <Box component="span" sx={{ minWidth: "2ch" }}>
                    {dots}
                  </Box>
                </Typography>
              </Box>
            </Paper>
          </Flip>
        </Stack>
      </Box>
      <SequentialIconScroll />
    </Container>
  );
}
