import './Carousel.css'
import { GoChevronLeft, GoChevronRight } from 'react-icons/go'


import { useState } from 'react'


function Carousel({ data }) {
  const [slide, setSlide] = useState(0)
  // const [showtext, setshowText] = useState(true)

  function nextSlide() {
    setSlide(slide === data.length - 1 ? 0 : slide + 1)
  }

  function prevSlide() {
    setSlide(slide === 0 ? data.length - 1 : slide - 1)
  }

  function goToSlide(slideIndex) {
    setSlide(slideIndex)
  }



  return (
    <>
      <section>
        <div className='carousel'>
        <GoChevronLeft className='arrow  arrow-left' onClick={prevSlide} />
       
          {data.map((item, index) => (
            <div key={index}
              className={`image-slide ${index === slide ? "active" : ""}`}>
              {item.type === "image" ? (
                <img width="100%" loading="lazy" src={item.src} alt={item.alt} key={index} id='imgcarousel' className={slide === index ? "slide" : "slide slide-hidden"} />

              ) : (
                <div className='text'>

                  <video autoPlay loop src={item.src}
                    className={slide === index ? "slide" : "slide slide-hidden"}
                    type="video/mp4"
                    loading ="lazy"
                  />

                  {index === slide &&

                    <div className='containersecicon'>
                      <span className="image-text">
                          {item.text} <br /> {item.text2}
                           <div className='giflab'>
                            <img src={item.img2} alt="" id='iconlab' loading="lazy" />  <img src={item.img} alt="" id='iconlab' loading="lazy" />
                          </div>
                      </span>
                    </div>}




                </div>

              )}
            </div>


          ))}
          <div>
          <GoChevronRight className='arrow  arrow-right' onClick={nextSlide} />
         

          </div>
          
         

          <span className='indicators'>
            {data.map((_, slideIndex) => {
              return <button key={slideIndex} onClick={() => goToSlide(slideIndex)} className={slide === slideIndex ? "indicator" : "indicator indicator-inactive"}> </button>
            })}
          </span>
        </div>




      
      </section>
    </>
  )
}

export default Carousel