import React, { useState } from "react";
import Banner from "../../components/Banner";
import NewListing from "../../public/images/banners/cropped-view.png";
import "react-phone-number-input/style.css";
import { contactFormRequest } from "../../src/services/common";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import { useToasts } from "react-toast-notifications";

const index = () => {
  const [value, setValue] = useState("");
  const { addToast } = useToasts();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, phone, subject, message } = data;

    try {
      setLoading(true);
      let response = await contactFormRequest(data);
      if (response) {
        if (response.data) {
          addToast("Contact form has been sent successfully!", {
            appearance: "success",
            autoDismiss: true,
          });
        }
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      addToast(
        `${
          error.response.msg
            ? error.response.msg
            : "An error occured. Please try again."
        }`,
        {
          appearance: "error",
          autoDismiss: true,
        }
      );
    }
  };

  const handleValue = (val) => {
    setValue(val);
  };

  return (
    <div>
      <Banner background={NewListing}>
        <div className="bannerText">
          <h1>Contact Us</h1>
        </div>
      </Banner>
      <div className="container contact-page">
        <div className="row">
          <div className="col-md-6">
            <div className="card">
              <div className="card-body ">
                <h2 className="text-center">Get In Touch With Us</h2>
                <label required className="form-control-label text-start  ">
                  Full Name<span className="text-danger">*</span>
                </label>
                <input
                  required
                  type="text"
                  placeholder="John Doe"
                  className="form-control"
                />
                <label className="form-control-label  ">Subject</label>
                <input
                  type="text"
                  placeholder="Account Claims"
                  className="form-control"
                />
                <label className="form-control-label  ">
                  Phone Number <span className="text-danger">*</span>
                </label>
                <PhoneInput
                  defaultCountry="US"
                  error={
                    value
                      ? isValidPhoneNumber(value)
                        ? undefined
                        : "Invalid phone number"
                      : "Phone number required"
                  }
                  placeholder="Enter phone number"
                  className="form-control"
                  value={value}
                  onChange={handleValue}
                  style={{ marginBottom: "20px" }}
                />
                <label className="form-control-label text-muted">
                  Email<span className="text-danger">*</span>
                </label>
                <input
                  required
                  type="email"
                  placeholder="jdoe@gmail.com"
                  className="form-control"
                />
                <label className="form-control-label text-muted">
                  How can we help you?
                </label>
                <textarea
                  rows="20"
                  style={{ height: "285px" }}
                  placeholder="Your message"
                  className="form-control"
                />

                <button className="btn contact-button">SEND MESSAGE</button>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="contact-right">
              <h2>How we can help?</h2>
              <p>
                Please select a topic below related to your inquiry. If you dont
                find what you need fill out our contact form
              </p>
              <div className="topics">
                <p className="fw-bold">Get Inspired</p>
                <span>
                  Discover in many ways in which our customers use Enrolledagent
                </span>
              </div>
              <div className="topics">
                <p className="fw-bold">Get Inspired</p>
                <span>
                  Discover in many ways in which our customers use Enrolledagent
                </span>
              </div>
              <div className="topics">
                <p className="fw-bold">Get Inspired</p>
                <span>
                  Discover in many ways in which our customers use Enrolledagent
                </span>
              </div>
              <div className="topics">
                <p className="fw-bold">Get Inspired</p>
                <span>
                  Discover in many ways in which our customers use Enrolledagent
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="row location">
          <div className="col-md-6">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.2141882786636!2d-74.01239558509549!3d40.71330114547371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a193d4ea4ed%3A0xe37865ea0ea0725!2s100%20Church%20St%20%238th%2C%20New%20York%2C%20NY%2010007%2C%20USA!5e0!3m2!1sen!2sng!4v1634283329904!5m2!1sen!2sng"
              width="600"
              height="450"
              style={{ border: "0" }}
              allowfullscreen=""
              loading="lazy"
            ></iframe>
          </div>
          <div className="col-md-6 iframe-details">
            <h2>
              <i class="bi bi-pin-map-fill"></i>&nbsp;Headquarters
            </h2>
            <p>100 Church St, 8th floor, New York, NY 10007 United States.</p>
            <h2>
              <i class="bi bi-telephone"></i>&nbsp;Phone Number
            </h2>
            <p>1-855-22-AGENT</p>
            <h2>
              <i class="bi bi-envelope"></i>&nbsp;Email
            </h2>
            <p>info@enrolledagent.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
