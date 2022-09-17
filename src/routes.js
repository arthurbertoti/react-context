import Carrinho from "pages/Carrinho";
import Feira from "pages/Feira";
import Login from "pages/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UsuarioProvider } from 'commom/context/Usuario';
import { CarrinhoProvider } from 'commom/context/Carrinho';
import { PagamentoProvider } from "commom/context/Pagamento";


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
                        <CarrinhoProvider>
                            <Feira />
                        </CarrinhoProvider>
                    </UsuarioProvider>
                } />
                <Route exact path="/carrinho" element={
                    <UsuarioProvider >
                        <CarrinhoProvider>
                            <PagamentoProvider>
                                <Carrinho />
                            </PagamentoProvider>
                        </CarrinhoProvider>
                    </UsuarioProvider>
                } />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;