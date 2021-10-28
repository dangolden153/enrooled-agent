import React, { useState } from "react";
import {
  CountryDropdown,
  RegionDropdown,
  CountryRegionData,
} from "react-country-region-selector";
import Banner from "../../components/Banner";
import NewListing from "../../public/images/banners/cropped-view.png";
import { useToasts } from "react-toast-notifications";
import { newListingRequest } from "../../src/services/user";

const index = () => {
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const { addToast } = useToasts();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    street_address: "",
    street_address2: "",
    state: "",
    city: "",
    zipcode: "",
    title: "",
    position: "",
    service: "",
    brief_description: "",
    state_license: "",
    license_number: "",
    proof_of_license: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const {
      first_name,
      last_name,
      email,
      street_address,
      street_address2,
      state,
      city,
      zipcode,
      title,
      position,
      service,
      brief_description,
      state_license,
      license_number,
      proof_of_license,
    } = data;

    try {
      setLoading(true);
      let response = await newListingRequest(data);
      if (response) {
        if (response.data) {
          addToast("Your listing request has been sent successfully!", {
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

  const handleCountryChange = (val) => {
    setCountry(val);
  };
  const handleStateChange = (val) => {
    setState(val);
  };
  return (
    <div>
      <Banner background={NewListing}>
        <div className="bannerText">
          <h1>Apply For New Listing</h1>
        </div>
      </Banner>
      <form onSubmit={handleSubmit}>
        <div className="new-listing container">
          {/* PERSONAL */}
          <div>
            <h3>Personal</h3>
            <div className="row mt-3">
              <div className="col-md-6">
                <label required className="form-control-label text-muted ">
                  First Name<span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="first_name"
                  value={data.first_name}
                  onChange={handleChange}
                  disabled={loading ? true : false}
                  required
                />
              </div>
              <div className="col-md-6">
                <label className="form-control-label text-muted">
                  Last Name<span className="text-danger">*</span>
                </label>
                <input
                  required
                  type="text"
                  className="form-control"
                  name="last_name"
                  value={data.last_name}
                  onChange={handleChange}
                  disabled={loading ? true : false}
                  required
                />
              </div>
              <div className="col-md-6">
                <label className="form-control-label text-muted">
                  Email<span className="text-danger">*</span>
                </label>
                <input
                  required
                  type="email"
                  className="form-control"
                  name="email"
                  value={data.email}
                  onChange={handleChange}
                  disabled={loading ? true : false}
                  required
                />
              </div>
            </div>
          </div>

          {/* CONTACT */}
          <div>
            <h3>Contact</h3>
            <div className="row mt-3">
              <div className="col-md-6">
                <label required className="form-control-label text-muted ">
                  Street Address <span className="text-danger">*</span>
                </label>
                <input
                  required
                  type="text"
                  className="form-control"
                  name="street_address"
                  value={data.street_address}
                  onChange={handleChange}
                  disabled={loading ? true : false}
                  required
                />
              </div>
              <div className="col-md-6">
                <label className="form-control-label text-muted">
                  Street Address 2
                </label>
                <input
                  required
                  type="text"
                  className="form-control"
                  name="street_address2"
                  value={data.street_address2}
                  onChange={handleChange}
                  disabled={loading ? true : false}
                  required
                />
              </div>

              <div className="col-md-6">
                <label className="form-control-label text-muted">
                  Country<span className="text-danger">*</span>
                </label>
                <CountryDropdown
                  className="form-control"
                  value={country}
                  onChange={handleCountryChange}
                  style={{
                    backgroundColor: "#e5e5e5",
                    color: "#818181",
                    marginBottom: "25px",
                  }}
                />
              </div>
              <div className="col-md-6">
                <label className="form-control-label text-muted">
                  State<span className="text-danger">*</span>
                </label>
                <RegionDropdown
                  country={country}
                  className="form-control"
                  disableWhenEmpty={true}
                  name="state"
                  value={state}
                  onChange={handleStateChange}
                  style={{
                    backgroundColor: "#e5e5e5",
                    color: "#818181",
                    marginBottom: "25px",
                  }}
                />
              </div>
              <div className="col-md-3">
                <label className="form-control-label text-muted">
                  City<span className="text-danger">*</span>
                </label>
                <input
                  required
                  type="text"
                  className="form-control"
                  name="city"
                  value={data.city}
                  onChange={handleChange}
                  disabled={loading ? true : false}
                  required
                />
              </div>
              <div className="col-md-3">
                <label className="form-control-label text-muted">
                  Zip Code<span className="text-danger">*</span>
                </label>
                <input
                  required
                  type="text"
                  className="form-control"
                  name="zipcode"
                  value={data.zipcode}
                  onChange={handleChange}
                  disabled={loading ? true : false}
                  required
                />
              </div>
            </div>
          </div>

          {/* PROFESSIONAL DETAILS */}
          <div>
            <h3>Professional Details</h3>
            <div className="row mt-3">
              <div className="col-md-6">
                <label required className="form-control-label text-muted ">
                  Title <span className="text-danger">*</span>
                </label>
                <input
                  required
                  type="text"
                  className="form-control"
                  name="title"
                  value={data.title}
                  onChange={handleChange}
                  disabled={loading ? true : false}
                  required
                />
              </div>
              <div className="col-md-6">
                <label className="form-control-label text-muted">
                  Position<span className="text-danger">*</span>
                </label>
                <input
                  required
                  type="text"
                  className="form-control"
                  name="position"
                  value={data.position}
                  onChange={handleChange}
                  disabled={loading ? true : false}
                  required
                />
              </div>

              <div className="col-md-6">
                <label className="form-control-label text-muted">
                  Service Offered
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="service"
                  value={data.service}
                  onChange={handleChange}
                  disabled={loading ? true : false}
                  required
                />
              </div>

              <div className="col-md-12">
                <label className="form-control-label text-muted">
                  Brief Description
                </label>
                <textarea
                  rows="10"
                  className="form-control"
                  name="brief_description"
                  value={data.brief_description}
                  onChange={handleChange}
                  disabled={loading ? true : false}
                  required
                />
              </div>
            </div>
          </div>

          {/* PROOF OF LICENSURE */}
          <div>
            <h3>Proof of Licensure</h3>
            <div className="row mt-3">
              <div className="col-md-6">
                <label required className="form-control-label text-muted ">
                  State of License<span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="state_license"
                  value={data.state_license}
                  onChange={handleChange}
                  disabled={loading ? true : false}
                  required
                />
              </div>
              <div className="col-md-6">
                <label className="form-control-label text-muted">
                  License Number<span className="text-danger">*</span>
                </label>
                <input
                  required
                  type="text"
                  className="form-control"
                  name="license_number"
                  value={data.license_number}
                  onChange={handleChange}
                  disabled={loading ? true : false}
                  required
                />
              </div>
              <div className="col-md-6">
                <label className="form-control-label text-muted">
                  Proof of License(PDF)<span className="text-danger">*</span>
                </label>
                <input
                  required
                  type="file"
                  className="form-control"
                  name="proof_of_license"
                  value={data.proof_of_license}
                  onChange={handleChange}
                  disabled={loading ? true : false}
                  required
                />
              </div>
            </div>
          </div>

          <div className="terms">
            <input
              type="checkbox"
              name="agree"
              className="me-2"
              value="agree"
            />{" "}
            I agree to the terms of use and privacy policy
          </div>
          <button
            type="button"
            style={{
              backgroundColor: "#01105b",
              color: "#fff",
              marginLeft: "0px",
            }}
            className="btn mt-5 "
            disabled={!data.first_name}
          >
            Create Free Profile
          </button>
        </div>
      </form>
    </div>
  );
};

export default index;
