import * as ActionType from './../constants/ActionType';

let initialState = {
    user: null,
    list: null
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.GET_USER: {
            state.user = action.data;
            return { ...state };
        }
        case ActionType.GET_LIST_ND: {
            state.list = action.data;
            return { ...state };
        }
        default: {
            return {...state};
        }
    }
}

export default userReducer;