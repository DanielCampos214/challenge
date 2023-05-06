import Logo from '../../assets/logo.svg'
import Ferrari from '../../assets/ferrarilogo.png'
import * as C from './style'
import { useState } from 'react'
import { testeOne } from '../../utils'
function Inicio() {

//  Instruções :
	// * Você tem um formulário de login INCOMPLETO
	// * Não é permitido adicionar novos elementos HTML 
	// *  Não é permitido  usar refs controlar inputs (useRef)
	// 
// Tarefas: 
	// todo - Desabilite o botão de login caso o e-mail esteja em branco OU a senha for menor que 6 digitos.
	// todo - O botão de login deve disparar a função login(), importada no topo deste arquivo, e passar os dados necessários.
	// todo - Desabilite o botão Login enquanto você está executando o login.
	// todo - Mostre uma mensagem de erro de login() caso o login fakhe. A mensagem deve ser limpa a cada nova tentativa.
	// todo - Mostre um alerta caso i login seja efetuado com sucesso (javascript alert). Investigue a função login() para entender como ter sucesso na requisição.

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [submit, setSubmit] = useState()
  const [error, setError] = useState(null)
  const [isRequesting, setIsRequesting] = useState(false)
  const handleEmail = (event) => {
    const {value} = event.target
    setEmail(value)
  }
  const handlePassword = (event) => {
    const {value} = event.target
    setPassword(value)
  }
  const handleSubmit = () => {
    setError(null)
    setIsRequesting(true)
   let values = {email: email, password: password}
   testeOne(values).then(()=>{
    alert('Logado')
   }).catch((error)=>{
    console.log(error)
    
    setError(error)
  }).finally(()=>{
    setIsRequest(false)
  })
  }

  return (
    <C.ContainerItens>
      <C.LogoImage src={Logo} />
      {error && <C.MessageError>{error.message}</C.MessageError>}
      <C.CardLogin>
        <C.FerrariImage src={Ferrari} />
        <C.Title>Login</C.Title>
        

          <label>E-mail</label>
          <C.Input type='email' value={email} onChange={handleEmail} />

          <label>Password</label>
          <C.Input type='password' value={password} onChange={handlePassword} />

          <C.Button 
          onClick={handleSubmit}
          disabled={ email === '' || password.length < 6 || isRequesting} 
          >Sign In
          </C.Button>
       

      </C.CardLogin>


    </C.ContainerItens>
  )
}
export default Inicio
