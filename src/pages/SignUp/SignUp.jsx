import styled from "styled-components"
import { Link, useNavigate } from "react-router-dom"
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import CONTEXT from "../../context/context";
import { ThreeDots } from "react-loader-spinner";

export default function SignUpPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordCheck, setPasswordCheck] = useState('')
  const [btstats, setBtstats] = useState(false)
  const { setUser, user, checkout } = useContext(CONTEXT);

  const [address, setAddress] = useState('')
  const [nameAddress, setNameAddress] = useState('')
  const [zipCode, setZipCode] = useState('')
  const [state, setState] = useState('')
  const [city, setCity] = useState('')
  const [street, setStreet] = useState('')
  const [district, setDistrict] = useState('')
  const [othersInfo, setOthersInfo] = useState('')
  const [number, setNumber] = useState('')
  const [celNumber, setCelNumber] = useState('')

  const navigate = useNavigate()
  useEffect(() => {
    console.log(zipCode)

    let cepn = zipCode

    if (cepn != "") {
      var validacep = /^[0-9]{8}$/;

      if (validacep.test(cepn)) {
        axios.get('https://viacep.com.br/ws/' + cepn + '/json/')
          .then((res) => {
            setState(res.data.uf)
            setCity(res.data.localidade)
            setDistrict(res.data.bairro)
            setStreet(res.data.logradouro)
            console.log(res.data)
          })
          .catch((err) => {
            console.log(err.message)
          })
      }
    }
  }, [zipCode]);

  function login(e) {
    e.preventDefault();
    setBtstats(true);

    if (!nameAddress || !zipCode || !state || !city || !street || !district || !celNumber || !number) {
      setBtstats(false);
      return alert("preencha todos os campos de endereço ou deixe todos em branco")
    }

    if (password === passwordCheck) {
      const cadastro = axios.post(`${import.meta.env.VITE_API_URL}sign-up`, {
        email,
        name,
        password,
      })
      cadastro.then((x) => {
        setBtstats(false)
        console.log(x.data.insertedId)

        if (nameAddress && zipCode && state && city && street && district && celNumber && number) return sendaddress(x.data.insertedId)
        if (checkout) return signin()
        navigate("/sign-in")
      })
      cadastro.catch(erro => {
        alert(erro);
        setBtstats(false)
      });
    }
  }

  function sendaddress(id) {
    console.log(id)
    const userId = id

    const cadastro = axios.post(`${import.meta.env.VITE_API_URL}address`, {
      id: userId, nameAddress, zipCode, state, city, street, district, number, celNumber, othersInfo
    })
    cadastro.then((x) => {
      signin()
      setBtstats(false)
      navigate('/sign-in')
    })

    cadastro.catch(erro => {
      alert(erro);
      setBtstats(false)

    });

  }

  function signin(e) {
    e.preventDefault();
    setBtstats(true);

    const cadastro = axios.post(`${import.meta.env.VITE_API_URL}sign-in`, {
      email,
      password,
    })
    cadastro.then((x) => {
      setUser(x.data.user)
      setBtstats(false)
      if (checkout) navigate('/carrinho')
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
        <input disabled={btstats} placeholder="Nome" type="text" id="name" required value={name} onChange={e => setName(e.target.value)} />
        <input disabled={btstats} placeholder="E-mail" type="email" required value={email} onChange={e => setEmail(e.target.value)} />
        <input disabled={btstats} placeholder="Senha" type="password" required value={password} onChange={e => setPassword(e.target.value)} />
        <input disabled={btstats} placeholder="Confirme a senha" type="password" value={passwordCheck} onChange={e => setPasswordCheck(e.target.value)} />

        <h2>---Cadastrar endereço---</h2>
        <input disabled={btstats} placeholder="Nome destinatário" type="text" id="nameAddress" value={nameAddress} onChange={e => setNameAddress(e.target.value)} />
        <input disabled={btstats} placeholder="Celular" type="text" id="cel" value={celNumber} onChange={e => setCelNumber(e.target.value)} />

        <input disabled={btstats} placeholder="cep" type="text" id="cep" value={zipCode} onChange={e => setZipCode(e.target.value)} />
        <input disabled={btstats} placeholder="Estado" type="text" id="estado" value={state} onChange={e => setState(e.target.value)} />
        <input disabled={btstats} placeholder="Cidade" type="text" id="cidade" value={city} onChange={e => setCity(e.target.value)} />
        <input disabled={btstats} placeholder="Bairro" type="text" id="bairro" value={district} onChange={e => setDistrict(e.target.value)} />
        <input disabled={btstats} placeholder="Endereço" type="text" id="rua" value={street} onChange={e => setStreet(e.target.value)} />
        <input disabled={btstats} placeholder="Numero" type="text" id="numero" value={number} onChange={e => setNumber(e.target.value)} />
        <input disabled={btstats} placeholder="Complemento" type="text" id="complemento" value={othersInfo} onChange={e => setOthersInfo(e.target.value)} />

        {btstats ? <button disabled={btstats} type="submit"><ThreeDots color="rgba(255, 255, 255, 1)" height={13} width={51} /></button> : <button disabled={btstats} type="submit">Cadastrar</button>}
      </form>

      <Link to={`/sign-in`}>
        Já tem uma conta? Entre agora!
      </Link>
    </SingInContainer>
  )
}

const SingInContainer = styled.section`
  margin-top: 100px;
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
        width: calc(100% - 30px);
        
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
        padding: 12px;
        
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
        color: #A68A94;
        text-decoration: none;
        padding-top: 10px;
    }
    img{
        width: 204px;
        height: 180px;
    }
`
