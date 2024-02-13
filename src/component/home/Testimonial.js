import React from 'react'
import pic1 from "../../assets/himanshu.jpg"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import pic2 from "../../assets/myimg.jpg"

const Testimonial = () => {
    const settings = {
      dots: false,
      infinite: true,
      speed: 800,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
  return (
    <>
    <div className="tHeading th2">
        <h2 className=''>TESTIMONIALS</h2>
      </div>
    <div className="th1">
      <div className='th3'>
        <div className=''>
        <Slider {...settings}>
      {content.map((d)=>{
            return(
              <div className='th4'>
              <div className='th5' >
              <div className='th6' >
              <img src={d.img} alt="img.jpg" />
              </div>
              <div className='th7'>
              <h2 className='th8'>{d.name}</h2>
              <p>{d.position}</p>
              </div>
              </div>
              <div className='th9'>
              <h4 className='th10'>{d.text}</h4>
              </div>
            </div>
            );
          })}
        </Slider>
        </div>
      </div>
      </div>
  </>
  )
}

const content=[ 
  {
  img : pic1,
  name : "Himanshu Jawla ",
  position:"@Software Developer Intern at ParvarishForYou",
  text : "After completing this internship successfully, I gained a lot of knowledge about best industrial practices and UI/UX. I gained knowledge in web development, one of the newest technologies available today, using ReactJs and Figma. I also gained an understanding of the fundamentals of the React JS library, a robust and user-friendly free open-source library for creating web applications. Additionally, I learned about a number of ideas, including state, hooks, conditional rendering, etc. I also have a hand on experience of AWS s3."
},
{
  img : pic2,
  name : "Aditya Verma",
  position:"@Software Developer Intern at ParvarishForYou",
  text : `Completing this internship significantly enhanced my knowledge in UI/UX and web development, especially in using advanced technologies like ReactJs and Figma. I've deepened my understanding of React JS, mastering concepts such as state management, hooks, and conditional rendering, alongside gaining practical experience with AWS S3 for cloud storage solutions.The work culture and mentorship were outstanding. The supportive environment and accessible mentors greatly contributed to my learning, providing all necessary resources and guidance.  `
}
]
export default Testimonial
