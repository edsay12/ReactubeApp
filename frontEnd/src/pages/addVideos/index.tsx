import { Header } from "../../components/header";
import { useLocation } from "react-router-dom";
import './style.scss'
import { BiCloudUpload } from "react-icons/bi";
import { CgMail } from "react-icons/cg";
import { AiOutlineUser } from "react-icons/ai";


export default function AddVideo() {
    const location = useLocation()
    function handleDrag(){
        console.log('uepaa')
    }

    return (
        <>
            <Header pathname={location.pathname}></Header>
            <section className="container">
                <section className="videoAddContainer">
                    <form action="#">
                        <div className="videoAdd" onDrag={handleDrag}>
                            <label htmlFor="videoFile" >
                                <div className="text">Drag an video or browser for an image</div>
                                <div className="RedButton"> Upload <BiCloudUpload></BiCloudUpload></div>

                            </label>
                            <p>Preview video should by 3 minute or minus</p>    
                            <input id='videoFile' type={"file"} />

                        </div>
                        <div className="videoAddInputs">
                            <div className="inputGroup">
                                <fieldset>
                                    <legend>Video Title</legend>
                                    <div className="inputArea">
                                        <AiOutlineUser></AiOutlineUser>
                                        <input type="text" name="name" id="" placeholder='Name' />

                                    </div>

                                </fieldset>
                                <fieldset>
                                    <legend>Subject</legend>
                                    <div className="inputArea">
                                        <AiOutlineUser></AiOutlineUser>
                                        {/* corrigir o nome no back */}
                                        <input type="text" name="lastname" id="" placeholder='Lastname' />

                                    </div>

                                </fieldset>

                            </div>
                            <fieldset>
                                <legend>Description</legend>
                                <div className="inputArea">
                                    <textarea name="lastname" id="" />

                                </div>

                            </fieldset>

                            <button className="RedButton">Submit</button>

                            

                        </div>

                    </form>
                </section>

            </section>
        </>
    )

}