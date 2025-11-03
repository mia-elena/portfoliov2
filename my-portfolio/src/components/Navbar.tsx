'use client'

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { HiMenu, HiX } from "react-icons/hi"
import { IoLeafOutline } from "react-icons/io5"
import { MapPin } from "lucide-react"
import { profile } from "../config/profile"

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
            {/* Main Navbar */}
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <Link
                        href="/"
                        className="flex items-center gap-2 text-2xl font-bold text-gray-900 hover:text-gray-700 transition-colors tracking-tight"
                    >
                        <IoLeafOutline className="text-xl" />
                        <span>Mia E.</span>
                    </Link>
                    <div className="hidden md:flex items-center gap-2 text-xs text-gray-600">
                        <span>·</span>
                        <span>New York, New York</span>
                        <span>·</span>
                        <a href={`tel:${profile.contact.phone}`} className="hover:text-gray-900 transition-colors">
                            {profile.contact.phone}
                        </a>
                    </div>
                </div>

                <ul className="hidden md:flex items-center gap-3">
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
            <div className="hidden md:block bg-gray-50 border-t border-gray-200">
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-center gap-3 py-2.5">
                        <span className="text-xs text-gray-700 font-medium">React</span>
                        <span className="text-gray-400">•</span>
                        <span className="text-xs text-gray-700 font-medium">TypeScript</span>
                        <span className="text-gray-400">•</span>
                        <span className="text-xs text-gray-700 font-medium">Python</span>
                        <span className="text-gray-400">•</span>
                        <span className="text-xs text-gray-700 font-medium">AI/ML</span>
                        <span className="text-gray-400">•</span>
                        <span className="text-xs text-gray-700 font-medium">PostgreSQL</span>
                        <span className="text-gray-400">•</span>
                        <span className="text-xs text-gray-700 font-medium">Docker</span>
                        <span className="text-gray-400">•</span>
                        <span className="text-xs text-gray-700 font-medium">AWS</span>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden border-t border-gray-200 bg-gray-50">
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
                                Let's Talk
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