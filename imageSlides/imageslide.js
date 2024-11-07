import Images from "./data.js" ;
import { FaArrowRight, FaArrowLeft, FaCircle } from 'react-icons/fa6';
import {useState} from "react" ;
import "./image.css" ;

function SlideImages(){
    const [index,setIndex] = useState(0) ;

    const handleRight = () => {
        setIndex((prev) => (prev+1)%Images.length)
    }
    const handleLeft = () => {
        setIndex((prev) => (prev - 1 + Images.length)%Images.length)
    }

    return(
        <div>
            <div className="slides">
                <img src={Images[index]} alt="slide Images" />
                <FaArrowRight onClick={handleRight} className="fafi right"/>
                <FaArrowLeft onClick={handleLeft} className="fafi left"/>
                <div className="icons fafi">
                    {
                        Images.map((ele,ind) => {
                            return <FaCircle onClick={() => setIndex(ind)} className={`${ind == index ? "white" :""}`}  key={ind} />
                        })
                    }
                </div>
            </div>
        </div>    
    )
}

export default SlideImages ;