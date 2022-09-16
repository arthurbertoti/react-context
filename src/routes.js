import Carrinho from "pages/Carrinho";
import Feira from "pages/Feira";
import Login from "pages/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UsuarioProvider } from 'commom/context/Usuario';


function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={
                    <UsuarioProvider >
                        <Login />
                    </UsuarioProvider>
                } />
                <Route exact path="/feira" element={
                    <UsuarioProvider >
                        <Feira />
                    </UsuarioProvider>
                } />
                <Route exact path="/carrinho" element={<Carrinho />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;