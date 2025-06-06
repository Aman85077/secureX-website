import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import axios from "axios";
import SummaryApi from "../common";
import { toast } from "react-toastify";
import { useCart } from "./CartProvider";
function Project() {
  const [data, setData] = useState([]);
  const { setCartCount } = useCart();

  const getToken = localStorage.getItem("userInfo");
  const userInfo = JSON.parse(getToken);
  console.log(userInfo, "userInfo");

  const dataGet = async () => {
    try {
      const result = await axios.get(SummaryApi.productGet.url);
      console.log(result, "result");
      setData(result.data.body);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    dataGet();
  }, []);

  const handleAddToCart = async (productId) => {
    console.log(productId, "jkjk");
    try {
      if (!userInfo) {
        toast.error("Please login first");
        return;
      }

      const cartResponse = await axios.get(SummaryApi.getAllCart.url, {
        headers: {
          Authorization: `Bearer ${userInfo?.token}`,
        },
      });
      console.log(cartResponse, "cartResponse");

      let cartItems = cartResponse.data.body;
      const existingProduct = cartItems.find(
        (item) => item?.productId?._id === productId
      );
      if (existingProduct) {
        const updatedQuantity = existingProduct.quantity + 1;

        await axios.put(
          `${SummaryApi.updateCart.url}${existingProduct._id}`,
          {
            quantity: updatedQuantity,
          },
          {
            headers: {
              Authorization: `Bearer ${userInfo?.token}`,
            },
          }
        );
        toast.success("Quantity updated in your cart");
      } else {
        await axios.post(
          SummaryApi.addToCart.url,
          {
            productId,
            quantity: 1,
          },
          {
            headers: {
              Authorization: `Bearer ${userInfo?.token}`,
            },
          }
        );
        toast.success("Successfully added to your cart");
      }

      const updatedCartResponse = await axios.get(SummaryApi.getAllCart.url, {
        headers: {
          Authorization: `Bearer ${userInfo?.token}`,
        },
      });
      if (updatedCartResponse.data.status === 200) {
        console.log(updatedCartResponse, "updatedCartResponse");
        setCartCount(updatedCartResponse.data.body.length);
      }
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
  };

  return (
    <>
      {/* Page Header Start */}
      <div className="container-fluid page-header py-5 mb-5">
        <div className="container py-5">
          <h1 className="display-3 text-white mb-3 animated slideInDown">
            Products
          </h1>
          <nav aria-label="breadcrumb animated slideInDown">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a className="text-white" href="#">
                  Home
                </a>
              </li>
              <li className="breadcrumb-item">
                <a className="text-white" href="#">
                  Pages
                </a>
              </li>
              <li
                className="breadcrumb-item text-white active"
                aria-current="page"
              >
                Products
              </li>
            </ol>
          </nav>
        </div>
      </div>
      {/* Page Header End */}
      {/* Projects Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <div
              className="bg-primary mb-3 mx-auto"
              style={{ width: "60px", height: "2px" }}
            />
            <h1 className="display-5 mb-5">Our Products</h1>
          </div>
          <div className="row mt-n2 wow fadeInUp" data-wow-delay="0.3s">
            <div className="col-12 text-center">
              <ul className="list-inline mb-5" id="portfolio-flters">
                <li className="mx-2 active" data-filter="*">
                  All
                </li>
                <li className="mx-2" data-filter=".first">
                  Complete Projects
                </li>
                <li className="mx-2" data-filter=".second">
                  Ongoing Projects
                </li>
              </ul>
            </div>
          </div>
          <div className="row g-4 portfolio-container">
            {data?.map((e) => (
              <div
                className="col-lg-4 col-md-6 portfolio-item first wow fadeInUp"
                data-wow-delay="0.1s"
              >
                <div className="portfolio-inner">
                  <img className="img-fluid w-100" src={e?.image} alt="" />
                  <div className="text-center p-4">
                    <p className="text-primary mb-2">{e?.name}</p>
                    <h5 className="lh-base mb-0">{e?.description}</h5>
                    <h5 className="lh-base mb-0">$ {e?.sellingPrice}</h5>
                  </div>
                  <div className="portfolio-text text-center bg-white p-4">
                    <p className="text-primary mb-2">{e?.name}</p>
                    <h5 className="lh-base mb-3">{e?.description}</h5>
                    <h5 className="lh-base mb-0">$ {e?.sellingPrice}</h5>
                    <div className="d-flex justify-content-center">
                      <button
                        onClick={() => handleAddToCart(e?._id)}
                        className="btn btn-square btn-primary rounded-circle mx-1"
                      >
                        <i className="fa fa-cart-plus "></i>
                      </button>
                      {/* <a className="btn btn-square btn-primary rounded-circle mx-1" href="/img/portfolio-1.jpg" data-lightbox="portfolio"><i className="fa fa-eye" /></a>
                              <a className="btn btn-square btn-primary rounded-circle mx-1" href><i className="fa fa-link" /></a> */}
                    </div>
                  </div>
                </div>
              </div>
            ))}
            {/* <div className="col-lg-4 col-md-6 portfolio-item second wow fadeInUp" data-wow-delay="0.3s">
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
                  </div> */}
          </div>
        </div>
      </div>
      {/* Projects End */}
    </>
  );
}

export default Project;
