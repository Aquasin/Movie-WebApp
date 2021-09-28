import React, { useEffect } from "react";
import { useSelector, useDispatch, RootStateOrAny } from "react-redux";
import { useLocation } from "react-router";
import {
    selectMovieSeries,
    removeSelectedMovieSeries,
} from "../../redux/actions/movieActions";

const MovieDetails = () => {
    const dispatch = useDispatch();

    const selectedMovie: IindividualMovieSeries = useSelector(
        (state: RootStateOrAny) => state.individualMovie.selectedMovieSeries
    );
    const location = useLocation();
    const imdbId = location.pathname.split("/")[2];

    useEffect(() => {
        dispatch(selectMovieSeries(imdbId));
        return () => {
            dispatch(removeSelectedMovieSeries());
        };
        // eslint-disable-next-line
    }, []);

    return (
        <section className="bg-dark" style={{ height: "90vh" }}>
            <div className="container py-5 ">
                <div className="row p-4 bg-danger border border-3 border-light rounded text-light">
                    <div className="col-4">
                        <img
                            src={selectedMovie?.Poster}
                            alt={selectedMovie?.Title}
                        />
                    </div>
                    <div className="col-8">
                        <div className="fs-2 py-2">
                            {selectedMovie?.Title} ({selectedMovie?.Year})
                        </div>
                        <div className="py-2">
                            {selectedMovie?.Rated} | {selectedMovie?.Runtime} |{" "}
                            {selectedMovie?.Genre}
                        </div>
                        <div className="py-2">
                            <i className="fab fa-imdb text-warning"></i>{" "}
                            {selectedMovie?.imdbRating} |{" "}
                            <span className="bg-success px-1 text-light">
                                {selectedMovie?.Metascore}
                            </span>{" "}
                            Metascore
                        </div>
                        <div className="fs-6">{selectedMovie?.Plot}</div>
                        <div className="fs-5 py-2">
                            Director : {selectedMovie?.Director} | Actors :{" "}
                            {selectedMovie?.Actors}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MovieDetails;
