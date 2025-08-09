// import { motion } from 'framer-motion'
// import { Button, Container, Typography, Grid } from '@mui/material'

// export default function Hero() {
//   return (
//     <section
//       style={{
//         position: 'relative',
//         padding: '8rem 1.5rem',
//         background: 'linear-gradient(180deg, #FDFBFB, #EBEDEE)',
//         overflow: 'hidden',
//         height:'50vh'
//       }}
//     >
//       {/* Floating Pastel Blob 1 */}
//       <motion.div
//         initial={{ opacity: 0, scale: 0.8, y: -50 }}
//         animate={{ opacity: 0.4, scale: 1, y: 0 }}
//         transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
//         style={{
//           position: 'absolute',
//           top: '-8rem',
//           left: '-8rem',
//           width: '25rem',
//           height: '25rem',
//           background: 'radial-gradient(circle, rgba(255,214,165,0.6) 0%, rgba(253,255,182,0.6) 100%)',
//           borderRadius: '50%',
//           filter: 'blur(100px)',
//           zIndex: 0
//         }}
//       />

//       {/* Floating Pastel Blob 2 */}
//       <motion.div
//         initial={{ opacity: 0, scale: 0.8, y: 50 }}
//         animate={{ opacity: 0.4, scale: 1, y: 0 }}
//         transition={{ duration: 3, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
//         style={{
//           position: 'absolute',
//           bottom: '-8rem',
//           right: '-8rem',
//           width: '25rem',
//           height: '25rem',
//           background: 'radial-gradient(circle, rgba(196,224,229,0.6) 0%, rgba(255,204,229,0.6) 100%)',
//           borderRadius: '50%',
//           filter: 'blur(100px)',
//           zIndex: 0
//         }}
//       />

//       <Container maxWidth="lg" style={{ position: 'relative', zIndex: 10 }}>
//         <Typography
//           variant="subtitle1"
//           fontWeight="bold"
//           gutterBottom
//           sx={{ color: '#6B7280' }}
//         >
//           <span
//             style={{
//               display: 'inline-block',
//               width: '12px',
//               height: '12px',
//               background: '#A5B4FC',
//               marginRight: '8px',
//               borderRadius: '50%'
//             }}
//           ></span>
//           Hello, I’m Aditi
//         </Typography>

//         <Typography
//           variant="h2"
//           component="h1"
//           gutterBottom
//           sx={{
//             fontWeight: 'bold',
//             background: 'linear-gradient(90deg, #A5B4FC, #FBCFE8)',
//             WebkitBackgroundClip: 'text',
//             WebkitTextFillColor: 'transparent',
//             lineHeight: 1.1,
//             maxWidth:'50%'
//           }}
//         >
//           A Young Creative Developer Based in India
//         </Typography>

//         <Grid container spacing={2} sx={{ marginTop: 4 }}>
//           <Grid item>
//             <Button
//               variant="outlined"
//               size="large"
//               sx={{
//                 color: '#6B7280',
//                 borderColor: '#A5B4FC',
//                 borderRadius: 5,
//                 px: 3,
//                 backgroundColor: 'rgba(255,255,255,0.5)',
//                 backdropFilter: 'blur(10px)',
//                 '&:hover': {
//                   backgroundColor: 'rgba(255,255,255,0.7)'
//                 }
//               }}
//             >
//               My Works
//             </Button>
//           </Grid>
//           <Grid item>
//             <Button
//               variant="contained"
//               size="large"
//               sx={{
//                 backgroundColor: '#A5B4FC',
//                 color: '#fff',
//                 borderRadius: 5,
//                 px: 3,
//                 boxShadow: '0 4px 14px rgba(165, 180, 252, 0.4)',
//                 '&:hover': {
//                   backgroundColor: '#93C5FD'
//                 }
//               }}
//             >
//               Let’s Talk
//             </Button>
//           </Grid>
//         </Grid>
//       </Container>
//     </section>
//   )
// }

import { motion } from 'framer-motion'
import { Button, Container, Typography, Grid, Box } from '@mui/material'

export default function Hero() {
  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  }

  return (
    <section
  style={{
    position: 'relative',
    padding: '8rem 1.5rem',
    background: 'linear-gradient(135deg, #dbe4ff, #ffe6cc, #ffd6d6, #e6ccff)',
    overflow: 'hidden',
    height: '70vh'
  }}
>
      {/* Floating Pastel Blob 1 */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: -50 }}
        animate={{ opacity: 0.4, scale: 1, y: 0 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        style={{
          position: 'absolute',
          top: '-8rem',
          left: '-8rem',
          width: '25rem',
          height: '25rem',
          background: 'radial-gradient(circle, rgba(255,214,165,0.6) 0%, rgba(253,255,182,0.6) 100%)',
          borderRadius: '50%',
          filter: 'blur(100px)',
          zIndex: 0
        }}
      />

      {/* Floating Pastel Blob 2 */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 50 }}
        animate={{ opacity: 0.4, scale: 1, y: 0 }}
        transition={{ duration: 3, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        style={{
          position: 'absolute',
          bottom: '-8rem',
          right: '-8rem',
          width: '25rem',
          height: '25rem',
          background: 'radial-gradient(circle, rgba(196,224,229,0.6) 0%, rgba(255,204,229,0.6) 100%)',
          borderRadius: '50%',
          filter: 'blur(100px)',
          zIndex: 0
        }}
      />

      <Container maxWidth="lg" style={{ position: 'relative', zIndex: 10 }}>
        {/* Subtitle */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={cardVariants}
        >
          <Typography
            variant="subtitle1"
            fontWeight="bold"
            gutterBottom
            sx={{ color: '#6B7280' }}
          >
            <span
              style={{
                display: 'inline-block',
                width: '12px',
                height: '12px',
                background: '#A5B4FC',
                marginRight: '8px',
                borderRadius: '50%'
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
            variant="h2"
            component="h1"
            gutterBottom
            sx={{
              fontWeight: 'bold',
              background: 'linear-gradient(90deg, #A5B4FC, #FBCFE8)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              lineHeight: 1.1,
              maxWidth: '50%'
            }}
          >
            A Young Creative Developer Based in India
          </Typography>
        </motion.div>

        {/* Glassmorphism Cards */}
        <Grid container spacing={3} sx={{ marginTop: 4 }}>
          {[
            { title: "UI/UX Design", desc: "Crafting intuitive and elegant interfaces." },
            { title: "Frontend Development", desc: "Building seamless and interactive web apps." },
            { title: "Backend Development", desc: "Crafting robust and scalable server-side solutions." }
          ].map((card, index) => (
            <Grid item xs={12} md={4} key={index}>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
                variants={cardVariants}
                whileHover={{ scale: 1.05, boxShadow: "0 8px 32px rgba(165, 180, 252, 0.4)" }}
                transition={{ type: "spring", stiffness: 200 }}
                style={{
                  padding: "1.5rem",
                  borderRadius: "1rem",
                  background: "rgba(255, 255, 255, 0.25)",
                  backdropFilter: "blur(15px)",
                  border: "1px solid rgba(255, 255, 255, 0.18)",
                  cursor: "pointer",
                  height: "100%"
                }}
              >
                <Typography variant="h6" sx={{ fontWeight: "bold", color: "#374151" }}>
                  {card.title}
                </Typography>
                <Typography variant="body2" sx={{ color: "#4B5563", marginTop: "0.5rem" }}>
                  {card.desc}
                </Typography>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* Buttons */}
        <Grid container spacing={2} sx={{ marginTop: 10 }}>
          <Grid item>
            <motion.div whileHover={{ scale: 1.05 }}>
              <Button
                variant="outlined"
                size="large"
                sx={{
                  color: '#6B7280',
                  borderColor: '#A5B4FC',
                  borderRadius: 5,
                  px: 3,
                  backgroundColor: 'rgba(255,255,255,0.5)',
                  backdropFilter: 'blur(10px)',
                  '&:hover': {
                    backgroundColor: 'rgba(255,255,255,0.7)'
                  }
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
                size="large"
                sx={{
                  backgroundColor: '#A5B4FC',
                  color: '#fff',
                  borderRadius: 5,
                  px: 3,
                  boxShadow: '0 4px 14px rgba(165, 180, 252, 0.4)',
                  '&:hover': {
                    backgroundColor: '#93C5FD'
                  }
                }}
              >
                Let’s Talk
              </Button>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </section>
  )
}
