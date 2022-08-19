import './style.scss'
import { AiOutlineGoogle } from 'react-icons/ai'
import { DiGithubBadge } from 'react-icons/di'
import { AiOutlineUser, AiOutlineLock } from 'react-icons/ai'
import {FiFacebook} from 'react-icons/fi'
import {CgMail} from 'react-icons/cg'
import { Link } from 'react-router-dom'

export default function LoginPage() {

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

                        <form>
                            <fieldset>
                                <legend>Email</legend>
                                <div className="inputArea">
                                    <CgMail></CgMail>
                                    <input type="text" name="" id="" placeholder='Email' />

                                </div>

                            </fieldset>
                            <fieldset>
                                <legend>Password</legend>
                                <div className="inputArea">
                                    <AiOutlineLock></AiOutlineLock>
                                    <input type="password" name="" id="" placeholder='Password' />

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