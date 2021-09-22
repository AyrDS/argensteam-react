import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { context } from "../context/CartContext";

const Cart = () => {

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
                            const { id, product, price, quantity } = item;
                            return (
                                <div key={id} className="mb-3">
                                    <div className="row row-cols-1 row-cols-md-2 text-center text-md-start">
                                        <div className="col col-md-4">
                                            <img src={`/../../assets/img/${id}.png`} className="imgProduct d-block mx-auto float-md-end img-fluid" alt={product} />
                                        </div>
                                        <div className="col col-md-8">
                                            <h3>{product}</h3>
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
                    <h1 className="text-center" >Aquí va un formulario</h1>
                </div>

            </div>
        </main>
    );
}

export default Cart;