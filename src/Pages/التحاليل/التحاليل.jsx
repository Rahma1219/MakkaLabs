import './التحاليل.css'
import { Data } from '../../../Data/Data';
import { useParams } from 'react-router-dom'
import { useRef, useState } from 'react'
import eyeopen from "../../../public/Images/eye.png"
import eyeclose from "../../../public/Images/eyebrow.png"
import imglab from "../../../public/Images/laboratory.png"
import imglab2 from "../../../public/Images/microscope.png"
import imglab3 from "../../../public/Images/laboratory_15394724.png"
import imglab4 from "../../../public/Images/scientist (1).png"
import imglab5 from "../../../public/Images/scientist.png"
import imglab6 from "../../../public/Images/blood-test.png"
import imglab7 from "../../../public/Images/check-list.png"
import imglab8 from "../../../public/Images/test-tube.png"
import imglab9 from "../../../public/Images/scientist.png"
import imglab10 from "../../../public/Images/lab-coat.png"
import imglab19 from "../../../public/Images/microbiology.png"
import logolab from "../../../public/Images/logo-Photoroom.png"


function التحاليل() {



    const [expandedId, setExpandedId] = useState(null);



    // Toggle function
    const toggleExpand = (id) => {
        setExpandedId((prevId) => (prevId === id ? null : id));
        window.scrollTo(0,350)
    };


    const sectionRef = useRef(null);

    // const handleScroll = () => {
    //   if (sectionRef.current) {
    //     sectionRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    //   }
    // };



    return (
        <section className='section2'>



            <div className='heading' >
                <img src={imglab2} alt="" />
                <span className='heading2'>معامل</span><br /> مــــــكــــــة
            </div>

            <div className="secc">
                {/* <div className="circle">
                 

                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>

                </div> */}


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


                                                <img src={eyeclose}  alt="" onClick={() => setExpandedId(false)} id='eyeicon2' />
                                                {/* <img src={logolab} alt="" className='logolab1' /> */}

                                               
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

                {/* <div className="circle">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div> */}

                {/* <div className='flex'>
                <ul className="acorrdionfaq">
                    {Data.map((item) => {
                        (
                            <li className="item"  key={item.id} >
                                <div className="title"  >
                                    <h1 >  {item.title} </h1>

                                    <span onClick={() => toggleExpand(item.id)} >{expandedId === item.id ? "-" : "+"}</span>

                                </div>
                                {expandedId === item.id && (
                                    <div style={{ margin: 0, lineHeight: "2" }} id='details' >
                                        {item.Details}</div>

                                )}
                                

                            </li>
                        )
                    })}
                </ul>


            </div>
 */}
            </div>
        </section>
    )
    {/* {item.Details.split("\n").map((line, index) => (
                                    
<div > {line}</div>))} */}
}

export default التحاليل