import About from "@/components/About";
import Build from "@/components/Build";
import Write from "@/components/Write";
import Stack from "@/components/Stack";
import Explore from "@/components/Explore";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <main id="top" className="min-h-screen bg-white">
        <section className="max-w-5xl mx-auto px-6 pt-32 pb-20">
          <p className="font-mono text-xs tracking-widest uppercase text-gold mb-5">
            Full-Stack Developer &amp; Writer - Nigeria
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-navy mb-6">
            I build digital products. I write about what I learn
          </h1>

          <p className="text-lg text-neutral-600 max-w-md mb-10">
            I&apos;m Celine, a full-stack developer and writer exploring emerging technology, one project at a time.
          </p>

          <div className="flex flex-wrap gap-4">
            <a href="#build" className="bg-gold text-navy font-semibold px-6 py-3 rounded-lg hover:opacity-90 transition">
              View My Work
            </a>
            <a href="#write" className="border border-navy text-navy font-semibold px-6 py-3 rounded-lg hover:bg-navy hover:text-white transition">
              Read My Writing
            </a>
          </div>
        </section>

        <About />
        <Build />
        <Write />
        <Stack />
        <Explore />
        <Contact />
      </main>
      <Footer />
    </>
  );
}