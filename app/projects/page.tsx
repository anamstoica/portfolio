import Link from "next/link";
import React from "react";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import { Article } from "./article";
import { Eye } from "lucide-react";

// Define types for your project and views data
type Project = {
  _id: string;
  title: string;
  description: string;
  date: string;
  slug: string;
  published: boolean;
  _raw: {
    sourceFilePath: string;
    sourceFileName: string;
    sourceFileDir: string;
    contentType: "markdown";
    flattenedPath: string;
  };
  type: "Project";
  body: any; // Replace `any` with the appropriate type for MDX
  path: string;
};

// Mock data to maintain structure
const allProjects: Project[] = [
  {
    _id: "1",
    title: "Project One",
    description: "Description of Project One",
    date: "2025-02-19T00:00:00Z",
    slug: "project-one",
    published: true,
    _raw: {
      sourceFilePath: "",
      sourceFileName: "",
      sourceFileDir: "",
      contentType: "markdown",
      flattenedPath: "",
    },
    type: "Project",
    body: {}, // Provide the appropriate mock MDX content
    path: "/projects/project-one",
  },
  {
    _id: "2",
    title: "Project Two",
    description: "Description of Project Two",
    date: "2025-02-18T00:00:00Z",
    slug: "project-two",
    published: true,
    _raw: {
      sourceFilePath: "",
      sourceFileName: "",
      sourceFileDir: "",
      contentType: "markdown",
      flattenedPath: "",
    },
    type: "Project",
    body: {},
    path: "/projects/project-two",
  },
  {
    _id: "3",
    title: "Project Three",
    description: "Description of Project Three",
    date: "2025-02-17T00:00:00Z",
    slug: "project-three",
    published: true,
    _raw: {
      sourceFilePath: "",
      sourceFileName: "",
      sourceFileDir: "",
      contentType: "markdown",
      flattenedPath: "",
    },
    type: "Project",
    body: {},
    path: "/projects/project-three",
  },
  // Add more mock projects as needed
];

// Mock views data for the projects
const views: Record<string, number> = {
  "project-one": 150,
  "project-two": 120,
  "project-three": 90,
};

export const revalidate = 60;

export default function ProjectsPage() {
  const featured = allProjects.find(
    (project) => project.slug === "project-one"
  );
  if (!featured) return <p>Featured project not found.</p>;

  const top2 = allProjects.find((project) => project.slug === "project-two");
  const top3 = allProjects.find((project) => project.slug === "project-three");

  const sorted = allProjects
    .filter((p) => p.published)
    .filter(
      (project) =>
        project.slug !== featured.slug &&
        project.slug !== top2?.slug &&
        project.slug !== top3?.slug
    )
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <div className="relative pb-16">
      <Navigation />
      <div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Projects
          </h2>
          <p className="mt-4 text-zinc-400">
            Some of the projects are from work and some are on my own time.
          </p>
        </div>
        <div className="w-full h-px bg-zinc-800" />

        <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2">
          <Card>
            <Link href={`/projects/${featured.slug}`}>
              <article className="relative w-full h-full p-4 md:p-8">
                <div className="flex items-center justify-between gap-2">
                  <div className="text-xs text-zinc-100">
                    {featured.date ? (
                      <time dateTime={new Date(featured.date).toISOString()}>
                        {Intl.DateTimeFormat(undefined, {
                          dateStyle: "medium",
                        }).format(new Date(featured.date))}
                      </time>
                    ) : (
                      <span>SOON</span>
                    )}
                  </div>
                  <span className="flex items-center gap-1 text-xs text-zinc-500">
                    <Eye className="w-4 h-4" />{" "}
                    {Intl.NumberFormat("en-US", { notation: "compact" }).format(
                      views[featured.slug] ?? 0
                    )}
                  </span>
                </div>

                <h2
                  id="featured-post"
                  className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display"
                >
                  {featured.title}
                </h2>
                <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                  {featured.description}
                </p>
                <div className="absolute bottom-4 md:bottom-8">
                  <p className="hidden text-zinc-200 hover:text-zinc-50 lg:block">
                    Read more <span aria-hidden="true">&rarr;</span>
                  </p>
                </div>
              </article>
            </Link>
          </Card>

          <div className="flex flex-col w-full gap-8 mx-auto border-t border-gray-900/10 lg:mx-0 lg:border-t-0">
            {[top2, top3].map(
              (project) =>
                project && (
                  <Card key={project.slug}>
                    <Article
                      project={project}
                      views={views[project.slug] ?? 0}
                    />
                  </Card>
                )
            )}
          </div>
        </div>
        <div className="hidden w-full h-px md:block bg-zinc-800" />

        <div className="grid grid-cols-1 gap-4 mx-auto lg:mx-0 md:grid-cols-3">
          <div className="grid grid-cols-1 gap-4">
            {sorted
              .filter((_, i) => i % 3 === 0)
              .map((project) => (
                <Card key={project.slug}>
                  <Article project={project} views={views[project.slug] ?? 0} />
                </Card>
              ))}
          </div>
          <div className="grid grid-cols-1 gap-4">
            {sorted
              .filter((_, i) => i % 3 === 1)
              .map((project) => (
                <Card key={project.slug}>
                  <Article project={project} views={views[project.slug] ?? 0} />
                </Card>
              ))}
          </div>
          <div className="grid grid-cols-1 gap-4">
            {sorted
              .filter((_, i) => i % 3 === 2)
              .map((project) => (
                <Card key={project.slug}>
                  <Article project={project} views={views[project.slug] ?? 0} />
                </Card>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// import Link from "next/link";
// import React from "react";
// import { allProjects } from "contentlayer/generated";
// import { Navigation } from "../components/nav";
// import { Card } from "../components/card";
// import { Article } from "./article";
// import { Redis } from "@upstash/redis";
// import { Eye } from "lucide-react";

// const redis = Redis.fromEnv();

// export const revalidate = 60;
// export default async function ProjectsPage() {
//   const views = (
//     await redis.mget<number[]>(
//       ...allProjects.map((p) => ["pageviews", "projects", p.slug].join(":")),
//     )
//   ).reduce((acc, v, i) => {
//     acc[allProjects[i].slug] = v ?? 0;
//     return acc;
//   }, {} as Record<string, number>);

//   const featured = allProjects.find((project) => project.slug === "unkey")!;
//   const top2 = allProjects.find((project) => project.slug === "planetfall")!;
//   const top3 = allProjects.find((project) => project.slug === "highstorm")!;
//   const sorted = allProjects
//     .filter((p) => p.published)
//     .filter(
//       (project) =>
//         project.slug !== featured.slug &&
//         project.slug !== top2.slug &&
//         project.slug !== top3.slug,
//     )
//     .sort(
//       (a, b) =>
//         new Date(b.date ?? Number.POSITIVE_INFINITY).getTime() -
//         new Date(a.date ?? Number.POSITIVE_INFINITY).getTime(),
//     );

//   return (
//     <div className="relative pb-16">
//       <Navigation />
//       <div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
//         <div className="max-w-2xl mx-auto lg:mx-0">
//           <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
//             Projects
//           </h2>
//           <p className="mt-4 text-zinc-400">
//             Some of the projects are from work and some are on my own time.
//           </p>
//         </div>
//         <div className="w-full h-px bg-zinc-800" />

//         <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2 ">
//           <Card>
//             <Link href={`/projects/${featured.slug}`}>
//               <article className="relative w-full h-full p-4 md:p-8">
//                 <div className="flex items-center justify-between gap-2">
//                   <div className="text-xs text-zinc-100">
//                     {featured.date ? (
//                       <time dateTime={new Date(featured.date).toISOString()}>
//                         {Intl.DateTimeFormat(undefined, {
//                           dateStyle: "medium",
//                         }).format(new Date(featured.date))}
//                       </time>
//                     ) : (
//                       <span>SOON</span>
//                     )}
//                   </div>
//                   <span className="flex items-center gap-1 text-xs text-zinc-500">
//                     <Eye className="w-4 h-4" />{" "}
//                     {Intl.NumberFormat("en-US", { notation: "compact" }).format(
//                       views[featured.slug] ?? 0,
//                     )}
//                   </span>
//                 </div>

//                 <h2
//                   id="featured-post"
//                   className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display"
//                 >
//                   {featured.title}
//                 </h2>
//                 <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
//                   {featured.description}
//                 </p>
//                 <div className="absolute bottom-4 md:bottom-8">
//                   <p className="hidden text-zinc-200 hover:text-zinc-50 lg:block">
//                     Read more <span aria-hidden="true">&rarr;</span>
//                   </p>
//                 </div>
//               </article>
//             </Link>
//           </Card>

//           <div className="flex flex-col w-full gap-8 mx-auto border-t border-gray-900/10 lg:mx-0 lg:border-t-0 ">
//             {[top2, top3].map((project) => (
//               <Card key={project.slug}>
//                 <Article project={project} views={views[project.slug] ?? 0} />
//               </Card>
//             ))}
//           </div>
//         </div>
//         <div className="hidden w-full h-px md:block bg-zinc-800" />

//         <div className="grid grid-cols-1 gap-4 mx-auto lg:mx-0 md:grid-cols-3">
//           <div className="grid grid-cols-1 gap-4">
//             {sorted
//               .filter((_, i) => i % 3 === 0)
//               .map((project) => (
//                 <Card key={project.slug}>
//                   <Article project={project} views={views[project.slug] ?? 0} />
//                 </Card>
//               ))}
//           </div>
//           <div className="grid grid-cols-1 gap-4">
//             {sorted
//               .filter((_, i) => i % 3 === 1)
//               .map((project) => (
//                 <Card key={project.slug}>
//                   <Article project={project} views={views[project.slug] ?? 0} />
//                 </Card>
//               ))}
//           </div>
//           <div className="grid grid-cols-1 gap-4">
//             {sorted
//               .filter((_, i) => i % 3 === 2)
//               .map((project) => (
//                 <Card key={project.slug}>
//                   <Article project={project} views={views[project.slug] ?? 0} />
//                 </Card>
//               ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
