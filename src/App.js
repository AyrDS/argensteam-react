import { CustomProvider } from "./context/Context";
import AppRouter from "./router/AppRouter";

const App = () => {
    return (
        <CustomProvider>
            <AppRouter />
        </CustomProvider>
    )
}

export default App;