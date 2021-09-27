import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "@firebase/auth";
import { getUserName } from "../helpers/functions";
import { useEffect, useState } from "react";
import NavBar from "../components/ui/Navbar";
import Cart from "../components/cart/Cart";
import ItemDetailContainer from "../components/itemDetail/ItemDetailContainer";
import ItemListContainer from "../components/itemList/ItemListContainer";
import User from "../components/User";
import Footer from "../components/ui/Footer";
import RegisterScreen from '../components/auth/RegisterScreen'

const AppRouter = () => {
    const [userName, setUserName] = useState("");

    useEffect(() => {
        const auth = getAuth();

        onAuthStateChanged(auth, (user) => {
            if (user) {
                if (!user.displayName) {
                    getUserName(user.uid)
                        .then(data => setUserName(data))
                    user.displayName = userName;
                }
            }
        });

    }, [userName]);


    return (
        <Router>
            <div className="main">

                <NavBar />
                <Switch>
                    <Route exact path="/" component={ItemListContainer} />
                    <Route exact path="/category/:categoryId" component={ItemListContainer} />
                    <Route exact path="/item/:id" component={ItemDetailContainer} />
                    <Route exact path="/cart" component={Cart} />
                    <Route exact path="/user" component={User} />
                    <Route exact path="/user/register" component={RegisterScreen} />
                </Switch>
                <Footer />

            </div>
        </Router>
    );
}

export default AppRouter;