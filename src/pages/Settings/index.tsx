import { MainTemplate } from "../../templates/MainTemplate";
import { Container } from "../../components/Container";
import { Heading } from "../../components/Heading";
import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";
import { SaveIcon } from "lucide-react";

export function Settings() {
    return (
        <MainTemplate>
            <Container>
                <Heading>Configurações</Heading>
            </Container>

            <Container>
                <p className="text-center">Modifique as configurações do seu tempo de trabalho, descanso curto e descanso longo.</p>
            </Container>

            <Container>
                <form action=""
                    className="flex flex-col items-center justify-center gap-6"
                >
                    <div className="flex flex-col items-center justify-center gap-6">
                        <label htmlFor="workTimeInput">Foco:</label>
                        <Input
                            type="text"
                            id="workTimeInput"
                            placeholder="Tempo de foco de trabalho"
                            // ref={taskNameInput}
                            // defaultValue={lastTask}
                            className="text-center p-2 mx-20 border-transparent border-b-2 rounded-none border-b-red-400 transition-all duration-100 ease-in-out 
              placeholder:italic focus:rounded-lg disabled:border-b-gray-300 disabled:text-gray-400"
                        // disabled={!!state.activeTask}
                        />
                    </div>

                    <div className="flex flex-col items-center justify-center gap-6">
                        <label htmlFor="shortBreakTimeInput">Descanso curto:</label>
                        <Input
                            type="text"
                            id="shortBreakTimeInput"
                            placeholder="Tempo de descanso curto"
                            // ref={taskNameInput}
                            // defaultValue={lastTask}
                            className="text-center p-2 mx-20 border-transparent border-b-2 rounded-none border-b-red-400 transition-all duration-100 ease-in-out 
              placeholder:italic focus:rounded-lg disabled:border-b-gray-300 disabled:text-gray-400"
                        // disabled={!!state.activeTask}
                        />
                    </div>

                    <div className="flex flex-col items-center justify-center gap-6">
                        <label htmlFor="longBreakTimeInput">Descanso longo:</label>
                        <Input
                            type="text"
                            id="longBreakTimeInput"
                            placeholder="Tempo de descanso longo"
                            // ref={taskNameInput}
                            // defaultValue={lastTask}
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