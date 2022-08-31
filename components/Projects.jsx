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
        <div key={item.id} className="self-center justify-self-center w-80 md:w-64 sm:w-60">
            <Link className="w-60 h-52 cursor-pointer" href={item.html_url}>
                <a target="_blank" className="hover:font-bold">
                    <Image fill-white src={logo} width={130} height={115} />
                    <h3>{item.name}</h3>
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