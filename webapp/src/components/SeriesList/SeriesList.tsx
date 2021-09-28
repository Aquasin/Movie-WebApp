import { useEffect } from "react";
import { useSelector, RootStateOrAny, useDispatch } from "react-redux";
import { fetchMoviesShows } from "../../redux/actions/movieActions";
import SeriesCard from "../SeriesCard/SeriesCard";

const SeriesList = () => {
    const series = useSelector(
        (state: RootStateOrAny) => state.movies.seriesList
    );

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchMoviesShows());
        // eslint-disable-next-line
    }, []);
    return (
        <section className="px-5">
            <div className="row py-3 text-left text-white">
                <h1>Series</h1>
            </div>
            <div className="row">
                {series &&
                    series.map((series: Iseries) => (
                        <SeriesCard
                            key={series.imdbID}
                            series={series}
                        ></SeriesCard>
                    ))}
            </div>
        </section>
    );
};

export default SeriesList;
