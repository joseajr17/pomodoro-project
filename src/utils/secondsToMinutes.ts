export function secondsToMinutes(seconds: number) {
    return `${String(Math.floor(seconds/60)).padStart(2, '0')}:${String(Math.floor(seconds%60)).padStart(2, '0')}`;
}