import React from "react";
import "./separaçãodepedidosstyles.css"
import { BiArrowFromRight } from "react-icons/bi"
import {BsCheck2} from "react-icons/bs"
import { useNavigate } from "react-router-dom";

function SeparaçãoDePedidos() {

    const navigate = useNavigate();

    return (
        <div class="containerSEPARAÇÃODEPEDIDOS" >
            <div class="gridSEPARAÇÃODEPEDIDOS">

                <div class="texto2">SEPARAÇÃO DE PEDIDOS</div>
                <br />
                <br />

                <form>

                    <div class="formSEPARAÇÃODEPEDIDOS">

                        <label class="label-separaçãodepedidos-form">PEDIDO</label>

                        <div class="input-div">
                            <input class="input-separaçãodepedidos" placeholder="ORIGEM" />
                        </div>

                        <label class="label-separaçãodepedidos-form">COMANDA</label>

                        <div class="input-div">
                            <input class="input-separaçãodepedidos" placeholder="PRODUTO" />
                        </div>

                    </div>

                </form>

                <form>

                    <div class="formSEPARAÇÃODEPEDIDOS">

                        <label class="label-separaçãodepedidos-form">QTDE</label>

                        <div class="input-div">
                            <input class="input-separaçãodepedidos" placeholder="QTDE" />
                        </div>

                    </div>

                </form>

                <div class="buttonSEPARAÇÃODEPEDIDOS" onClick={() => navigate(-1)}>
                    <div class="text-conteudo-button">
                        VOLTAR
                        <br />
                        <BiArrowFromRight class="icon-vector" />
                    </div>
                </div>

                <div class="buttonSEPARAÇÃODEPEDIDOS" onClick={() => navigate(-1)}>
                    <div class="text-conteudo-button">
                        CONFIRMAR
                        <br />
                        <BsCheck2 class="icon-vector" />
                    </div>
                </div>

            </div>
        </div >

    );
}

export default SeparaçãoDePedidos;