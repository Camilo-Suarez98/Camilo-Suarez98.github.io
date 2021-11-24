import Link from "next/link"

const Social = () => {
    return (
        <div className="text-white py-16 bg-gray-800 w-full text-center flex justify-center">
            <div className="flex flex-col ">
                <Link href="https://www.linkedin.com/in/brayan-camilo-suarez-6b4b82169/">
                    <a className="p-4 link flex flex-col" target="_blank">
                        <i className="fab fa-linkedin fa-3x icon"></i>
                        LinkedIn
                    </a>
                </Link>
            </div>
            <div className="flex flex-col">
                <Link href="https://github.com/Camilo-Suarez98">
                    <a className="p-4 link flex flex-col" target="_blank">
                        <i className="fab fa-github fa-3x icon"></i>
                        GitHub
                    </a>
                </Link>
            </div>
        </div>
    )
}

export default Social
