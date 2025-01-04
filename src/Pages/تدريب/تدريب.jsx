import modules from './تدريب.module.css'
import courseimg from '../../../public/Images/gif1.gif'
import arrowup from '../../../public/Images/turn-up.gif'
import arrowdown2 from '../../../public/Images/arrowdown2.gif'
import linkicon from '../../../public/Images/link.png'
import whatsicon from '../../../public/Images/whatsapp2.png'
import phoneicon from '../../../public/Images/phone-receiver-silhouette.png'


import { useState } from 'react'


function تدريب() {

    const [show, setShow] = useState(false)
    const [showtwo, setShowtwo] = useState(false)

    function showcontent() {
        return (

            setShow(!show)


        )

    }


    function showcontent2() {
        return (

            setShowtwo(!showtwo)
        )

    }



    return (
        <section className={modules.courseSec}>
            <div className={modules.title}>

                <h1>كورس التحاليل الطبية <br />بمعامل مـكــة</h1>

            </div>
            <div className={modules.container}>
                <img src={courseimg} alt="" className={modules.courseimg} />

            </div>





            <div className={modules.courseContent}>
                <h1 className={modules.courseTitle}> تدريب معامل مكة للتحاليل الطبية - Makka Labs 🩸</h1>

                <ul className={modules.coursedetails}>

                    <div className={modules.divli1}>
                        <li>التدريب ليس مجرد كورس نظرى يعنى لو حابب تشتغل فى معمل او ناوى تفتح معمل خاص بيك هيكون افضل اختيار ليك إن شاء الله</li>
                        <li>بيتم التركيز على الشغل العملى بنسبة ٩٠٪ علشان تقدر تشتغل كل الانواع بايديك  وتكون مؤهل للعمل فى معامل التحاليل الطبية </li>
                        <li> التدريب عبارة عن 10-12 يوم نظرى و عملى لمدة شهر </li>
                        <li>يتم التركيز على الشغل العملى بنسبة ٩٠٪ علشان تقدر تشتغل كل الانواع بايديك وتكون مؤهل للعمل فى معامل التحاليل الطبية</li>
                    </div>



                    <div className={modules.divli2}>
                        <div  >
                            <div className={modules.flexarrow} id={modules.flewarrow1}>
                                <li >محتوى التدريب بيشمل كل فروع التحاليل الطبية التاليه :</li>
                                {show === false ?
                                    <img src={arrowdown2} alt="" id={modules.arrow} onClick={showcontent} /> : <img src={arrowup} alt="" id={modules.arrowdown} onClick={showcontent} />}
                            </div>


                            {/* Title in the small screen */}
                            <div className={modules.flexarrowsmallscreen}>
                                <li >محتوى التدريب بيشمل كل فروع التحاليل الطبية التاليه :
                                    {show === false ?
                                        <img src={arrowdown2} alt="" id={modules.arrow1} onClick={showcontent} /> : <img src={arrowup} alt="" id={modules.arrowdown1} onClick={showcontent} />}
                                </li>
                            </div>



                            {show &&
                                <div>
                                    <ol className={modules.list}>
                                        <li>Sampling</li>
                                        <li>Chemistry</li>
                                        <li>Heamatology</li>
                                        <li>Hormones</li>
                                        <li>Serology</li>
                                        <li>Virology</li>
                                        <li>Parasitology</li>
                                    </ol>
                                </div>}




                        </div>


                        <div  >

                            <div className={modules.flexarrow}>
                                <li > برنامج التدريب كالتالي :   </li>
                                {showtwo === false ?
                                    <img src={arrowdown2} alt="" id={modules.arrow} onClick={showcontent2} /> : <img src={arrowup} alt="" id={modules.arrowdown} onClick={showcontent2} />}

                            </div>

                            {showtwo && <div>
                                <ol className={modules.list}>
                                    <li> هتتعلم كيفية السحب وهتسحب بايدك لحد ما تتمكن من السحب</li>
                                    <li> طرق حفظ العينات المختلفة وال sampling  وقراءة الروشتات وكتابة التقارير وكيفية استخدام الأجهزة ومستلزمات المعمل ونوع الأنابيب والعينات وخلافه</li>
                                    <li> تحاليل وظائف الكبد</li>
                                    <li> تحاليل وظائف الكلى</li>
                                    <li> تحاليل الدهون</li>
                                    <li> تحاليل السكر</li>
                                    <li> تحاليل الفصائل والفايلات</li>
                                    <li> تحليل صورة الدم الكاملة</li>
                                    <li> تحاليل السيولة والتجلط</li>
                                    <li> تحاليل الهرمونات</li>
                                    <li> تحاليل المناعة</li>
                                    <li> تحاليل الكروت والاجسام المضادة</li>
                                    <li> تحاليل البول والبراز الكامل بالإضافة لانواع تانيه كتير</li>
                                </ol>
                            </div>}

                            <li>عدد الجروب خلال التدريب (اتنين فقط)❗ </li>

                            <div>
                                <div>
                                    <li className={modules.contactTitle} >للتواصل</li>

                                </div>


                                <div className={modules.licontact}>

                                    <li className={modules.iconlink}> - لينك جروب whatsApp الخاص بالكورس
                                        <a className={modules.iconlink} href="https://chat.whatsapp.com/DJl5IOjrQUw1CDhHXJoxa7" target='_blank'>Link <img src={linkicon} alt="" /></a>
                                    </li>

                                    <div>
                                        <li className={modules.iconlink2} >  - للحجز و معرفة باقي التفاصيل </li>
                                        <p className={modules.detailscontact}> - whatsApp   01153117035  <a target='_blank' href="https://wa.me/message/FTP33BEH5BMEL1"> <img src={whatsicon} alt="" /></a></p>
                                        <p className={modules.detailscontact2}> -  01094930473  <a target='_blank' href=""> <img src={phoneicon} alt="" /></a> </p>
                                    </div>

                                </div>


                            </div>


                        </div>

                    </div>


                </ul>
                <hr />



            </div>

        </section >
    )
}

export default تدريب