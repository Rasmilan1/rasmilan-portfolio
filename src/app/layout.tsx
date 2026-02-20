"use client";

import { ReactNode } from "react";
import { ThemeProvider, CssBaseline, Box } from "@mui/material";
import { theme } from "@/theme/theme";
import {
  Geist,
  Geist_Mono,
  Goldman,
  Lexend_Deca,
  Courier_Prime,
  Major_Mono_Display,
} from "next/font/google";
import './globals.css';

import { Zain } from "next/font/google";
import { Turret_Road } from "next/font/google";

import { Merriweather } from "next/font/google";

const merriweather = Merriweather({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-merriweather",
});

const turretRoad = Turret_Road({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "700", "800"],
  style: ["normal"],
  display: "swap",
  variable: "--font-turret-road",
});

const zain = Zain({
  subsets: ["arabic"],
  weight: ["200", "300", "400", "700", "800", "900"],
  style: ["normal", "italic"],
  variable: "--font-zain",
});

const majorMonoDisplay = Major_Mono_Display({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-major-mono-display",
});

const lexenddeca = Lexend_Deca({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-lexend-deca",
});

const courierPrime = Courier_Prime({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-courier-prime",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const goldman = Goldman({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-goldman",
});

// export const metadata: Metadata = {
//   title: "Rasmilan's Portfolio",
//   description: "Welcome to my portfolio! Explore my projects and skills.",
//   icons: {
//     icon: "/programmer.png",
//   },
// };

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`
    ${geistSans.variable}
    ${geistMono.variable}
    ${goldman.variable}
    ${courierPrime.variable}
    ${lexenddeca.variable}
    ${majorMonoDisplay.variable}
    ${merriweather.variable}
    ${turretRoad.variable}
    ${zain.variable}
    antialiased
  `}
      >
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Box
            sx={{
              scrollBehavior: "smooth",
             scrollSnapType: "y proximity",

              overflowY: "scroll",
              height: "100vh",
            }}
          >
            {children}
          </Box>
        </ThemeProvider>
      </body>
    </html>
  );
}

