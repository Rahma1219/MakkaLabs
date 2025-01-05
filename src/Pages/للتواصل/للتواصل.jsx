import './للتواصل.css'
import contactimg from '../../../public/Images/imgcontact.png'
import facebook from '../../../public/Images/face.png'
import youtube from '../../../public/Images/tube.png'
import whats from '../../../public/Images/whats.png'
import insta from '../../../public/Images/instagram (1).png'
import telephone from '../../../public/Images/customer-service.png'
import phoneicon from '../../../public/Images/phone-receiver-silhouette.png'
import mapicon from '../../../public/Images/map.png'
import gmail from '../../../public/Images/gmail.png'
import whatschanel from '../../../public/Images/whatsapp.png'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import checkicon from '../../../public/Images/check-mark.png'
import { useState } from 'react'








function للتواصل_معنا() {

    // Define the validation schema using Yup
    const validationSchema = yup.object().shape({
        name: yup.string().required('برجاء إدخال أسمك'),
        email: yup
            .string()
            .email(' البريد الإلكتروني غير صحيح')
            .required('برجاء إدخال البريد الإلكتروني'),
        phonenumber: yup
            .string()
            .min(11, 'رقم الهاتف يجب ان يتكون من 11 رقم')
            .required(' برجاء إدخال رقم الهاتف'),
    });

    // Initialize the useForm hook
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },

    } = useForm({ resolver: yupResolver(validationSchema), });



    const [isVisible, setIsVisible] = useState(false)

    function showdiv() {
        setIsVisible(true);
        setTimeout(() => {
            setIsVisible(false);
        }, 2000); // 2000ms = 2 second

    }



    const onSubmit = async (data) => {
        const formData = {
            access_key: "9cd1c526-e065-4848-aa26-e04b64e3af4e",
            name: data.name,
            email: data.email,
            phonenumber: data.phonenumber,
        };

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {

                showdiv()
                reset(); // Clear the form after successful submission
            } else {
                alert("Failed to send the message. Please try again later.");
            }
        } catch (error) {
            console.error("Error submitting the form:", error);
            alert("An error occurred while submitting the form.");
        }
    };









    return (

        <section className='contactus'>
            <div className='secimg'>

                <img src={contactimg} className='contactimg' alt="" loading="lazy" />

            </div>
            <div className='contactussec'>


                {isVisible &&
                    <div className='alertdiv'>
                        <p className='alert'>تم التسجيل</p>
                        <img src={checkicon} alt="" loading="lazy" />
                    </div>
                }
                <div >


                    <div className='container'>
                        <div className='imgtitle'><h1 className='titlecontact'>للتواصل معنا</h1>
                            <img src={telephone} alt="" className='callcentericon'  loading="lazy"/>


                        </div>
                        <div className='sec2'>
                            <div className='inputs'>
                                <form className='form' onSubmit={handleSubmit(onSubmit)} >
                                    <div className='input'>
                                        <input type="text" className="maininput"
                                            placeholder='الأسم'
                                            name="name"
                                            {...register('name')}
                                        />
                                        <p className='error'>{errors.name?.message}</p>


                                    </div>

                                    <div className='input'>
                                        <input type="number" className="maininput  " id='input1'
                                            placeholder=' رقم الهاتف'
                                            name="phonenumber"
                                            {...register('phonenumber')}
                                        />
                                    </div>
                                    <p className='error'>{errors.phonenumber?.message}</p>

                                    <div className='input'>
                                        <input type="email" className="maininput"
                                            placeholder='البريدالإلكترونى'
                                            name="email"
                                            {...register('email')}
                                        />
                                    </div>
                                    <p className='error'>{errors.email?.message}</p>

                                    <div className='submit'>
                                        <input type="submit" name="" className="maininput"
                                            value='إرسال'
                                        />
                                    </div>

                                </form>


                            </div>

                            <div className='data'>
                                <div className='secdata'>
                                    <li><a target="_blank"> <img src={phoneicon} alt="" /> <span id='number'>201094930473+</span> </a></li>
                                    <li><a href="https://maps.app.goo.gl/EEWschQktFCxrocWA" target="_blank"> <img src={mapicon} alt="" loading="lazy"/> <span id='address'>كفر الدوار - المراكبية القديمة - معمل مكة بمستوصف جمعية الهدي الإسلامي</span> </a></li>
                                    <li><a target="_blank"> <img src={gmail} alt="" /> <span id='gmail'>Makka.lab.egy@gmail.com</span></a></li>
                                    <li><a href="https://whatsapp.com/channel/0029VahtQDm8PgsOH2mk0U2D" target="_blank"><img src={whatschanel} alt="" loading="lazy"/> <span id='whatschanel'>قناة What'sApp لمعامل مكة</span></a></li>

                                </div>
                                <div className='socialmedialinks'>
                                    <a target='_blank' href="https://www.facebook.com/groups/1089050252633608/?ref=share&mibextid=KtfwRi"><img src={facebook} alt=""loading="lazy" /></a>
                                    <a target='_blank' href="https://www.instagram.com/makka.labs2?igsh=YzljYTk1ODg3Zg=="><img src={insta} alt="" loading="lazy"/></a>
                                    <a target='_blank' href="https://www.youtube.com/@Makkalabs"><img src={youtube} alt="" loading="lazy" /></a>
                                    <a target='_blank' href="https://wa.me/message/FTP33BEH5BMEL1"><img src={whats} alt="" loading="lazy"/></a>
                                </div>





                            </div>
                        </div>
                        <iframe   src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3414.968522671232!2d30.11588889999999!3d31.138388899999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzHCsDA4JzE4LjIiTiAzMMKwMDYnNTcuMiJF!5e0!3m2!1sen!2seg!4v1735936636560!5m2!1sen!2seg"
                            width="100%"
                            style={{ border: "0" }}
                            allowfullscreen=""
                            loading="lazy"
                            z-index="4444"
                            referrerpolicy="no-referrer-when-downgrade"
                            className='map'
                        >

                        </iframe>


                    </div>



                </div>


            </div>




        </section>
    )

}

export default للتواصل_معنا