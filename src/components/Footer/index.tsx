import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-6 mt-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center space-y-4">
                <p className="text-sm text-gray-400">© 2025 José Antonio.</p>

                <div className="flex space-x-6">
                    {/* GitHub */}
                    <a
                        href="https://github.com/joseajr17"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition"
                    >
                        <FaGithub size={24} />
                    </a>

                    {/* LinkedIn */}
                    <a
                        href="https://www.linkedin.com/in/joseantonio1712/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition"
                    >
                        <FaLinkedin size={24} />
                    </a>

                    {/* Email */}
                    <a
                        href="https://mail.google.com/mail/?view=cm&fs=1&to=josejr017@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition"
                    >
                        <FaEnvelope size={24} />
                    </a>
                </div>
            </div>
        </footer>
    );
}
