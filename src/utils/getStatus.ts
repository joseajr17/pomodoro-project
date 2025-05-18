import type { TaskModel } from "../models/TaskModel";

export function getStatus(task: TaskModel, activeTask: TaskModel | null) {
    if(task.completeDate)
        return "Concluída";
    if(task.interruptDate)
        return "Interrompida";
    if(task.id === activeTask?.id)
        return "Em andamento";

    return "Abandonada";
}