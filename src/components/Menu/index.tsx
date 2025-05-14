import { HistoryIcon, HouseIcon, MoonIcon, SettingsIcon, SunIcon } from "lucide-react";
import { useEffect, useState } from "react";

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
        <nav className="flex items-center justify-center gap-6 text-white-900">
            <a
                href="#" aria-label="Ir para a página inicial" title="Ir para a página inicial"
                className="inline-flex items-center justify-center p-5 border rounded-md border-red-400 bg-red-400  hover:bg-red-400/80 transition duration-150 ease-in-out">
                <HouseIcon size={24} />
            </a>

            <a
                href="#" aria-label="Ver histórico" title="Ver histórico"
                className="inline-flex items-center justify-center p-5 border rounded-md border-red-400 bg-red-400 hover:bg-red-400/80 transition duration-150 ease-in-out">
                <HistoryIcon size={24} />
            </a>

            <a
                href="#" aria-label="Configurações" title="Configurações"
                className="inline-flex items-center justify-center p-5 border rounded-md border-red-400 bg-red-400 hover:bg-red-400/80 transition duration-150 ease-in-out">
                <SettingsIcon size={24} />
            </a>

            <a
                href="#" aria-label="Mudar tema" title="Mudar tema"
                className="inline-flex items-center justify-center p-5 border rounded-md border-red-400 bg-red-400 hover:bg-red-400/80 transition duration-150 ease-in-out"
                onClick={ handleThemeChange }
                >
                
                {theme === 'dark' ? <SunIcon size={24} /> : <MoonIcon size={24} />}
                
            </a>
        </nav>
    );
}