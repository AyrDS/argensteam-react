import CartWidget from "./CartWidget"

const NavBar = () => {
    return(
        <header id="header" className="header">
            <h1>Tienda Virtual</h1>
            <nav className="nav">
                <a href="index.html" className="links">Link</a>
                <a href="index.html" className="links">Link</a>
                <CartWidget/>
            </nav>
        </header>
    )
}

export default NavBar;