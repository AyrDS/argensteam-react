import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { context } from "../../context/CartContext";

const CartWidget = () => {

    const { cart } = useContext(context);
    let totalQuantity = 0;
    if (cart.length > 0) {
        cart.forEach(product => {
            totalQuantity += product.quantity;
        });
    }

    return (
        <div className="cartNoti">
            <FontAwesomeIcon icon={faShoppingCart} className="cart" />
            <span className={cart.length === 0 ? "d-none" : "d-block"}><p className="text-center m-0">{totalQuantity}</p></span>
        </div>
    );
}

export default CartWidget;