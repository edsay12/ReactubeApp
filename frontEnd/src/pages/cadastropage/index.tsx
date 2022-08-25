import './style.scss'
import {  AiOutlineLock, AiOutlineUser } from 'react-icons/ai'
import { CgMail } from 'react-icons/cg'
import {HiOutlinePhotograph} from 'react-icons/hi'
import { Link, useNavigate } from 'react-router-dom'
import { FormEvent, useState } from 'react'
import { toast } from 'react-toastify'
import isEmail from 'validator/lib/isEmail'
import Axios from '../../services/axios'


export default function CadastroPage() {
    const [name,setName] = useState('')
    const [lastName,setLastName] = useState('')
    const [email,setEmail] = useState('')
    const [userName,setUserName] = useState('')
    const [password,setPassword] = useState('')
    const [userImg,setUserImg] = useState('')
    const navigate = useNavigate()

    async function handleSubmit(e:FormEvent<Element>) {
        e.preventDefault()
        console.log(userName)
        let formErro = false

        if(!email){
            formErro = true
            toast.error('email vazio') 
        }
        if(!name){
            formErro = true
            toast.error('Nome vazio')
        }
        if(!lastName){
            formErro = true
            toast.error('Sobrenome vazio')
        }

        if(!isEmail(email)){
            formErro = true
            toast.error('email invalido')

        }
        if(!password){
            formErro = true
            toast.error('Campo senha vazio')
        }

        if (!formErro) {
            const formData = new FormData()
            formData.append('name', name)
            formData.append('lastName', lastName)
            formData.append('email', email)
            formData.append('password', password)
            formData.append('userName', userName)
            formData.append('userImg',userImg)
            try {
                const response = await Axios.post(`/new`, formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                })
                
                
                toast.success('Cadastro realizado com sucesso')
                
                navigate('/login')

            } catch (err) {
                console.log(err)
                

            }

        }


    }

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
                        <form onSubmit={(e:FormEvent<Element>) => handleSubmit(e)}>
                            <div className="inputGroup">
                                <fieldset>
                                    <legend>Name</legend>
                                    <div className="inputArea">
                                        <AiOutlineUser></AiOutlineUser>
                                        <input type="text" name="name" onChange={(e)=> setName(e.target.value)} value={name} id="" placeholder='Name' />

                                    </div>

                                </fieldset>
                                <fieldset>
                                    <legend>Lastname</legend>
                                    <div className="inputArea">
                                        <AiOutlineUser></AiOutlineUser>
                                        {/* corrigir o nome no back */}
                                        <input type="text" name="lastname"  onChange={(e)=> setLastName(e.target.value)} value={lastName} id="" placeholder='Lastname' />  

                                    </div>

                                </fieldset>

                            </div>

                            <fieldset>
                                <legend>Email</legend>
                                <div className="inputArea">
                                    <CgMail></CgMail>
                                    <input type="text" name="email"  onChange={(e)=> setEmail(e.target.value)} value={email} id="" placeholder='Email' />

                                </div>

                            </fieldset>

                            <fieldset>
                                <legend>UserName</legend>
                                <div className="inputArea">
                                    <AiOutlineUser></AiOutlineUser>
                                    <input type="text" name=""   onChange={(e)=> setUserName(e.target.value)} value={userName}id="" placeholder='UserName' />

                                </div>

                            </fieldset>
                            <fieldset>
                                <legend>Photo</legend>
                                <div className="inputArea">
                                    <HiOutlinePhotograph></HiOutlinePhotograph>
                                    <input type="file" name="username"  onChange={(e)=> setUserImg(e.target.value)} value={userImg} id="" placeholder='Photo' />

                                </div>

                            </fieldset>
                            <fieldset>
                                <legend>Password</legend>
                                <div className="inputArea">
                                    <AiOutlineLock></AiOutlineLock>
                                    <input type="password" name="password"  onChange={(e)=> setPassword(e.target.value)} value={password} id="" placeholder='Password' />

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