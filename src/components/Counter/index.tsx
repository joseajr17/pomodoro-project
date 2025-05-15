import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";

export function Counter() {
    const { state } = useTaskContext();

    return (
        <div className="flex flex-col w-85 h-85 text-9xl text-center justify-center leading-48 outline-5 outline-zinc-500 rounded-full">
            {state.formattedSecondsRemaining}
        </div>
    );
}