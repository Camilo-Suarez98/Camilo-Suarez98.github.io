import { useQuery } from "react-query";
import { useState } from "react";
import Loader from "./Loader";

const Projects = () => {
  const { isLoading, error, data } = useQuery('projectsData', () =>
    fetch('https://api.github.com/users/Camilo-Suarez98/repos?sort=created&direction=desc')
      .then(res => res.json())
  );

  const firstProjects = 9;

  const [numProjects, setNumProjects] = useState(firstProjects);

  if (isLoading) {
    return <Loader />
  };

  if (error) return 'An error has ocurred: ' + error.message;

  const giveAllProjects = () => {
    return setNumProjects(numProjects + firstProjects);
  };

  const giveLessProjects = () => {
    return setNumProjects(firstProjects);
  };

  return (
    <>
      <div className="w-full grid grid-cols-3 gap-8 xl:grid-cols-2 pb-12 content-center text-center md:grid-cols-1 sm:mx-32 md:mx-36 lg:mx-48">
        {data?.slice(0, numProjects)?.map((user) => (
          <div key={user.id} className="projects w-full p-2.5 self-center justify-self-center transition-all duration-500 py-4 rounded-lg hover:border-gray-100 hover:bg-gray-300 hover:text-gray-500 hover:-translate-y-3 md:w-72 sm:w-60">
            <a target="_blank" href={user.html_url} className="w-60 h-52 cursor-pointer text-gray-800 transition-all duration-300">
              <i className="project-icon fab fa-github fa-3x icon w-full h-16"></i>
              <h3 className="project-title h-14 hover:font-black">{user.name}</h3>
              <p className="language-project">
                Language: {user.language === null ?
                  "No language used" :
                  <strong>{user.language}</strong>
                }
              </p>
            </a>
          </div>
        ))}
      </div>
      {
        numProjects < data?.length ?
          <button onClick={giveAllProjects} className="projects m-auto mb-12 buttons-color-letter w-48 text-center rounded-3xl py-5 text-indigo-50 font-bold transition-all duration-500 hover:text-blue-50 hover:bg-blue-700 active:transform hover:-translate-y-3 ls:ml-0 ls:mt-2">Show more</button>
          :
          <button onClick={giveLessProjects} className="projects m-auto mb-12 buttons-color-letter w-48 text-center rounded-3xl py-5 text-indigo-50 font-bold transition-all duration-500 hover:text-blue-50 hover:bg-blue-700 active:transform hover:-translate-y-3 ls:ml-0 ls:mt-2">Show less</button>
      }
    </>
  );
};

export default Projects;
