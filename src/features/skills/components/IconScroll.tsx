// import { Box } from "@mui/material";
// import { Icon } from "@iconify/react";
// import { useEffect, useState } from "react";

// type TechItem = { logo: string };

// const techStack: TechItem[] = [
//   { logo: "logos:html-5" },
//   { logo: "logos:css-3" },
//   { logo: "logos:javascript" },
//   { logo: "logos:react" },
//   { logo: "logos:nextjs-icon" },
//   { logo: "logos:typescript-icon" },
//   { logo: "logos:angular-icon" },
//   { logo: "logos:bootstrap" },
//   { logo: "logos:dotnet" },
// ];

// export default function SequentialIconScroll() {
//   const iconHeight = 80;
//   const scrollDuration = 3000;

//   const [positions, setPositions] = useState<number[]>([0, 0, 0, 0]);

//   useEffect(() => {
//     let col = 0;   

//    const interval = setInterval(() => {
//   setPositions((prev) => {
//     const newPos = [...prev];
//     newPos[col] = (newPos[col] + 1) % techStack.length;
//     return newPos;
//   });

//   col = (col + 1) % 4;
// }, scrollDuration / 2);  


//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <Box
//       sx={{
//         display: "flex",
//         justifyContent: "center",
//         gap: 3,
//         overflow: "hidden",
//         mx: "auto",
//       }}
//     >
//       {positions.map((pos, colIndex) => {
         
//         const columnIcons = [...techStack, ...techStack];

//         return (
//           <Box
//             key={colIndex}
//             sx={{
//               height: iconHeight,
//               overflow: "hidden",
//               width: 80,
//             }}
//           >
//             <Box
//               sx={{
//                 display: "flex",
//                 flexDirection: "column",
//                 transform: `translateY(-${pos * iconHeight}px)`,
//                 transition: `transform ${scrollDuration}ms ease`,
//               }}
//             >
//               {columnIcons.map((item: TechItem, idx: number) => (
//                 <Box
//                   key={`${item.logo}-${idx}`}
//                   sx={{
//                     height: iconHeight,
//                     display: "flex",
//                     alignItems: "center",
//                     justifyContent: "center",
//                   }}
//                 >
//                   <Icon icon={item.logo} width={60} height={60} />
//                 </Box>
//               ))}
//             </Box>
//           </Box>
//         );
//       })}
//     </Box>
//   );
// }
