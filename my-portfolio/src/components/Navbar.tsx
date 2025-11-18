'use client'

import { useState } from "react"
import Link from "next/link"
import { HiMenu, HiX } from "react-icons/hi"

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <nav className="sticky top-0 z-50 bg-gray-50 space-y-2 p-2">
            {/* Main Navbar */}
            <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
                <Link
                    href="/"
                    className="text-2xl font-bold text-gray-900 hover:text-gray-700 transition-colors tracking-tight"
                >
                    Mia E.
                </Link>

                <ul className="hidden md:flex items-center gap-5">
                    <NavLink href="/projects">Projects</NavLink>
                    <NavLink href="/about">About</NavLink>
                    <NavLink href="/hire">Hire</NavLink>
                </ul>

                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden text-gray-900 hover:text-gray-600 transition-colors"
                    aria-label="Toggle menu"
                >
                    {isOpen ? <HiX className="h-6 w-6" /> : <HiMenu className="h-6 w-6" />}
                </button>
            </div>


            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-gray-50">
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
                                className="block text-center bg-gray-900 text-white hover:bg-gray-800 py-2.5 px-3 rounded-md transition-colors font-semibold"
                                onClick={() => setIsOpen(false)}
                            >
                                Hire
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
                className="text-sm text-gray-700 hover:text-gray-900 transition-colors font-medium hover:underline"
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