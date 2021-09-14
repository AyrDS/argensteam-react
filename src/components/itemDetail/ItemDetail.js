import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount";


const ItemDetail = ({ item }) => {
    const { id, desc, price, product } = item;

    const [quantity, setQuantity] = useState(0);

    const onAdd = () => {
        if (quantity >= 0) {
            setQuantity(quantity + 1);
        }
    }

    const onSubtract = () => {
        if (quantity >= 1) {
            setQuantity(quantity - 1);
        }
    }

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
                <ItemCount onAdd={onAdd} onSubtract={onSubtract} quantity={quantity} />

                {
                    quantity > 0 &&
                    <Link to="/cart" >
                        <button className="btn btn-success mt-3">Terminar compra <FontAwesomeIcon icon={faShoppingCart} /> </button>
                    </Link>
                }
            </div>
        </div>
    );
}
//src={`/../../assets/img/${id}.png`}
export default ItemDetail;