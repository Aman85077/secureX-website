import React from 'react'

function Service() {
   return (
      <>
         {/* Page Header Start */}
         <div className="container-fluid page-header py-5 mb-5">
            <div className="container py-5">
               <h1 className="display-3 text-white mb-3 animated slideInDown">Services</h1>
               <nav aria-label="breadcrumb animated slideInDown">
                  <ol className="breadcrumb">
                     <li className="breadcrumb-item"><a className="text-white" href="#">Home</a></li>
                     <li className="breadcrumb-item"><a className="text-white" href="#">Pages</a></li>
                     <li className="breadcrumb-item text-white active" aria-current="page">Services</li>
                  </ol>
               </nav>
            </div>
         </div>
         {/* Page Header End */}
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
      </>
   )
}

export default Service