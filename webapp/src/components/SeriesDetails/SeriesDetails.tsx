import React, { useEffect } from "react";
import { useSelector, useDispatch, RootStateOrAny } from "react-redux";
import { useLocation } from "react-router";
import {
    removeSelectedMovieSeries,
    selectMovieSeries,
} from "../../redux/actions/movieActions";

const SeriesDetails = () => {
    const dispatch = useDispatch();

    const selectedSeries: IindividualMovieSeries = useSelector(
        (state: RootStateOrAny) => state.individualMovie.selectedMovieSeries
    );
    const location = useLocation();
    const imdbId = location.pathname.split("/")[2];

    useEffect(() => {
        dispatch(selectMovieSeries(imdbId));
        console.log(selectedSeries);
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
                            src={selectedSeries?.Poster}
                            alt={selectedSeries?.Title}
                        />
                    </div>
                    <div className="col-8">
                        <div className="fs-2 py-2">
                            {selectedSeries?.Title} ({selectedSeries?.Year})
                        </div>
                        <div className="py-2">
                            {selectedSeries?.Rated} | {selectedSeries?.Runtime}{" "}
                            | {selectedSeries?.Genre}
                        </div>
                        <div className="py-2">
                            <i className="fab fa-imdb text-warning"></i>{" "}
                            {selectedSeries?.imdbRating} | No of Seasons :{" "}
                            {selectedSeries?.totalSeasons}
                        </div>
                        <div className="fs-6">{selectedSeries?.Plot}</div>
                        <div className="fs-5 py-2">
                            Writer : {selectedSeries?.Writer} | Actors :{" "}
                            {selectedSeries?.Actors}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SeriesDetails;
