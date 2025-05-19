import { useEffect, useState } from "react";

import { FaHistory, FaHome, FaMoon } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { MdSunny } from "react-icons/md";
import { Link } from "react-router";

type AvailableThemes = 'dark' | 'light';

export function Menu() {
    const [theme, setTheme] = useState<AvailableThemes>(
        () => {
            const storedTheme = localStorage.getItem('theme') as AvailableThemes ;
            return storedTheme || 'dark';
        }
    );

    function handleThemeChange(event: React.MouseEvent) {
        event.preventDefault();
        
        setTheme(prevTheme => {
            const nextTheme = prevTheme === 'dark' ? 'light' : 'dark';
            return nextTheme
        })
    }

    useEffect(() => {
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

    return (
        <nav className="flex items-center justify-center gap-6 sm:gap-2 md:gap-6 text-white-900 pt-0 pb-6 px-5 sm:justify-start">
            <Link
                to="/" aria-label="Ir para a página inicial" title="Ir para a página inicial"
                className="inline-flex items-center justify-center sm:py-4 sm:px-3 p-4 sm:w-[166px] gap-4 border rounded-md border-black dark:border-white bg-transparent hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition duration-150 ease-in-out">
                <FaHome size={24}/>
                <span className="hidden sm:block font-bold">Página Inicial</span>
                 
            </Link>

            <Link
                to="/history" aria-label="Ver histórico" title="Ver histórico"
                className="inline-flex items-center justify-center p-4 gap-4 border rounded-md border-black dark:border-white bg-transparent hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition duration-150 ease-in-out">
                
                <FaHistory size={24}/>
                <span className="hidden sm:inline font-bold">Histórico</span>
            </Link>

            <Link
                to="/settings" aria-label="Configurações" title="Configurações"
                className="inline-flex items-center justify-center p-4 gap-4 border rounded-md border-black dark:border-white bg-transparent hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition duration-150 ease-in-out">
                <IoMdSettings size={24}/>
                <span className="hidden sm:inline font-bold">Configurações</span>
            </Link>

            <a
                href="#" aria-label="Mudar tema" title="Mudar tema"
                className="inline-flex items-center justify-center p-4 gap-4 border rounded-md border-black dark:border-white bg-transparent hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition duration-150 ease-in-out"
                onClick={ handleThemeChange }
                >
                
                {theme === 'dark' ? <MdSunny size={24} /> : <FaMoon size={24} /> }
                <span className="hidden md:inline font-bold">Tema</span>
            </a>
        </nav>
    );
}