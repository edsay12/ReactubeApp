import './style.scss'
import { AiOutlineGoogle } from 'react-icons/ai'
import { DiGithubBadge } from 'react-icons/di'
import { AiOutlineUser, AiOutlineLock } from 'react-icons/ai'
import { FiFacebook } from 'react-icons/fi'
import { CgMail } from 'react-icons/cg'
import { Link, useNavigate } from 'react-router-dom'
import { FormEvent, useState } from 'react'
import validator from 'validator'
import { toast } from 'react-toastify'
import Axios from '../../services/axios/index'

type LoginResponse =
    {
        data?: {
            error?: boolean,
            message?: string
            token?: string,
            userId: string
        }
    }

export default function LoginPage() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    function handleSubmit(e: FormEvent<Element>) {
        
        e.preventDefault()
        LoginValidation(email, password);
        async function LoginValidation(email: string, password: string) {
            const formErros = []
            if (!validator.isEmail(email)) {
                formErros.push('Digite um email valido')
            }
            if (password.length === 0) {
                formErros.push('Digite uma senha para continuar')
            }
            if (formErros.length > 0) {
                formErros.map((data) => {
                    return toast.error(data)
                })
            } else {
                try {
                    const LoginResponse = Axios.post('/login', { email, password })
                        .then((response: LoginResponse): LoginResponse => {
                            return response


                        })
                    let userModel = {
                        'userId': (await LoginResponse).data?.userId,
                        'token': (await LoginResponse).data?.token,
                        'isAuthenticate':true
                    }

                    localStorage.setItem('user', JSON.stringify(userModel))
                    navigate('/')
                    

                } catch {
                    toast.error('login ou senha incorretos')

                }









            }
        }

    }

    return (
        <section className='loginsection'>
            <div className="loginContainer">
                <div className="login">
                    <div className="formLogin">
                        <div className="titleWithLine">
                            <h1>Sign in to Account</h1>
                            <div className="line"></div>
                        </div>

                        <div className="socialLogin">
                            <div className="socialLoginItem google">
                                <div className="socialIcon"> <AiOutlineGoogle></AiOutlineGoogle></div>
                                <div className="socialDescription">Login with Google</div>
                            </div>
                            <div className="socialLoginItem facebook" >
                                <div className="socialIcon"><FiFacebook></FiFacebook></div>
                                <div className="socialDescription">Login with Facebook</div>

                            </div>
                        </div>

                        <p className='loginDelimiter'>Or use a E-mail account</p>

                        <form onSubmit={(e: FormEvent<Element>) => { handleSubmit(e) }}>
                            <fieldset>
                                <legend>Email</legend>
                                <div className="inputArea">
                                    <CgMail></CgMail>
                                    <input type="text" name="Email" onChange={(e) => setEmail(e.target.value)} value={email} id="" placeholder='Email' />

                                </div>

                            </fieldset>
                            <fieldset>
                                <legend>Password</legend>
                                <div className="inputArea">
                                    <AiOutlineLock></AiOutlineLock>
                                    <input type="password" name="password" id="" onChange={(e) => setPassword(e.target.value)} value={password} placeholder='Password' />

                                </div>

                            </fieldset>

                            <button type='submit'>Sign in</button>
                        </form>
                    </div>
                    <div className="newAccountLink">
                        <div className="titleWithLine">
                            <h1>Create a new account</h1>
                            <div className="line"></div>
                        </div>

                        <div className="description">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate obcaecati,</p>
                        </div>

                        <Link to={"/cadastro"}> <button className='outlineButton'>Sign Up</button> </Link>

                    </div>

                </div>



            </div>
        </section>
    )

}