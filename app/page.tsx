import Link from "next/link";
import React from "react";
import Particles from "./components/particles";

const navigation = [
  { name: "About", href: "/about" },
  { name: "Design", href: "/projects" },
  { name: "Articles", href: "/projects" },
  { name: "University", href: "/contact" },
  { name: "Contact", href: "/contact" },
];

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <nav
        className="my-16 animate-fade-in"
        style={{
          height: "var(--header-height)",
        }}
      >
        <div
          className="top-0 z-10 h-16"
          style={{ position: "var(--header-position)" as any }}
        >
          <div
            className="sm:px-8 top-(--header-top,--spacing(6)) w-full"
            style={{ justifyContent: "center" }}
          >
            <div className="mx-auto w-full max-w-7xl lg:px-8">
              <div className="relative px-4 sm:px-8 lg:px-12">
                <div className="mx-auto max-w-2xl lg:max-w-5xl">
                  <div className="relative flex">
                    <div className="flex flex-1 justify-end md:justify-center">
                      <div className="pointer-events-auto md:hidden">
                        <button
                          className="group flex items-center rounded-full bg-white/30 px-4 py-2 text-sm font-medium text-zinc-800 ring-1 shadow-lg shadow-zinc-800/5 ring-zinc-900/5 backdrop-blur-sm dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10 dark:hover:ring-white/20"
                          type="button"
                          aria-expanded="false"
                        >
                          Menu
                          <svg
                            viewBox="0 0 8 6"
                            aria-hidden="true"
                            className="ml-3 h-auto w-2 stroke-zinc-500 group-hover:stroke-zinc-700 dark:group-hover:stroke-zinc-400"
                          >
                            <path
                              d="M1.75 1.75 4 4.25l2.25-2.5"
                              fill="none"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                          </svg>
                        </button>
                      </div>
                      <nav className="pointer-events-auto hidden md:block">
                        <ul className="flex rounded-full bg-white/50 px-3 text-sm font-regular text-zinc-800 ring-1 shadow-lg shadow-zinc-800/5 ring-zinc-900/5 backdrop-blur-sm dark:bg-zinc-800/50 dark:text-zinc-200 dark:ring-white/10">
                          {navigation.map((item) => (
                            <li key={item.href}>
                              <a
                                className="relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400"
                                href={item.href}
                              >
                                {item.name}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </nav>
                    </div>
                    <div className="flex justify-end md:flex-1"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />

      {/* Background Image */}
      <div
        className="absolute inset-0 -z-20 animate-fade-in"
        style={{
          backgroundImage: "url('/grid.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          opacity: "0", // Adjust this for better visibility
          filter: "brightness(0.7)", // Darkens image slightly to improve contrast
          animation: "fadeIn 2s ease-in-out forwards 1.5s",
        }}
      />

      {/* Particles Layer */}
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={100}
      />

      <h1 className="py-4 px-0.5 z-10 font-display text-8xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title whitespace-nowrap bg-clip-text">
        Learn. Iterate. Grow
        <br /> ─ Repeat
      </h1>

      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <div className="mt-10 mb-16 text-center animate-fade-in">
        <h2 className="text-sm text-zinc-500 ">
          I am a Product Designer based in Copenhagen, passionate about
          incorporating{" "}
          <Link
            target="_blank"
            href="https://unkey.dev"
            className="underline duration-500 hover:text-zinc-300"
          >
            AI
          </Link>
          , automation, and data-driven insights into digital experiences.
        </h2>
      </div>
    </div>
  );
}
