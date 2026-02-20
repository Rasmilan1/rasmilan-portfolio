// SequentialIconScroll.tsx
import { Box, IconButton } from "@mui/material";
import { Icon, IconifyIcon } from "@iconify/react";
import { Key, useRef } from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { techStack } from "@/data/portfolio";


export default function SequentialIconScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollAmount = 300; // amount to scroll per click, adjust as needed

  const scrollLeft = () => {
    containerRef.current?.scrollBy({ left: -scrollAmount, behavior: "smooth" });
  };

  const scrollRight = () => {
    containerRef.current?.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  return (
    <Box sx={{ display: "flex", alignItems: "center", width: "100%" }}>
      {/* Left button */}
      <IconButton onClick={scrollLeft}>
          <ArrowBackIosNewIcon sx={{ color: "white" }} />
        </IconButton>

      {/* Scrollable icons container */}
      <Box
        ref={containerRef}
        sx={{
          display: "flex",
          overflowX: "hidden", // hide scrollbar
          flex: 1,
          gap: 2,
          scrollBehavior: "smooth",
        }}
      >
        {techStack.map((item: { logo: string | IconifyIcon; }, idx: Key | null | undefined) => (
          <Box
            key={idx}
            sx={{
              flex: "0 0 auto", // don't shrink, don't grow
              width: 80, // icon box width
              height: 80,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Icon icon={item.logo} width={60} height={60} />
          </Box>
        ))}
      </Box>

      {/* Right button */}
      <IconButton onClick={scrollRight}>
        <ArrowForwardIosIcon sx={{ color: "white" }} />
      </IconButton>
    </Box>
  );
}
