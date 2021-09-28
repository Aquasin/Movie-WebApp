import axios from "axios";
import { ActionTypes } from "../constants/actionTypesConstants";
import { API_KEY } from "../../base";

export const fetchMoviesShows = () => async (dispatch: any) => {
    const movieResponse = await axios.get(
        `http://www.omdbapi.com/?apikey=${API_KEY}&s=Lord&type=movie`
    );

    const showResponse = await axios.get(
        `http://www.omdbapi.com/?apikey=${API_KEY}&s=Dead&type=series`
    );

    dispatch({
        type: ActionTypes.FETCH_MOVIES_SHOWS,
        payload: {
            movieResponse: movieResponse.data.Search,
            showResponse: showResponse.data.Search,
        },
    });
};

export const selectMovieSeries =
    (movieName: string) => async (dispatch: any) => {
        const response = await axios.get(
            `http://www.omdbapi.com/?apikey=23dded09&i=${movieName}&plot=full`
        );

        dispatch({
            type: ActionTypes.SELECTED_MOVIE_SERIES,
            payload: response.data,
        });
    };

export const removeSelectedMovieSeries = () => {
    return {
        type: ActionTypes.REMOVE_SELECTED_MOVIE_SERIES,
    };
};
