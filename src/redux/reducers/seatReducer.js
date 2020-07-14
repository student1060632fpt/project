import * as ActionType from '../constants/ActionType';

let initialState = {
    seat: null,
    resetSeat: null,
    seatNumber: [],
    process: null
}

const seatReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.GET_SEAT: {
            state.seat = action.data;
            return { ...state };
        }
        case ActionType.GET_RESET_SEAT: {
            state.resetSeat = action.data;
            return { ...state };
        }
        case ActionType.PROPS_SEAT: {
            let seatNumber = [...state.seatNumber];
            let index = state.seatNumber.findIndex(seat => {
                return seat === action.data;
            })
            // console.log(index);
            if (action.data) {
                if (index === -1) {
                    seatNumber.push(action.data)
                } else {
                    seatNumber.splice(index, 1)
                }
            }
            state.seatNumber = seatNumber;
            console.log(state.seatNumber);
            return { ...state };
        }
        case ActionType.PROCESS: {
            state.process = action.data;
            return { ...state };
        }
        default: {
            return { ...state };
        }
    }
};

export default seatReducer;