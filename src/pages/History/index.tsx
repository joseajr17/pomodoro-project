import { MainTemplate } from "../../templates/MainTemplate";
import { Container } from "../../components/Container";
import { Heading } from "../../components/Heading";
import { Button } from "../../components/ui/button";
import { TrashIcon } from "lucide-react";
import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";
import { formatDate } from "../../utils/formatDate";

export function History() {

    const { state } = useTaskContext();

    return (
        <MainTemplate>
            <Container>
                <Heading>
                    <span>Histórico</span>
                    <Button
                        aria-label="Limpar todo o histórico"
                        title="Limpar todo o histórico"
                        className="w-auto h-auto cursor-pointer">
                        <TrashIcon className="min-w-8 min-h-8" />
                    </Button>
                </Heading>
            </Container>

            <Container>
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
                            {state.tasks.map(task => {
                                return (
                                    <tr key={task.id}>
                                        <td className="text-left p-4 border border-b-1">{task.name}</td>
                                        <td className="text-left p-4 border border-b-2">{task.duration}</td>
                                        <td className="text-left p-4 border border-b-2">{formatDate(task.startDate)}</td>
                                        <td className="text-left p-4 border border-b-2">{task.name}</td>
                                        <td className="text-left p-4 border border-b-2">{task.type}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </Container>
        </MainTemplate>
    )
}