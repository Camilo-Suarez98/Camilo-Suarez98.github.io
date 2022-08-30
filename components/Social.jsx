import Link from "next/link"

const Social = () => {
    return (
        <div className="text-white py-16 bg-blue-500 w-full text-center flex justify-center">
            <div className="flex flex-col hover:text-blue-700">
                <Link href="https://www.linkedin.com/in/camilosc98/">
                    <a className="p-4 link flex flex-col" target="_blank">
                        <i className="fab fa-linkedin fa-3x icon"></i>
                        LinkedIn
                    </a>
                </Link>
            </div>
            <div className="flex flex-col hover:text-black">
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
