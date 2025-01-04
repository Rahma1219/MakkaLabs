import modules from './باقات_الصحة_لكل_العيلة.module.css'
import { PackagesData } from '../../../Data/Data'
import { useState } from 'react';


function باقات_الصحة_لكل_العيلة() {


    // const [expandedId, setExpandedId] = useState(null);



    // // Toggle function
    // const toggleExpand = (id) => {
    //     setExpandedId((prevId) => (prevId === id ? null : id));
    // };


    return (
        <section className={modules.packegesSec}>

            <div className={modules.container}>

           

            {PackagesData.map((item) => (
                <div className={modules.packege} >
                    <img src={item.img} alt="" />
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
