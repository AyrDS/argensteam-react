import { useState, useEffect } from "react";
import { useParams } from "react-router";
import ItemList from "./ItemList";

const ItemListContainer = () => {

    const [products, setProducts] = useState([]);

    const { id } = useParams();

    const getProducts = async () => {
        const url = "https://mocki.io/v1/e1aa8e62-c006-43f3-83c2-01c7b3990b85";
        const result = await fetch(url);
        const data = await result.json();
        setProducts(data);
    }

    useEffect(() => {
        if (!id) {
            getProducts();
        }
    }, [id])
    return (
        <>
            <ItemList products={products} />

            {/* <ItemDetailContainer /> */}
        </>
    );
}

export default ItemListContainer;