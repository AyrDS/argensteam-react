import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Footer from "./components/Footer";

const App = () => {
    return (
        <Router>
            <div className="main">
                <NavBar />
                <Switch>
                    <Route exact path="/" component={ItemListContainer} />
                    <Route path="/category/:categoryId" component={ItemListContainer} />
                    <Route path="/item/:id" component={ItemDetailContainer} />
                </Switch>
                <Footer />
            </div>
        </Router>
    )
}

export default App;