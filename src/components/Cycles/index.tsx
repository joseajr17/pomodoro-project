export function Cycles() {
    return (
        <div className="flex flex-col gap-7 items-center justify-center">
            <span>Ciclos:</span>
            <div className="flex gap-3">
                {/* Work Time */}
                <span className="w-8 h-8 rounded-2xl bg-red-600"></span>
                {/* Short Break Time */}
                <span className="w-8 h-8 rounded-2xl bg-chart-4"></span>
                {/* Work Time */}
                <span className="w-8 h-8 rounded-2xl bg-red-600"></span>
                {/* Short Break Time */}
                <span className="w-8 h-8 rounded-2xl bg-chart-4"></span>
                {/* Work Time */}
                <span className="w-8 h-8 rounded-2xl bg-red-600"></span>
                {/* Short Break Time */}
                <span className="w-8 h-8 rounded-2xl bg-chart-4"></span>
                {/* Work Time */}
                <span className="w-8 h-8 rounded-2xl bg-red-600"></span>
                {/* Long Break Time */}
                <span className="w-8 h-8 rounded-2xl bg-chart-1"></span>
            </div>
        </div>
    );
}