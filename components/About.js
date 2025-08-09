import React from "react";
import { motion } from "framer-motion";
import { Button, Typography, Box } from "@mui/material";
import Image from "next/image";
import user from "../assets/user.png"; // Replace with your image

export default function AboutSection() {
  return (
    <Box
      sx={{
        background: "#fdf8f2", // pastel beige from your image
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "4rem 2rem",
      }}
    >
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
          gap: "3rem",
          maxWidth: "1200px",
          alignItems: "center",
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
              width: "320px",
              height: "420px",
              borderRadius: "50%",
              background:
                "radial-gradient(circle at top left, #ffb6b9,rgb(218, 137, 115), transparent)",
              filter: "blur(60px)",
              zIndex: 0,
            }}
          />
          {/* <motion.img
            src={user}
            alt="About"
            style={{
              width: "300px",
              height: "400px",
              borderRadius: "50%",
              objectFit: "cover",
              boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
              position: "relative",
              zIndex: 1,
            }}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
          /> */}
           <motion.div
      style={{
        borderRadius: "50%",
        boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
        position: "relative",
        zIndex: 1,
        // The div should have a position other than static for 'fill' to work
      }}
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 200 }}
    >
      <Image
        src={user}
        alt="About"
        width={300} // The intrinsic width of the image
        height={500} // The intrinsic height of the image
        style={{
          borderRadius: "50%",
          objectFit: "cover",
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
            }}
          >
            Crafting Unique Brand Experiences Since 2014
          </Typography>
          <Typography
            sx={{
              color: "#333",
              fontSize: "1rem",
              lineHeight: 1.6,
              mb: 3,
              maxWidth: "500px",
            }}
          >
            With a Visual Arts degree, my journey began in graphic design,
            crafting logos and marketing materials. Video editing followed,
            where meticulous attention to detail set my work apart, and I
            ventured into 3D modeling for immersive experiences.
          </Typography>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant="outlined"
              sx={{
                borderColor: "#1a1a1a",
                color: "#1a1a1a",
                borderRadius: "999px",
                px: 3,
                py: 1,
                textTransform: "uppercase",
                fontWeight: "bold",
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
