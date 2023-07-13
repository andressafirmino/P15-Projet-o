import styled from "styled-components"
import { Link, useNavigate } from "react-router-dom"
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import CONTEXT from "../../context/context";
import {ThreeDots }from "react-loader-spinner";

export default function SignInPage() {

  let [email, setEmail] = useState('');
  let [password, setPassword] = useState('')
  let [btstats, setBtstats] = useState(false)
  const {setUser} = useContext(CONTEXT);
 
  const navigate = useNavigate()

  function login(e) {
    e.preventDefault();
    setBtstats(true);

    const cadastro = axios.post(`${import.meta.env.VITE_API_URL}/sign-in`, {
      email,
      password,
    })
    cadastro.then((x) => {
      setUser(x.data.user)
      setBtstats(false)
      console.log(x.data.user)
    })

    cadastro.catch(erro => {
      alert(erro);
      setBtstats(false)
      
    });
  }

    return (
      <SingInContainer>
        <form onSubmit={login}>
          <img src="./../public/WS.png" />
          <input disabled={btstats} placeholder="E-mail" type="email" required value={email} onChange={e => setEmail(e.target.value)} />
          <input disabled={btstats} placeholder="Senha" type="password" required value={password} onChange={e => setPassword(e.target.value)} />
          {btstats?<button disabled={btstats} type="submit"><ThreeDots color="rgba(255, 255, 255, 1)" height={13} width={51}/></button> :<button disabled={btstats} type="submit">Entrar</button>}
        </form>

        <Link to={`/cadastro`}>
          Primeira vez? Cadastre-se!
        </Link>
      </SingInContainer>
    )
  }

  const SingInContainer = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #293845;
  position: relative;
  font-size: 24px;
  button {
        display:flex;
        justify-content: center;
    align-items: center;
        outline: none;
        border: none;
        border-radius: 5px;
        background-color:${btstats => btstats.btstats ? '#A68A94' : '#73384E'};
        font-size: 20px;
        font-weight: 600;
        color: #fff;
        cursor: pointer;
        width: 100%;
        padding: 12px;
    }
    h1 {
        font-weight: 700;
        font-size: 26px;
        color: white;
    }
    input {
        font-size: 20px;
        width: calc(100% - 30px);
        border-radius: 5px;
        outline: none;
        border: 1px solid #ccc;
        padding: 15px;
        margin: 1px;
        :focus {
            border: 2px solid #ffb6b6;
            margin: 0px;
        }
    }
    form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 15px;
        width: 100%;
        border-radius: 5px;
    }
    a {
        font-weight: 700;
        font-size: 15px;
        line-height: 18px;
        color: white;
        text-decoration: none;
        padding-top: 30px;
    }
`
