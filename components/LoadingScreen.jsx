import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function LoadingScreen({ onFinish }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onFinish, 300); // delay to fade out
          return 100;
        }
        return prev + 1;
      });
    }, 20); // adjust speed here

    return () => clearInterval(interval);
  }, [onFinish]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: progress >= 100 ? 0 : 1 }}
      transition={{ duration: 0.5 }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "#000",
        color: "#fff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        zIndex: 9999,
      }}
    >
      {/* Center Loading Text */}
      <p style={{ fontSize: "1.2rem", marginBottom: "auto", marginTop: "45vh" }}>
        Loading...
      </p>

      {/* Bottom Progress Bar */}
      <div style={{ position: "absolute", bottom: "20px", width: "90%" }}>
        <motion.div
          initial={{ width: "0%" }}
          animate={{ width: `${progress}%` }}
          transition={{ ease: "linear", duration: 0.2 }}
          style={{
            height: "3px",
            background: "linear-gradient(to right, #ff5f6d, #ffc371)",
            borderRadius: "2px",
          }}
        />
        <p style={{ textAlign: "right", fontSize: "0.9rem", marginTop: "5px" }}>
          {progress}%
        </p>
      </div>
    </motion.div>
  );
}
