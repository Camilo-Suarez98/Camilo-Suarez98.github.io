import Link from "next/link"
import { useQuery } from "react-query"
import { useState } from "react"


const Projects = () => {
    const { isLoading, error, data } = useQuery('projectsData', () => 
        fetch('https://api.github.com/users/Camilo-Suarez98/repos?sort=created&direction=desc')
            .then(res => res.json())
    )

    const firstProjects = 9

    const [ numProjects, setNumProjects ] = useState(firstProjects)

    if(isLoading) {
        return (
            <div className="w-full flex justify-center">
                <div role="status">
                    <svg aria-hidden="true" className="inline w-10 h-10 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-500" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                    </svg>
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        )
    }

    if(error) return 'An error has ocurred: ' + error.message

    const giveAllProjects = () => {
        return setNumProjects(numProjects + firstProjects)
    }

    const giveLessProjects = () => {
        return setNumProjects(firstProjects)
    }

    return (
        <>
            <div className="w-full grid grid-cols-3 gap-8 xl:grid-cols-2 pb-12 content-center text-center md:grid-cols-1 sm:mx-32 md:mx-36 lg:mx-48">
                {data?.slice(0, numProjects)?.map((user) => (
                    <div key={user.id} className="projects w-full p-2.5 self-center justify-self-center transition-all duration-500 py-4 rounded-lg hover:border-gray-100 hover:bg-gray-300 hover:text-gray-500 hover:-translate-y-3 md:w-72 sm:w-60">
                        <Link className="w-60 h-52 cursor-pointer" href={user.html_url}>
                            <a target="_blank" className="text-gray-800 transition-all duration-300">
                                <i className="project-icon fab fa-github fa-3x icon w-full h-16"></i>
                                <h3 className="project-title h-14 hover:font-black">{user.name}</h3>
                                {
                                    user.language === null ?
                                    <p className="language-project">No language used</p> :
                                    <p className="language-project">Language: <strong>{user.language}</strong></p>
                                }
                            </a>
                        </Link>
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
    )
}

export default Projects