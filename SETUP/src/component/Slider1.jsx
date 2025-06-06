import React from "react";
import Slider from "react-slick";
function Slider1() {
  var settings = {
    autoplay: true,
    smartSpeed: 1000,
    loop: true,
    nav: false,
    dots: true,
    items: 1,
    dotsData: true,
  };
  return (
    <Slider {...settings}>
      <div>
        <div
          className="testimonial-item text-center"
          data-dot="<img class='img-fluid' src='/img/testimonial-1.jpg' alt=''/>"
        >
          <p className="fs-5">
            Clita clita tempor justo dolor ipsum amet kasd amet duo justo duo
            duo labore sed sed. Magna ut diam sit et amet stet eos sed clita
            erat magna elitr erat sit sit erat at rebum justo sea clita.
          </p>
          <h4>Client Name</h4>
          <span className="text-primary">Profession</span>
        </div>
      </div>
      <div>
        <div
          className="testimonial-item text-center"
          data-dot="<img class='img-fluid' src='/img/testimonial-2.jpg' alt=''/>"
        >
          <p className="fs-5">
            Clita clita tempor justo dolor ipsum amet kasd amet duo justo duo
            duo labore sed sed. Magna ut diam sit et amet stet eos sed clita
            erat magna elitr erat sit sit erat at rebum justo sea clita.
          </p>
          <h4>Client Name</h4>
          <span className="text-primary">Profession</span>
        </div>
      </div>
      <div>
        <div
          className="testimonial-item text-center"
          data-dot="<img class='img-fluid' src='/img/testimonial-3.jpg' alt=''/>"
        >
          <p className="fs-5">
            Clita clita tempor justo dolor ipsum amet kasd amet duo justo duo
            duo labore sed sed. Magna ut diam sit et amet stet eos sed clita
            erat magna elitr erat sit sit erat at rebum justo sea clita.
          </p>
          <h4>Client Name</h4>
          <span className="text-primary">Profession</span>
        </div>
      </div>
    </Slider>
  );
}

export default Slider1;
