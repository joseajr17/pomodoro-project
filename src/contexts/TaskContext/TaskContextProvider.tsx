import { useEffect, useReducer } from "react";
import { initialTaskState } from "./initialTaskState";
import { TaskContext } from "./TaskContext";
import { taskReducer } from "./taskReducer";
import { TimerWorkerManager } from "@/workers/TimerWorkerManager";
import { TaskActionTypes } from "./taskActions";

type TaskContextProviderProps = {
    children: React.ReactNode;
}

export function TaskContextProvider({ children }: TaskContextProviderProps) {
    const [state, dispatch] = useReducer(taskReducer, initialTaskState);

    const worker = TimerWorkerManager.getInstance();

    worker.onmessage(e => {
        const countDown = e.data;

        if (countDown <= 0) {
            console.log("Task finished");
            dispatch({
                type: TaskActionTypes.COMPLETE_TASK,
            });
            worker.terminate();
        } else {
            dispatch({
                type: TaskActionTypes.COUNT_DOWN,
                payload: { secondsRemaining: countDown },
            });
        }
    });

    useEffect(() => {
        console.log(state);

        if (!state.activeTask) {
            console.log("No active task, Worker terminated");
            worker.terminate();
        }

        worker.postMessage(state);
    }, [state, worker]);

    return (
        <TaskContext.Provider value={{ state, dispatch }}>
            {children}
        </TaskContext.Provider>
    );
}