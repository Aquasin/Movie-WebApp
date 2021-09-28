import { ActionTypes } from "../constants/actionTypesConstants";

interface actionInterface {
    type: string;
    payload: any;
}

const initialStateMovies = {
    moviesList: [],
    seriesList: [],
};

const initalStateMovie = {
    selectedMovieSeries: [],
};

export const movieReducer = (
    state = initialStateMovies,
    action: actionInterface
) => {
    switch (action.type) {
        case ActionTypes.FETCH_MOVIES_SHOWS:
            return {
                ...state,
                moviesList: action.payload.movieResponse,
                seriesList: action.payload.showResponse,
            };
        default:
            return state;
    }
};

export const individualMovieReducer = (
    state = initalStateMovie,
    action: actionInterface
) => {
    switch (action.type) {
        case ActionTypes.SELECTED_MOVIE_SERIES:
            return { ...state, selectedMovieSeries: action.payload };

        case ActionTypes.REMOVE_SELECTED_MOVIE_SERIES:
            return {};

        default:
            return state;
    }
};
