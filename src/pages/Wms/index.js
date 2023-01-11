import React from "react";
import "./wmsstyles.css"
import { CgLock, CgNotes } from "react-icons/cg"
import { BsArrowLeftRight, BsArrowRepeat, BsArrowBarDown, BsClipboardCheck, BsBoxSeam } from "react-icons/bs"
import {MdOutlineInventory2} from "react-icons/md"
import {useNavigate} from "react-router-dom";

function Wms() {

    const navigate = useNavigate();

    async function consultarEstoque() {
        try {
            navigate(`/consultaEstoque`);
        } catch (error) {
            alert('Não foi possível consultar o estoque ' + error);
        }
    }

    return (
        <div class="containerWMS" >
            <div class="gridWMS">
                <div class="button" >
                    <div class="text-conteudo-button">
                        TRANSF. INDIVIDUAL
                        <br/>
                        <BsArrowLeftRight class="icon-vector"/>
                    </div>
                </div>
                <div class="button" >
                    <div class="text-conteudo-button">
                        SEPARAÇÃO DE PEDIDO
                        <br/>
                        <BsClipboardCheck class="icon-vector"/>
                    </div>
                </div>
                <div class="button" >                    
                    <div class="text-conteudo-button">
                        INVENTÁRIO
                        <br/>
                        <MdOutlineInventory2 class="icon-vector"/>
                    </div>
                </div>
                <div class="button" >                    
                    <div class="text-conteudo-button">
                        TRANSF. TOTAL
                        <br/>
                        <BsArrowRepeat class="icon-vector"/>
                    </div>
                </div>
                <div class="button" type="button" onClick={consultarEstoque} >                    
                    <div class="text-conteudo-button">
                        CONSULTA ESTOQUE
                        <br/>
                        <BsBoxSeam class="icon-vector"/>
                    </div>
                </div>
                <div class="button" >                    
                    <div class="text-conteudo-button">
                        SEPARAÇÃO DE LISTA
                        <br/>
                        <CgNotes class="icon-vector"/>
                    </div>
                </div>
                <div class="button2" >                    
                    <div class="text-conteudo-button">
                        <CgLock class="icon-vector2"/>
                    </div>
                </div>
                <div class="button" >                    
                    <div class="text-conteudo-button">
                        TRANSF. AVULSA
                        <br/>
                        <BsArrowBarDown class="icon-vector"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Wms;

//<img src={require("../../assets/CadeadoIMG.png")}
//<CgLock size="70%" color="white"/>