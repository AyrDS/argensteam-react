/*import ItemCount from './ItemCount';
import { useEffect, useState } from "react";
import productosDB from "../db/productos";
import ItemList from './ItemList'; */

import ItemDetailContainer from "./ItemDetailContainer"

const ItemListContainer = () => {

    /* const promProductos = () => {
        return new Promise(resolve => {

            setTimeout(() => {
                resolve(productosDB);
            }, 2000);

        });
    };

    const [productos, setProductos] = useState([])

    useEffect(() => {
        promProductos().then(data => {
            setProductos(data);
        })
    }, []) */

    return (
        <>
            {/* <ItemList productos={productos} /> */}

            <ItemDetailContainer />
        </>
    );
}

export default ItemListContainer;