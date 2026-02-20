import { GitHub, LinkedIn, Instagram } from "@mui/icons-material";
import { Box, IconButton, Stack, Typography } from "@mui/material";
export default function Footer() {
  return (
    <Box
      sx={{
        minHeight: { xs: "10vh", sm: "18vh", md: "15vh" },
        bgcolor: "#2d2e2eff",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: { xs: 2, sm: 4, md: 8 },
      }}
    >
      <Stack spacing={2} alignItems="center" textAlign="center">
        {/* Social Icons */}
        <Stack
          direction="row"
          spacing={{ xs: 2, sm: 3, md: 4 }}
          justifyContent="center"
        >
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
        </Stack>

        {/* Copyright */}
        <Typography
          variant="caption"
          sx={{
            color: "#888",
            fontSize: { xs: "0.65rem", sm: "0.75rem", md: "0.85rem" },
            lineHeight: 1.6,
          }}
        >
          © 2025 Rasmilan. All rights reserved. &nbsp;&nbsp;&nbsp;&nbsp;
        </Typography>
      </Stack>
    </Box>
  );
}
