import { List, ListItem, ListItemText } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import { useState } from "react";
import ProjectModal from "./ProjectModal";

interface Project {
  name: string;
  images: string[];
  description: string;
}

interface ProjectListProps {
  onSelect: (index: number) => void;
  selectedIndex: number;
}

//projects array here
const projects: Project[] = [
  {
    name: "Learning Management System",
    images: [
      "/projects/lms/login.png",
      "/projects/lms/batchgrp.png",
      "/projects/lms/studentdetails.png",
      "/projects/lms/studentlist.png",
      "/projects/lms/timetable.png",
      "/projects/lms/attendance1.png",
      "/projects/lms/attendance2.png",
    ],

    description:
      "This LMS is a robust web application built using Angular, .NET Core, and SQL Server Management Studio (SSMS). " +
      "It efficiently manages timetables and supports role-based access for students, staff, and lecturers. " +
      "Key features include seamless communication tools, notification management, and various administrative functions " +
      "to enhance the learning and teaching experience.",
  },
  {
    name: "Gym Management System",
    images: ["/projects/gym/login.png", "/projects/gym/contactus.png"],
    description:
      "This Gym Management system is developed using Angular, .NET Core, and SQL Server Management Studio (SSMS). " +
      "It streamlines member enrollments, tracks attendance, manages fees, and organizes member information efficiently " +
      "to support smooth gym operations.",
  },
];

export default function ProjectList({
  onSelect,
  selectedIndex,
}: ProjectListProps) {
  const [open, setOpen] = useState(false);
  const [modalProjectIndex, setModalProjectIndex] = useState<number | null>(
    null
  );

  const handleOpenModal = (index: number) => {
    setModalProjectIndex(index);
    setOpen(true);
  };

  const handleCloseModal = () => {
    setOpen(false);
    setModalProjectIndex(null);
  };
  return (
    // <Box sx={{ bgcolor: "#2b2f36", borderRadius: 4 }}>
    <>
    <List>
        {projects.map((project, i) => (
          <ListItem
            key={i}
            onClick={() => onSelect(i)}
            sx={{
              color: selectedIndex === i ? "white" : "#a6a5b5ff",
              fontWeight: "bold",
              borderBottom: "1px solid rgba(255,255,255,0.1)",
              cursor: "pointer",
              "&:hover": {
                backgroundColor: "rgba(87, 242, 229, 0.2)",
                boxShadow: "0 0 15px rgba(0, 255, 255, 0.2)",
              },
              borderRadius: 2,
            }}
          >
            <ListItemText
              primary={project.name}
              primaryTypographyProps={{
                sx: {
                  fontFamily: "var(--font-lexend-deca), sans-serif",
                  fontSize: { md: "0.8rem" },
                },
              }}
            />
            <InfoIcon
              sx={{
                color: "#57f2e5",
                display: { xs: "inline-flex", sm: "none" },
                cursor: "pointer",
              }}
              onClick={(e) => {
                e.stopPropagation();
                handleOpenModal(i);
              }}
            />
          </ListItem>
        ))}
      </List>

      <ProjectModal
        open={open}
        onClose={handleCloseModal}
        project={
          modalProjectIndex !== null ? projects[modalProjectIndex] : null
        }
      />
    </>
      
  );
}

export { projects };
