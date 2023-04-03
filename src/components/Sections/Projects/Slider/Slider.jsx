import React from 'react';
import './Slider.css';
import { Swiper, SwiperSlide } from "swiper/react";
import { KeyGenerator } from '../../../../Utils/KeyGenerator';
import "swiper/css";
import { Pagination, Navigation } from "swiper";

function Slider() {

  const slides = [
    {id: 0,
     url1: 'hotel', title1: 'Wildstone Infra Hotel', address1: '2715 Ash Dr. San Jose, South Dakota',
     url2: 'building', title2: 'Wish Stone Building', address2: '2972 Westheimer Rd. Santa Ana, Illinois'
    },
    {id: 1,
        url1: 'house', title1: 'Mr. Parkinston’s House', address1: '3517 W. Gray St. Utica, Pennsylvania',
        url2: 'height', title2: 'Oregano Height', address2: '2464 Royal Ln. Mesa, New Jersey'
    },
    {id: 2,
        url1: 'hotel', title1: 'Wildstone Infra Hotel', address1: '2715 Ash Dr. San Jose, South Dakota',
        url2: 'building', title2: 'Wish Stone Building', address2: '2972 Westheimer Rd. Santa Ana, Illinois'
    },
    {id: 3,
        url1: 'house', title1: 'Mr. Parkinston’s House', address1: '3517 W. Gray St. Utica, Pennsylvania',
        url2: 'height', title2: 'Oregano Height', address2: '2464 Royal Ln. Mesa, New Jersey'
    },
    {id: 4,
        url1: 'building', title1: 'Wish Stone Building', address1: '2972 Westheimer Rd. Santa Ana, Illinois',
        url2: 'house', title2: 'Mr. Parkinston’s House', address2: '3517 W. Gray St. Utica, Pennsylvania'
    },
]

  return (
      <Swiper
        slidesPerView={2}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {slides.map((slide) => (
          <SwiperSlide key={KeyGenerator()}>
            <div className="project-boxes">
                  <img src={`./Assets/Sections/Projects/${slide.url1}.svg`} alt={slide.title1}/>
                  <div className="project-info">
                      <h3>{slide.title1}</h3>
                      <p>{slide.address1}</p>
                  </div>
              </div>
              <div className="project-boxes">
                  <img src={`./Assets/Sections/Projects/${slide.url2}.svg`} alt={slide.title2}/>
                  <div className="project-info">
                      <h3>{slide.title2}</h3>
                      <p>{slide.address2}</p>
                  </div>
              </div>
          </SwiperSlide>
        ))}
      </Swiper>
  );
}

export default Slider;