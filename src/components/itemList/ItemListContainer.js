import { useState, useEffect } from "react";
import { useParams } from "react-router";
import ItemList from "./ItemList";
import { getAllProducts, getProductsById } from "../../helpers/functions";

const ItemListContainer = () => {

    const [products, setProducts] = useState([]);

    const { categoryId } = useParams();

    useEffect(() => {
        if (!categoryId) {
            getAllProducts()
                .then(data => {
                    setProducts(data);
                });
        } else {
            getProductsById(categoryId)
                .then(data => {
                    setProducts(data);
                })
        }
    }, [categoryId])

    return (
        <main className="container mt-5 mb-5">
            <h1>Nuestros Productos</h1>
            <hr />
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">

                <ItemList products={products} />
            </div>

        </main>
    );
}

export default ItemListContainer;