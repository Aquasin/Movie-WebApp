import { Link } from "react-router-dom";
import "../../global.css";

interface Props {
    movie: Imovie;
}

const MovieCard = ({ movie }: Props) => {
    return (
        <div className="col-lg-4 col-xl-3" style={{ height: "30rem" }}>
            <Link
                to={{
                    pathname: `/movie/${movie?.imdbID}`,
                }}
                className="text-dark no-link"
            >
                <div
                    className="card bg-light text-light"
                    style={{ height: "29rem" }}
                >
                    <img
                        src={movie?.Poster}
                        className="card-img-top p-3"
                        alt={movie?.Title}
                    />
                    <div className="card-img-overlay text-center d-flex">
                        <div className="card-body align-self-center">
                            <h4 className="card-title fs-2">{movie?.Title}</h4>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default MovieCard;
