'use client'

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { HiMenu, HiX } from "react-icons/hi"
import { IoLeaf } from "react-icons/io5"
import { MapPinned, Phone } from "lucide-react"
import { profile } from "../config/profile"

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <nav className="sticky top-0 z-50 bg-gray-50 border-b border-gray-200">
            {/* Main Navbar */}
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <Link
                    href="/"
                    className="flex items-center gap-2 text-2xl font-bold text-gray-900 hover:text-gray-700 transition-colors tracking-tight"
                >
                    <IoLeaf className="text-xl" />
                    <span>Mia E.</span>
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
            <div className="hidden md:block bg-gray-100 border-t border-gray-200">
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between py-2.5">
                        {/* Tech Stack - Left */}
                        <div className="flex items-center gap-2 text-xs text-gray-600">
                            <span className="font-medium">React</span>
                            <span className="text-gray-400">|</span>
                            <span className="font-medium">TypeScript</span>
                            <span className="text-gray-400">|</span>
                            <span className="font-medium">Python</span>
                            <span className="text-gray-400">|</span>
                            <span className="font-medium">PostgreSQL</span>
                            <span className="text-gray-400">|</span>
                            <span className="font-medium">AWS</span>
                        </div>

                        {/* Contact Info - Right */}
                        <div className="flex items-center gap-3 text-xs text-gray-600">
                            <span className="flex items-center gap-1">
                                <MapPinned className="w-3 h-3" />
                                NYC
                            </span>
                            <span className="text-gray-400">·</span>
                            <a href={`tel:${profile.contact.phone}`} className="flex items-center gap-1 hover:text-gray-900 transition-colors">
                                <Phone className="w-3 h-3 fill-current" />
                                {profile.contact.phone}
                            </a>
                        </div>
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