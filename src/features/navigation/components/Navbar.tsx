"use client";

import {
  GitHub,
  Instagram,
  Menu,
  Search,
  LinkedIn,
  X,
} from "@mui/icons-material";
import {
  AppBar,
  Box,
  IconButton,
  Link,
  Stack,
  TextField,
  Toolbar,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Divider,
} from "@mui/material";
import { useState } from "react";
import { Fade } from "react-awesome-reveal";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Blogs", href: "#home" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [statusMsg, setStatusMsg] = useState("");
  const handleClick = (link: (typeof navLinks)[0]) => {
    setOpen(false);
    if (link.label === "Blogs") {
      setStatusMsg("🚧 Coming Soon!");
      window.location.href = "#";
      setTimeout(() => setStatusMsg(""), 3000);
    } else {
      window.location.href = link.href;
    }
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        bgcolor: "#1a2023ff",
        top: 0,
        boxShadow: "0 4px 6px rgba(0,0,0,0.3)",
      }}
    >
      <Fade  duration={1000} >

      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          minHeight: "64px !important",
        }}
      >
        {/* Logo */}
        <Typography
          variant="h6"
          sx={{
            fontFamily: "var(--font-major-mono-display), monospace",
            fontWeight: "extra-bold",
            color: "#fff",
          }}
        >
          Rasmilan.Dev
        </Typography>

        {/* Links for md+ screens */}
        <Stack
          direction="row"
          spacing={2}
          alignItems="center"
          sx={{ display: { xs: "none", md: "flex" } }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              style={{
                textDecoration: "none",
                color: "inherit",
                cursor: "pointer",
              }}
              onClick={() => handleClick(link)}
            >
              {link.label}
            </Link>
          ))}

          <IconButton
            component="a"
            href="https://www.instagram.com/rasmilan__?igsh=MWVnaDk1a3diOGVwaw=="
            target="_blank" 
            rel="noopener noreferrer"
            sx={{
              color: "#57f2e5",
              transition: "transform 0.5s, color 0.3s", 
              "&:hover": {
                color: "#ff0080",
                transform: "rotateY(180deg)",
              },
            }}
          >
            <Instagram sx={{ color: "#57f2e5" }} />
          </IconButton>
          <IconButton
            component="a"
            href="https://github.com/Rasmilan1"
            target="_blank" 
            rel="noopener noreferrer"
            sx={{
              color: "#57f2e5",
              transition: "transform 0.5s, color 0.3s", 
              "&:hover": {
                color: "#ff0080",
                transform: "rotateY(180deg)", 
              },
            }}
          >
            <GitHub sx={{ color: "#57f2e5" }} />
          </IconButton>
          <IconButton
            component="a"
            href="https://www.linkedin.com/in/selvachandran-rasmilan-a6b491340?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              color: "#57f2e5",
              transition: "transform 0.5s, color 0.3s", 
              "&:hover": {
                color: "#ff0080",
                transform: "rotateY(180deg)",
              },
            }}
          >
            <LinkedIn sx={{ color: "#57f2e5" }} />
          </IconButton>
        </Stack>

        {/* Mobile menu */}
        <Stack
          direction="row"
          spacing={1}
          alignItems="center"
          sx={{ display: { xs: "flex", md: "none" } }}
        >
          <IconButton sx={{ color: "white" }} onClick={() => setOpen(true)}>
            <Menu />
          </IconButton>
        </Stack>
      </Toolbar>
      </Fade>

      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <Box
          sx={{
            width: 260,
            bgcolor: "#1f2329",
            height: "100%",
            p: 2,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between", 
          }}
        >
          {/* Top Section: Nav + Search */}
          <Box>
            <List>
              {navLinks.map((link) => (
                <ListItem key={link.label} disablePadding>
                  <ListItemButton
                    component="a"
                    href={link.href}
                    onClick={() => handleClick(link)}
                  >
                    <ListItemText
                      primary={link.label}
                      primaryTypographyProps={{
                        color: "white",
                        sx: {
                          fontFamily: "var(--font-courier-prime), monospace",
                          fontWeight: 400,
                        },
                      }}
                    />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>

            <Divider sx={{ borderColor: "#333", my: 1 }} />

            <TextField
              fullWidth
              size="small"
              placeholder="Search"
              InputProps={{
                endAdornment: (
                  <IconButton>
                    <Search sx={{ color: "white" }} />
                  </IconButton>
                ),
                sx: { borderRadius: 5, bgcolor: "#2b2f36", color: "white" },
              }}
            />
          </Box>

          {/* Bottom Section: Social Icons */}
          <Stack direction="row" spacing={1} justifyContent="center">
            <IconButton
              component="a"
              href="https://www.instagram.com/rasmilan__?igsh=MWVnaDk1a3diOGVwaw=="
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: "#57f2e5",
              }}
            >
              <Instagram sx={{ color: "#57f2e5" }} />
            </IconButton>
            <IconButton
              component="a"
              href="https://github.com/Rasmilan1"
              target="_blank" 
              rel="noopener noreferrer"
              sx={{
                color: "#57f2e5",
              }}
            >
              <GitHub sx={{ color: "#57f2e5" }} />
            </IconButton>
            <IconButton
              component="a"
              href="https://www.linkedin.com/in/selvachandran-rasmilan-a6b491340?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: "#57f2e5",
              }}
            >
              <LinkedIn sx={{ color: "#57f2e5" }} />
            </IconButton>
            <IconButton
              component="a"
              href="https://x.com/Rasmilan_?t=L3q-6uBovVZdMKreGSPuPQ&s=09"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: "#57f2e5",
              }}
            >
              <X sx={{ color: "#57f2e5" }} />
            </IconButton>
          </Stack>
        </Box>
      </Drawer>

      {statusMsg && (
        <Box
          sx={{
            position: "fixed",
            top: 64, 
            right: 16,
            left: 16,
            zIndex: 1500,
            p: 1,
            bgcolor: "rgba(205, 39, 33, 0.4)",
            color: "#ffffffff",
            borderRadius: 2,
            textAlign: "center",
          }}
        >
          {statusMsg}
        </Box>
      )}
    </AppBar>

  );
}
