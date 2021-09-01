import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";

const URL_API = "https://mocki.io/v1/51e03849-78e7-4289-9bd6-9f6d3351a900";
const id = 2;
const ItemDetailContainer = () => {

    const [productos, setProductos] = useState([])

    useEffect(() => {
        fetch(URL_API)
            .then(respuesta => respuesta.json())
            .then(data => {
                const aux = data.find(element => element.id === id);
                setProductos(aux);
            })
    }, [])

    return (
        <>
            <ItemDetail data={productos} />
        </>
    );
}

export default ItemDetailContainer;