import modules from './خدماتنا.module.css'
import imgpakege from '../../../public/Images/img7.jpg'
import img17 from '../../../public/Images/img17.jpg'
import trainigimg from '../../../public/Images/التدريب.jpg'
import { Link } from 'react-router-dom'

function خدماتنا(){

    return(
        <section className={modules.servicesec}>
            <div className={modules.container}>
            <h1 className={modules.title}>خدمـاتنـا</h1>



            <div className={modules.cardsec}>
            <Link to='/الزيارة_المنزلية' id={modules.link}>
                <div className={modules.card}>
                    <img src={img17} alt="" />
                    <h1>الزيارة المنزلية</h1>
                </div>
           </Link>

                <Link to='/باقات_الصحة_لكل_العيلة' id={modules.link}> 
                <div className={modules.card}>
                <img src={imgpakege} alt="" />
                <h1>باقات الصحة لكل العيلة</h1>
                </div>
                </Link>
                <Link to='/تدريب' id={modules.link}>
                <div className={modules.card} >
                <img src={trainigimg} alt="" />
                <h1>تدريب</h1>
                </div>
                </Link>
            </div>
            </div>
        </section>
       
    )
}

export default خدماتنا