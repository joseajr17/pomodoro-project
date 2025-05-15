import { PlayCircleIcon, StopCircleIcon } from "lucide-react";
import { Cycles } from "../Cycles";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useRef } from "react";
import type { TaskModel } from "../../models/TaskModel";
import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";
import { getNextCycle } from "../../utils/getNextCycle";
import { getNextCycleType } from "@/utils/getNextCycleType";
import { secondsToMinutes } from "@/utils/secondsToMinutes";

export function Form() {
    const { state, setState } = useTaskContext();

    const taskNameInput = useRef<HTMLInputElement>(null);

    const nextCycle = getNextCycle(state.currentCycle);
    const nextCycleType = getNextCycleType(nextCycle);

    function handleStartNewTask(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        if (taskNameInput.current === null) return;

        const taskName = taskNameInput.current.value.trim();

        if (!taskName) {
            console.log("Please enter a task name");
            return;
        }

        const newTask: TaskModel = {
            id: Date.now().toString(),
            name: taskName,
            duration: state.config[nextCycleType],
            startDate: Date.now(),
            completeDate: null,
            interruptDate: null,
            type: nextCycleType,
        };

        const secondsRemaining = newTask.duration * 60;

        setState(prevState => {
            return {
                ...prevState,
                tasks: [...prevState.tasks, newTask],
                secondsRemaining,
                formattedSecondsRemaining: secondsToMinutes(secondsRemaining),
                activeTask: newTask,
                currentCycle: nextCycle, // 1 a 8
                config: { ...prevState.config, }
            }
        });
    }

    function handleInterruptTask() {
        setState(prevState => {
            return {
                ...prevState,
                secondsRemaining: 0,
                formattedSecondsRemaining: '00:00',
                activeTask: null,
            }
        });
    }

    return (
        <form
            onSubmit={handleStartNewTask}
            className="flex flex-col items-center justify-center gap-6"
            action="">
            <div className="flex flex-col items-center justify-center gap-6">
                <label htmlFor="myInput">Tarefa:</label>
                <Input
                    type="text"
                    id="myInput"
                    placeholder="Digite algo"
                    ref={taskNameInput}
                    className="text-center p-2 mx-20 border-transparent border-b-2 rounded-none border-b-red-400 transition-all duration-100 ease-in-out 
              placeholder:italic focus:rounded-lg disabled:border-b-gray-300 disabled:text-gray-400 "
                    disabled={!!state.activeTask}
                />
            </div>

            <div className="flex flex-col items-center justify-center gap-6">
                <p>Lorem ipsum dolor sit amet.</p>
            </div>

            {state.currentCycle > 0 && (
                <div className="flex flex-col items-center justify-center gap-6">
                    <Cycles />
                </div>
            )}

            <div className="flex flex-row items-center justify-center gap-6">
                <Button
                    type="submit"
                    aria-label="Iniciar nova tarefa"
                    title="Iniciar nova tarefa"
                    className="min-w-1/2 h-auto mx-0 bg-black dark:bg-white dark:text-black  border-none rounded-xl my-12 cursor-pointer hover:bg-black/80 dark:hover:bg-white/80 transition-all duration-100 ease-in-out"
                    key="btn_submit-task"
                    disabled={!!state.activeTask}
                >
                    <PlayCircleIcon className="min-w-10 min-h-10" /> Start
                </Button>

                <Button
                    type="button"
                    aria-label="Interromper tarefa atual"
                    title="Interromper tarefa atual"
                    className="min-w-1/2 h-auto bg-ring border-none rounded-xl my-12 mx-0 cursor-pointer hover:bg-ring/80 transition-all duration-100 ease-in-out"
                    onClick={handleInterruptTask}
                    key="btn_interrupt-task"
                    disabled={!state.activeTask}
                >
                    <StopCircleIcon className="min-w-10 min-h-10" /> Stop
                </Button>

            </div>
        </form>
    );
}