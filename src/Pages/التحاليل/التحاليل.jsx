import './التحاليل.css'
import { Data } from '../../../Data/Data';

import { useRef, useState } from 'react'
import eyeopen from "/Images/eye.png"
import eyeclose from "/Images/eyebrow.png"
import imglab2 from "/Images/microscope.png"



function التحاليل() {



    const [expandedId, setExpandedId] = useState(null);



    // Toggle function
    const toggleExpand = (id) => {
        setExpandedId((prevId) => (prevId === id ? null : id));
        window.scrollTo(0,350)
    };


    const sectionRef = useRef(null);

    



    return (
        <section className='section2'>



            <div className='heading' >
                <img src={imglab2} alt="" />
                <span className='heading2'>معامل</span><br /> مــــــكــــــة
            </div>

            <div className="secc">
        


                <div className='collaps'>
                    <ul className='ul'>
                        {Data.map((item) => (
                            <div>
                                <li
                                    className='accordion'
                                    key={item.id}>

                                    <div className='accordiontitle'>
                                        <h4><span id='num'>{item.id + 1} . </span>{item.title}</h4>
                                        <button
                                            onClick={() => toggleExpand(item.id)}
                                            style={{
                                                backgroundColor: "transparent",
                                                border: "none",
                                                cursor: "pointer",
                                            }}
                                        >
                                            {expandedId === item.id ? <img id='eyeicon' src={eyeclose} /> : <img id='eyeicon' src={eyeopen} />}
                                        </button>

                                    </div>

                                    <div className='accordioncontent'>
                                        {expandedId === item.id && (
                                     
                                            <div className='content'>


                                                <img src={eyeclose}  alt="photo" onClick={() => setExpandedId(false)} id='eyeicon2' loading="lazy" />
                                                

                                               
                                                <h3>{item.title}</h3>
                                                {item.Details.split("\n").map((line, index) => (
                                                    <div className='containerpara'>
                                                      
                                                       <li className='p' key={index}  ref={sectionRef}> {line}</li>
                                                     
                                                           
                                                       
                                                       

                                                    </div>
                                                ))}
                                            </div>


                                        )}
                                    </div>

                                </li>
                            </div>

                        ))}
                    </ul>
                </div>

            

                
            </div>
        </section>
    )
  
}

export default التحاليل