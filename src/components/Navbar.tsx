// file: components/Navbar.tsx
"use client";

import { JSX, useState } from "react";
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
import { Fade } from "react-awesome-reveal";
import {
  GitHub,
  Instagram,
  LinkedIn,
  Menu,
  Search,
  X,
} from "@mui/icons-material";

type NavLinkType = { label: string; href: string };
type SocialLinkType = { href: string; icon: JSX.Element };

function NavLink({
  link,
  onClick,
  isDrawer = false,
}: {
  link: NavLinkType;
  onClick: (link: NavLinkType) => void;
  isDrawer?: boolean;
}) {
  if (isDrawer) {
    return (
      <ListItem disablePadding>
        <ListItemButton
          component="a"
          href={link.href}
          onClick={() => onClick(link)}
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
    );
  }

  return (
    <Link
      href={link.href}
      style={{ textDecoration: "none", color: "inherit", cursor: "pointer" }}
      onClick={() => onClick(link)}
    >
      {link.label}
    </Link>
  );
}

function SocialIcon({ href, icon }: { href: string; icon: JSX.Element }) {
  return (
    <IconButton
      component="a"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      sx={{
        color: "#57f2e5",
        transition: "transform 0.5s, color 0.3s",
        "&:hover": { color: "#ff0080", transform: "rotateY(180deg)" },
      }}
    >
      {icon}
    </IconButton>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [statusMsg, setStatusMsg] = useState("");

  const navLinks: NavLinkType[] = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Blogs", href: "#home" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
  ];

  const socialLinks: SocialLinkType[] = [
    {
      href: "https://www.instagram.com/rasmilan__?igsh=MWVnaDk1a3diOGVwaw==",
      icon: <Instagram />,
    },
    { href: "https://github.com/Rasmilan1", icon: <GitHub /> },
    {
      href: "https://www.linkedin.com/in/selvachandran-rasmilan-a6b491340?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      icon: <LinkedIn />,
    },
    {
      href: "https://x.com/Rasmilan_?t=L3q-6uBovVZdMKreGSPuPQ&s=09",
      icon: <X />,
    },
  ];

  const handleClick = (link: NavLinkType) => {
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
      <Fade duration={1000}>
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

          {/* Desktop nav links */}
          <Stack
            direction="row"
            spacing={2}
            alignItems="center"
            sx={{
              display: { xs: "none", md: "flex" },
              fontFamily: "var(--font-lexend-deca), sans-serif",
              fontWeight: 500,
              letterSpacing: 0.5,
            }}
          >
            {navLinks.map((link) => (
              <NavLink key={link.label} link={link} onClick={handleClick} />
            ))}

            {socialLinks.slice(0, 3).map((social) => (
              <SocialIcon
                key={social.href}
                href={social.href}
                icon={social.icon}
              />
            ))}
          </Stack>

          {/* Mobile menu button */}
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

      {/* Drawer for mobile */}
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
          {/* Top nav + search */}
          <Box>
            <List>
              {navLinks.map((link) => (
                <NavLink
                  key={link.label}
                  link={link}
                  onClick={handleClick}
                  isDrawer
                />
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

          {/* Bottom social icons */}
          <Stack direction="row" spacing={1} justifyContent="center">
            {socialLinks.map((social) => (
              <SocialIcon
                key={social.href}
                href={social.href}
                icon={social.icon}
              />
            ))}
          </Stack>
        </Box>
      </Drawer>

      {/* Status message */}
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
