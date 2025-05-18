import { useEffect, useState } from "react";

import { TrashIcon } from "lucide-react";
import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";
import { TaskActionTypes } from "../../contexts/TaskContext/taskActions";
import type { TaskModel } from "../../models/TaskModel";
import { MainTemplate } from "../../templates/MainTemplate";
import { formatDate } from "../../utils/formatDate";
import { getStatus } from "../../utils/getStatus";

import { Container } from "../../components/Container";
import { Heading } from "../../components/Heading";
import { Button } from "../../components/ui/button";



export function History() {

    const { state, dispatch } = useTaskContext();

    const [sortedTasks, setSortedTasks] = useState<TaskModel[]>([]);

    useEffect(() => {
        const sorted = [...state.tasks].sort((a, b) => {
            return b.startDate - a.startDate;
        });

        setSortedTasks(sorted);

    }, [state.tasks]);

    function handleClearHistory() {
        if (!confirm("Você tem certeza que deseja limpar todo o histórico?"))
            return;

        dispatch({ type: TaskActionTypes.RESET_STATE })
    }

    return (
        <MainTemplate>
            <Container>
                <Heading>
                    <span>Histórico</span>
                    {state.tasks.length > 0 && (
                        <Button
                            aria-label="Limpar todo o histórico"
                            title="Limpar todo o histórico"
                            onClick={handleClearHistory}
                            className="w-auto h-auto cursor-pointer">
                            <TrashIcon className="min-w-8 min-h-8" />
                        </Button>
                    )}

                </Heading>
            </Container>

            <Container>
                {state.tasks.length > 0 && (
                    <div className="overflow-x-auto border rounded-2xl ">
                        <table className="w-full min-w-[640px] text-xl border-collapse">
                            <thead>
                                <tr>
                                    <th className="text-left p-4 border border-b-2 bg-gray-400 dark:bg-gray-700">Tarefa</th>
                                    <th className="text-left p-4 border border-b-2 bg-gray-400 dark:bg-gray-700">Duração</th>
                                    <th className="text-left p-4 border border-b-2 bg-gray-400 dark:bg-gray-700">Data</th>
                                    <th className="text-left p-4 border border-b-2 bg-gray-400 dark:bg-gray-700">Status</th>
                                    <th className="text-left p-4 border border-b-2 bg-gray-400 dark:bg-gray-700">Tipo</th>
                                </tr>
                            </thead>

                            <tbody>
                                {sortedTasks.map(task => {
                                    const taskTypeMap = {
                                        workTime: "Trabalho",
                                        shortBreakTime: "Descanso curto",
                                        longBreakTime: "Descanso longo",
                                    }

                                    return (
                                        <tr key={task.id}>
                                            <td className="text-left p-4 border border-b-1">{task.name}</td>
                                            <td className="text-left p-4 border border-b-2">{task.duration}</td>
                                            <td className="text-left p-4 border border-b-2">{formatDate(task.startDate)}</td>
                                            <td className="text-left p-4 border border-b-2">{getStatus(task, state.activeTask)}</td>
                                            <td className="text-left p-4 border border-b-2">{taskTypeMap[task.type]}</td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                )}
                {state.tasks.length === 0 && (
                    <div className="flex flex-col items-center justify-center h-full">
                        <h2 className="text-2xl font-bold text-gray-500 dark:text-gray-400">Nenhuma tarefa criada.</h2>
                    </div>
                )}
            </Container>
        </MainTemplate>
    )
}