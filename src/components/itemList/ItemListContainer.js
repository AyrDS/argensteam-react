import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { collection, getDocs } from "@firebase/firestore"
import { db } from '../../firebase/firebaseConfig'

import ItemList from "./ItemList";

const ItemListContainer = () => {

    const [products, setProducts] = useState([]);

    const { categoryId } = useParams();

    useEffect(() => {
        /* if (!categoryId) {
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
        } */

        if (!categoryId) {
            const querySnapshot = getDocs(collection(db, "products"))
            querySnapshot
                .then(snap => {
                    const data = [];
                    snap.forEach(product => {
                        data.push({
                            id: product.id,
                            ...product.data()
                        });
                    })

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