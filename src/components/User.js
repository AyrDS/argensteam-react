import { getAuth, signOut } from 'firebase/auth';
import Swal from 'sweetalert2';
import LoginScreen from './auth/LoginScreen';

const User = ({ history }) => {


    const auth = getAuth();
    const user = auth.currentUser;

    const handleLogout = () => {
        signOut(auth)
            .then(() => {
                Swal.fire("Ha cerrado sesión", "", "info");
                setTimeout(() => {
                    history.push("/");
                }, 1000);
            })
            .catch(e => {
                console.log(e);
            });
    };


    if (!user) {
        return (
            <LoginScreen history={history} />
        )
    } else {
        return (
            <main className="container mt-5">
                <h1 className="mb-3">Mi cuenta</h1>
                <hr />
                <p className="fs-4">Nombre: {user.displayName}</p>
                <p className="fs-4">Correo electrónico registrado: {user.email}</p>
                <button className="btn btn-danger mt-2" onClick={handleLogout} >Cerrar sesión</button>
            </main>
        )
    }
}

export default User;