import { Header } from "../../components/header";
import userimg from '../../static/imgs/userimg.png'
import { Link, useLocation } from "react-router-dom";
import './style.scss'
import Card from "../../components/cards";
import { FiStar } from "react-icons/fi";

export function UserPage() {
    const location = useLocation()
    console.log(location.pathname)

    return (
        <>
            <Header pathname={location.pathname}></Header>
            <section className="container">
                <div className="userContainer">
                    <div className="userImg">
                        <img src={userimg} alt="" />
                    </div>

                    <div className="userDetails">
                        <div className="userName"><h1>Edvan da silva araujo</h1></div>
                        <div className="user">edsay12</div>
                        <div className="userAbout">Sou uma pessoa legal e gosto de estudar varias materias e meu principal objetivo e me tornar um progarmador fullstack </div>

                    </div>
                    <div className="userOptions">
                        <Link to="/user/edit"><button>Edit Profile</button></Link>
                        <Link to="/videos/add"><button>Video Upload</button></Link>
                    </div>
                </div>
            </section>

            <section className="container">
                <div className="userMenu">
                    <ul>
                        {location.pathname === '/user/about'
                            ? <li ><a className="selected" href="/user/about">ABOUT</a></li>
                            : <li><Link to="/user/about">ABOUT</Link></li>
                        }
                        {location.pathname === '/user/videos'
                            ? <li ><a className="selected" href="/user/videos">MY VIDEOS</a></li>
                            : <li><Link to="/user/videos">MY VIDEOS</Link></li>
                        }
                        {location.pathname === '/user/stared'
                            ? <li ><a className="selected" href="/user/stared">STARED</a></li>
                            : <li><Link to="/user/stared">STARED</Link></li>
                        }


                    </ul>
                </div>
            </section>

            <section className="container">
                <div className="userSelectedOption">
                    <div className="cards " id='DataCard'>
                        {
                            location.pathname === '/user/videos' ?
                                <><Card
                                    Ico={FiStar}
                                    videoname={'um titulo qualquer'}
                                    videoId={'1'}
                                    assunto={'Animação'}
                                    urlvideo={'../../static/videos/videoteste.mp4'}
                                    data={'28/02/22'} />
                                    <Card
                                        Ico={FiStar}
                                        videoname={'um titulo qualquer'}
                                        videoId={'1'}
                                        assunto={'Animação'}
                                        urlvideo={'../../static/videos/videoteste.mp4'}
                                        data={'28/02/22'} />
                                    <Card
                                        Ico={FiStar}
                                        videoname={'um titulo qualquer'}
                                        videoId={'1'}
                                        assunto={'Animação'}
                                        urlvideo={'../../static/videos/videoteste.mp4'}
                                        data={'28/02/22'} />
                                    <Card
                                        Ico={FiStar}
                                        videoname={'um titulo qualquer'}
                                        videoId={'1'}
                                        assunto={'Animação'}
                                        urlvideo={'../../static/videos/videoteste.mp4'}
                                        data={'28/02/22'} />

                                </>



                                : location.pathname === '/user/about'
                                    ? <h1>About</h1>

                                    : location.pathname === '/user/stared' ? <><Card
                                        Ico={FiStar}
                                        videoname={'um titulo stared'}
                                        videoId={'1'}
                                        assunto={'Animação'}
                                        urlvideo={'../../static/videos/videoteste.mp4'}
                                        data={'28/02/22'} />
                                        <Card
                                            Ico={FiStar}
                                            videoname={'um titulo stared'}
                                            videoId={'1'}
                                            assunto={'Animação'}
                                            urlvideo={'../../static/videos/videoteste.mp4'}
                                            data={'28/02/22'} />
                                        <Card
                                            Ico={FiStar}
                                            videoname={'um titulo qualquer'}
                                            videoId={'1'}
                                            assunto={'Animação'}
                                            urlvideo={'../../static/videos/videoteste.mp4'}
                                            data={'28/02/22'} />
                                        <Card
                                            Ico={FiStar}
                                            videoname={'um titulo qualquer'}
                                            videoId={'1'}
                                            assunto={'Animação'}
                                            urlvideo={'../../static/videos/videoteste.mp4'}
                                            data={'28/02/22'} />

                                    </>

                                        : <h1>nada aqui</h1>



                        }


                    </div>
                </div>

            </section>
        </>

    )

}