 
import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useDispatch, useSelector } from 'react-redux'
import * as Yup from 'yup'

import logo from '../../assets/twitter.svg'

import { signInRequest } from '../../store/modules/auth/actions'

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('E-mail é obrigatório'),
  password: Yup.string()
    .required('Senha é obrigatório'),
})

export default function SignIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()
  const loading = useSelector(state => state.auth.loading)
  
  function handleSubmit(e) {
    e.preventDefault()
    
    schema.isValid({email, password}).then(function(valid){
      if (valid) {
        dispatch(signInRequest(email, password))
      }else {
        toast.error('Campos Obriatórios não foram preenchidos.')
      }
      
    })
  }
  return (
    <>
      <img src={logo} alt="GoBarber" />
      <form
        onSubmit={handleSubmit}
      > 
        <label htmlFor="email">Email</label>
        <input
          name="email"
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="Seu e-mail"
        />
        <label htmlFor="password">Senha</label>
        <input
          name="password"
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder="Sua senha"
        />

        <button type='submit'>{ loading ? 'Carregando...': 'Entrar'}</button>
        <Link to="/register">Criar conta gratuita</Link>
      </form>
    </>
  );
}