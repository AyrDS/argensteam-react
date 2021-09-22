import { useContext, useState } from "react";
import { context } from "../../context/CartContext";
import ItemCount from "../ItemCount";


const ItemDetail = ({ item }) => {

    const { id, desc, price, product } = item;
    const { addItem } = useContext(context);
    const [quantity, setQuantity] = useState(0);

    const onAdd = (quantity) => {
        const newItem = { ...item, quantity };
        addItem(newItem, quantity);
    };

    return (
        <div className="customDetail p-4 row row-cols-1 row-cols-md-2 m-1 m-sm-0">
            <div className="col col-lg-3">
                <img
                    src={`/../../assets/img/${id}.png`}
                    className="img-fluid mx-auto d-block animate__animated animate__fadeInLeft"
                    alt={product}
                />
            </div>
            <div className="col col-lg-9">
                <h1 className="mt-3 text-center" >{product}</h1>
                <h5>Precio: <span className="text-success">${price}</span></h5>
                <p>{desc}</p>
                <ItemCount onAdd={onAdd} setQuantity={setQuantity} quantity={quantity} />
            </div>
        </div>
    );
}
export default ItemDetail;