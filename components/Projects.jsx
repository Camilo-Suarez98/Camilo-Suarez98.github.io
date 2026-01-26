import Image from "next/image";
import { projects } from "../utils/projects";
import LinkButton from "./LinkButton";

const Projects = () => {
  return (
    <div className="flex flex-col gap-12 max-w-6xl mx-auto">
      {projects.map((project, index) => (
        <div
          key={project.id}
          className={`flex ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-10 p-4 rounded-3xl transition-all duration-300 lg:flex-col`}
        >
          <Image
            src={project.img}
            alt={project.name}
            width={500}
            height={300}
            className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500 rounded-xl"
          />

          <div className="w-full flex flex-col gap-5">
            <h4 className="text-3xl font-bold bg-clip-text md:text-2xl md:text-center">
              {project.name}
            </h4>

            <p className="text-lg text-gray-600 ww-full dark:text-gray-300 leading-relaxed md:text-center md:text-base">
              {project.description}
            </p>

            <div>
              <h5 className="font-semibold mb-2 text-gray-500 dark:text-gray-400 uppercase tracking-wider text-sm md:text-center">Technologies</h5>
              <div className="flex flex-wrap gap-2 md:justify-center">
                {project.builtWith.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-700/80 text-gray-700 dark:text-gray-200 rounded-full text-xs font-medium border border-gray-200 dark:border-gray-600 shadow-sm"
                  >
                    {tech.stack}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-1 mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
              <LinkButton href={project.repo} linkName="Source Code" />
              <LinkButton href={project.url} linkName="Live Demo" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
