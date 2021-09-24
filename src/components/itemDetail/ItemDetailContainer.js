import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getOneProduct } from "../../helpers/functions";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {

    const [item, setitem] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        getOneProduct(id)
            .then(data => {
                setitem(data);
            });
    }, [id]);

    if (!item) {
        return (
            <main className="container text-center mt-5 d-flex flex-column justify-content-center align-items-center" style={{ height: "75vh" }}>
                <img src="../../assets/img/error.png" alt="error" className="imgError" />
                <h1>Producto no encontrado</h1>
            </main>
        )
    };

    return (
        <main className="container mt-5">
            <ItemDetail item={item} />
        </main>
    );
}

export default ItemDetailContainer;