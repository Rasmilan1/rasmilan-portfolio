"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Section from "@/components/Section";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import AboutMe from "@/components/AboutMe";
import Main from "@/components/Main";
import FeaturedProjects from "@/components/Projects";
import { Box } from "@mui/material";

export default function HomePage() {
  return (
    <>
      <Navbar />

      <Section id="home">
        <Main />
      </Section>

      <Section id="about">
        <AboutMe />
      </Section>

      <Section id="skills">
        <Skills />
      </Section>
      <Box  id="projects">
        <FeaturedProjects />
      </Box>

      <Section id="contact">
        <Contact />
      </Section>
      <Footer />
    </>
  );
}
