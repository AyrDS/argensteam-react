const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer>
            <p className="m-0">Hecho por AyrDS</p>
            <p>Todos los derechos reservados {year}&copy;</p>
        </footer>
    );
}

export default Footer;