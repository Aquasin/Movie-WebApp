import { useEffect } from "react";
import { useSelector, RootStateOrAny, useDispatch } from "react-redux";
import { fetchMoviesShows } from "../../redux/actions/movieActions";
import MovieCard from "../MovieCard/MovieCard";

const MovieList = () => {
    const movies = useSelector(
        (state: RootStateOrAny) => state.movies.moviesList
    );

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchMoviesShows());
        // eslint-disable-next-line
    }, []);
    return (
        <section className="px-5">
            <div className="row py-3 text-left text-white">
                <h1>Movies</h1>
            </div>
            <div className="row">
                {movies &&
                    movies.map((movie: Imovie) => (
                        <MovieCard key={movie.imdbID} movie={movie}></MovieCard>
                    ))}
            </div>
        </section>
    );
};

export default MovieList;
