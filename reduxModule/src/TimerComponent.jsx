import { startTimer, stopTimer, decrementSeconds } from "./store/actions";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from "react";
const TimerComponent = () => {
    const dispatch = useDispatch();
    const timeInSeconds = useSelector(state => state.timeInSeconds);
    const isRunning = useSelector(state => state.isRunning);
    const handleStart = () => {
        const minutes = parseInt(document.getElementById('minutes').value) || 0;
        const seconds = parseInt(document.getElementById('seconds').value) || 0;
        const totalSeconds = minutes * 60 + seconds;
        if(totalSeconds > 0 && !isRunning) {
            dispatch(startTimer(totalSeconds));
        }
    }
    useEffect(() => {
        let interval;
        if(isRunning && timeInSeconds > 0) {
            interval = setInterval(() => {
                dispatch(decrementSeconds());
            }, 1000);
        }
        else if (timeInSeconds <= 0 && isRunning)
            dispatch(stopTimer());
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
export default TimerComponent;