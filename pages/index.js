import Header from '../components/Header'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import About from '../components/About'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Head from 'next/head'
import { motion } from 'framer-motion'
import { Button, Container, Typography, Grid, Card, CardContent } from '@mui/material'

export default function Home() {
  return (
    // <>
    //   <Head>
    //     <title>Freelancer Template</title>
    //   </Head>
    //   <main style={{ backgroundColor: '#FEFAEE', minHeight: '100vh' }}>
    //     {/* Section 1: Hero */}
    //     <section style={{ position: 'relative', padding: '6rem 1.5rem', textAlign: 'center' }}>
    //       <div style={{
    //         position: 'absolute',
    //         top: '-6rem',
    //         left: '-6rem',
    //         width: '24rem',
    //         height: '24rem',
    //         background: 'linear-gradient(135deg, #818CF8, #6366F1)',
    //         borderRadius: '50%',
    //         filter: 'blur(80px)',
    //         opacity: 0.3,
    //         zIndex: 0
    //       }}></div>

    //       <Container maxWidth="md" style={{ position: 'relative', zIndex: 10 }}>
    //         <Typography variant="h2" component="h1" gutterBottom fontWeight="bold" color="text.primary">
    //           Bring Your Ideas to Life
    //         </Typography>
    //         <Typography variant="h6" color="text.secondary" paragraph>
    //           I help entrepreneurs, startups, and brands create beautiful, functional websites.
    //         </Typography>
    //         <Grid container justifyContent="center" spacing={2}>
    //           <Grid item>
    //             <Button variant="contained" color="primary" size="large" sx={{ borderRadius: 2 }}>
    //               Get Started
    //             </Button>
    //           </Grid>
    //           <Grid item>
    //             <Button variant="outlined" color="primary" size="large" sx={{ borderRadius: 2 }}>
    //               View Work
    //             </Button>
    //           </Grid>
    //         </Grid>
    //       </Container>
    //     </section>

    //     {/* Section 2: Info / Highlight */}
    //     <section style={{ position: 'relative', padding: '5rem 1.5rem' }}>
    //       <div style={{
    //         position: 'absolute',
    //         inset: 0,
    //         display: 'flex',
    //         alignItems: 'center',
    //         justifyContent: 'center'
    //       }}>
    //         <div style={{
    //           width: '600px',
    //           height: '600px',
    //           background: 'linear-gradient(135deg, #F9A8D4, #F472B6)',
    //           borderRadius: '50%',
    //           filter: 'blur(120px)',
    //           opacity: 0.2
    //         }}></div>
    //       </div>

    //       <Container maxWidth="lg" style={{ position: 'relative', zIndex: 10, textAlign: 'center' }}>
    //         <Typography variant="h3" component="h2" gutterBottom fontWeight="bold">
    //           Why Choose Me?
    //         </Typography>
    //         <Typography variant="h6" color="text.secondary" paragraph>
    //           I combine modern design trends with cutting-edge development to craft experiences that engage and convert.
    //         </Typography>

    //         <Grid container spacing={4} sx={{ marginTop: 4 }}>
    //           {[{
    //             title: 'Design',
    //             text: 'Clean, modern, and user-friendly interfaces.'
    //           }, {
    //             title: 'Development',
    //             text: 'Fast, responsive, and scalable solutions.'
    //           }, {
    //             title: 'Support',
    //             text: 'Ongoing support to keep your site running smoothly.'
    //           }].map((card, idx) => (
    //             <Grid item xs={12} md={4} key={idx}>
    //               <Card elevation={3} sx={{ borderRadius: 3 }}>
    //                 <CardContent>
    //                   <Typography variant="h5" fontWeight="bold" gutterBottom>
    //                     {card.title}
    //                   </Typography>
    //                   <Typography variant="body1" color="text.secondary">
    //                     {card.text}
    //                   </Typography>
    //                 </CardContent>
    //               </Card>
    //             </Grid>
    //           ))}
    //         </Grid>
    //       </Container>
    //     </section>
    //   </main>
    // </>
    <>
      <Head>
        <Header></Header>
      </Head>
      <main style={{ backgroundColor: '#FEFAEE', minHeight: '100vh' }}>
        {/* Section 1: Hero */}
        <Hero></Hero>
      </main>
      <About></About>
    </>
  )
}
