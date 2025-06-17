import Image from 'next/image';

import LinkButton from './LinkButton';

const ProjectCard = ({ project }) => {
  return (
    <div className="projects w-11/12 p-6 self-center justify-self-center transition-all duration-500 rounded-3xl h-full hover:border-gray-100 sm:w-80 sm:p-3 md:w-72">
      <Image
        src={project.img}
        width={450}
        height={300}
        alt={`Image from project called: ${project.name}`}
        className="h-80 w-full object-fill rounded-3xl sm:h-52"
        priority
      />
      <h3 className="project-title my-4 text-3xl font-black md:text-xl">{project.name}</h3>
      <p className='language-project flex-grow mb-4 text-lg md:text-sm'>
        {project.description}
        <br />
        <br />
        This project was built with:
        <span className='font-bold'> {project.builtWith}</span>
      </p>
      <div className='flex items-around justify-center md:flex-col md:items-center'>
        <LinkButton href={project.url} linkName="Demo" />
        <LinkButton href={project.repo} linkName="Repo" />
      </div>
    </div>
  );
};

export default ProjectCard;
