'use client'

import { useState } from "react"
import Link from "next/link"
import { HiMenu, HiX } from "react-icons/hi"
import { MapPin } from "lucide-react"
import { SiPython, SiTypescript, SiReact } from "react-icons/si"
import { profile } from "../config/profile"

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <nav className="sticky top-0 z-50 bg-gray-50">
            {/* Main Navbar */}
            <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
                <Link
                    href="/"
                    className="flex flex-col hover:opacity-80 transition-opacity"
                >
                    <span className="text-xl font-bold text-gray-900 tracking-tight">Mia E.</span>
                    <span className="text-xs text-gray-600">Software Engineer</span>
                </Link>

                <div className="hidden md:flex flex-col items-end gap-1">
                    <ul className="flex items-center gap-6">
                        <NavLink href="/projects">Projects</NavLink>
                        <NavLink href="/about">About</NavLink>
                        <NavLink href="/hire">Hire</NavLink>
                    </ul>
                    <div className="flex items-center gap-1.5 text-xs text-gray-600">
                        <MapPin className="w-3.5 h-3.5" />
                        NYC
                    </div>
                </div>

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
                <div className="md:hidden bg-gray-50 border-b border-gray-200">
                    <ul className="px-6 py-3 space-y-1">
                        <MobileNavLink href="/projects" onClick={() => setIsOpen(false)}>
                            Projects
                        </MobileNavLink>
                        <MobileNavLink href="/about" onClick={() => setIsOpen(false)}>
                            About
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