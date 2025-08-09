// import React from "react";
// import { AppBar, Toolbar, Button, Typography, Box } from "@mui/material";
// import { motion } from "framer-motion";

// const navItems = ["About Me", "Portfolio", "Skills", "Services", "Testimonials"];

// export default function Header() {
//   return (
//     <AppBar
//       position="static"
//       sx={{
//         backgroundColor: "#9c356d", // darker shade than current
//         padding: "0.5rem 2rem",
//         boxShadow: "none",
//       }}
//     >
//       <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
//         {/* Logo / Name */}
//         <Typography
//           variant="h6"
//           sx={{
//             color: "#f5f0e1",
//             fontWeight: "bold",
//             letterSpacing: "1px",
//           }}
//         >
//           ADITI MISHRA
//         </Typography>

//         {/* Navigation */}
//         <Box sx={{ display: "flex", gap: "2rem" }}>
//           {navItems.map((item) => (
//             <motion.div
//               key={item}
//               whileHover={{ scale: 1.1, y: -2 }}
//               transition={{ type: "spring", stiffness: 200 }}
//             >
//               <Typography
//                 sx={{
//                   color: "#d6d6d6",
//                   fontSize: "0.9rem",
//                   textTransform: "uppercase",
//                   cursor: "pointer",
//                   "&:hover": { color: "#f5f0e1" },
//                 }}
//               >
//                 {item}
//               </Typography>
//             </motion.div>
//           ))}
//         </Box>

//         {/* Get in Touch Button */}
//         <motion.div
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//           transition={{ duration: 0.2 }}
//         >
//           <Button
//             variant="contained"
//             sx={{
//               backgroundColor: "#f5f0e1",
//               color: "#1a1a1a",
//               borderRadius: "999px",
//               textTransform: "uppercase",
//               fontSize: "0.8rem",
//               padding: "0.6rem 1.5rem",
//               "&:hover": {
//                 backgroundColor: "#eae2d6",
//               },
//             }}
//           >
//             Get in Touch
//           </Button>
//         </motion.div>
//       </Toolbar>
//     </AppBar>
//   );
// }

import React from "react";
import { AppBar, Toolbar, Button, Typography, Box } from "@mui/material";
import { motion } from "framer-motion";

const navItems = ["About Me", "Portfolio", "Skills", "Services", "Testimonials"];

export default function Header() {
  return (
    <AppBar
      position="fixed" // stays on top when scrolling
      sx={{
        background: "linear-gradient(135deg, #1a1a1a, #2d2d3a)", // dark gradient for contrast
        padding: "0.5rem 2rem",
        boxShadow: "0 4px 15px rgba(0,0,0,0.3)",
        zIndex: 1300, // higher than most elements
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* Logo / Name */}
        <motion.div
          whileHover={{ scale: 1.1, y: -2 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          <Typography
            variant="h6"
            sx={{
              color: "#f5f0e1",
              fontWeight: "bold",
              letterSpacing: "1px",
              cursor: "pointer",
            }}
          >
            ADITI MISHRA
          </Typography>
        </motion.div>

        {/* Navigation */}
        <Box sx={{ display: "flex", gap: "2rem" }}>
          {navItems.map((item) => (
            <motion.div
              key={item}
              whileHover={{ scale: 1.1, y: -2 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <Typography
                sx={{
                  color: "#d6d6d6",
                  fontSize: "0.9rem",
                  textTransform: "uppercase",
                  cursor: "pointer",
                  "&:hover": { color: "#ffffff" },
                }}
              >
                {item}
              </Typography>
            </motion.div>
          ))}
        </Box>

        {/* Get in Touch Button */}
        <motion.div
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
        >
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#f5f0e1",
              color: "#1a1a1a",
              borderRadius: "999px",
              textTransform: "uppercase",
              fontSize: "0.8rem",
              padding: "0.6rem 1.5rem",
              boxShadow: "0 0 10px rgba(245,240,225,0.6)", // glow
              "&:hover": {
                backgroundColor: "#ffffff",
                boxShadow: "0 0 15px rgba(255,255,255,0.9)",
              },
            }}
          >
            Get in Touch
          </Button>
        </motion.div>
      </Toolbar>
    </AppBar>
  );
}
