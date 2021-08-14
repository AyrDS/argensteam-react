import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faShoppingCart} from "@fortawesome/free-solid-svg-icons"
const CartWidget = () => {
    return ( 
        <a href="index.html">
            <FontAwesomeIcon icon={faShoppingCart} className="cart"/>
        </a>
    );
}

export default CartWidget;