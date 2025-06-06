import React from 'react'
import Slider1 from '../component/Slider1'
import OwlCarousel from 'react-owl-carousel'
import CountUp from 'react-countup'

function Home() {
   const setting = {
      autoplay: true,
      smartSpeed: 1500,
      items: 1,
      dots: true,
      loop: true,
      nav: true,
      navText: [
         '<i class="bi bi-chevron-left"></i>',
         '<i class="bi bi-chevron-right"></i>'
      ]
   };
   const options = {
      autoplay: true,
      smartSpeed: 1000,
      center: true,
      margin: 24,
      dots: false,
      loop: true,
      nav : false,
      responsive: {
          0:{
              items:1
          },
          768:{
              items:3
          },
          992:{
              items:3
          }
      }
   };

   return (
      <>
         {/* Carousel Start */}
         <div className="container-fluid p-0 pb-5">
            <OwlCarousel className="owl-theme owl-carousel header-carousel position-relative" {...setting}>
               <div className="owl-carousel-item position-relative">
                  <img className="img-fluid" src="/img/carousel-1.jpg" alt="" />
                  <div className="carousel-inner">
                     <div className="container">
                        <div className="row justify-content-center">
                           <div className="col-12 col-lg-8 text-center">
                              <h1 className="display-3 text-white animated slideInDown mb-4">Best CCTV &amp; Security Solution For You</h1>
                              <p className="fs-5 text-white mb-4 pb-2">Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea elitr.</p>
                              <a href className="btn btn-primary rounded-pill py-md-3 px-md-5 me-3 animated slideInLeft">Read More</a>
                              <a href className="btn btn-light rounded-pill py-md-3 px-md-5 animated slideInRight">Free Quote</a>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="owl-carousel-item position-relative">
                  <img className="img-fluid" src="/img/carousel-2.jpg" alt="" />
                  <div className="carousel-inner">
                     <div className="container">
                        <div className="row justify-content-center">
                           <div className="col-12 col-lg-8 text-center">
                              <h1 className="display-3 text-white animated slideInDown mb-4">Smart Security Solution For All Business</h1>
                              <p className="fs-5 text-white mb-4 pb-2">Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea elitr.</p>
                              <a href className="btn btn-primary rounded-pill py-md-3 px-md-5 me-3 animated slideInLeft">Read More</a>
                              <a href className="btn btn-light rounded-pill py-md-3 px-md-5 animated slideInRight">Free Quote</a>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="owl-carousel-item position-relative">
                  <img className="img-fluid" src="/img/carousel-3.jpg" alt="" />
                  <div className="carousel-inner">
                     <div className="container">
                        <div className="row justify-content-center">
                           <div className="col-12 col-lg-8 text-center">
                              <h1 className="display-3 text-white animated slideInDown mb-4">Innovative Solution For Security System</h1>
                              <p className="fs-5 fw-medium text-white mb-4 pb-2">Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea elitr.</p>
                              <a href className="btn btn-primary rounded-pill py-md-3 px-md-5 me-3 animated slideInLeft">Read More</a>
                              <a href className="btn btn-light rounded-pill py-md-3 px-md-5 animated slideInRight">Free Quote</a>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </OwlCarousel>
         </div>
         {/* Carousel End */}
         {/* Facts Start */}
         <div className="container-xxl py-5">
            <div className="container">
               <div className="row g-4">
                  <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay="0.1s">
                     <div className="h-100 bg-dark p-4 p-xl-5">
                        <div className="d-flex align-items-center justify-content-between mb-4">
                           <div className="btn-square rounded-circle" style={{ width: '64px', height: '64px', background: '#000000' }}>
                              <img className="img-fluid" src="/img/icon/icon-3.png" alt="Icon" />
                           </div>
                           <h1 className="display-1 mb-0" style={{ color: '#000000' }}>01</h1>
                        </div>
                        <h5 className="text-white">Home Security</h5>
                        <hr className="w-25" />
                        <span>Vero elitr justo clita lorem ipsum dolor at sed stet sit diam rebum ipsum et diam justo clita et</span>
                     </div>
                  </div>
                  <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay="0.3s">
                     <div className="h-100 bg-dark p-4 p-xl-5">
                        <div className="d-flex align-items-center justify-content-between mb-4">
                           <div className="btn-square rounded-circle" style={{ width: '64px', height: '64px', background: '#000000' }}>
                              <img className="img-fluid" src="/img/icon/icon-4.png" alt="Icon" />
                           </div>
                           <h1 className="display-1 mb-0" style={{ color: '#000000' }}>02</h1>
                        </div>
                        <h5 className="text-white">Access Control</h5>
                        <hr className="w-25" />
                        <span>Vero elitr justo clita lorem ipsum dolor at sed stet sit diam rebum ipsum et diam justo clita et</span>
                     </div>
                  </div>
                  <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay="0.5s">
                     <div className="h-100 bg-dark p-4 p-xl-5">
                        <div className="d-flex align-items-center justify-content-between mb-4">
                           <div className="btn-square rounded-circle" style={{ width: '64px', height: '64px', background: '#000000' }}>
                              <img className="img-fluid" src="/img/icon/icon-2.png" alt="Icon" />
                           </div>
                           <h1 className="display-1 mb-0" style={{ color: '#000000' }}>03</h1>
                        </div>
                        <h5 className="text-white">24/7 Support</h5>
                        <hr className="w-25" />
                        <span>Vero elitr justo clita lorem ipsum dolor at sed stet sit diam rebum ipsum et diam justo clita et</span>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         {/* Facts Start */}
         {/* About Start */}
         <div className="container-fluid bg-light overflow-hidden my-5 px-lg-0">
            <div className="container about px-lg-0">
               <div className="row g-0 mx-lg-0">
                  <div className="col-lg-6 ps-lg-0" style={{ minHeight: '400px' }}>
                     <div className="position-relative h-100">
                        <img className="position-absolute img-fluid w-100 h-100" src="/img/about.jpg" style={{ objectFit: 'cover' }} alt="" />
                     </div>
                  </div>
                  <div className="col-lg-6 about-text py-5 wow fadeIn" data-wow-delay="0.5s">
                     <div className="p-lg-5 pe-lg-0">
                        <div className="bg-primary mb-3" style={{ width: '60px', height: '2px' }} />
                        <h1 className="display-5 mb-4">About Us</h1>
                        <p className="mb-4 pb-2">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo erat amet</p>
                        <div className="row g-4 mb-4 pb-3">
                           <div className="col-sm-6 wow fadeIn" data-wow-delay="0.1s">
                              <div className="d-flex align-items-center">
                                 <div className="btn-square bg-white rounded-circle" style={{ width: '64px', height: '64px' }}>
                                    <img className="img-fluid" src="/img/icon/icon-1.png" alt="Icon" />
                                 </div>
                                 <div className="ms-4">
                                    <h2 className="mb-1"><CountUp end={1234} enableScrollSpy /></h2>
                                    <p className="fw-medium text-primary mb-0">Happy Clients</p>
                                 </div>
                              </div>
                           </div>
                           <div className="col-sm-6 wow fadeIn" data-wow-delay="0.3s">
                              <div className="d-flex align-items-center">
                                 <div className="btn-square bg-white rounded-circle" style={{ width: '64px', height: '64px' }}>
                                    <img className="img-fluid" src="/img/icon/icon-5.png" alt="Icon" />
                                 </div>
                                 <div className="ms-4">
                                    <h2 className="mb-1"><CountUp end={1234} enableScrollSpy /></h2>
                                    <p className="fw-medium text-primary mb-0">Projects Done</p>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <a href className="btn btn-primary rounded-pill py-3 px-5">Explore More</a>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         {/* About End */}
         {/* Service Start */}
         <div className="container-xxl py-5">
            <div className="container">
               <div className="text-center">
                  <div className="bg-primary mb-3 mx-auto" style={{ width: '60px', height: '2px' }} />
                  <h1 className="display-5 mb-5">Our Services</h1>
               </div>
               <div className="row g-0 service-row">
                  <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.1s">
                     <div className="service-item border h-100 p-5">
                        <div className="btn-square bg-light rounded-circle mb-4" style={{ width: '64px', height: '64px' }}>
                           <img className="img-fluid" src="/img/icon/icon-6.png" alt="Icon" />
                        </div>
                        <h4 className="mb-3">Commercial CCTV System</h4>
                        <p className="mb-4">Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem</p>
                        <a className="btn" href><i className="fa fa-arrow-right text-white me-3" />Read More</a>
                     </div>
                  </div>
                  <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.3s">
                     <div className="service-item border h-100 p-5">
                        <div className="btn-square bg-light rounded-circle mb-4" style={{ width: '64px', height: '64px' }}>
                           <img className="img-fluid" src="/img/icon/icon-8.png" alt="Icon" />
                        </div>
                        <h4 className="mb-3">Finger Print Access</h4>
                        <p className="mb-4">Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem</p>
                        <a className="btn" href><i className="fa fa-arrow-right text-white me-3" />Read More</a>
                     </div>
                  </div>
                  <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.5s">
                     <div className="service-item border h-100 p-5">
                        <div className="btn-square bg-light rounded-circle mb-4" style={{ width: '64px', height: '64px' }}>
                           <img className="img-fluid" src="/img/icon/icon-9.png" alt="Icon" />
                        </div>
                        <h4 className="mb-3">Fire Detection And Safety</h4>
                        <p className="mb-4">Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem</p>
                        <a className="btn" href><i className="fa fa-arrow-right text-white me-3" />Read More</a>
                     </div>
                  </div>
                  <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.7s">
                     <div className="service-item border h-100 p-5">
                        <div className="btn-square bg-light rounded-circle mb-4" style={{ width: '64px', height: '64px' }}>
                           <img className="img-fluid" src="/img/icon/icon-3.png" alt="Icon" />
                        </div>
                        <h4 className="mb-3">Smart Home Security</h4>
                        <p className="mb-4">Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem</p>
                        <a className="btn" href><i className="fa fa-arrow-right text-white me-3" />Read More</a>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         {/* Service End */}
         {/* Feature Start */}
         <div className="container-fluid bg-light overflow-hidden my-5 px-lg-0">
            <div className="container feature px-lg-0">
               <div className="row g-0 mx-lg-0">
                  <div className="col-lg-6 feature-text py-5 wow fadeIn" data-wow-delay="0.5s">
                     <div className="p-lg-5 ps-lg-0">
                        <div className="bg-primary mb-3" style={{ width: '60px', height: '2px' }} />
                        <h1 className="display-5 mb-5">Why Choose Us</h1>
                        <p className="mb-4 pb-2">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo erat amet</p>
                        <div className="row g-4">
                           <div className="col-6">
                              <div className="d-flex align-items-center">
                                 <div className="btn-square bg-white rounded-circle" style={{ width: '64px', height: '64px' }}>
                                    <img className="img-fluid" src="/img/icon/icon-7.png" alt="Icon" />
                                 </div>
                                 <div className="ms-4">
                                    <p className="text-primary mb-2">Trusted</p>
                                    <h5 className="mb-0">Security</h5>
                                 </div>
                              </div>
                           </div>
                           <div className="col-6">
                              <div className="d-flex align-items-center">
                                 <div className="btn-square bg-white rounded-circle" style={{ width: '64px', height: '64px' }}>
                                    <img className="img-fluid" src="/img/icon/icon-10.png" alt="Icon" />
                                 </div>
                                 <div className="ms-4">
                                    <p className="text-primary mb-2">Quality</p>
                                    <h5 className="mb-0">Services</h5>
                                 </div>
                              </div>
                           </div>
                           <div className="col-6">
                              <div className="d-flex align-items-center">
                                 <div className="btn-square bg-white rounded-circle" style={{ width: '64px', height: '64px' }}>
                                    <img className="img-fluid" src="/img/icon/icon-3.png" alt="Icon" />
                                 </div>
                                 <div className="ms-4">
                                    <p className="text-primary mb-2">Smart</p>
                                    <h5 className="mb-0">Systems</h5>
                                 </div>
                              </div>
                           </div>
                           <div className="col-6">
                              <div className="d-flex align-items-center">
                                 <div className="btn-square bg-white rounded-circle" style={{ width: '64px', height: '64px' }}>
                                    <img className="img-fluid" src="/img/icon/icon-2.png" alt="Icon" />
                                 </div>
                                 <div className="ms-4">
                                    <p className="text-primary mb-2">24/7 Hours</p>
                                    <h5 className="mb-0">Support</h5>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-lg-6 pe-lg-0" style={{ minHeight: '400px' }}>
                     <div className="position-relative h-100">
                        <img className="position-absolute img-fluid w-100 h-100" src="/img/feature.jpg" style={{ objectFit: 'cover' }} alt="" />
                     </div>
                  </div>
               </div>
            </div>
         </div>
         {/* Feature End */}
         {/* Projects Start */}
         <div className="container-xxl py-5">
            <div className="container">
               <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                  <div className="bg-primary mb-3 mx-auto" style={{ width: '60px', height: '2px' }} />
                  <h1 className="display-5 mb-5">Our Projects</h1>
               </div>
               <div className="row mt-n2 wow fadeInUp" data-wow-delay="0.3s">
                  <div className="col-12 text-center">
                     <ul className="list-inline mb-5" id="portfolio-flters">
                        <li className="mx-2 active" data-filter="*">All</li>
                        <li className="mx-2" data-filter=".first">Complete Projects</li>
                        <li className="mx-2" data-filter=".second">Ongoing Projects</li>
                     </ul>
                  </div>
               </div>
               <div className="row g-4 portfolio-container">
                  <div className="col-lg-4 col-md-6 portfolio-item first wow fadeInUp" data-wow-delay="0.1s">
                     <div className="portfolio-inner">
                        <img className="img-fluid w-100" src="/img/portfolio-1.jpg" alt="" />
                        <div className="text-center p-4">
                           <p className="text-primary mb-2">Business Security</p>
                           <h5 className="lh-base mb-0">Smart CCTV Security Systems That Fits Your Business</h5>
                        </div>
                        <div className="portfolio-text text-center bg-white p-4">
                           <p className="text-primary mb-2">Business Security</p>
                           <h5 className="lh-base mb-3">Smart CCTV Security Systems That Fits Your Business</h5>
                           <div className="d-flex justify-content-center">
                              <a className="btn btn-square btn-primary rounded-circle mx-1" href="/img/portfolio-1.jpg" data-lightbox="portfolio"><i className="fa fa-eye" /></a>
                              <a className="btn btn-square btn-primary rounded-circle mx-1" href><i className="fa fa-link" /></a>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-lg-4 col-md-6 portfolio-item second wow fadeInUp" data-wow-delay="0.3s">
                     <div className="portfolio-inner">
                        <img className="img-fluid w-100" src="/img/portfolio-2.jpg" alt="" />
                        <div className="text-center p-4">
                           <p className="text-primary mb-2">Fire Detection</p>
                           <h5 className="lh-base mb-0">Smart CCTV Security Systems That Fits Your Business</h5>
                        </div>
                        <div className="portfolio-text text-center bg-white p-4">
                           <p className="text-primary mb-2">Fire Detection</p>
                           <h5 className="lh-base mb-3">Smart CCTV Security Systems That Fits Your Business</h5>
                           <div className="d-flex justify-content-center">
                              <a className="btn btn-square btn-primary rounded-circle mx-1" href="/img/portfolio-2.jpg" data-lightbox="portfolio"><i className="fa fa-eye" /></a>
                              <a className="btn btn-square btn-primary rounded-circle mx-1" href><i className="fa fa-link" /></a>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-lg-4 col-md-6 portfolio-item first wow fadeInUp" data-wow-delay="0.5s">
                     <div className="portfolio-inner">
                        <img className="img-fluid w-100" src="/img/portfolio-3.jpg" alt="" />
                        <div className="text-center p-4">
                           <p className="text-primary mb-2">Access Control</p>
                           <h5 className="lh-base mb-0">Smart CCTV Security Systems That Fits Your Business</h5>
                        </div>
                        <div className="portfolio-text text-center bg-white p-4">
                           <p className="text-primary mb-2">Access Control</p>
                           <h5 className="lh-base mb-3">Smart CCTV Security Systems That Fits Your Business</h5>
                           <div className="d-flex justify-content-center">
                              <a className="btn btn-square btn-primary rounded-circle mx-1" href="/img/portfolio-3.jpg" data-lightbox="portfolio"><i className="fa fa-eye" /></a>
                              <a className="btn btn-square btn-primary rounded-circle mx-1" href><i className="fa fa-link" /></a>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-lg-4 col-md-6 portfolio-item second wow fadeInUp" data-wow-delay="0.1s">
                     <div className="portfolio-inner">
                        <img className="img-fluid w-100" src="/img/portfolio-4.jpg" alt="" />
                        <div className="text-center p-4">
                           <p className="text-primary mb-2">Alarm Systems</p>
                           <h5 className="lh-base mb-0">Smart CCTV Security Systems That Fits Your Business</h5>
                        </div>
                        <div className="portfolio-text text-center bg-white p-4">
                           <p className="text-primary mb-2">Alarm Systems</p>
                           <h5 className="lh-base mb-3">Smart CCTV Security Systems That Fits Your Business</h5>
                           <div className="d-flex justify-content-center">
                              <a className="btn btn-square btn-primary rounded-circle mx-1" href="/img/portfolio-4.jpg" data-lightbox="portfolio"><i className="fa fa-eye" /></a>
                              <a className="btn btn-square btn-primary rounded-circle mx-1" href><i className="fa fa-link" /></a>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-lg-4 col-md-6 portfolio-item first wow fadeInUp" data-wow-delay="0.3s">
                     <div className="portfolio-inner">
                        <img className="img-fluid w-100" src="/img/portfolio-5.jpg" alt="" />
                        <div className="text-center p-4">
                           <p className="text-primary mb-2">CCTV &amp; Video</p>
                           <h5 className="lh-base mb-0">Smart CCTV Security Systems That Fits Your Business</h5>
                        </div>
                        <div className="portfolio-text text-center bg-white p-4">
                           <p className="text-primary mb-2">CCTV &amp; Video</p>
                           <h5 className="lh-base mb-3">Smart CCTV Security Systems That Fits Your Business</h5>
                           <div className="d-flex justify-content-center">
                              <a className="btn btn-square btn-primary rounded-circle mx-1" href="/img/portfolio-5.jpg" data-lightbox="portfolio"><i className="fa fa-eye" /></a>
                              <a className="btn btn-square btn-primary rounded-circle mx-1" href><i className="fa fa-link" /></a>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-lg-4 col-md-6 portfolio-item second wow fadeInUp" data-wow-delay="0.5s">
                     <div className="portfolio-inner">
                        <img className="img-fluid w-100" src="/img/portfolio-6.jpg" alt="" />
                        <div className="text-center p-4">
                           <p className="text-primary mb-2">Smart Home</p>
                           <h5 className="lh-base mb-0">Smart CCTV Security Systems That Fits Your Business</h5>
                        </div>
                        <div className="portfolio-text text-center bg-white p-4">
                           <p className="text-primary mb-2">Smart Home</p>
                           <h5 className="lh-base mb-3">Smart CCTV Security Systems That Fits Your Business</h5>
                           <div className="d-flex justify-content-center">
                              <a className="btn btn-square btn-primary rounded-circle mx-1" href="/img/portfolio-6.jpg" data-lightbox="portfolio"><i className="fa fa-eye" /></a>
                              <a className="btn btn-square btn-primary rounded-circle mx-1" href><i className="fa fa-link" /></a>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         {/* Projects End */}
         {/* Quote Start */}
         <div className="container-fluid bg-light overflow-hidden my-5 px-lg-0">
            <div className="container quote px-lg-0">
               <div className="row g-0 mx-lg-0">
                  <div className="col-lg-6 ps-lg-0" style={{ minHeight: '400px' }}>
                     <div className="position-relative h-100">
                        <img className="position-absolute img-fluid w-100 h-100" src="/img/quote.jpg" style={{ objectFit: 'cover' }} alt="" />
                     </div>
                  </div>
                  <div className="col-lg-6 quote-text py-5 wow fadeIn" data-wow-delay="0.5s">
                     <div className="p-lg-5 pe-lg-0">
                        <div className="bg-primary mb-3" style={{ width: '60px', height: '2px' }} />
                        <h1 className="display-5 mb-5">Free Quote</h1>
                        <p className="mb-4 pb-2">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo erat amet</p>
                        <form>
                           <div className="row g-3">
                              <div className="col-12 col-sm-6">
                                 <input type="text" className="form-control border-0" placeholder="Your Name" style={{ height: '55px' }} />
                              </div>
                              <div className="col-12 col-sm-6">
                                 <input type="email" className="form-control border-0" placeholder="Your Email" style={{ height: '55px' }} />
                              </div>
                              <div className="col-12 col-sm-6">
                                 <input type="text" className="form-control border-0" placeholder="Your Mobile" style={{ height: '55px' }} />
                              </div>
                              <div className="col-12 col-sm-6">
                                 <select className="form-select border-0" style={{ height: '55px' }}>
                                    <option selected>Select A Service</option>
                                    <option value={1}>Service 1</option>
                                    <option value={2}>Service 2</option>
                                    <option value={3}>Service 3</option>
                                 </select>
                              </div>
                              <div className="col-12">
                                 <textarea className="form-control border-0" placeholder="Special Note" defaultValue={""} />
                              </div>
                              <div className="col-12">
                                 <button className="btn btn-primary w-100 py-3" type="submit">Get A Free Quote</button>
                              </div>
                           </div>
                        </form>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         {/* Quote End */}
         {/* Team Start */}
         <div className="container-xxl py-5">
            <div className="container">
               <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                  <div className="bg-primary mb-3 mx-auto" style={{ width: '60px', height: '2px' }} />
                  <h1 className="display-5 mb-5">Team Members</h1>
               </div>
               <div className="row g-4">
                  <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                     <div className="team-item">
                        <div className="overflow-hidden position-relative">
                           <img className="img-fluid" src="/img/team-1.jpg" alt="" />
                           <div className="team-social">
                              <a className="btn btn-square btn-dark rounded-circle m-1" href><i className="fab fa-facebook-f" /></a>
                              <a className="btn btn-square btn-dark rounded-circle m-1" href><i className="fab fa-twitter" /></a>
                              <a className="btn btn-square btn-dark rounded-circle m-1" href><i className="fab fa-instagram" /></a>
                           </div>
                        </div>
                        <div className="text-center p-4">
                           <h5 className="mb-0">Full Name</h5>
                           <span className="text-primary">Designation</span>
                        </div>
                     </div>
                  </div>
                  <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                     <div className="team-item">
                        <div className="overflow-hidden position-relative">
                           <img className="img-fluid" src="/img/team-2.jpg" alt="" />
                           <div className="team-social">
                              <a className="btn btn-square btn-dark rounded-circle m-1" href><i className="fab fa-facebook-f" /></a>
                              <a className="btn btn-square btn-dark rounded-circle m-1" href><i className="fab fa-twitter" /></a>
                              <a className="btn btn-square btn-dark rounded-circle m-1" href><i className="fab fa-instagram" /></a>
                           </div>
                        </div>
                        <div className="text-center p-4">
                           <h5 className="mb-0">Full Name</h5>
                           <span className="text-primary">Designation</span>
                        </div>
                     </div>
                  </div>
                  <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                     <div className="team-item">
                        <div className="overflow-hidden position-relative">
                           <img className="img-fluid" src="/img/team-3.jpg" alt="" />
                           <div className="team-social">
                              <a className="btn btn-square btn-dark rounded-circle m-1" href><i className="fab fa-facebook-f" /></a>
                              <a className="btn btn-square btn-dark rounded-circle m-1" href><i className="fab fa-twitter" /></a>
                              <a className="btn btn-square btn-dark rounded-circle m-1" href><i className="fab fa-instagram" /></a>
                           </div>
                        </div>
                        <div className="text-center p-4">
                           <h5 className="mb-0">Full Name</h5>
                           <span className="text-primary">Designation</span>
                        </div>
                     </div>
                  </div>
                  <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
                     <div className="team-item">
                        <div className="overflow-hidden position-relative">
                           <img className="img-fluid" src="/img/team-4.jpg" alt="" />
                           <div className="team-social">
                              <a className="btn btn-square btn-dark rounded-circle m-1" href><i className="fab fa-facebook-f" /></a>
                              <a className="btn btn-square btn-dark rounded-circle m-1" href><i className="fab fa-twitter" /></a>
                              <a className="btn btn-square btn-dark rounded-circle m-1" href><i className="fab fa-instagram" /></a>
                           </div>
                        </div>
                        <div className="text-center p-4">
                           <h5 className="mb-0">Full Name</h5>
                           <span className="text-primary">Designation</span>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         {/* Team End */}

         {/* Testimonial Start */}
         <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
                <div className="container">
                    <h1 className="text-center mb-5">Our Clients Say!!!</h1>
                    <OwlCarousel className="owl-theme testimonial-carousel" {...options}>
                        <div className="testimonial-item bg-light rounded p-4">
                            <i className="fa fa-quote-left fa-2x text-primary mb-3" />
                            <p>
                                Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet
                                amet eirmod eos labore diam
                            </p>
                            <div className="d-flex align-items-center">
                                <img
                                    className="img-fluid flex-shrink-0 rounded"
                                    src="/img/testimonial-1.jpg"
                                    style={{ width: 50, height: 50 }}
                                />
                                <div className="ps-3">
                                    <h5 className="mb-1">Client Name</h5>
                                    <small>Profession</small>
                                </div>
                            </div>
                        </div>
                        <div className="testimonial-item bg-light rounded p-4">
                            <i className="fa fa-quote-left fa-2x text-primary mb-3" />
                            <p>
                                Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet
                                amet eirmod eos labore diam
                            </p>
                            <div className="d-flex align-items-center">
                                <img
                                    className="img-fluid flex-shrink-0 rounded"
                                    src="/img/testimonial-2.jpg"
                                    style={{ width: 50, height: 50 }}
                                />
                                <div className="ps-3">
                                    <h5 className="mb-1">Client Name</h5>
                                    <small>Profession</small>
                                </div>
                            </div>
                        </div>
                        <div className="testimonial-item bg-light rounded p-4">
                            <i className="fa fa-quote-left fa-2x text-primary mb-3" />
                            <p>
                                Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet
                                amet eirmod eos labore diam
                            </p>
                            <div className="d-flex align-items-center">
                                <img
                                    className="img-fluid flex-shrink-0 rounded"
                                    src="/img/testimonial-3.jpg"
                                    style={{ width: 50, height: 50 }}
                                />
                                <div className="ps-3">
                                    <h5 className="mb-1">Client Name</h5>
                                    <small>Profession</small>
                                </div>
                            </div>
                        </div>
                       
                    </OwlCarousel>
                </div>
            </div>
            {/* Testimonial End */}


      </>
   )
}

export default Home