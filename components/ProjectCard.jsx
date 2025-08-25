import Image from 'next/image';

import LinkButton from './LinkButton';
import Link from 'next/link';

const ProjectCard = ({ project }) => {
  return (
    <div className="projects w-11/12 shadow-xl p-6 self-center justify-self-center transition-all duration-500 rounded-xl h-full hover:border-gray-100 sm:w-80 sm:p-3 md:w-72">
      <Link href={project.url} target='_blank'>
        <Image
          src={project.img}
          width={450}
          height={300}
          alt={`Image from project called: ${project.name}`}
          className="h-80 w-full object-fill rounded-xl sm:h-52"
          priority
        />
      </Link>
      <h3 className="project-title my-4 text-3xl font-black md:text-xl">{project.name}</h3>
      <p className='language-project flex-grow mb-4 text-lg md:text-sm'>
        {project.description}
      </p>
      <section className='flex items-center justify-center gap-4'>
        {project.builtWith.map((tech, index) => (
          <span key={index} className='tech-stack p-1 rounded-md text-sm'>
            {tech.stack}
          </span>
        ))}
      </section>
      <div className='flex items-around justify-center md:flex-col md:items-center'>
        <LinkButton href={project.url} linkName="Website" />
        <LinkButton href={project.repo} linkName="Repo" />
      </div>
    </div>
  );
};

export default ProjectCard;
