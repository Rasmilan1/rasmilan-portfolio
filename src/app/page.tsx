import React from "react";
import { Box } from "@mui/material";
import Navbar from "@/features/navigation/components/Navbar";
import Main from "@/features/main/components/Main";
import AboutMe from "@/features/aboutme/components/AboutMe";
import Projects from "@/features/myworks/components/Projects";
import Contact from "@/features/contact/components/Contact";
import Footer from "@/features/main/components/Footer";
import Skills from "@/features/skills/Skills";

export default function Home() {
  return (
    <>
      {/* Navbar  */}
      <Navbar />
      <Box
        sx={{
          height: "100vh",
          scrollSnapType: "y mandatory",
          overflowY: "scroll",
          "&::-webkit-scrollbar": { display: "none" },
          mt:{md:4}
          
        }}
      >
        {/* Main Page   */}
        <Box
          id="home"
          sx={{
            height: "100vh",
            scrollSnapAlign: "start",
            bgcolor: "#1f2329",
            color: "white",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            scrollSnapStop: "always",
          }}
        >
          <Main />
        </Box>

        {/* AboutMe Page */}
        <Box
          id="about"
          sx={{
            height: "100vh",
            scrollSnapAlign: "start",
            color: "white",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            bgcolor: "#1f2329",
            scrollSnapStop: "always",
          }}
        >
          <AboutMe />
        </Box>

        {/* Project List */}
        <Box
          id="projects"
          sx={{
            height: "100vh",
            scrollSnapAlign: "start",
            color: "white",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            bgcolor: "#1f2329",
            flexDirection: "column",
            scrollSnapStop: "always",
          }}
        >
          <Projects />
        </Box>

        {/* Skills */}
        <Box
          id="skills"
          sx={{
            height: "100vh",
            scrollSnapAlign: "start",
            color: "white",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            scrollSnapStop: "always",
            bgcolor: "#1f2329",
            flexDirection: "column",
          }}
        >
          <Skills />
        </Box>

        {/* Contact */}
        <Box
          id="contact"
          sx={{
            scrollSnapAlign: "start",
            color: "white",
            scrollSnapStop: "always",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            bgcolor: "#1f2329",
            flexDirection: "column",
          }}
        >
          <Contact />
          <Footer />
        </Box>
      </Box>
    </>
  );
}
