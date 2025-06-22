const initialState = {
    timeInSeconds: 0,
    isRunning: false
}
export const timerReducer = (state = initialState, action) => {
    switch(action.type){
        case 'START_TIMER': {
            return{
                ...initialState,
                timeInSeconds: action.payload.seconds,
                isRunning: true
            }
        }
        case 'DECREMENT_SECONDS': {
            return{
                ...initialState,
                timeInSeconds: state.timeInSeconds - 1,
                isRunning: true
            }
        }
        case 'STOP_TIMER': {
            return{
                ...initialState,
                timeInSeconds: 0,
                isRunning: false
            }
        }
        default:
            return state;
    }
};
export default timerReducer;