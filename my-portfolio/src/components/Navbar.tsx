'use client'; 
import { useState } from "react"; 
import Link from "next/link"; 
import { HiMenu, HiX } from "react-icons/hi";
import { SiReact } from "react-icons/si";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-white sticky top-0 z-50">
            <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
                <div className="flex items-center space-x-2">
                    <Link href="/" className="text-2xl font-extrabold text-gray-900 hover:text-gray-700 transition-colors relative group" style={{ fontFamily: 'Licorice, cursive' }}>
                        Mia E. Ricci
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gray-900 group-hover:w-full transition-all duration-300"></span>
                    </Link>
                </div>

                <ul className="hidden md:flex space-x-3">
                    <NavLink href="/projects">Projects</NavLink>
                    <NavLink href="/about">About</NavLink>
                    <NavLink href="#experience">Experience</NavLink>
                    <NavLink href="#education">Education</NavLink>
                    <NavLink href="#contact">Contact</NavLink>
                </ul>

                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden text-gray-900"
                >
                    {isOpen ? <HiX className="h-6 w-6" /> : <HiMenu className="h-6 w-6" />}
                </button>
            </div>
            {isOpen && (
                <div className="md:hidden px-4 py-2">
                    <ul className="flex flex-col space-y-2">
                        <MobileNavLink href="/projects" onClick={() => setIsOpen(false)}>Projects</MobileNavLink>
                        <MobileNavLink href="/about" onClick={() => setIsOpen(false)}>About</MobileNavLink>
                        <MobileNavLink href="#experience" onClick={() => setIsOpen(false)}>Experience</MobileNavLink>
                        <MobileNavLink href="#education" onClick={() => setIsOpen(false)}>Education</MobileNavLink>
                        <MobileNavLink href="#contact" onClick={() => setIsOpen(false)}>Contact</MobileNavLink>
                    </ul>
                </div>
            )}
        </nav>
    )
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
    return (
        <li>
            <Link
                href={href}
                className="text-gray-900 hover:text-blue-500 transition-colors"
            >
                {children}
            </Link>
        </li>
    );
}

function MobileNavLink({ href, children, onClick }: { href: string; children: React.ReactNode; onClick: () => void }) {
    return (
        <li>
            <Link
                href={href}
                className="block text-gray-900 hover:text-blue-500 py-2 transition-colors"
                onClick={onClick}
            >
                {children}
            </Link>
        </li>
    );
}