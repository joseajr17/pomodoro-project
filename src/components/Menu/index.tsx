import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon } from "lucide-react";

export function Menu() {
    return (
        <nav className="flex items-center justify-center gap-6 text-gray-900">
            <a href="#" className="inline-flex items-center justify-center p-5 border rounded-md border-red-400 bg-red-400  hover:bg-red-400/80 transition duration-150 ease-in-out">
                <HouseIcon size={24} />    
            </a>

            <a href="#" className="inline-flex items-center justify-center p-5 border rounded-md border-red-400 bg-red-400 hover:bg-red-400/80 transition duration-150 ease-in-out">
                <HistoryIcon size={24} />    
            </a>
            
            <a href="#" className="inline-flex items-center justify-center p-5 border rounded-md border-red-400 bg-red-400 hover:bg-red-400/80 transition duration-150 ease-in-out">
                <SettingsIcon size={24} />  
            </a>

            <a href="#" className="inline-flex items-center justify-center p-5 border rounded-md border-red-400 bg-red-400 hover:bg-red-400/80 transition duration-150 ease-in-out">
                <SunIcon size={24} />
            </a>
        </nav>
    );
}