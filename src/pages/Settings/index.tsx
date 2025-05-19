import { useRef } from "react";
import { SaveIcon } from "lucide-react";

import { showMessage } from "../../adapters/showMessage";
import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";
import { TaskActionTypes } from "../../contexts/TaskContext/taskActions";
import { MainTemplate } from "../../templates/MainTemplate";

import { Container } from "../../components/Container";
import { Heading } from "../../components/Heading";
import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";

export function Settings() {
    const { state, dispatch }  = useTaskContext();

    const workTimeInput = useRef<HTMLInputElement>(null);
    const shortBreakTimeInput = useRef<HTMLInputElement>(null);
    const longBreakTimeInput = useRef<HTMLInputElement>(null);

    const lastConfig = state.config || "";

    function handleSubmitSettings(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        const formErrors = [];
        
        const workTime = Number(workTimeInput.current?.value);
        const shortBreakTime = Number(shortBreakTimeInput.current?.value);
        const longBreakTime = Number(longBreakTimeInput.current?.value);

        if(workTime <= 0 || workTime > 99) {
            formErrors.push("O valor de foco deve ser entre 1 e 99.");
        }

        if(shortBreakTime <= 0 || shortBreakTime > 30) {
            formErrors.push("Digite entre 1 e 30 para descanso curto.");
        }

        if(longBreakTime <= 0 || longBreakTime > 60) {
            formErrors.push("Digite entre 1 e 60 para descanso longo.");
        }

        if(formErrors.length > 0) {
            formErrors.forEach((error) => {
                showMessage.dismiss();
                showMessage.error(error);
            });
            return;
        }
        dispatch({type: TaskActionTypes.CHANGE_SETTINGS, payload: {
            workTime,
            shortBreakTime,
            longBreakTime,
        }});
        showMessage.dismiss();
        showMessage.sucess("Configurações salvas com sucesso!");

    }


    return (
        <MainTemplate>
            <Container>
                <Heading>Configurações</Heading>
            </Container>

            <Container>
                <p className="text-center">Modifique as configurações do seu tempo de trabalho, descanso curto e descanso longo.</p>
            </Container>

            <Container>
                <form 
                onSubmit={handleSubmitSettings}
                action=""
                    className="flex flex-col items-center justify-center gap-6"
                >
                    <div className="flex flex-col items-center justify-center gap-6">
                        <label htmlFor="workTimeInput">Foco:</label>
                        <Input
                            type="number"
                            id="workTimeInput"
                            placeholder="Tempo de foco de trabalho"
                            ref={workTimeInput}
                            defaultValue={lastConfig.workTime}
                            className="text-center p-2 mx-20 border-transparent border-b-2 rounded-none border-b-red-400 transition-all duration-100 ease-in-out 
              placeholder:italic focus:rounded-lg disabled:border-b-gray-300 disabled:text-gray-400"
                        // disabled={!!state.activeTask}
                        />
                    </div>

                    <div className="flex flex-col items-center justify-center gap-6">
                        <label htmlFor="shortBreakTimeInput">Descanso curto:</label>
                        <Input
                            type="number"
                            id="shortBreakTimeInput"
                            placeholder="Tempo de descanso curto"
                            ref={shortBreakTimeInput}
                            defaultValue={lastConfig.shortBreakTime}
                            className="text-center p-2 mx-20 border-transparent border-b-2 rounded-none border-b-red-400 transition-all duration-100 ease-in-out 
              placeholder:italic focus:rounded-lg disabled:border-b-gray-300 disabled:text-gray-400"
                        // disabled={!!state.activeTask}
                        />
                    </div>

                    <div className="flex flex-col items-center justify-center gap-6">
                        <label htmlFor="longBreakTimeInput">Descanso longo:</label>
                        <Input
                            type="number"
                            id="longBreakTimeInput"
                            placeholder="Tempo de descanso longo"
                            ref={longBreakTimeInput}
                            defaultValue={lastConfig.longBreakTime}
                            className="text-center p-2 mx-20 border-transparent border-b-2 rounded-none border-b-red-400 transition-all duration-100 ease-in-out 
              placeholder:italic focus:rounded-lg disabled:border-b-gray-300 disabled:text-gray-400"
                        // disabled={!!state.activeTask}
                        />
                    </div>

                    <div className="flex flex-col items-center justify-center gap-6 mt-8">
                        <Button aria-label="Salvar configurações" title="Salvar configurações" className="text-md h-auto bg-chart-2 border-none rounded-xl mt-8 cursor-pointer hover:bg-chart-2/80 transition-all duration-100 ease-in-out">
                            <SaveIcon className="min-w-9 min-h-9" /> Salvar
                        </Button>
                    </div>
                </form>
            </Container>
        </MainTemplate>
    );
}