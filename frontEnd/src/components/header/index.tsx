import { FaStar, FaThLarge, FaGamepad, FaPhotoVideo, FaSearch } from 'react-icons/fa'
import { GiGriffinShield } from 'react-icons/gi'
import { BiExit } from 'react-icons/bi'
import noUser from '../../static/imgs/no-User.png'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import './style.scss'

export function Header({ pathname }: any): JSX.Element {

    const [userImageapi, setUserImgApi] = useState('')
    return (
        <header className="container">
            <nav className="options">

                <div className="logo">
                    <Link to={'/'}>
                        <GiGriffinShield ></GiGriffinShield>

                    </Link>
                </div>



                <div className="icons">
                    {pathname === '/' ?
                        <FaThLarge className='selected'></FaThLarge>
                        : <Link to={"/"}>
                            <FaThLarge ></FaThLarge>
                        </Link>
                    }
                    {pathname === '/trending' ?
                        <FaGamepad  className='selected'></FaGamepad>
                        : 
                        <Link to={"/user"}>
                            <FaGamepad  ></FaGamepad >
                        </Link>
                    }
                    {pathname === '/user/stared' ?
                        <FaStar className='selected'></FaStar>
                        : <Link to={"/user/stared"}>
                            <FaStar  ></FaStar>
                        </Link>
                    }
                    {pathname === '/videos/add' ?
                        <FaPhotoVideo className='selected'></FaPhotoVideo>
                        : <Link to={"/videos/add"}>
                            <FaPhotoVideo ></FaPhotoVideo>
                        </Link>
                    }


                



                </div>
                <div className="user icons">
                    {pathname === '/user'
                        ?
                        <Link to={"/exit"}>
                            <BiExit></BiExit>
                        </Link>
                        :
                        <Link to={"/user/about"}>
                            <img src={userImageapi ? userImageapi : noUser} alt="" />
                        </Link>
                    }

                </div>

            </nav >

        </header >
    )
}