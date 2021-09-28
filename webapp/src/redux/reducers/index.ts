import { combineReducers } from 'redux';
import { movieReducer, individualMovieReducer } from './movieReducer';

const rootReducer = combineReducers({
    movies: movieReducer,
    individualMovie: individualMovieReducer,
});

export default rootReducer;
