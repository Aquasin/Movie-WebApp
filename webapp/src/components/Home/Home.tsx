import MovieList from "../MovieList/MovieList";
import SeriesList from "../SeriesList/SeriesList";

const Home = () => {
    return (
        <main className="home-page p-5 bg-dark">
            <MovieList></MovieList>
            <SeriesList></SeriesList>
        </main>
    );
};

export default Home;
