'use client'

import { useState } from "react"
import Link from "next/link"
import { HiMenu, HiX } from "react-icons/hi"

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <nav className="bg-white sticky top-0 z-50">
            <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
                <Link
                    href="/"
                    className="text-lg font-bold text-gray-900 hover:text-gray-700 transition-colors tracking-tight"
                >
                    Mia E. Ricci
                </Link>

                <ul className="hidden md:flex items-center gap-7">
                    <NavLink href="/projects">Projects</NavLink>
                    <NavLink href="/about">About</NavLink>
                    <NavLink href="/#experience">Experience</NavLink>
                    <li>
                        <Link
                            href="/hire"
                            className="px-4 py-2 bg-green-600 text-white text-sm font-semibold rounded-md hover:bg-green-700 transition-colors shadow-sm"
                        >
                            Hire Me
                        </Link>
                    </li>
                </ul>

                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden text-gray-900 hover:text-gray-600 transition-colors"
                    aria-label="Toggle menu"
                >
                    {isOpen ? <HiX className="h-6 w-6" /> : <HiMenu className="h-6 w-6" />}
                </button>
            </div>

            {isOpen && (
                <div className="md:hidden border-t border-gray-200 bg-white">
                    <ul className="px-6 py-3 space-y-1">
                        <MobileNavLink href="/projects" onClick={() => setIsOpen(false)}>
                            Projects
                        </MobileNavLink>
                        <MobileNavLink href="/about" onClick={() => setIsOpen(false)}>
                            About
                        </MobileNavLink>
                        <MobileNavLink href="/#experience" onClick={() => setIsOpen(false)}>
                            Experience
                        </MobileNavLink>
                        <li>
                            <Link
                                href="/hire"
                                className="block text-center bg-green-600 text-white hover:bg-green-700 py-2.5 px-3 rounded-md transition-colors font-semibold shadow-sm"
                                onClick={() => setIsOpen(false)}
                            >
                                Hire Me
                            </Link>
                        </li>
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
                className="text-sm text-gray-700 hover:text-gray-900 transition-colors font-medium"
            >
                {children}
            </Link>
        </li>
    )
}

function MobileNavLink({ href, children, onClick }: { href: string; children: React.ReactNode; onClick: () => void }) {
    return (
        <li>
            <Link
                href={href}
                className="block text-gray-800 hover:text-gray-900 hover:bg-gray-50 py-2 px-3 rounded-md transition-colors font-semibold"
                onClick={onClick}
            >
                {children}
            </Link>
        </li>
    )
}