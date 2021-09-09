import { useState, useEffect } from "react";
import { useParams } from "react-router";
import getProducts from "../../helpers/fetch";
import ItemList from "./ItemList";

const ItemListContainer = () => {

    const [products, setProducts] = useState([]);

    const { categoryId } = useParams();

    useEffect(() => {
        if (!categoryId) {
            getProducts()
                .then(product => {
                    setProducts(product)
                });
        } else {
            getProducts()
                .then(product => {
                    const aux = product.filter(p => p.category === categoryId);
                    setProducts(aux);
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