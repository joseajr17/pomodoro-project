import beep from '../assets/audios/beep.mp3';

export function loadAudio() {
    const audio = new Audio(beep);
    audio.load();

    return () => {
        audio.currentTime = 0;
        audio.play()
            .catch((error) => console.error("Error playing audio: ", error));
    }
}