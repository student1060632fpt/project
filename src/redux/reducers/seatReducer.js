import * as ActionType from './../constants/ActionType';

let initialState = {
    seat: null,
    resetSeat: null
}

const seatReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.GET_SEAT: {
            state.seat = action.data;
            return { ...state };
        }
        case ActionType.GET_RESET_SEAT:{
            state.resetSeat = action.data;
            return { ...state };
        }
        default: {
            return { ...state };
        }
    }
};

export default seatReducer;