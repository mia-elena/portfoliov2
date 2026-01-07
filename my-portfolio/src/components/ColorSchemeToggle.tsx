import { ColorScheme } from "../types";

interface ColorSchemeToggleProps {
    currentScheme: ColorScheme;
    onChange: (scheme: ColorScheme) => void;
    className?: string;
}

export default function ColorSchemeToggle({
    currentScheme,
    onChange,
    className = "",
}: ColorSchemeToggleProps) {
    return ( 
        <div className={`flex items-center bg-gray-100 rounded-lg p-1 ${className}`}>
            <button 
                onClick={() => onChange('brand')}
                className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-200
                    ${currentScheme === 'brand'
                        ? 'bg-white text-gray-900 shadow-sm'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
            >
                Brand
            </button>
            <button
                onClick={() => onChange('mono')}
                className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-200
                    ${currentScheme === 'mono'
                        ? 'bg-white text-gray-900 shadow-sm'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
            >
                Mono
            </button>
            <button
                onClick={() => onChange('minimal')}
                className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-200
                    ${currentScheme === 'minimal'
                        ? 'bg-white text-gray-900 shadow-sm'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
            >
                Minimal
            </button>
        </div>
    )
}