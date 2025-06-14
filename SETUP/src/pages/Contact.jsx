import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios"
import SummaryApi from '../common'
import { toast } from 'react-toastify'

export default function Contact() {
    const [data, setData] = useState("")
  const navigate = useNavigate()

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    try {
      e.preventDefault()
      await axios.post(SummaryApi.createContactUs.url, data, {
        headers: {
          "content-type": "application/json"
        },
      }).then((res) => {
        if (res.data.status == 200) {
          setData(res.data.body)
          navigate("/")
          toast.success(`Message sent successfully to admin`)
        } else {
          toast.error(res.data.message)

        }

      })
    } catch (error) {
      console.log(error)
    }
  }
    return (
        <>
            {/* <!-- Page Header Start --> */}
            <div class="container-fluid bg-dark bg-img p-5 mb-5">
                <div class="row">
                    <div class="col-12 text-center">
                        <h1 class="display-4 text-uppercase text-white">Contact Us</h1>
                        <a href="">Home</a>
                        <i class="far fa-square text-primary px-2"></i>
                        <a href="">Contact</a>
                    </div>
                </div>
            </div>
            {/* <!-- Page Header End --> */}


            {/* <!-- Contact Start --> */}
            <div class="container-fluid contact position-relative px-5" style={{ marginTop: "90px" }}>
                <div class="container">
                    <div class="row g-5 mb-5">
                        <div class="col-lg-4 col-md-6">
                            <div class="bg-primary border-inner text-center text-white p-5">
                                <i class="bi bi-geo-alt fs-1 text-white"></i>
                                <h6 class="text-uppercase my-2">Our Office</h6>
                                <span>123 Street, New York, USA</span>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6">
                            <div class="bg-primary border-inner text-center text-white p-5">
                                <i class="bi bi-envelope-open fs-1 text-white"></i>
                                <h6 class="text-uppercase my-2">Email Us</h6>
                                <span>info@example.com</span>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6">
                            <div class="bg-primary border-inner text-center text-white p-5">
                                <i class="bi bi-phone-vibrate fs-1 text-white"></i>
                                <h6 class="text-uppercase my-2">Call Us</h6>
                                <span>+012 345 6789</span>
                            </div>
                        </div>
                    </div>
                    <div class="row justify-content-center">
                        <div class="col-lg-6">
                            <form onChange={handleChange} onSubmit={handleSubmit}>
                                <div class="row g-3">
                                    <div class="col-sm-6">
                                        <input type="text" class="form-control bg-light border-0 px-4" placeholder="Your Name" style={{ height: "55px" }} name='name'  />
                                    </div>
                                    <div class="col-sm-6">
                                        <input type="email" class="form-control bg-light border-0 px-4" placeholder="Your Email" style={{ height: "55px" }} name='email'  />
                                    </div>
                                    <div class="col-sm-12">
                                        <input type="text" class="form-control bg-light border-0 px-4" placeholder="Subject" style={{ height: "55px" }} name='subject'  />
                                    </div>
                                    <div class="col-sm-12">
                                        <textarea class="form-control bg-light border-0 px-4 py-3" rows="4" placeholder="Message" name='message' ></textarea>
                                    </div>
                                    <div class="col-sm-12">
                                        <button class="btn btn-primary border-inner w-100 py-3" type="submit" >Send Message</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Contact End --> */}

        </>
    )
}
