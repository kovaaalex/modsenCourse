import { startTimer, stopTimer, decrementSeconds } from "./store/actions";
import { connect } from 'react-redux';
import { useEffect } from "react";
export const TimerComponent = ({timeInSeconds, isRunning, startTimer, stopTimer, decrementSeconds}) => {
    const handleStart = () => {
        const minutes = parseInt(document.getElementById('minutes').value) || 0;
        const seconds = parseInt(document.getElementById('seconds').value) || 0;
        const totalSeconds = minutes * 60 + seconds;
        if(totalSeconds > 0 && !isRunning) {
            startTimer(totalSeconds);
        }
    }
    useEffect(() => {
        let interval;
        if(isRunning && timeInSeconds > 0) {
            interval = setInterval(() => {
                decrementSeconds();
            }, 1000);
        }
        else if (timeInSeconds <= 0 && isRunning)
            stopTimer();
        return () => clearInterval(interval)
    }, [timeInSeconds]);
    const formatTime = (seconds) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };
    return(<div>
            <h2>{formatTime(timeInSeconds)}</h2>
            <div>
                <label>Минуты:</label>
                <input type="number" min={0} max={59} id="minutes" defaultValue={0} />
            </div>
            <div>
                <label>Секунды:</label>
                <input type="number" min={0} max={59} id="seconds" defaultValue={0} />
            </div>
            <button onClick={handleStart} disabled={isRunning}>
                {isRunning ? 'Таймер работает' : 'Старт'}
            </button>
        </div>)
};
const mapStateToProps = (state) => ({
    timeInSeconds: state.timeInSeconds,
    isRunning: state.isRunning
});

const mapDispatchToProps = {
    startTimer,
    stopTimer,
    decrementSeconds
};

export default connect(mapStateToProps, mapDispatchToProps)(TimerComponent);