import { profile } from "../config/profile"
import { FaGithub, FaLinkedin, FaHeart } from "react-icons/fa"
import { MdEmail } from "react-icons/md"
import ViewCounter from "./ViewCounter"

export default function Footer() {
    const currentYear = 2025

    return (
        <footer className="border-t border-gray-200 py-8 bg-white">
            <div className="container mx-auto flex justify-between items-center px-4">
                <div className="text-sm text-gray-600">
                    <p>
                        Made with <FaHeart className="inline text-red-500" /> by Mia Elena
                    </p>
                    <div className="flex items-center gap-4 mt-1">
                        <span>&copy; {currentYear} {profile.name}</span>
                        <ViewCounter className="text-gray-500" />
                    </div>
                </div>
                <div className="flex space-x-4">
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
            </div>
        </footer>
    )
}