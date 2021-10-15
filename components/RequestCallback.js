import React,{ useState, useRef } from 'react'
import Form from './Form'
import { useToasts } from "react-toast-notifications";
import { contactFormRequest } from "../src/services/common";
const RequestCallback = () => {
    const { addToast } = useToasts();
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
    const formData = useRef(null)
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
        formData.current.reset();
        if (response) {
          if (response.data) {
            
            addToast("Your request has been sent", {
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
            error.response.data.message
              ? error.response.data.message
              : "An error occured. Please try again."
          }`,
          {
            appearance: "error",
            autoDismiss: true,
          },
        );
      }
    };
    return (
        <div className='request-callback d-flex flex-column align-items-center justify-content-center'>
            <h1>Request a Call Back</h1>
            <h5>Please fill out the form and press the submit button.
                We will get back to you within 1-2 business days</h5>
          <div className='form-wrapper d-flex flex-column w-100 align-items-between'>
            <form ref={formData} onSubmit={handleSubmit} className='form-between d-flex flex-column w-100 align-content-between'>
                <div className="form-group">
                    <input 
                    type="text" 
                    placeholder="Name" 
                    name="name"
                    value={data.name}
                    onChange={handleChange}
                    disabled={loading ? true : false}
                    required
                    />
                    <input 
                    type="text" 
                    placeholder="Email" 
                    name="email"
                    value={data.email}
                    onChange={handleChange}
                    disabled={loading ? true : false}
                    required
                    />
                </div>
                <div className="form-group">
                    <input 
                    type="text"  
                    placeholder="Subject" 
                    name="subject"
                    value={data.subject}
                    onChange={handleChange}
                    disabled={loading ? true : false}
                    required
                    />
                    <input 
                    type="text" 
                    placeholder="Phone Number" 
                    name="phone"
                    value={data.phone}
                    onChange={handleChange}
                    disabled={loading ? true : false}
                    required
                    />
                </div>
                <div className="form-group d-flex flex-row justify-content-center">
                    <textarea 
                    className="" 
                    rows='10' 
                    placeholder="Message"                 
                    name="message"
                    value={data.message}
                    onChange={handleChange}
                    disabled={loading ? true : false}
                    required
                    ></textarea>
                </div>
                 <div className="form-btn-wrapper d-flex flex-row w-100 justify-content-center justify-content-lg-end">
                    <button type="submit" className='btn btn-form'>{loading ? "Please Wait..." : "Submit"}</button>
                </div>
            </form>
            </div>
        </div>
    )
}

export default RequestCallback
