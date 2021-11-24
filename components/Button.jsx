import Link from "next/link"

const Button = () => {
    return (
        <Link href="https://drive.google.com/file/d/1WZFwJ8G9QMg46HNoNk86WVyszFYlwYJA/view?usp=sharing">
            <a className="bg-indigo-500 w-44 h-8 text-center leading-8 rounded-md text-gray-800 font-bold hover:text-white active:transform hover:translate-y-1" rel="noreferrer" target="_blank">
                Download my CV
            </a>
        </Link>
    )
}

export default Button
