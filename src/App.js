import { Switch, Route, Redirect, HashRouter } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "@firebase/auth";
import { useEffect } from "react";
import { useState } from "react";
import { CustomProvider } from "./context/Context";
import { getUserName } from "./helpers/functions";
import RegisterScreen from "./components/auth/RegisterScreen";
import Cart from "./components/cart/Cart";
import ItemDetailContainer from "./components/itemDetail/ItemDetailContainer";
import ItemListContainer from "./components/itemList/ItemListContainer";
import User from "./components/User";
import NavBar from "./components/ui/Navbar";
import Footer from "./components/ui/Footer";
import Loading from "./components/ui/Loading";

const App = () => {

    const [userName, setUserName] = useState("");
    const [checking, setChecking] = useState(true);

    useEffect(() => {
        const auth = getAuth();

        onAuthStateChanged(auth, (user) => {
            if (user) {
                if (!user.displayName) {
                    getUserName(user.uid)
                        .then(data => setUserName(data))
                    user.displayName = userName;
                }
            } else {
                console.log("No hay nadie logueado");
            }

            setChecking(false);
        });

    }, [userName]);

    if (checking) {
        return (
            <Loading />
        )
    }

    return (
        <CustomProvider>
            <HashRouter>
                <div className="main">
                    <NavBar />
                    <Switch>
                        <Route exact path="/" component={ItemListContainer} />
                        <Route exact path="/category/:categoryId" component={ItemListContainer} />
                        <Route exact path="/item/:id" component={ItemDetailContainer} />
                        <Route exact path="/cart" component={Cart} />
                        <Route exact path="/user" component={User} />
                        <Route exact path="/user/register" component={RegisterScreen} />
                        <Redirect to="/" />
                    </Switch>
                    <Footer />
                </div>
            </HashRouter>
        </CustomProvider>
    )
}

export default App;