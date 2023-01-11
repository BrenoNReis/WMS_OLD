import React from "react";
import "./consultaestoqueprodutostyles.css"
import { BiArrowFromRight } from "react-icons/bi"
import { useNavigate } from "react-router-dom";
import Table from 'react-bootstrap/Table';

function ConsultaEstoqueProduto() {

    const navigate = useNavigate();

    return (
        <div class="containerCONSULTAESTOQUEPRODUTO" >
            <div class="gridCONSULTAESTOQUEPRODUTO">

                <div class="texto2">CONSULTA DE ESTOQUE POR PRODUTO</div>
                <br />
                <br />
                <div class="texto1">PRODUTO</div>
                <input class="search-text" type="text" placeholder="Buscar produto..." onChange={""} />

                <Table class="table-consultaestoqueproduto">
                    <thead>
                        <tr>
                            <th>ENDEREÇO</th>
                            <th>QTDEEX</th>
                            <th>TIPO</th>
                            <th>QTDECX</th>
                            <th>TOTAL</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>index end</td>
                            <td>index qtdeex</td>
                            <td>index tip</td>
                            <td>index qtdecx</td>
                            <td>index tot</td>
                        </tr>
                    </tbody>
                </Table>


                <div class="button" onClick={() => navigate(-1)}>
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

export default ConsultaEstoqueProduto;