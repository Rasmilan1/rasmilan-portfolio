import { Email, Download } from "@mui/icons-material";
import { Avatar, Box, Button, Chip, Paper, Typography } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import LanguageIcon from "@mui/icons-material/Language";
import { useRef, useEffect } from "react";

const chips = [
  { label: "HTML", sx: { bgcolor: "#E34F26", color: "white" } },
  { label: "CSS", sx: { bgcolor: "#1572B6", color: "white" } },
  { label: "JS", sx: { bgcolor: "#F7DF1E", color: "black" } },
  { label: "REACTJS", sx: { bgcolor: "#61DAFB", color: "black" } },
  { label: "TS", sx: { bgcolor: "#3178C6", color: "white" } },
  { label: "ANGULAR", sx: { bgcolor: "#DD0031", color: "white" } },
  { label: "NEXTJS", sx: { bgcolor: "#000000", color: "white" } },
  { label: "REACTJS", sx: { bgcolor: "#61DAFB", color: "black" } },
];

export default function ProfileCard() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let scrollPos = 0;
    let direction = 1;
    const maxScroll = container.scrollWidth - container.clientWidth;
    const step = 1;
    const intervalMs = 20;

    const intervalId = setInterval(() => {
      scrollPos += step * direction;
      if (scrollPos >= maxScroll) direction = -1;
      else if (scrollPos <= 0) direction = 1;

      container.scrollLeft = scrollPos;
    }, intervalMs);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      {/* Left Card */}
      <Paper
        elevation={4}
        sx={{
          p: { xs: 2, md: 3 },
          borderRadius: { xs: 3, md: "100px 0px 100px 0px" },
          bgcolor: "#1f2329",
          border: { xs: "2px solid #929e9dff", md: "2px solid #57f2e5" },
          maxWidth: { xs: "100%", sm: "100%", md: 320 },
          color: "#fff",
          flexShrink: 0,
          width: "100%",
          order: { xs: 2, md: 1 },
        }}
      >
        <Box sx={{ textAlign: "center" }}>
          <Avatar
            src="profile/Rasmilan-rounded2.png"
            sx={{ width: 80, height: 80, mx: "auto", mb: 1 }}
          />
          <Typography
            variant="h6"
            sx={{
              fontFamily: "var(--font-courier-prime), monospace",
              fontWeight: 400,
            }}
          >
            Rasmilan
          </Typography>
          <Typography
            gutterBottom
            sx={{
              fontFamily: "var(--font-goldman)",
              fontWeight: 400,
              fontSize: "0.8rem",
              color: "#d1cfcf",
            }}
          >
            Full-Stack Developer
          </Typography>
        </Box>

        {/* Contact Info */}
        <Box sx={{ textAlign: "left", mt: 2 }}>
          <Box display="flex" alignItems="center" gap={0.5}>
            <Email fontSize="small" sx={{ color: "#57f2e5" }} />
            <Typography variant="caption">rxmilan13@gmail.com</Typography>
          </Box>
          <br />
          <Box display="flex" alignItems="center" gap={0.5}>
            <LocationOnIcon fontSize="small" sx={{ color: "#57f2e5" }} />
            <Typography variant="caption">Srilanka</Typography>
          </Box>
          <br />
          <Box display="flex" alignItems="center" gap={0.5}>
            <AccessTimeFilledIcon fontSize="small" sx={{ color: "#57f2e5" }} />
            <Typography variant="caption">Full-time / Part-time</Typography>
          </Box>
          <br />
          <Box display="flex" alignItems="center" gap={0.5}>
            <LanguageIcon fontSize="small" sx={{ color: "#57f2e5" }} />
            <Typography variant="caption">www.rasmilandev.com</Typography>
          </Box>
        </Box>

        {/* Chips Scroll */}
        <Box sx={{ overflow: "hidden", borderRadius: 1, mt: 4 }}>
          <Box
            sx={{
              display: "flex",
              gap: 1,
              whiteSpace: "nowrap",
              width: "max-content",
              animation: "scrollLeft 20s linear infinite",
            }}
          >
            {[...chips, ...chips].map(({ label, sx }, idx) => (
              <Chip
                key={`${label}-${idx}`}
                label={label}
                sx={{ ...sx }}
                size="small"
              />
            ))}
          </Box>
          <style>{`
                @keyframes scrollLeft {
                  0% { transform: translateX(0); }
                  100% { transform: translateX(-50%); }
                }
              `}</style>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button
            component="a"
            download
            href="cv/CV_Rasmilan_.pdf"
            variant="contained"
            startIcon={<Download />}
            sx={{
              mt: 2,
              borderRadius: 5,
              color: "#000",
              bgcolor: "#fff",
              "&:hover": { bgcolor: "#57f2e5", color: "#1f2329" },
            }}
          >
            Download CV
          </Button>
        </Box>
      </Paper>
    </>
  );
}
