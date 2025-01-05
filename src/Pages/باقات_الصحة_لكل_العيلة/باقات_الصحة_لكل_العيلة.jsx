import modules from './باقات_الصحة_لكل_العيلة.module.css'
import { PackagesData } from '../../../Data/Data'


function باقات_الصحة_لكل_العيلة() {


    return (
        <section className={modules.packegesSec}>

            <div className={modules.container}>

           

            {PackagesData.map((item) => (
                <div className={modules.packege} >
                    <img src={item.img} alt="" loading="lazy" />
                    <details>
                        <summary className={modules.packegename} >{item.title}</summary>
                        {item.description.split("\n").map((line, index) => (
                            
                            <li  className={modules.packegecontent} key={index}>{line}</li>
                        ))}


                    </details>

                </div>



            ))}
             </div>

        </section>
    )

}


export default باقات_الصحة_لكل_العيلة
