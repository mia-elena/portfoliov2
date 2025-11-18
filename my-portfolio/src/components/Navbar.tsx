'use client'

import { useState } from "react"
import Link from "next/link"
import { HiMenu, HiX } from "react-icons/hi"
import { MapPinned } from "lucide-react"
import { profile } from "../config/profile"

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const navbarSkills = ['React', 'TypeScript', 'Python', 'PostgreSQL', 'AWS']

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

            {/* Tech Stack Sub-Navbar */}
            <div className="hidden md:block bg-gray-100">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex items-center justify-between py-2.5">
                        {/* Tech Stack - Left */}
                        <div className="flex items-center gap-3 text-xs text-gray-600 flex-wrap">
                            {navbarSkills.map((skill, i) => (
                                <span key={skill} className="flex items-center gap-3">
                                    <span className="font-medium">{skill}</span>
                                    {i < navbarSkills.length - 1 && <span className="text-gray-300">|</span>}
                                </span>
                            ))}
                        </div>

                        {/* Contact Info - Right */}
                        <div className="flex items-center gap-3 text-xs text-gray-600">
                            <span className="flex items-center gap-1">
                                <MapPinned className="w-3 h-3" />
                                NYC
                            </span>
                        </div>
                    </div>
                </div>
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