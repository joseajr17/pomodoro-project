import { useTaskContext } from "@/contexts/TaskContext/useTaskContext";
import { getNextCycle } from "@/utils/getNextCycle";
import { getNextCycleType } from "@/utils/getNextCycleType";

export function Cycles() {
    const { state } = useTaskContext();

    const cycleStage = Array.from({ length: state.currentCycle });

    const bgSpan = {
        longBreakTime: "bg-chart-1",
        shortBreakTime: "bg-red-600",
        workTime: "bg-chart-2",
    };

    const cycleTypeDescription = {
        longBreakTime: "descanso longo",
        shortBreakTime: "descanso curto",
        workTime: "foco",
    };

    return (
        <div className="flex flex-col gap-7 items-center justify-center">
            <span>Ciclos:</span>
            <div className="flex gap-3">
                {cycleStage.map((_, index) => {
                    const nextCycle = getNextCycle(index);
                    const cycleType = getNextCycleType(nextCycle);

                    return (
                        <span
                            key={nextCycle}
                            className={`w-8 h-8 rounded-2xl ${bgSpan[cycleType]}`}
                            aria-label={`Ciclo de ${cycleTypeDescription[cycleType]}`}
                            title={`Ciclo de ${cycleTypeDescription[cycleType]}`}
                        ></span>
                    );
                })}
            </div>
        </div>
    );
}