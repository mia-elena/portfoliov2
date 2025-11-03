import { profile } from "../config/profile"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { MdEmail } from "react-icons/md"
import Link from "next/link"

export default function Footer() {
    const currentYear = 2025

    return (
        <footer className="border-t border-gray-200 py-12 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    {/* Services Column */}
                    <div>
                        <h3 className="text-sm font-semibold text-gray-900 mb-3">Services</h3>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li>
                                <Link href="/hire" className="hover:text-gray-900 transition-colors">
                                    Full-Stack Web Applications
                                </Link>
                            </li>
                            <li>
                                <Link href="/hire" className="hover:text-gray-900 transition-colors">
                                    AI Integration & Automation
                                </Link>
                            </li>
                            <li>
                                <Link href="/hire" className="hover:text-gray-900 transition-colors">
                                    API Development
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Navigation Column */}
                    <div>
                        <h3 className="text-sm font-semibold text-gray-900 mb-3">Navigation</h3>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li>
                                <Link href="/projects" className="hover:text-gray-900 transition-colors">
                                    Projects
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" className="hover:text-gray-900 transition-colors">
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link href="/hire" className="hover:text-gray-900 transition-colors">
                                    Hire
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Connect Column */}
                    <div>
                        <h3 className="text-sm font-semibold text-gray-900 mb-3">Connect</h3>
                        <div className="flex space-x-4 mb-4">
                            <a href={profile.links?.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                                <FaGithub className="h-5 w-5 text-gray-700 hover:text-gray-900 transition-colors" />
                            </a>
                            <a href={profile.links?.linkedIn} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                                <FaLinkedin className="h-5 w-5 text-gray-700 hover:text-gray-900 transition-colors" />
                            </a>
                            <a href={`mailto:${profile.contact.email}`} aria-label="Email">
                                <MdEmail className="h-5 w-5 text-gray-700 hover:text-gray-900 transition-colors" />
                            </a>
                        </div>
                        <p className="text-xs text-gray-600">
                            <a href={`mailto:${profile.contact.email}`} className="hover:text-gray-900 transition-colors">
                                {profile.contact.email}
                            </a>
                        </p>
                        <p className="text-xs text-gray-600">
                            <a href={`tel:${profile.contact.phone}`} className="hover:text-gray-900 transition-colors">
                                {profile.contact.phone}
                            </a>
                        </p>
                    </div>
                </div>

                {/* Copyright */}
                <div className="pt-6 border-t border-gray-200">
                    <p className="text-sm text-gray-600 text-center">
                        &copy; {currentYear} {profile.name} All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}