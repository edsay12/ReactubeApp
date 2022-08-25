/* eslint-disable jsx-a11y/alt-text */
import { useContext, useState } from 'react';

import './style.scss'
import Img1 from '../../static/imgs/call-of-duty-modern-warfare-warzone-.jpg';
import Img2 from '../../static/imgs/valorant-capa.jpg'
import Img3 from '../../static/imgs/Rainbow-Six.jpg'
import OwlCarousel from 'react-owl-carousel';
import '../../static/owen/owl.carousel.css'
import '../../static/owen/owl.theme.default.min.css'
import Card from '../../components/cards'

import { FiStar } from 'react-icons/fi'
import { FaSearch } from 'react-icons/fa'
import { Header } from '../../components/header';
import { useLocation } from 'react-router-dom';
import AuthContext from '../../provider/auth';




export default function Corpo() {
    const [UserImg, setUserImg] = useState('')
    const [AllVideos, setAllVideos] = useState([1, 2, 3, 4])
    const [isLoading, setLoading] = useState(true)
    const [busca, setBusca] = useState([1, 2, 3])
    const location = useLocation()
    const {user,setUser}:any = useContext(AuthContext)
    console.log(location.pathname)
    
    // opções do own carroucel
    const options = {
        loop: true,
        margin: 150,
        nav: true,
        responsive: {
            0: {
                items: 1,
            },
            400: {
                items: 1,
            },
            600: {
                items: 1,
            },
            700: {
                items: 2,
            },
            1000: {
                items: 3,

            }
        }
    }





    return (
        <>
        <Header pathname={location.pathname}/>

            <div className="seacher_bar container">
                <FaSearch></FaSearch>
                <input type="text" placeholder="Search for movies of TV series" />
            </div>
            <main>

                <section className="videos container">
                    <div className="title">
                        <h1>Trending</h1>
                    </div>
                    <div className="carouseu_filmes">
                        <OwlCarousel className='owl-carousel owl-theme ' {...options}  >
                            <div className="item">
                                <div className="trending_card">
                                    <div className="card_image">
                                        <img src={Img1} alt="" />
                                    </div>
                                    <div className="card_ico">
                                        <FiStar></FiStar>
                                    </div>
                                    <div className="description">
                                        <div className="itens">
                                            <div className="year description_item">2021</div>
                                            <div className="pointer"><i className="fas fa-futbol"></i></div>
                                            <div className="type description_item"><i className="fas fa-photo-video ico"></i>Movie</div>
                                            <div className="pointer"><i className="fas fa-futbol"></i></div>
                                            <div className="restriction description_item">PG</div>
                                        </div>
                                        <div className="title">
                                            <h3>Beyond Earth</h3>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="item">
                                <div className="trending_card">
                                    <div className="card_image">
                                        <img src={Img2} alt="" />
                                    </div>
                                    <div className="card_ico">
                                        <FiStar></FiStar>
                                    </div>
                                    <div className="description">
                                        <div className="itens">
                                            <div className="year description_item">2021</div>
                                            <div className="pointer"><i className="fas fa-futbol"></i></div>
                                            <div className="type description_item"><i className="fas fa-photo-video ico"></i>Movie</div>
                                            <div className="pointer"><i className="fas fa-futbol"></i></div>
                                            <div className="restriction description_item">PG</div>
                                        </div>
                                        <div className="title">
                                            <h3>Beyond Earth</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="trending_card">
                                    <div className="card_image">
                                        <img src={Img3} alt="" />
                                    </div>
                                    <div className="card_ico">
                                        <FiStar></FiStar>
                                    </div>
                                    <div className="description">
                                        <div className="itens">
                                            <div className="year description_item">2021</div>
                                            <div className="pointer"><i className="fas fa-futbol"></i></div>
                                            <div className="type description_item"><i className="fas fa-photo-video ico"></i>Movie</div>
                                            <div className="pointer"><i className="fas fa-futbol"></i></div>
                                            <div className="restriction description_item">PG</div>
                                        </div>
                                        <div className="title">
                                            <h3>Beyond Earth</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="trending_card">
                                    <div className="card_image">
                                        <img src={Img2} alt="" />
                                    </div>
                                    <div className="card_ico">
                                        <FiStar></FiStar>
                                    </div>
                                    <div className="description">
                                        <div className="itens">
                                            <div className="year description_item">2021</div>
                                            <div className="pointer"><i className="fas fa-futbol"></i></div>
                                            <div className="type description_item"><i className="fas fa-photo-video ico"></i>Movie</div>
                                            <div className="pointer"><i className="fas fa-futbol"></i></div>
                                            <div className="restriction description_item"></div>
                                        </div>
                                        <div className="title">
                                            <h3>Beyond Earth</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="item">
                                <div className="trending_card">
                                    <div className="card_image">
                                        <img src={Img3} alt="" />
                                    </div>
                                    <div className="card_ico">
                                        <FiStar></FiStar>
                                    </div>
                                    <div className="description">
                                        <div className="itens">
                                            <div className="year description_item">2021</div>
                                            <div className="pointer"><i className="fas fa-futbol"></i></div>
                                            <div className="type description_item"><i className="fas fa-photo-video ico"></i>Movie</div>
                                            <div className="pointer"><i className="fas fa-futbol"></i></div>
                                            <div className="restriction description_item"></div>
                                        </div>
                                        <div className="title">
                                            <h3>Beyond Earth</h3>
                                        </div>
                                    </div>

                                </div>


                            </div>
                        </OwlCarousel>


                    </div>




                </section>
                <section className="container">
                    <div className="title2">
                        <h1>Recommended for you </h1>
                    </div>

                    <div className="cards " id='DataCard'>

                        {AllVideos.map((video) => {
                            return <Card
                                Ico={FiStar}
                                videoname={'um titulo qualquer'}
                                videoId={'1'}
                                assunto={'Animação'}
                                urlvideo={'../../static/videos/videoteste.mp4'}
                                data={'28/02/22'} />


                        })}

                    </div>
                </section>

            </main>

        </>
    )
}