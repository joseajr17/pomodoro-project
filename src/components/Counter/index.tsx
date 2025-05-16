import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";

export function Counter() {
    const { state } = useTaskContext();

    return (
        <div className="flex flex-col w-75 h-75 sm:w-85 sm:h-85 text-8xl sm:text-9xl text-center justify-center leading-48 outline-5 outline-zinc-500 rounded-full">
            {state.formattedSecondsRemaining}
        </div>
    );
}