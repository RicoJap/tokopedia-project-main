import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Home from "./containers/Home/Home";
import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";
import ReduxPromise from "redux-promise";
import rootReducer from "./reducers";
import { createStore, applyMiddleware } from "redux";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@material-ui/styles";
import {theme} from "./utils/theme.const";
import PokemonDetail from "./containers/PokemonDetail/PokemonDetail";

const AppWrapper = () => {
    const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(
        createStore
    );

    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <ThemeProvider theme={theme}>
                <Provider store={createStoreWithMiddleware(rootReducer)}>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/pokemon" component={Home} />
                        <Route exact path="/pokemon/:pokemonName" component={PokemonDetail} />
                    </Switch>
                </Provider>
            </ThemeProvider>
        </BrowserRouter>
    );
};

ReactDOM.render(
    <React.StrictMode>
        <AppWrapper />
    </React.StrictMode>,
    document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
