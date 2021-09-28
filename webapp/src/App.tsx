import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import MovieDetails from "./components/MovieDetails/MovieDetails";
import SeriesDetails from "./components/SeriesDetails/SeriesDetails";

function App() {
    return (
        <div className="App">
            <Router>
                <Header></Header>
                <Switch>
                    <Route path="/" exact component={Home}></Route>
                    <Route
                        path="/movie/:id"
                        exact
                        component={MovieDetails}
                    ></Route>
                    <Route
                        path="/series/:id"
                        exact
                        component={SeriesDetails}
                    ></Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
