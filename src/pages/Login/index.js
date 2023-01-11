import React, { useState } from "react";
import "./loginstyles.css"
import {useNavigate} from "react-router-dom"

import api from "../../auxiliares/api"
import logoImage from "../../assets/ErisTransparente.png"

const Login = () => {
  const [filialUsuario, setFilialUsuario] = useState(2);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function login(event) {
    event.preventDefault();

    const data = {
      userName, password, filialUsuario
    }

    try {
      const response = await api.post('api/Vendedores/logarVendedor', data);

      localStorage.setItem('userName', userName);
      localStorage.setItem('filialUsuario', filialUsuario);
      //localStorage.setItem('token', response.data.token);
      //localStorage.setItem('expiration', response.data.expiration);

      navigate('/wms');
    }
    /*
    catch(error) {
        alert('O login falhou ' + error);
    }
    */
    catch (error) {
      alert('Erro no login, verifique o nome de usuario e senha e tente novamente');
    }
  }

  return (
    <div className="containerLOGIN">
      <div className="container-login">
        <div className="wrap-login">
          <form className="login-form">
            <span className="login-form-title"> Bem-vindo(a)</span>

            <span className="login-form-title">
              <img src={logoImage} alt="Jovem Programador" />
            </span>

            <div className="wrap-input">
              <select name="Filial"
                className={filialUsuario !== "" ? "has-val input" : "input"}
                type="filial"
                value={filialUsuario}
                onChange={(e) => setFilialUsuario(e.target.value)}>

                <option value="">Selecione</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>

              </select>

              <span className="focus-input" data-placeholder="Filial"></span>
            </div>

            <div className="wrap-input">
              <input
                className={userName !== "" ? "has-val input" : "input"}
                type="user"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
              <span className="focus-input" data-placeholder="Usuario"></span>
            </div>

            <div className="wrap-input">
              <input
                className={password !== "" ? "has-val input" : "input"}
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span className="focus-input" data-placeholder="Senha"></span>
            </div>

            <div className="container-login-form-btn">
              <button className="login-form-btn" onClick={login}>Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login;