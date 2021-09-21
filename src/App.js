import "./App.css";
import React from "react";
import Header from "./components/Header/Header";
import Cart from "./components/SideMenu/Cart";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import Favorites from "./components/Favorites/Favorites";
import Purchased from "./components/Purchased/Purchased";

function App() {
    const [cartIsOpen, setCartIsOpen] = React.useState(true);
    
    return (
        <Router>
            <div className="App">
                <Cart cartIsOpen={cartIsOpen} setCartIsOpen={setCartIsOpen} />
                <div className="wrapper">
                    <Header setCartIsOpen={setCartIsOpen} />
                    <hr />
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/favorites" component={Favorites} />
                        <Route path="/purchased" component={Purchased} />
                    </Switch>
                </div>
            </div>
        </Router>
    );
}

export default App;
