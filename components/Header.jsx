import React, { useState,useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  Typography,
  Box,
  Drawer,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { motion } from "framer-motion";
import useMediaQuery from "@mui/material/useMediaQuery";
import CloseIcon from '@mui/icons-material/Close';

const navItems = ["About Me", "Portfolio", "Skills", "Services", "Testimonials"];

export default function Header() {
  const isMobile = useMediaQuery("(max-width:940px)");
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };
 useEffect(() => {
    if (!isMobile && drawerOpen) {
      setDrawerOpen(false);
    }
  }, [isMobile, drawerOpen]);
  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          background: "#1a1a1a",
          padding: "0.5rem 2rem",
          boxShadow: "0 4px 15px rgba(0,0,0,0.3)",
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          {/* Logo */}
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

          {/* Desktop Navigation */}
          {!isMobile && (
            <Box sx={{ display: "flex", gap: "2rem", alignItems: "center" }}>
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
                    boxShadow: "0 0 10px rgba(245,240,225,0.6)",
                    "&:hover": {
                      backgroundColor: "#ffffff",
                      boxShadow: "0 0 15px rgba(255,255,255,0.9)",
                    },
                  }}
                >
                  Get in Touch
                </Button>
              </motion.div>
            </Box>
          )}

          {/* Mobile Menu Button */}
          {isMobile && (
            <IconButton onClick={toggleDrawer(true)} sx={{ color: "#f5f0e1" }}>
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        PaperProps={{
          sx: {
            backgroundColor: "#1a1a1a",
            color: "#f5f0e1",
            zIndex:10,
            width: "250px",
            padding: "1.5rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          },
        }}
      >
        {/* Header inside drawer */}
       <Box display="flex" justifyContent="space-between" alignItems="right">
  <Box></Box>
  <IconButton onClick={toggleDrawer(false)} sx={{ color: "#f5f0e1" }}>
    <CloseIcon />
  </IconButton>
</Box>
        {/* Nav Links */}
        <Box mt={4} display="flex" flexDirection="column" gap="1.5rem">
          {navItems.map((item) => (
            <Typography
              key={item}
              sx={{
                fontSize: "1rem",
                textTransform: "uppercase",
                cursor: "pointer",
                "&:hover": { color: "#ffffff" },
              }}
              onClick={toggleDrawer(false)}
            >
              {item}
            </Typography>
          ))}
        </Box>

        {/* Button */}
        <Button
          variant="contained"
          sx={{
            mt: "auto",
            mb:"20%",
            backgroundColor: "#f5f0e1",
            color: "#1a1a1a",
            borderRadius: "999px",
            textTransform: "uppercase",
            fontSize: "0.8rem",
            padding: "0.6rem 1.5rem",
            "&:hover": { backgroundColor: "#ffffff" },
          }}
        >
          Get in Touch
        </Button>
      </Drawer>
    </>
  );
}

