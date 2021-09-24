import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { context } from "../../context/Context";
import CartForm from "./CartForm";

const Cart = () => {

    const [orderId, setOrderId] = useState("");
    const { cart, showTotal, removeItem } = useContext(context);
    const total = showTotal();

    if (cart.length === 0) {
        return (
            <div className="text-center d-flex flex-column justify-content-center align-items-center" style={{ height: "75vh" }}>
                <h1 >Carrito vacio</h1>
                <Link to="/" className="btn btn-primary" >Ir a catálogo</Link>
            </div>
        )
    };

    return (
        <main className="container mt-5">
            <div className="row row-cols-1 row-cols-md-2" >
                <div className="col mt-5">
                    {
                        cart.map(item => {
                            const { id, productName, price, quantity, imageUrl } = item;
                            return (
                                <div key={id} className="mb-3">
                                    <div className="row row-cols-1 row-cols-md-2 text-center text-md-start">
                                        <div className="col col-md-4">
                                            <img src={imageUrl} className="imgProduct d-block mx-auto float-md-end img-fluid" alt={productName} />
                                        </div>
                                        <div className="col col-md-8">
                                            <h3>{productName}</h3>
                                            <p>Precio por unidad: ${price}</p>
                                            <p>Cantidad: {quantity}</p>
                                            <button className="btn btn-danger float-md-end" onClick={() => removeItem(id)} >
                                                <FontAwesomeIcon icon={faTrashAlt} />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                    <p className="text-md-end">Total: <span className="fw-bold">${total}</span></p>
                </div>

                <div className="col">
                    <h1 className="text-center mb-3">Complete sus datos</h1>
                    <CartForm cart={cart} setOrderId={setOrderId} />
                </div>
            </div>

            {
                orderId &&
                <div className="d-flex flex-column align-items-center justify-content-center mt-5 mb-5">
                    <img src="../../assets/img/success-.png" alt="success" className="successImg" />
                    <h3 className="mt-3">¡Muchas gracias por su compra!</h3>
                    <p>Su código de orden es {orderId}</p>
                </div>
            }
        </main>
    );
}

export default Cart;