import { useTaskContext } from "@/contexts/TaskContext/useTaskContext";
import { getNextCycle } from "@/utils/getNextCycle";
import { getNextCycleType } from "@/utils/getNextCycleType";

export function Tips() {
    const { state } = useTaskContext();

    const nextCycle = getNextCycle(state.currentCycle);
    const nextCycleType = getNextCycleType(nextCycle);

    const tipsActiveTask = {
        workTime: <span>Agora, foque por <b>{state.config.workTime}min</b></span>,
        shortBreakTime: <span>Agora, faça um descanso curto por <b>{state.config.shortBreakTime}min</b></span>,
        longBreakTime: <span>Agora, faça uma descanso longo por <b>{state.config.longBreakTime}min</b></span>,
    };
    const tipsNoActiveTask = {
        workTime: <span>O próximo ciclo será de <b>{state.config.workTime}min</b></span>,
        shortBreakTime: <span>O próximo ciclo será um <b>descanso curto</b></span>,
        longBreakTime: <span>O próximo ciclo será um <b>descanso longo</b></span>,
    };

    return (
        <>
            {!!state.activeTask && tipsActiveTask[state.activeTask.type]}
            {!state.activeTask && tipsNoActiveTask[nextCycleType]}
        </>
    );
}