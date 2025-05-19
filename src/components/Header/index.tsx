import { Logo } from "../Logo";

export function Header() {
    return (
        <header className="bg-white dark:bg-gray-800/50 shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex justify-center items-center">
                <Logo />
            </div>

        </header>
    );
}