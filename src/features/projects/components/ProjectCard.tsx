"use client";

import { Box, Grid, Typography, Divider, Link } from "@mui/material";

export interface ProjectAction {
  label: string;
  href: string;
}

export interface ProjectCardProps {
  tag: string;
  title: string;
  description: string;
  year: string;
  role: string;
  image: string;
  actions?: ProjectAction[]; // optional
}

export default function ProjectCard({
  tag,
  title,
  description,
  year,
  role,
  image,
  actions = [], // default prevents crash
}: ProjectCardProps) {
  return (
    <Box
      sx={{
        p: 3,
        transition: "all 0.3s ease",
        "&:hover": { bgcolor: "rgba(0,0,0,0.5)" },
        borderTop: "1px solid #444",
        "&:last-of-type": {
          borderBottom: "1px solid #444",
        },
        "&:not(:first-of-type)": {
          borderTop: "1px solid #444",
        },
      }}
    >
      <Grid container spacing={6}>
        <Grid size={{ xs: 12, md: 6 }}>
          <Box
            sx={{
              // backgroundColor: "#292828",
              p: 3,
              borderRadius: 3,
            }}
          >
            <Box
              component="img"
              src={image}
              alt={title}
              sx={{
                width: "100%",
                borderRadius: 2,
              }}
            />
          </Box>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <Typography
            variant="caption"
            sx={{
              display: "inline-block",
              borderRadius: 5,
              bgcolor:"#66220d",
              px:1,
              mb: 1,
            }}
          >
            {tag}
          </Typography>

          <Typography variant="h5" sx={{ mb: 2 }}>
            {title}
          </Typography>

          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ mb: 4, lineHeight: 1.8 }}
          >
            {description}
          </Typography>

          <Box sx={{ mb: 3 }}>
            <Typography variant="caption">PROJECT INFO</Typography>
            <Divider sx={{ my: 1, borderColor: "#222" }} />

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                mb: 1,
              }}
            >
              <Typography variant="body2" color="text.secondary">
                Year
              </Typography>
              <Typography variant="body2">{year}</Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Typography variant="body2" color="text.secondary">
                Role
              </Typography>
              <Typography variant="body2">{role}</Typography>
            </Box>
          </Box>

          {actions.length > 0 && (
            <Box sx={{ display: "flex", gap: 3 }}>
              {actions.map((action) => (
                <Link
                  key={action.label}
                  href={action.href}
                  underline="none"
                  sx={{
                    color: "#c6ff6a",
                    fontWeight: 600,
                    fontSize: 14,
                    "&:hover": { opacity: 0.7 },
                  }}
                >
                  {action.label}
                </Link>
              ))}
            </Box>
          )}
        </Grid>
      </Grid>
    </Box>
  );
}
