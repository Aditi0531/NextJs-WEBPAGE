import React from "react";
import { motion } from "framer-motion";
import { Button, Typography, Box } from "@mui/material";
import Image from "next/image";
import user from "../assets/user.png"; 

export default function AboutSection() {
  return (
    <Box
      sx={{
        background: "#fdf8f2",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: { xs: 2, sm: 4, md: 6 },
       pt: { xs: 0, sm: 10, md: 8 },
       pb: { xs: 6, md: 8 }, 
      }}
    >
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
          gap: { xs: "2rem", md: "3rem" },
          maxWidth: "1200px",
          alignItems: "center",
          width: "100%",
        }}
      >
        {/* IMAGE WITH ANIMATION */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false }}
          style={{
            display: "flex",
            justifyContent: "center",
            position: "relative",
          }}
        >
          {/* Glow background */}
          <motion.div
            animate={{
              rotate: [0, 10, -10, 0],
              scale: [1, 1.02, 0.98, 1],
            }}
            transition={{
              repeat: Infinity,
              duration: 6,
              ease: "easeInOut",
            }}
            style={{
              position: "absolute",
              width: "80%",
              maxWidth: "320px",
              height: "auto",
              aspectRatio: "3/4",
              borderRadius: "50%",
              background:
                "radial-gradient(circle at top left, #ffb6b9,rgb(218, 137, 115), transparent)",
              filter: "blur(60px)",
              zIndex: 0,
            }}
          />
          <motion.div
            style={{
              borderRadius: "50%",
              boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
              position: "relative",
              zIndex: 1,
              maxWidth: "300px",
              width: "80%",
            }}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <Image
              src={user}
              alt="About"
              width={300}
              height={400}
              style={{
                borderRadius: "50%",
                objectFit: "cover",
                width: "100%",
                height: "auto",
              }}
            />
          </motion.div>
        </motion.div>

        {/* TEXT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <Typography
            sx={{
              color: "#ff7b72",
              fontWeight: "bold",
              letterSpacing: "1px",
              mb: 1,
              fontSize: { xs: "0.9rem", sm: "1rem" },
            }}
          >
            ABOUT
          </Typography>
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              color: "#1a1a1a",
              mb: 2,
              fontSize: { xs: "1.8rem", sm: "2rem", md: "2.5rem" },
            }}
          >
            Building seamless digital experiences.
          </Typography>
          <Typography
            sx={{
              color: "#333",
              fontSize: { xs: "0.95rem", sm: "1rem" },
              lineHeight: 1.6,
              mb: 3,
              maxWidth: "500px",
            }}
          >
            My passion for visual arts and design led me to software development, where I now build immersive user experiences using ReactJS, design robust back-end systems with NodeJS and Flask, and bring creative ideas to life through code.
          </Typography>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant="outlined"
              sx={{
                borderColor: "#1a1a1a",
                color: "#1a1a1a",
                borderRadius: "999px",
                px: { xs: 2, sm: 3 },
                py: 1,
                textTransform: "uppercase",
                fontWeight: "bold",
                fontSize: { xs: "0.8rem", sm: "0.9rem" },
                "&:hover": {
                  backgroundColor: "#1a1a1a",
                  color: "#fff",
                },
              }}
            >
              Schedule a Call
            </Button>
          </motion.div>
        </motion.div>
      </Box>
    </Box>
  );
}
