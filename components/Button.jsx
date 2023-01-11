import Link from "next/link"

const Button = () => {
    return (
        <Link href="https://docs.google.com/document/d/1pCMX9uTb3b7oc-cO1TdAweR5nXJfAmJK/edit?usp=sharing&ouid=111647670086009394452&rtpof=true&sd=true">
            <a className="bg-blue-800 w-44 h-8 text-center leading-8 rounded-md text-blue-50 font-bold transition-all duration-500 hover:text-gray-500 active:transform hover:translate-y-1" rel="noreferrer" target="_blank">
                Download my CV
            </a>
        </Link>
    )
}

export default Button
