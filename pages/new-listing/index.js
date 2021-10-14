import React, { useState } from "react";
import { useToasts } from "react-toast-notifications";
import { newListingRequest } from "../src/services/user";
const index = () => {
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
        },
      );
    }
  };
  return <div></div>;
};

export default index;
