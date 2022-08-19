import './style.scss'
import {  AiOutlineLock, AiOutlineUser } from 'react-icons/ai'
import { CgMail } from 'react-icons/cg'
import {HiOutlinePhotograph} from 'react-icons/hi'
import { Link } from 'react-router-dom'


export default function CadastroPage() {

    return (
        <section className='loginsection'>
            <div className="loginContainer">
                <div className="login">
                    <div className="newAccountLink">
                        <div className="titleWithLine">
                            <h1>Sign in to account</h1>
                            <div className="line"></div>
                        </div>

                        <div className="description">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate obcaecati,</p>
                        </div>

                        <Link to={"/login"}><button className='outlineButton'>Sign in</button> </Link>

                    </div>
                    <div className="formLogin">
                        <div className="titleWithLine">
                            <h1>Create a new account</h1>
                            <div className="line"></div>
                        </div>
                        <form>
                            <div className="inputGroup">
                                <fieldset>
                                    <legend>Name</legend>
                                    <div className="inputArea">
                                        <AiOutlineUser></AiOutlineUser>
                                        <input type="text" name="name" id="" placeholder='Name' />

                                    </div>

                                </fieldset>
                                <fieldset>
                                    <legend>Lastname</legend>
                                    <div className="inputArea">
                                        <AiOutlineUser></AiOutlineUser>
                                        {/* corrigir o nome no back */}
                                        <input type="text" name="lastname" id="" placeholder='Lastname' />  

                                    </div>

                                </fieldset>

                            </div>

                            <fieldset>
                                <legend>Email</legend>
                                <div className="inputArea">
                                    <CgMail></CgMail>
                                    <input type="text" name="email" id="" placeholder='Email' />

                                </div>

                            </fieldset>

                            <fieldset>
                                <legend>UserName</legend>
                                <div className="inputArea">
                                    <AiOutlineUser></AiOutlineUser>
                                    <input type="text" name="" id="" placeholder='UserName' />

                                </div>

                            </fieldset>
                            <fieldset>
                                <legend>Photo</legend>
                                <div className="inputArea">
                                    <HiOutlinePhotograph></HiOutlinePhotograph>
                                    <input type="file" name="username" id="" placeholder='Photo' />

                                </div>

                            </fieldset>
                            <fieldset>
                                <legend>Password</legend>
                                <div className="inputArea">
                                    <AiOutlineLock></AiOutlineLock>
                                    <input type="password" name="password" id="" placeholder='Password' />

                                </div>

                            </fieldset>

                            <button type='submit'>Sign up</button>
                        </form>
                    </div>



                </div>



            </div>
        </section>
    )

}