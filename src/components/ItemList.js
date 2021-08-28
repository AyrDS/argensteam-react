import { useEffect, useState } from "react";
import productosDB from "../db/productos";
import Item from "./Item";

const ItemList = () => {
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
            {
                productos.length === 0 ? (
                    <h1>Cargando...</h1>
                ) : (
                    <div className="card-grid">
                        {
                            productos.map(producto => (
                                <Item
                                    key={producto.id}
                                    {...producto}
                                />
                            ))
                        }
                    </div>
                )
            }
        </>
    );
}

export default ItemList;