"use client";
import { Box } from "@mui/material";
import { ReactNode } from "react";

interface SectionProps {
  id: string;
  children: ReactNode;
}

export default function Section({ id, children }: SectionProps) {
  const NAVBAR_HEIGHT = { xs: 56, md: 64 };

  return (
    <Box
      id={id}
      sx={{
        height: "100vh",
        scrollSnapAlign: "start",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* Inner content shifted down without breaking 100vh */}
      <Box
        sx={{
          width: "100%",
          maxWidth: 1200,
          marginTop: {
            xs: `${NAVBAR_HEIGHT.xs}px`,
            md: `${NAVBAR_HEIGHT.md}px`,
          },
          boxSizing: "border-box",
        }}
      >
        {children}
      </Box>
    </Box>
  );
}
