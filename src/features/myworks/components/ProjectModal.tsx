//for mobile (description about projects modal )
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

interface ProjectModalProps {
  open: boolean;
  onClose: () => void;
  project: {
    name: string;
    description: string;
  } | null;
}

export default function ProjectModal({
  open,
  onClose,
  project,
}: ProjectModalProps) {
  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          fontFamily: "var(--font-lexend-deca), sans-serif",
          fontWeight: "bold",
          fontSize: {
            xs: "1rem",
            sm: "1.5rem",
          },
        }}
      >
        {project?.name}
        <IconButton onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent dividers>
        {project ? (
          <>
            <Typography
              sx={{ fontFamily: "var(--font-sansation), sans-serif" }}
            >
              {project.description}
            </Typography>
          </>
        ) : (
          <Typography>No project data available.</Typography>
        )}
      </DialogContent>
    </Dialog>
  );
}
