import modules from './Footer.module.css'
import facebookicon from '../../../public/Images/facebook.png'
import youtubeicon from '../../../public/Images/youtube.png'
import whatsappicon from '../../../public/Images/social.png'
import instaicon from '../../../public/Images/instagram.png'
import imglogo from '../../../public/Images/logo-Photoroom.png'

function Footer() {
    return (
        <footer>
            <div className={modules.footer}>

              

            <img src={imglogo} alt="" id={modules.imglogo} />



                <div className={modules.secsocialicon}>

                    <ul className={modules.socialicon}>

                        <div className={modules.socialicon2}>
                            <li><a href="https://www.facebook.com/profile.php?id=61559968564925&mibextid=JRoKGi" target="_blank"><img src={facebookicon} alt="" /></a></li>
                            <li><a href="https://www.youtube.com/@Makkalabs" target="_blank"><img src={youtubeicon} alt="" /></a></li>
                            <li><a href="https://wa.me/message/FTP33BEH5BMEL1" target="_blank"><img src={whatsappicon} alt="" /></a></li>
                            <li><a href="https://www.instagram.com/makka.labs2?igsh=YzljYTk1ODg3Zg==" target="_blank"><img src={instaicon} alt="" /></a></li>

                        </div>
                      
                    </ul>


                </div>

                <hr />
                

                <p id={modules.textfooter}>معـامل مــكــــة All rights reverved@ 2024   </p>

              

            </div>
        </footer>
    )
}
export default Footer