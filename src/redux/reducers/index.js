import { combineReducers } from "redux";
import movieReducer from "./movieReducer";
import seatReducer from './seatReducer';
import userReducer from './userReducer'

const rootReducer = combineReducers({
  movieReducer, //   movieReducer: movieReducer
  seatReducer,
  userReducer
});

export default rootReducer;
