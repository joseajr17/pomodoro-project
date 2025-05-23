import { useEffect, useReducer, useRef } from "react";
import { initialTaskState } from "./initialTaskState";
import { TaskContext } from "./TaskContext";
import { taskReducer } from "./taskReducer";
import { TimerWorkerManager } from "../../workers/TimerWorkerManager";
import { TaskActionTypes } from "./taskActions";
import { loadAudio } from "../../utils/loadAudio";
import type { TaskStateModel } from "../../models/TaskStateModel";

type TaskContextProviderProps = {
    children: React.ReactNode;
}

export function TaskContextProvider({ children }: TaskContextProviderProps) {
    const [state, dispatch] = useReducer(taskReducer, initialTaskState, () => {
        const storedState = localStorage.getItem("pomodoroState")

        if(!storedState)
            return initialTaskState;

        const parsedStorageState = JSON.parse(storedState) as TaskStateModel;
        return {
            ...parsedStorageState,
            activeTask: null,
            secondsRemaining: 0,
            formattedSecondsRemaining: "00:00",
        };
    });

    const playAudioRef = useRef<ReturnType<typeof loadAudio> | null>(null);

    const worker = TimerWorkerManager.getInstance();

    worker.onmessage(e => {
        const countDown = e.data;

        if (countDown <= 0) {
            console.log("Task finished");

            if(playAudioRef.current) {
                playAudioRef.current();
                playAudioRef.current = null;
            }

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
        localStorage.setItem("pomodoroState", JSON.stringify(state));

        if (!state.activeTask) {
            console.log("No active task, Worker terminated");
            worker.terminate();
        }

        document.title = `${ state.formattedSecondsRemaining } - Pomodoro Timer`;

        worker.postMessage(state);
    }, [state, worker]);

    useEffect(() => {
        if(state.activeTask && playAudioRef.current === null) {
            playAudioRef.current = loadAudio();
        } else {
            playAudioRef.current = null;
        }
        
    }, [state.activeTask]);

    return (
        <TaskContext.Provider value={{ state, dispatch }}>
            {children}
        </TaskContext.Provider>
    );
}