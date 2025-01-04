import modules from './الزيارة_المنزلية.module.css'
import homeService from '../../../public/Images/homevisit1.png'
import phone from '../../../public/Images/phone.png'
import whats from '../../../public/Images/whatsapp2.png'


function الزيارة_المنزلية() {
    return (


        <section className={modules.homeservicesec}>
            {/* <img src={bghouse} alt="" className={modules.bghouse} /> */}
            <div className={modules.container}>
                <div>
                    <h1>الزيارة المنزلية</h1>
                </div>

                <div className={modules.sechs}>
                    <div  >
                        <img src={homeService} alt="" className={modules.imghomwservice} />
                    </div>

                    <div className={modules.contnentHS} >
                        <p>  معامل مــكــة تقدم خدمة سحب العينات لكل الاعمار على ايدى متخصصين في سحب العينات
                        </p>
                        <p>لحجز  زيارة منزلية برجاء التواصل على الارقام التالية :-</p>
                        <div className={modules.num}>
                            <ul>
                                <li id={modules.num1}>01153117035  <img src={whats} alt="" /> </li>
                                <li id={modules.num2}>01094930473  <img src={phone} alt="" /> </li>
                            </ul>
                        </div>


                    </div>

                </div>
            </div>


        </section>

    )
}

export default الزيارة_المنزلية