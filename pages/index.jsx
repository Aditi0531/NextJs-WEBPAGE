import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import Head from 'next/head'
import { motion } from 'framer-motion'
import { Button, Container, Typography, Grid, Card, CardContent } from '@mui/material'


export default function Home() {
  return (

    <>
      <Head>
        <title>Aditi Mishra Portfolio</title>
        <meta name="description" content="Portfolio of Aditi Mishra" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header/>
      <main style={{ backgroundColor: '#FEFAEE', minHeight: '100vh' }}>
        {/* Section 1: Hero */}
        <Hero></Hero>
      </main>
      <About></About>
    </>
  )
}
