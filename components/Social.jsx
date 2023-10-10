import Link from "next/link"

const Social = () => {
    return (
        <div className="text-gray-800 mt-48 pb-14 w-full text-center flex justify-center ls:pt-8 lg:pt-72 xl:pt-52 xl:py-10">
            <div className="socials flex flex-col">
                <Link href="https://www.linkedin.com/in/camilosc98/">
                    <a className="p-4 link flex flex-col transition-all duration-500" target="_blank">
                        <i className="fab fa-linkedin fa-3x icon"></i>
                        LinkedIn
                    </a>
                </Link>
            </div>
            <div className="flex flex-col">
                <Link href="https://github.com/Camilo-Suarez98">
                    <a className="p-4 link flex flex-col transition-all duration-500" target="_blank">
                        <i className="fab fa-github fa-3x icon"></i>
                        GitHub
                    </a>
                </Link>
            </div>
        </div>
    )
}

export default Social
