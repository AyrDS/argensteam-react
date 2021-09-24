import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { context } from "../../context/CartContext";
import { addOrder } from "../../helpers/functions";
import { useForm } from "../../hooks/useForm";

const Cart = () => {

    const [orderId, setOrderId] = useState("");
    const [disabled, setDisabled] = useState(false);
    const { cart, showTotal, removeItem } = useContext(context);
    const total = showTotal();

    const [formValues, handleInputChange] = useForm({
        name: "",
        email: "",
        phone: "",
    });

    const { name, email, phone } = formValues;

    const user = {
        name,
        email,
        phone
    }

    const order = {
        cart,
        user
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setDisabled(true);

        Swal.fire({
            title: "Confirmando orden...",
            text: "Por favor espere...",
            allowOutsideClick: false,
            showConfirmButton: false,
            willOpen: () => {
                Swal.showLoading();
            }
        });

        addOrder(order).then(data => {
            setOrderId(data)
            Swal.close();
        });

    }

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
                                            <button className="btn btn-danger float-md-end" onClick={() => removeItem(id)} disabled={disabled} >
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
                    <form onSubmit={handleSubmit}>
                        <div className="row mb-3">
                            <label htmlFor="name" className="col-lg-3 text-lg-end col-form-label">Nombre y apellido</label>
                            <div className="col-lg-9">
                                <input type="text" className="form-control" id="name" name="name" onChange={handleInputChange} value={name} />
                            </div>
                        </div>

                        <div className="row mb-3">
                            <label htmlFor="email" className="col-lg-3 text-lg-end col-form-label">Email</label>
                            <div className="col-lg-9">
                                <input type="email" className="form-control" id="email" name="email" onChange={handleInputChange} value={email} />
                            </div>
                        </div>

                        <div className="row mb-3">
                            <label htmlFor="phone" className="col-lg-3 text-lg-end col-form-label">Teléfono/Celular</label>
                            <div className="col-lg-9">
                                <input type="number" className="form-control" id="phone" name="phone" onChange={handleInputChange} value={phone} />
                            </div>
                        </div>
                        <button className="float-end btn btn-primary" type="submit" disabled={disabled}>Finalizar compra</button>
                    </form>
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