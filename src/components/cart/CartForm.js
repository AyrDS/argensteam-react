import { useState } from "react";
import Swal from "sweetalert2";
import { useForm } from "../../hooks/useForm";
import validator from 'validator';
import { addOrder } from "../../helpers/functions";


const CartForm = ({ cart, setOrderId }) => {
    const [disabled, setDisabled] = useState(false);

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
    };

    const order = {
        cart,
        user
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (isValid()) {
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

            addOrder(order)
                .then(data => {
                    setOrderId(data)
                    Swal.close();
                })
                .catch(error => {
                    Swal.fire("¡Ups!", "Hubo un error al confirmar su orden", "error");
                });
        };
    };

    const isValid = () => {
        if (name.length === 0) {
            Swal.fire("Error", "El nombre es obligatorio", "error");
            return false;
        };

        if (!validator.isEmail(email)) {
            Swal.fire("Error", "El email tiene que ser válido", "error");
            return false;
        };

        if (phone.length < 8 || phone.length > 10) {
            Swal.fire("Error", "El número de teléfono debe ser válido", "error");
            return false;
        };

        return true;
    }

    return (
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
                    <input type="number" className="form-control" id="phone" name="phone" onChange={handleInputChange} value={phone} placeholder="ej: 4751-2244/1150601158" />
                </div>
            </div>
            <button className="float-end btn btn-primary" type="submit" disabled={disabled}>Finalizar compra</button>
        </form>
    );
}

export default CartForm;