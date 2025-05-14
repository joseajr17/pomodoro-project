import { PlayCircleIcon, StopCircleIcon } from "lucide-react";
import { Cycles } from "../Cycles";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

export function Form() {
    return (
        <form className="flex flex-col items-center justify-center gap-6" action="">
            <div className="flex flex-col items-center justify-center gap-6">
                <label htmlFor="myInput">Tarefa:</label>
                <Input
                    type="text"
                    id="myInput"
                    placeholder="Digite algo"
                    className="text-center p-2 mx-20 border-transparent border-b-2 rounded-none border-b-red-400 transition-all duration-100 ease-in-out 
              placeholder:italic focus:rounded-lg disabled:border-b-gray-300 disabled:text-gray-400 " />
            </div>

            <div className="flex flex-col items-center justify-center gap-6">
                <p>Lorem ipsum dolor sit amet.</p>
            </div>

            <div className="flex flex-col items-center justify-center gap-6">
                <Cycles />
            </div>

            <div className="flex flex-col items-center justify-center gap-6">
                <Button className="w-full mx-0  bg-chart-2 border-none p-4 rounded-xl my-12 cursor-pointer hover:bg-chart-2/80 transition-all duration-100 ease-in-out" >
                    <PlayCircleIcon className="min-w-8 min-h-8" />
                </Button>
                <Button className="min-w-96 bg-ring border-none p-4 rounded-xl my-12 mx-0 cursor-pointer hover:bg-ring/80 transition-all duration-100 ease-in-out" >
                    <StopCircleIcon className="min-w-8 min-h-8" />
                </Button>
            </div>
        </form>
    );
}