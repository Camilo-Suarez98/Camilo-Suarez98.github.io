import ProjectCard from "./ProjectCard";
import { projects } from "../utils/projects";

const Projects = () => {
  return (
    <>
      <div className="w-full grid grid-cols-2 gap-8 pb-12 content-center text-center md:grid-cols-1">
        {projects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </>
  );
};

export default Projects;
