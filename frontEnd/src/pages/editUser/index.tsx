import { Header } from "../../components/header";
import { useLocation } from "react-router-dom";
import './style.scss'
import {  AiOutlineLock, AiOutlineUser } from 'react-icons/ai'
import { CgMail } from 'react-icons/cg'
import {HiOutlinePhotograph} from 'react-icons/hi'
import userimg from '../../static/imgs/userimg.png'



export default function EditUser() {
    const location = useLocation()

    return (
        <>
            <Header pathname={location.pathname}></Header>
            <section className="container">
                <section className="editUserContainer">
                    <form action="">
                        <div className="userImage">
                            <label htmlFor="userImgInput">
                                <img src={userimg} alt="" />
                            </label>
                            <input id="userImgInput" type="file" />
                        </div>
                        <div className="Userinputs">
                            <div className="formLogin">
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
                                        <legend>Description</legend>
                                        <div className="inputArea">
                                            <textarea  name="username" id=""  />

                                        </div>

                                    </fieldset>
                                    <fieldset>
                                        <legend>Password</legend>
                                        <div className="inputArea">
                                            <AiOutlineLock></AiOutlineLock>
                                            <input type="password" name="password" id="" placeholder='Password' />

                                        </div>

                                    </fieldset>

                                    <button type='submit'>Submit</button>
                                </form>
                            </div>


                        </div>
                    </form>




                </section>

            </section>
        </>
    )

}