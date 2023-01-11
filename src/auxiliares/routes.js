import {BrowserRouter, Routes, Route} from "react-router-dom";
import React from 'react';

import Wms from '../pages/Wms'
import Login from "../pages/Login"
import ConsultaEstoque from "../pages/ConsultaEstoque";
import ConsultaEstoqueProduto from "../pages/ConsultaEstoqueProduto"
import ConsultaEstoqueEndereço from "../pages/ConsultaEstoqueEndereço"
import Endereçamento from "../pages/Endereçamento"
import SeparaçãoDePedidos from "../pages/SeparaçãoDePedidos";

function Router(){
    return(
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login/>}/>
                    <Route path="/wms" element={<Wms/>}/>
                    <Route path="/consultaestoque" element={<ConsultaEstoque/>}/>
                    <Route path="/consultaestoqueproduto" element={<ConsultaEstoqueProduto/>}/>
                    <Route path="/consultaestoqueendereço" element={<ConsultaEstoqueEndereço/>}/>
                    <Route path="/endereçamento" element={<Endereçamento/>}/>
                    <Route path="/separaçãodepedidos" element={<SeparaçãoDePedidos/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Router;