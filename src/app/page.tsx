import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";

const sections = [
  {
    title: "Projects",
    body: `${projects.length} projects with live demos and code: web apps, a Telegram bot, and an on-chain dashboard.`,
    href: "/projects",
    cta: "View projects",
  },
  {
    title: "Stack",
    body: "The languages, frameworks, and tools I use, and what I'm still growing into.",
    href: "/stack",
    cta: "See my stack",
  },
  {
    title: "About",
    body: "How I work, what I care about, and the kind of team I want to join.",
    href: "/about",
    cta: "About me",
  },
  {
    title: "Contact",
    body: "Open to remote roles and freelance work. Email me or find me on GitHub and LinkedIn.",
    href: "/contact",
    cta: "Get in touch",
  },
];

export default function Home() {
  return (
    <main id="top" className="text-[#0A1931]">
      <section className="max-w-5xl mx-auto px-6 pt-32 pb-16 grid md:grid-cols-[auto_1fr] gap-10 md:gap-14 items-start">
        <div className="w-56 md:w-64">
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-[#F6FAFD]">
            <Image
              src="/celine.jpg"
              alt="Portrait of Celine Ojo"
              fill
              priority
              sizes="(min-width: 768px) 256px, 224px"
              className="object-cover"
            />
          </div>
          <p className="mt-4 font-semibold leading-snug">
            Full-stack and Mobile developer
          </p>
          <p className="text-sm">Nigeria</p>
        </div>

        <div>
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-6">
            Hi, I&apos;m Celine Shalom Ojo.
          </h1>
          <p className="text-lg max-w-xl leading-relaxed">
            I'm a Full-Stack developer, and a Mobile Developer. 
            I build web and mobile products from the interface to the API to
            the database. I care about shipping work that runs in the real
            world, and I&apos;m open to remote roles.
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 pb-24">
        <div className="grid sm:grid-cols-2 gap-6">
          {sections.map((item) => (
            <div
              key={item.title}
              className="flex flex-col rounded-2xl bg-[#0A1931] p-6 text-[#F6FAFD]"
            >
              <h2 className="text-xl font-bold mb-2">{item.title}</h2>
              <p className="text-sm leading-relaxed mb-6">{item.body}</p>
              <Link
                href={item.href}
                className="mt-auto self-start rounded-lg bg-[#FCA311] px-4 py-2 text-sm font-semibold text-[#0A1931] hover:brightness-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F6FAFD]"
              >
                {item.cta}
              </Link>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}