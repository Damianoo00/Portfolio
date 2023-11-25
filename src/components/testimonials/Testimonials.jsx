import React from "react";
import "./testimonials.css";
import AVTR from "../../assets/prof.png";

// core version + navigation, pagination modules:
// import { Pagination } from "swiper";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    avatar: AVTR,
    name: "Tina Snow",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid aliquam rerum animi modi beatae velit voluptate repellendus nemo doloremque eligendi provident corrupti reiciendis, vitae, dolor laboriosam laborum neque? Rem, tempore?",
  },
  {
    avatar: AVTR,
    name: "Adam Smith",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid aliquam rerum animi modi beatae velit voluptate repellendus nemo doloremque eligendi provident corrupti reiciendis, vitae, dolor laboriosam laborum neque? Rem, tempore?",
  },
];

function Testimonials() {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt={name} />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}

export default Testimonials;
