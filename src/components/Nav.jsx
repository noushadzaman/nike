import { headerLogo } from "../assets/images"
import { hamburger } from "../assets/icons"
import { navLinks } from "../constants"

const Nav = () => {

    return (
        <header className="padding-x py-8 absolute z-10 w-full">
            <nav className="flex justify-between items-center max-container">
                <a href="/">
                    <img
                        width={130}
                        height={29}
                        src={headerLogo}
                        alt="Logo"
                    />
                </a>
                <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
                    {
                        navLinks.map(item => (
                            <li key={item.label}>
                                <a
                                    href={item.href}
                                    className="font-montserrat leading-normal text-lg text-slate-gray"
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))
                    }
                </ul>
                <div>
                    <a className="max-lg:hidden font-montserrat leading-normal text-lg text-gray-700" href="#">Sign Up</a>
                    <img
                        className="hidden max-lg:block"
                        width={25}
                        height={25}
                        src={hamburger}
                        alt="hamburger"
                    />
                </div>
            </nav>
        </header>
    )
}

export default Nav