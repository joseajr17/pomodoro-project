import { TbAppleFilled } from "react-icons/tb";
import { Link } from "react-router";

export function Logo() {
    return (
        <div className="flex items-center justify-center gap-10 py-6 px-5">
            <Link to="/" className="flex flex-row items-center justify-center gap-2 text-2xl sm:text-4xl font-bold text-red-400 hover:text-red-400/80 transition duration-150 ease-in-out">
                <TbAppleFilled  size={40}/>
                Pomodoro Timer
            </Link>
        </div>
    );
}