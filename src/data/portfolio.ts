
// SKILLS 

export type TechItem = { logo: string };
export const techStack: TechItem[] = [
  { logo: "logos:html-5" },
  { logo: "logos:css-3" },
  { logo: "logos:javascript" },
  { logo: "logos:react" },
  { logo: "logos:nextjs-icon" },
  { logo: "logos:typescript-icon" },
  { logo: "logos:angular-icon" },
  { logo: "logos:bootstrap" },
  { logo: "logos:dotnet" },
  { logo: "logos:flutter" },
  { logo: "logos:postgresql" },
  { logo: "skill-icons:prisma" },
];


// PROJECTS


export const featuredProjects = [
  {
    tag: "Conceptual Work",
    title: "Student Management System",
    description:
      "Manages student attendance, grades, and information efficiently...",
    year: "2024",
    role: "Full-Stack Developer",
    image: "/projects/lms/login.png",
    actions: [
      { label: "MORE INFO ↗", href: "#contact" },
      { label: "SEE ON GITHUB", href: "#contact " },
    ],
  },
  {
    tag: "Conceptual Work",
    title: "Gym Management System",
    description:
      "Manages gym members, workouts, and schedules...",
    year: "2024",
    role: "Full-Stack Developer",
    image: "/projects/gym/login.png",
    actions: [
      { label: "MORE INFO ↗", href: "#contact" },
      { label: "SEE ON GITHUB", href: "#contact" },
    ],
  },
  // {
  //   tag: "Conceptual Work",
  //   title: "E-commerce product page",
  //   description:
  //     "Successfully crafted an engaging product page featuring a dynamic lightbox gallery...",
  //   year: "2022",
  //   role: "Full-Stack Developer",
  //   image: "/projects/lms/login.png",
  //   actions: [
  //     { label: "MORE INFO ↗", href: "#" },
  //     { label: "SEE ON GITHUB", href: "#" },
  //   ],
  // },
];
