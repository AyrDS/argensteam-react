import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const ItemCount = ({ onAdd, quantity, setQuantity }) => {

    const add = () => {
        if (quantity >= 0) {
            setQuantity(quantity + 1);
        };
    };

    const subtract = () => {
        if (quantity >= 1) {
            setQuantity(quantity - 1);
        };
    };

    const finish = () => {
        onAdd(quantity);
    };

    return (
        <>
            <button className="btn btn-primary me-3" onClick={add}> Agregar al carro <FontAwesomeIcon icon={faCartPlus} /> </button>
            <button className="btn btn-danger" onClick={subtract}> Eliminar del carro <FontAwesomeIcon icon={faTrashAlt} /> </button>
            {
                quantity > 0 &&
                (
                    <>
                        <p className="mt-3 mb-0 fw-bold">Cantidad elegida: <span className="fw-normal">{quantity}</span></p>
                        <Link to="/cart" >
                            <button className="btn btn-success mt-3" onClick={finish}>Terminar compra <FontAwesomeIcon icon={faShoppingCart} /> </button>
                        </Link>
                    </>
                )

            }
        </>
    );
}

export default ItemCount;