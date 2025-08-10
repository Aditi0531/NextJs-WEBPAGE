import { motion } from "framer-motion";
import {
  Button,
  Container,
  Typography,
  Grid,
  useMediaQuery,
  useTheme,
} from "@mui/material";

export default function Hero() {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm")); // <600px
  const isMedium = useMediaQuery(theme.breakpoints.between("sm", "md")); // 600–900px
  const isLarge = useMediaQuery(theme.breakpoints.up("md")); // >900px

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section
      style={{
       
        position: "relative",
        padding: isSmall ? "4rem 1rem" : "8rem 1.5rem",
        background:
          "linear-gradient(135deg, #dbe4ff, #ffe6cc, #ffd6d6, #e6ccff)",
        overflow: "hidden",
        height: isSmall ? "5  0vh" : "70vh",
      }}
    >
      {/* Floating Pastel Blob 1 */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: -50 }}
        animate={{ opacity: 0.4, scale: 1, y: 0 }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
        style={{
          position: "absolute",
          top: isSmall ? "-4rem" : "-8rem",
          left: isSmall ? "-4rem" : "-8rem",
          width: isSmall ? "15rem" : "25rem",
          height: isSmall ? "15rem" : "25rem",
          background:
            "radial-gradient(circle, rgba(255,214,165,0.6) 0%, rgba(253,255,182,0.6) 100%)",
          borderRadius: "50%",
          filter: "blur(100px)",
          zIndex: 0,
        }}
      />

      {/* Floating Pastel Blob 2 */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 50 }}
        animate={{ opacity: 0.4, scale: 1, y: 0 }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
        style={{
          position: "absolute",
          bottom: isSmall ? "-4rem" : "-8rem",
          right: isSmall ? "-4rem" : "-8rem",
          width: isSmall ? "15rem" : "25rem",
          height: isSmall ? "15rem" : "25rem",
          background:
            "radial-gradient(circle, rgba(196,224,229,0.6) 0%, rgba(255,204,229,0.6) 100%)",
          borderRadius: "50%",
          filter: "blur(100px)",
          zIndex: 0,
        }}
      />

      <Container maxWidth="lg" style={{  top:isSmall? 90 :50, position: "relative", zIndex: 10 }}>
        {/* Subtitle */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={cardVariants}
        >
          <Typography
            variant={isSmall ? "body1" : "subtitle1"}
            fontWeight="bold"
            gutterBottom
            sx={{ color: "#6B7280" }}
          >
            <span
              style={{
                display: "inline-block",
                width: "12px",
                height: "12px",
                background: "#A5B4FC",
                marginRight: "8px",
                borderRadius: "50%",
              }}
            ></span>
            Hello, I’m Aditi
          </Typography>
        </motion.div>

        {/* Title */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={cardVariants}
        >
          <Typography
            variant={isSmall ? "h4" : isMedium ? "h3" : "h2"}
            component="h1"
            gutterBottom
            sx={{
              fontWeight: "bold",
              background: "linear-gradient(90deg, #A5B4FC, #FBCFE8)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              lineHeight: 1.2,
              maxWidth: isSmall ? "100%" : "50%",
            }}
          >
            A Young Creative Developer Based in India
          </Typography>
        </motion.div>

        {/* Buttons */}
        <Grid
          container
          spacing={2}
          sx={{
            marginTop: isSmall ? 4 : 10,
            justifyContent: isSmall ? "center" : "flex-start",
          }}
        >
          <Grid item>
            <motion.div whileHover={{ scale: 1.05 }}>
              <Button
                variant="outlined"
                size={isSmall ? "medium" : "large"}
                sx={{
                  color: "#6B7280",
                  borderColor: "#A5B4FC",
                  borderRadius: 5,
                  px: 3,
                  backgroundColor: "rgba(255,255,255,0.5)",
                  backdropFilter: "blur(10px)",
                  "&:hover": {
                    backgroundColor: "rgba(255,255,255,0.7)",
                  },
                }}
              >
                My Works
              </Button>
            </motion.div>
          </Grid>
          <Grid item>
            <motion.div whileHover={{ scale: 1.05 }}>
              <Button
                variant="contained"
                size={isSmall ? "medium" : "large"}
                sx={{
                  backgroundColor: "#A5B4FC",
                  color: "#fff",
                  borderRadius: 5,
                  px: 3,
                  boxShadow: "0 4px 14px rgba(165, 180, 252, 0.4)",
                  "&:hover": {
                    backgroundColor: "#93C5FD",
                  },
                }}
              >
                Let’s Talk
              </Button>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}
