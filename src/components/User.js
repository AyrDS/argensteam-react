import { getAuth } from 'firebase/auth';
import LoginScreen from './auth/LoginScreen';

const User = ({ history }) => {

    const auth = getAuth();
    const user = auth.currentUser;

    if (!user) {
        return (
            <LoginScreen history={history} />
        )
    } else {
        return (
            <>
                <h1>Holi</h1>
            </>
        )
    }



}

export default User;