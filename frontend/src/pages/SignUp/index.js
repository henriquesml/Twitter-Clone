 
import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import * as Yup from 'yup'

import api from '../../services/api';

import logo from '../../assets/twitter.svg'

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('E-mail é obrigatório'),
  password: Yup.string()
    .required('Senha é obrigatório'),
})

export default function SignIn() {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  
  function handleSubmit(e) {
    e.preventDefault()

    setLoading(true)
    
    schema.isValid({email, password}).then(async function(valid){
      setLoading(false)
      if (valid) {
        await api.post('/sessions', {
          email,
          password
        })
      }
      toast.error('Campos Obriatórios não foram preenchidos.')
    })
  }
  return (
    <>
      <img src={logo} alt="GoBarber" />

      <form
        onSubmit={handleSubmit}
      >
        <label htmlFor="name">Nome</label>
        <input
          name="name"
          value={nome}
          onChange={e => setNome(e.target.value)}
          placeholder="Seu nome"
        />
        <label htmlFor="email">Email</label>
        <input
          name="email"
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="Seu e-mail"
        />
        <label htmlFor="email">Senha</label>
        <input
          name="password"
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder="Sua senha"
        />

        <button type='submit'>{ loading ? 'Carregando...': 'Criar'}</button>
        <Link to="/">Já possuo uma conta</Link>
      </form>
    </>
  );
}