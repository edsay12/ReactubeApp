
import { ReactElement, ReactNode } from "react";
import { IconType } from "react-icons/lib";
import { useNavigate } from "react-router-dom"
import video from '../../static/videos/videoteste.mp4'
import {VscDebugBreakpointLog} from 'react-icons/vsc'

type CardItem = {
    videoname:string,
    assunto:string,
    urlvideo:string,
    data:string,
    videoId:string,
    Ico:any

}


export default function Card({ videoname, assunto, urlvideo, data, videoId,Ico }:CardItem): JSX.Element {
    const navigate = useNavigate();
    function renderVideo(e:any){
        const videoId = e.target.id
        if(!videoId) return
        console.log(videoId)
        navigate(`/videoplayer/${videoId}`)
        

    }

    return (
        <div className="video_card"  onClick={ (e)=>{renderVideo(e)}}>
            <div className="card_image">
                <video src={video} id={videoId} ></video>
            </div>

            <div className="card_ico">
                {<Ico></Ico>}
                
            </div>
            <div className="description">
                <div className="itens" >
                    <input value={videoId} className='inputHidden'></input>
                    <div className="year description_item">2022</div>
                    <div className="pointer"><VscDebugBreakpointLog></VscDebugBreakpointLog></div>
                    <div className="type description_item"><i className="fas fa-photo-video ico"></i>{assunto}</div>
                    <div className="pointer"><VscDebugBreakpointLog></VscDebugBreakpointLog></div>
                    <div className="restriction description_item"></div>
                </div>
                <div className="title">
                    <h3>{videoname}</h3>
                </div>
            </div>
        </div>
    )


}