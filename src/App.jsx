import { ToastContainer } from "react-toastify";
import { ContactProvider } from "./providers/ContactProvider";
import { UserProvider } from "./providers/UserProvider";
import { RoutesMain } from "./routes";
import { GlobalStyle } from "./styles/globalStyles";
import "react-toastify/dist/ReactToastify.css";

function App() {
    return (
        <>
            <UserProvider>
                <ContactProvider>
                    <ToastContainer
                        position="top-right"
                        autoClose={5000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme="dark"
                    />
                    <GlobalStyle />
                    <RoutesMain />
                </ContactProvider>
            </UserProvider>
        </>
    );
}

export default App;
