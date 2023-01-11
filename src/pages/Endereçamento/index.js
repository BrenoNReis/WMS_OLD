import React from "react";
import "./endereçamentostyles.css"
import { BiArrowFromRight } from "react-icons/bi"
import {BsCheck2} from "react-icons/bs"
import { useNavigate } from "react-router-dom";
import Table from 'react-bootstrap/Table';

function Endereçamento() {

    const navigate = useNavigate();

    return (
        <div class="containerENDEREÇAMENTO" >
            <div class="gridENDEREÇAMENTO">

                <div class="texto2">ENDEREÇAMENTO</div>
                <br />
                <br />

                <form>

                    <div class="formENDEREÇAMENTO">

                        <label class="label-endereçamento-form">ORIGEM</label>

                        <div class="input-div">
                            <input class="input-endereçamento" placeholder="ORIGEM" />
                        </div>

                        <label class="label-endereçamento-form">PRODUTO</label>

                        <div class="input-div">
                            <input class="input-endereçamento" placeholder="PRODUTO" />
                        </div>

                    </div>

                </form>

                <form>

                    <div class="formENDEREÇAMENTO">

                        <label class="label-endereçamento-form">ISBN</label>

                        <div class="input-div">
                            <input class="input-endereçamento" placeholder="ISBN" />
                        </div>

                        <label class="label-endereçamento-form">DESTINO</label>

                        <div class="input-div">
                            <input class="input-endereçamento" placeholder="DESTINO" />
                        </div>

                    </div>

                </form>

                <form>

                    <div class="formENDEREÇAMENTO">

                        <label class="label-endereçamento-form">QTDE</label>

                        <div class="input-div">
                            <input class="input-endereçamento" placeholder="QTDE" />
                        </div>

                    </div>

                </form>

                <Table class="table-endereçamento">
                    <thead>
                        <tr>
                            <th>ENDEREÇO</th>
                            <th>QTT</th>
                            <th>TIPO</th>
                            <th>QTDECX</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>index end</td>
                            <td>index qtt</td>
                            <td>index tip</td>
                            <td>index qtdecx</td>
                        </tr>
                    </tbody>
                </Table>


                <div class="buttonENDEREÇAMENTO" onClick={() => navigate(-1)}>
                    <div class="text-conteudo-button">
                        VOLTAR
                        <br />
                        <BiArrowFromRight class="icon-vector" />
                    </div>
                </div>

                <div class="buttonENDEREÇAMENTO" onClick={() => navigate(-1)}>
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

export default Endereçamento;