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
    }, [id])

    return (
        <main className="container mt-5">

            {<ItemDetail item={item} />}
        </main>
    );
}

export default ItemDetailContainer;