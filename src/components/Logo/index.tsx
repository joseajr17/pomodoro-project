import { TbAppleFilled } from "react-icons/tb";

export function Logo() {
    return (
        <div className="flex items-center justify-center gap-10 py-12 ">
            <a href="#" className="flex flex-row items-center justify-center gap-2 text-5xl font-bold text-red-400 hover:text-red-400/80 transition duration-150 ease-in-out">
                
                <TbAppleFilled  size={64}/>
                Pomodoro
            </a>
        </div>
    );
}