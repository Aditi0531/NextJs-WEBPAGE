import { useState } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Head from "next/head";
import LoadingScreen from "../components/LoadingScreen";

export default function Home() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <Head>
        <title>Aditi Mishra Portfolio</title>
        <meta name="description" content="Portfolio of Aditi Mishra" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {loading && <LoadingScreen onFinish={() => setLoading(false)} />}

      {!loading && (
        <>
          <Header />
          <main style={{ backgroundColor: "#FEFAEE", minHeight: "100vh" }}>
            <Hero />
          </main>
          <About />
        </>
      )}
    </>
  );
}
