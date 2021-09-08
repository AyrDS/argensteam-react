import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/navbar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";

const App = () => {
    return (
        <Router>
            <NavBar />
            <Switch>
                <Route exact path="/" component={ItemListContainer} />
                <Route path="/category/:id" component={ItemListContainer} />
                <Route path="/item/:id" component={ItemDetailContainer} />
            </Switch>
        </Router>
    )
}

export default App;