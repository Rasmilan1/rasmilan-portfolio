"use client";

import { useEffect, useRef, useState } from "react";
import { Box, SxProps, Theme } from "@mui/material";
import { Icon } from "@iconify/react";

const techLogos = [
  "logos:html-5",
  "logos:css-3",
  "logos:javascript",
  "logos:react",
  "logos:nextjs-icon",
  "logos:typescript-icon",
  "logos:angular-icon",
  "logos:bootstrap",
  "logos:dotnet",
];

interface FloatingIcon {
  x: number;
  y: number;
  dx: number;
  dy: number;
  size: number;
  icon: string;
  el?: HTMLDivElement;
}

const minSpacing = 40;

export default function FloatingBackground({
  children,
  sx,
  iconCount = 30,
}: {
  children: React.ReactNode;
  sx?: SxProps<Theme>;
  iconCount?: number;
}) {
  const iconsRef = useRef<FloatingIcon[]>([]);
  const mousePos = useRef({ x: 0, y: 0 });
  const tilt = useRef({ gamma: 0, beta: 0 });
  const [mounted, setMounted] = useState(false);
  const [initialIcons, setInitialIcons] = useState<FloatingIcon[]>([]);

  // initialize icons
  useEffect(() => {
    setMounted(true);

    const width = window.innerWidth;
    const height = window.innerHeight;
    const icons: FloatingIcon[] = [];

    while (icons.length < iconCount) {
      const size = 20 + Math.random() * 25;
      const x = Math.random() * (width - size);
      const y = Math.random() * (height - size);
      const icon = techLogos[Math.floor(Math.random() * techLogos.length)];

      const tooClose = icons.some(
        (other) => Math.hypot(other.x - x, other.y - y) < minSpacing + size / 2
      );

      if (!tooClose) {
        icons.push({
          x,
          y,
          dx: (Math.random() - 0.5) * 0.5,
          dy: (Math.random() - 0.5) * 0.5,
          size,
          icon,
        });
      }
    }

    setInitialIcons(icons);
    iconsRef.current = icons;
  }, [iconCount]);

  // animate loop
  useEffect(() => {
    if (!mounted) return;

    let frame: number;
    const gravity = 0.04;
    const bounce = 0.6;

    const handleOrientation = (event: DeviceOrientationEvent) => {
      tilt.current.gamma = event.gamma ?? 0;
      tilt.current.beta = event.beta ?? 0;
    };

    if ("DeviceOrientationEvent" in window) {
      window.addEventListener("deviceorientation", handleOrientation, true);
    }
   

    const animate = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const { x: mouseX, y: mouseY } = mousePos.current;
      const { gamma, beta } = tilt.current;

      iconsRef.current.forEach((icon) => {
        icon.dy += gravity;

        // repel from mouse
        const dxMouse = icon.x - mouseX;
        const dyMouse = icon.y - mouseY;
        const distMouse = Math.sqrt(dxMouse ** 2 + dyMouse ** 2);
        if (distMouse < 120) {
          icon.dx += (dxMouse / distMouse) * 0.2;
          icon.dy += (dyMouse / distMouse) * 0.2;
        }

        // tilt forces
        icon.dx += gamma * 0.005;
        icon.dy += beta * 0.005;

        // update position
        icon.x += icon.dx;
        icon.y += icon.dy;

        // wall bounce
        if (icon.x < 0 || icon.x > width - icon.size) {
          icon.dx *= -bounce;
          icon.x = Math.max(0, Math.min(width - icon.size, icon.x));
        }
        if (icon.y < 0 || icon.y > height - icon.size) {
          icon.dy *= -bounce;
          icon.y = Math.max(0, Math.min(height - icon.size, icon.y));
        }
      });

      // 🔥 collision separation between icons (INSIDE loop)
      for (let i = 0; i < iconsRef.current.length; i++) {
        for (let j = i + 1; j < iconsRef.current.length; j++) {
          const a = iconsRef.current[i];
          const b = iconsRef.current[j];

          const dx = b.x - a.x;
          const dy = b.y - a.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const minDist = (a.size + b.size) / 2 + 5;

          if (dist < minDist && dist > 0) {
            const nx = dx / dist;
            const ny = dy / dist;
            const overlap = minDist - dist;

            const adjust = overlap * 0.5;
            a.x -= nx * adjust;
            a.y -= ny * adjust;
            b.x += nx * adjust;
            b.y += ny * adjust;

            a.dx *= 0.98;
            a.dy *= 0.98;
            b.dx *= 0.98;
            b.dy *= 0.98;
          }
        }
      }

      // apply transforms
      iconsRef.current.forEach((icon) => {
        if (icon.el) {
          icon.el.style.transform = `translate3d(${icon.x}px, ${icon.y}px, ${
            icon.y / 2
          }px)`;
          icon.el.style.opacity = "0.85";
        }
      });

      frame = requestAnimationFrame(animate);
    };

    frame = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(frame);
      if ("DeviceOrientationEvent" in window) {
        window.removeEventListener("deviceorientation", handleOrientation);
      }
    };
  }, [mounted]);

  const handleMouseMove = (e: React.MouseEvent | React.TouchEvent) => {
      if ("touches" in e) {
        const touch = e.touches[0];
        mousePos.current = { x: touch.clientX, y: touch.clientY };
      } else {
        mousePos.current = { x: e.clientX, y: e.clientY };
      }
    };

    const handleTouchStart = (e: React.TouchEvent) => {
  const touch = e.touches[0];
  mousePos.current = { x: touch.clientX, y: touch.clientY };

  // give all icons a push
  iconsRef.current.forEach((icon) => {
    const dx = icon.x - touch.clientX;
    const dy = icon.y - touch.clientY;
    const dist = Math.sqrt(dx * dx + dy * dy) || 1;
    icon.dx += (dx / dist) * 2;
    icon.dy += (dy / dist) * 2;
  });
};

  return (
    <Box
      onMouseMove={handleMouseMove}
      onTouchMove={handleMouseMove}
      onTouchStart={handleTouchStart}
      sx={{
        position: "relative",
        width: "100%",
        minHeight: "100vh",
        overflow: "hidden",
        perspective: "1000px",
        ...sx,
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
        }}
      >
        {initialIcons.map((icon, i) => (
          <Box
            key={i}
            ref={(el: HTMLDivElement | null) => {
              if (el) icon.el = el;
            }}
            sx={{
              position: "absolute",
              width: icon.size,
              height: icon.size,
            }}
          >
            <Icon
              icon={icon.icon}
              width={icon.size}
              height={icon.size}
              color="#00f6ff"
            />
          </Box>
        ))}
      </Box>

      <Box sx={{ position: "relative", zIndex: 10 }}>{children}</Box>
    </Box>
  );
}
