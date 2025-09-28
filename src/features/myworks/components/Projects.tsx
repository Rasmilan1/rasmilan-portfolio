"use client";

import { useState } from "react";
import {
  Box,
  Container,
  Grid,
  Paper,
  Typography,
  IconButton,
} from "@mui/material";
import { ArrowForwardIos } from "@mui/icons-material";
import ProjectList, { projects } from "./ProjectList";
import Image from "next/image";
import { Fade, Zoom } from "react-awesome-reveal";

export default function Projects() {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const selectedProject = projects[selectedProjectIndex];

  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === selectedProject.images.length - 1 ? 0 : prev + 1
    );
  };

  const handleProjectChange = (index: number) => {
    setSelectedProjectIndex(index);
    setCurrentImageIndex(0);
  };

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
        alignItems: "center",
      }}
    >
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
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
              px: 3,
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              fontSize: { xs: "2.5rem" },
            }}
          >
            What I’ve Built
            <Typography
              variant="caption"
              sx={{
                fontFamily: "'Turret Road', sans-serif",
                fontWeight: "bold",
                textAlign: "center",
                display: { xs: "none", sm: "flex" },
              }}
            >
              A collection of projects where I turn ideas into clean, functional
              code.
            </Typography>
          </Typography>
        </Fade>

        <Typography
          variant="caption"
          sx={{
            fontFamily: "'Turret Road', sans-serif",
            fontWeight: "bold",
            textAlign: "center",
            display: { xs: "block", sm: "none" },
          }}
        >
          Turning ideas into clean, functional code.
        </Typography>
      </Box>
      <Grid
        container
        spacing={4}
        alignItems="stretch"
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        {/* Left side - Image slider */}
        <Grid size={{ xs: 12, md: 9 }}>
          <Zoom duration={500}>
            <Paper
              sx={{
                bgcolor: "#1f2329",
                p: { xs: 1, md: 2 },
                color: "white",
                borderRadius: 4,
                fontFamily: "monospace",
                border: { xs: "2px solid #929e9dff", md: "1px solid #57f2e5" },
                transition: "transform 0.4s ease, box-shadow 0.4s ease",
                "&:hover": {
                  transform: "scale(1.009)",
                },
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  height: { xs: "22vh", sm: "42vh" },
                  // border: "4px solid #333",
                  borderRadius: 2,
                  overflow: "hidden",
                  position: "relative",
                  display: "flex",
                }}
              >
                {/* Image 3/4 */}

                <Box
                  sx={{
                    flex: 4,
                    position: "relative",
                    overflow: "hidden",
                    height: "100%",
                    borderRadius: 2,
                    backgroundColor: "black",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      height: "100%",
                      width: `${selectedProject.images.length * 100}%`,
                      transform: `translateX(-${
                        currentImageIndex *
                        (100 / selectedProject.images.length)
                      }%)`,
                      transition: "transform 0.5s ease",
                    }}
                  >
                    {selectedProject.images.map((img, i) => (
                      <Box
                        key={i}
                        sx={{
                          position: "relative",
                          width: `${100 / selectedProject.images.length}%`,
                          height: "100%",
                          flexShrink: 0,
                        }}
                      >
                        <Image
                          src={img}
                          alt={`${selectedProject.name} - ${i + 1}`}
                          fill
                          style={{ objectFit: "fill" }}
                          priority
                        />
                      </Box>
                    ))}
                  </Box>

                  {/* Right arrow  */}
                  <IconButton
                    onClick={nextImage}
                    sx={{
                      position: "absolute",
                      top: "50%",
                      right: 8,
                      transform: "translateY(-50%)",
                      color: "#57f2e5",
                      backgroundColor: "rgba(0,0,0,0.3)",
                      "&:hover": { backgroundColor: "rgba(0,0,0,0.5)" },
                      zIndex: 10,
                    }}
                  >
                    <ArrowForwardIos />
                  </IconButton>
                </Box>

                {/* Blank 1/4 */}
                <Box
                  sx={{
                    flex: 1,
                    bgcolor: "#1f2329",
                    px: 1,
                    overflowY: "auto",
                    "&::-webkit-scrollbar": {
                      display: "none",
                    },
                    textAlign: "justify",
                    hyphens: "auto",
                    overflowWrap: "break-word",
                    display: { xs: "none", sm: "block" },
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: "var(--font-sansation), sans-serif",
                      fontWeight: "600",
                      fontSize: { md: "0.8rem" },
                      
                    }}
                  >
                    {selectedProject.description}
                  </Typography>
                </Box>
              </Box>
            </Paper>
          </Zoom>
        </Grid>

        {/* Right side - Project list */}
        <Grid
          size={{ xs: 12, md: 3 }}
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Zoom duration={500} triggerOnce={false}>
            <Paper
              sx={{
                bgcolor: "#1f2329",
                border: { xs: "2px solid #929e9dff", md: "1px solid #57f2e5" },
                p: { xs: 1, md: 2 },
                color: "white",
                borderRadius: 4,
                fontFamily: "monospace",
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  height: { xs: "22vh", sm: "42vh" },
                }}
              >
                <ProjectList
                  onSelect={handleProjectChange}
                  selectedIndex={selectedProjectIndex}
                />
              </Box>
            </Paper>
          </Zoom>
        </Grid>
      </Grid>
    </Container>
  );
}
