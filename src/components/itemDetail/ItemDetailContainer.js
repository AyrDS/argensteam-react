import { useEffect, useState } from "react";
import { useParams } from "react-router";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {

    const [item, setitem] = useState([]);
    const { id } = useParams();

    /* useEffect(() => {
        getProducts()
            .then(product => {
                const aux = product.find(p => p.id === id)

                setitem(aux);
            });
    }, [id]) */

    return (
        <main className="container mt-5">

            {<ItemDetail item={item} />}
        </main>
    );
}

export default ItemDetailContainer;