import * as ActionType from "./../constants/ActionType";

let initialState = {
  listMovie: [],
  detailMovie: {},
  theater: [],
  cinema: [],
  user: {},
  keyword: ""
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.GET_LIST_MOVIE:{
      state.listMovie = action.data;
      return { ...state };
    }
    case ActionType.GET_DETAIL_MOVIE:{
      state.detailMovie = action.data;
      return { ...state };
    }
    case ActionType.GET_THEATER:{
      state.theater = action.data;
      return { ...state };
    }
    case ActionType.GET_CINEMA:{
      state.cinema = action.data;
      return { ...state };
    }
    case ActionType.SEARCH:{
      state.keyword = action.data;
      return { ...state };
    }
    default:
      return { ...state };
  }
};

export default movieReducer;
