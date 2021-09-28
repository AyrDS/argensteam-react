import { useEffect, useState } from "react";
import { addOrder } from "../../helpers/functions";
import { getAuth } from 'firebase/auth';
import { useForm } from "../../hooks/useForm";
import Swal from "sweetalert2";
import validator from 'validator';


const CartForm = ({ cart, setOrderId, history }) => {
    const [disabled, setDisabled] = useState(false);
    const [userCheck, setUserCheck] = useState(false);
    const [uid, setUid] = useState("");

    useEffect(() => {
        const auth = getAuth();
        const user = auth.currentUser;
        if (user) {
            setUserCheck(true);
            setUid(user.uid);
        }
    }, []);

    const [formValues, handleInputChange] = useForm({
        name: "",
        email: "",
        phone: "",
    });
    const { name, email, phone } = formValues;

    const userInfo = {
        name,
        email,
        phone
    };

    const order = {
        cart,
        userInfo
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

            addOrder(order, uid)
                .then(data => {
                    setOrderId(data) ;
                        Swal.close();
                })
                .catch(() => {
                    Swal.fire("¡Ups!", "Hubo un error al confirmar su orden", "error");
                });
        };
    };

    const isValid = () => {
        if (!userCheck) {
            Swal.fire("Aviso", "Debe tener una cuenta para realizar la reserva.", "info");
            setTimeout(() => {
                history.push("/user");
            }, 1000);
            return false;
        }

        if (name.length === 0) {
            Swal.fire("Error", "El nombre es obligatorio", "error");
            return false;
        };

        if (!validator.isEmail(email)) {
            Swal.fire("Error", "El email tiene que ser válido", "error");
            return false;
        };

        if (phone.length < 8 || phone.length > 10 || phone < 0) {
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
                    <input type="text" className="form-control" id="name" name="name" onChange={handleInputChange} value={name} placeholder="ej: Ayrton Da Silva" />
                </div>
            </div>

            <div className="row mb-3">
                <label htmlFor="email" className="col-lg-3 text-lg-end col-form-label">Email</label>
                <div className="col-lg-9">
                    <input type="email" className="form-control" id="email" name="email" onChange={handleInputChange} value={email} placeholder="ej: hola@hola.com" />
                </div>
            </div>

            <div className="row mb-3">
                <label htmlFor="phone" className="col-lg-3 text-lg-end col-form-label">Teléfono/Celular</label>
                <div className="col-lg-9">
                    <input type="number" className="form-control" id="phone" name="phone" onChange={handleInputChange} value={phone} placeholder="ej: 4751-2244/1150601158" />
                </div>
            </div>
            <button className="float-end btn btn-primary" type="submit" disabled={disabled}>Finalizar reserva</button>
        </form>
    );
}

export default CartForm;