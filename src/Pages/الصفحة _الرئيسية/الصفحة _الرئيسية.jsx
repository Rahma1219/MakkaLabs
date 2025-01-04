
import './الصفحة _الرئيسية.css'
import { slides } from '../../Components/data/Carouseldata.json'
import Carousel from '../../Components/Carousel/Carousel'
import labimg1 from "../../../public/Images/list.png"
import labimg2 from "../../../public/Images/family (2).png"
import labimg3 from "../../../public/Images/scientist_757054.png"
import { Link } from 'react-router-dom'

function الصفحة_الرئيسية() {
    function scrollWin() {
        window.scrollTo(0, 0);
    }
    return (
        <>
            <div className='home'>
                <div>
                    <Carousel data={slides}></Carousel>

                </div>
                
                <div className='carouselSec2'>

                    <div className='uppart'>

                        <Link to='/التحاليل' id='link2' onClick={scrollWin}>
                            <div className='labsdata'>
                                <span id='bglabimg'><img src={labimg1} alt="" className='image1' /></span>
                                <h2 className='textlimh'>التحاليل</h2>
                            </div>
                        </Link>

                        <Link to='/باقات_الصحة_لكل_العيلة' id='link2' onClick={scrollWin}>
                            <div className='labsdata'>
                                <p id='bglabimg'><img src={labimg2} alt="" className='image2' /></p>
                                <h2 className='textlimh'>باقات الصحة<br />لكل العيلة</h2>
                            </div>
                        </Link>
                        <Link to='/تدريب' id='link2' onClick={scrollWin}>
                        <div className='labsdata'>
                            <span id='bglabimg'><img src={labimg3} alt="" className='image3' /></span>
                            <h2 className='textlimh'>تدريب</h2>
                        </div>
                        </Link>

                    </div>


                   
                   
              


                </div>


            </div>






        </>

    )

}

export default الصفحة_الرئيسية