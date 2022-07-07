import Head from "next/head";
import Navbar from "@/components/Navbar/";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";

export default function Home() {
  const title = "Maciej Adamski";
  const description =
    "Portfolio website of Maciej Adamski - Software Developer";
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
      </main>
    </>
  );
}
