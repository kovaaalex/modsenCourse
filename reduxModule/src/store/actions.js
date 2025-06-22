export const startTimer = (seconds) => ({
    type: 'START_TIMER',
    payload: {seconds}
});
export const decrementSeconds = (seconds) => ({
    type: 'DECREMENT_SECONDS',
    payload: {seconds}
});
export const stopTimer = () => ({
    type: 'STOP_TIMER'
});