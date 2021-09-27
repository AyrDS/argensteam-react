import { getAuth, signInWithPopup } from "@firebase/auth";
import { Link } from "react-router-dom";
import { googleLogin } from "../../firebase/firebaseConfig";
import { addUserDB } from "../../helpers/functions";

const LoginScreen = ({ history }) => {

    const handleLogin = (e) => {
        e.preventDefault();
    }

    const handleGoogleLogin = () => {
        const auth = getAuth();
        signInWithPopup(auth, googleLogin)
            .then(({ user }) => {
                addUserDB(user.uid, user.displayName, user.email);

                setTimeout(() => {
                    history.push("/");
                }, 1000);
            })
            .catch(error => console.log(error));
    }

    return (
        <main className="container d-flex flex-column justify-content-center align-items-center text-center">
            <div className="loginContainer">
                <h2 className="mb-3">Iniciar sesión</h2>
                <form className="text-dark" onSubmit={handleLogin} >
                    <div className="form-floating mb-3">
                        <input type="email" className="form-control formWidth" id="floatingInput" placeholder="name@example.com" />
                        <label htmlFor="floatingInput">Tu email</label>
                    </div>
                    <div className="form-floating">
                        <input type="password" className="form-control formWidth" id="floatingPassword" placeholder="Password" />
                        <label htmlFor="floatingPassword">Contraseña</label>
                    </div>
                    <button className="btn btn-primary mt-3 mb-3 d-block" >Ingresar</button>
                </form>
                <div className="google-btn mb-4" onClick={handleGoogleLogin}>
                    <div className="google-icon-wrapper">
                        <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="" />
                    </div>
                    <p className="btn-text"><b>Sign in with google</b></p>
                </div>
                <Link className="text-white" to="user/register">¿No tienes cuenta? ¡Registrate ahora! </Link>
            </div>
        </main>
    );
}

export default LoginScreen;