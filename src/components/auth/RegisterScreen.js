import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { useForm } from "../../hooks/useForm";
import validator from 'validator';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { addUserDB } from "../../helpers/functions";

const RegisterScreen = ({ history }) => {

    const [formValues, handleInputChange] = useForm({
        name: "",
        email: "",
        password: "123456",
        password2: "123456"
    });

    const { name, email, password, password2 } = formValues;

    const handleRegister = (e) => {
        e.preventDefault();

        if (isValid()) {
            const auth = getAuth();
            createUserWithEmailAndPassword(auth, email, password)
                .then(({ user }) => {
                    addUserDB(user.uid, name, email);
                    Swal.fire("Se registró correctamente", "", "success");
                    setTimeout(() => {
                        history.push("/");
                        Swal.close();
                    }, 1500);
                })
                .catch(e => {
                    Swal.fire("Error", e.message, "error");
                });
        };
    };

    const isValid = () => {
        if (name.length === 0) {
            Swal.fire("Error", "El nombre es obligatorio", "error");
            return false;
        };
        if (!validator.isEmail(email)) {
            Swal.fire("Error", "El email debe ser válido", "error");
            return false;
        }
        if (password.length < 6 || password2 !== password) {
            Swal.fire("Error", "Las contraseñas no coinciden o es menor a 6 caracteres", "error");
            return false;
        }

        return true;
    }

    return (
        <main className="container d-flex flex-column justify-content-center align-items-center text-center animate__animated animate__fadeIn">
            <div className="loginContainer">
                <h2 className="mb-3">Regístrate</h2>
                <form className="text-dark" onSubmit={handleRegister}>
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" id="floatingInput" placeholder="Ayrton Da Silva" name="name" value={name} onChange={handleInputChange} />
                        <label htmlFor="floatingInput">Nombre</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" name="email" value={email} onChange={handleInputChange} />
                        <label htmlFor="floatingInput">Tu email</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="password" className="form-control" id="floatingPassword" placeholder="Password" name="password" value={password} onChange={handleInputChange} />
                        <label htmlFor="floatingPassword">Contraseña</label>
                    </div>
                    <div className="form-floating">
                        <input type="password" className="form-control" id="floatingPassword" placeholder="Password" name="password2" value={password2} onChange={handleInputChange} />
                        <label htmlFor="floatingPassword">Confirmar Contraseña</label>
                    </div>
                    <button className="btn btn-primary mt-3 mb-3 d-block" >Registrarse</button>
                    <Link to="/user" className="text-white">¿Ya tienes una cuenta? Inicia sesión</Link>
                </form>
            </div>
        </main>
    );
}

export default RegisterScreen;