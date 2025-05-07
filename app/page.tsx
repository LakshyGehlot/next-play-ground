import ProjectCard from "@/components/ProjectCard";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { projectsData } from "@/lib/constants";

export default function Home() {
  return (
    <>
      <section className="min-h-[80vh] lg:flex-row flex items-center justify-around flex-col px-8">
        <div className="lg:w-1/2 text-center lg:text-left py-[100px]">
          <p className="tracking-widest my-4">LEARN BY BUILDING</p>
          <h1 className="text-7xl font-bold">Next PlayGround</h1>
          <p className="my-3">
            Next PlayGround is a modular project built with Next.js, designed as
            a personal sandbox to experiment with and develop a collection of
            mini web applications — all within a single, scalable app. It serves
            as a hands-on learning platform to explore modern frontend and
            full-stack concepts efficiently.
            <Link
              className="flex items-center px-4 py-2 bg-black text-white border-white border-2 mt-4 w-[200px] rounded-full mx-auto lg:mx-0"
              href={"#explore-projects"}
            >
              Explore Projects <ArrowRight className="ml-2" />
            </Link>
          </p>
        </div>

        <div className="lg:block flex justify-center">
          <img src="/project-image.png" alt="" />
        </div>
      </section>

      <section className="p-8" id="explore-projects">
        <h2 className="text-4xl font-bold mb-8 text-center text-foreground">
          Explore Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.map((project) => (
            <ProjectCard
              key={project.value}
              url={project.value}
              title={project.label}
              status={project.status}
              description={project.description}
            />
          ))}
        </div>
      </section>
    </>
  );
}
