import React from "react";
import "./consultaestoquestyles.css"
import { MdOutlineLocationOn } from "react-icons/md"
import { BiExit } from "react-icons/bi"
import { AiOutlineShoppingCart } from "react-icons/ai"
import { RxDoubleArrowDown } from "react-icons/rx"
import {useNavigate} from "react-router-dom";

function ConsultaEstoque() {

    const navigate = useNavigate();

    async function consultarEstoqueProduto() {
        try {
            navigate(`/consultaEstoqueProduto`);
        } catch (error) {
            alert('Não foi possível consultar o estoque de produto ' + error);
        }
    }

    async function consultarEstoqueEndereço() {
        try {
            navigate(`/consultaEstoqueEndereço`);
        } catch (error) {
            alert('Não foi possível consultar o estoque de endereço ' + error);
        }
    }

    return (
        <div class="containerCONSULTAESTOQUE" >
            <div class="gridCONSULTAESTOQUE">
                
                <div class="texto2">CONSULTA DE ESTOQUE</div>
                <br />
                <br />
                <div class="texto1">SELECIONE UMA OPÇÃO</div>

                <RxDoubleArrowDown class="icon-vector3" />

                <div class="button"  type="button" onClick={consultarEstoqueProduto}  >
                    <div class="text-conteudo-button">
                        PRODUTO
                        <br />
                        <AiOutlineShoppingCart class="icon-vector" />
                    </div>
                </div>
                <div class="button" type="button" onClick={consultarEstoqueEndereço}>
                    <div class="text-conteudo-button">
                        ENDEREÇO
                        <br />
                        <MdOutlineLocationOn class="icon-vector" />
                    </div>
                </div>
                <div class="button" onClick={()=> navigate(-1)} >
                    <div class="text-conteudo-button">
                        SAIR
                        <br />
                        <BiExit class="icon-vector" />
                    </div>
                </div>

            </div>
        </div>
    );
}

export default ConsultaEstoque;