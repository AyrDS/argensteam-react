// import ItemCount from './ItemCount';
import { useEffect, useState } from "react";
import productosDB from "../db/productos";
import ItemList from './ItemList';


const ItemListContainer = () => {
    const promProductos = () => {
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
    }, [])

    return (
        <>
            <ItemList productos={productos} />

            {/* <ItemCount
                stock={5}
                onAdd={(cantidad) => { console.log(`Cantidad elegidad: ${cantidad}`) }}
                initial={1}
            /> */}
        </>
    );
}

export default ItemListContainer;