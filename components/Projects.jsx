import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import logo from "../public/github-icon.svg"

const Projects= () => {
    const [ items, setItems ] = useState([])

    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        const data = await fetch(`https://api.github.com/users/Camilo-Suarez98/repos?sort=created&direction=desc`)
        const repo = await data.json()
        setItems(repo)
    }
    
    const Project = items.map(item => (
        <div key={item.id} className="projects self-center justify-self-center transition-all duration-500 py-4 border-2 border-gray-300 rounded-xl w-80 hover:border-gray-100 hover:bg-gray-300 hover:text-gray-500 md:w-64 sm:w-60">
            <Link className="w-60 h-52 cursor-pointer" href={item.html_url}>
                <a target="_blank" className="text-gray-800 transition-all duration-300">
                    <Image src={logo} width={130} height={115} />
                    <h3>{item.name}</h3>
                    <p>Language: <strong>{item.language}</strong></p>
                </a>
            </Link>
        </div>
    ))

    return(
        <div className="grid grid-cols-2 gap-4 mx-52 pb-12 content-center text-center ls:grid-cols-1 sm:mx-32 md:mx-36 lg:mx-48">
            {Project}
        </div>
    )
}

export default Projects