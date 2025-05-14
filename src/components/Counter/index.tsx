import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";

export function Counter() {
    const { state } = useTaskContext();

    return (
        <div className="text-9xl font-bold text-center leading-48">
            {state.formattedSecondsRemaining}
        </div>
    );
}