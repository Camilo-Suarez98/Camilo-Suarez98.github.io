import Link from "next/link"

const Button = () => {
    return (
        <Link href="https://docs.google.com/document/d/1S0rfwHJrzH1D03FKCZl4F0AypJ7O3dMbvbn0EljOvXM/edit?usp=sharing">
            <a className="bg-blue-600 w-44 h-8 text-center leading-8 rounded-md text-blue-800 font-bold hover:text-white active:transform hover:translate-y-1" rel="noreferrer" target="_blank">
                Download my CV
            </a>
        </Link>
    )
}

export default Button
