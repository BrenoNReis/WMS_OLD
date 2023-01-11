import React from "react";
import "./consultaestoqueendereçostyles.css"
import { BiArrowFromRight } from "react-icons/bi"
import {useNavigate} from "react-router-dom";


function ConsultaEstoqueEndereço() {

    const navigate = useNavigate();

    return (
        <div class="containerCONSULTAESTOQUEPRODUTO" >
            <div class="gridCONSULTAESTOQUEPRODUTO">
                
                <div class="texto2">CONSULTA DE ESTOQUE POR ENDEREÇO</div>
                <br />
                <br />
                <div class="texto1">LOCAL</div>
                <input class="search-text" type="text" placeholder="Buscar endereço..."onChange={""}/>

                <div class="button3" >
                    <div class="text-conteudo-button">
                        <br />

                    </div>
                </div>
                <div class="button3" >
                    <div class="text-conteudo-button">
                        <br />
                        <br />
                        <br />
                        <br />

                    </div>
                </div>
                

                <div class="button" onClick={()=> navigate(-1)}>
                    <div class="text-conteudo-button">
                        VOLTAR
                        <br />
                        <BiArrowFromRight class="icon-vector" />
                    </div>
                </div>

            </div>
        </div>
    );
}

export default ConsultaEstoqueEndereço;