import {useState} from 'react';
import './login.css';
function Login() {
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    return(
        <div className='container'>
          <div className='container-login'>
             <div className='wrap-login'> 
              <form Login-form>
                <span className='Login-form-title'> Bem vindo</span>
                <span className='login-form-title'>
                    <img src='#'alt='LogoExp'/>
                </span>
                <div className='wrap-input'>
                    <input cLassName='input' type='email'
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    />
                    <span className='focus-input' data-placeholder='Email'></span>
                </div>

                <div className='wrap-input'>
                    <input cLassName='input' type='password' 
                    value={password}
                    onChange={e => setPassword(e.target.value)}/>
                    <span className='focus-input' data-placeholder='password'></span>
                </div>
                <div className='container-login-form-btn'>
                <button className='login-form-btn'> Login</button>
                </div>
                <div cLassName='text-singup'>
                    <span className='txt1'>Não possui conta?</span>
                    <a className='txt2' href='#'> Criar conta.</a>
                </div>

              </form>
             </div>
          </div>
        </div>

    );
}
export default Login
/// usar essa pag pra o login(foi testado em outro componente.)