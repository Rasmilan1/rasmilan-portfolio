"use client";

import { featuredProjects } from "@/data/portfolio";
import ProjectCard from "@/features/projects/components/ProjectCard";
import { Box, Container, Typography } from "@mui/material";

export default function FeaturedProjects() {
  return (
    <Container
      maxWidth={false}
      disableGutters
      sx={{ bgcolor: "#16181c", pt: { xs: 3, md: 6 } }}
    >
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        textAlign="center"
        px={{ xs: 2, sm: 5 }}
      >
        <Typography
          variant="h2"
          sx={{
            fontSize: { xs: "1.8rem", sm: "2.5rem", md: "3rem" },
            fontWeight: "bold",
            letterSpacing: "0.05em",
            textTransform: "uppercase",
            fontFamily: "var(--font-lexend-deca), sans-serif",
            color: "#fff",
          }}
        >
          Featured Projects
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            mb: 5,
            fontSize: { xs: "0.6rem", sm: "0.7rem", md: "0.9rem" },
            fontWeight: "bold",
            lineHeight: 1.6,
            px: { xs: 2, sm: 5, md: 0 },
            fontFamily: "var(--font-lexend-deca), sans-serif",
            textAlign: "center",
            color: "#a0a0a0", // subtle secondary color
          }}
        >
          Here are some of the selected projects that showcase my passion for
          full stack development.
        </Typography>
      </Box>
      <Box>
        {featuredProjects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </Box>
    </Container>
  );
}
