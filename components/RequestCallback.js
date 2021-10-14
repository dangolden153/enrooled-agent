import React,{ useState } from 'react'
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
    return (
        <div className='request-callback d-flex flex-column align-items-center justify-content-center'>
            <h1>Request a Call Back</h1>
            <h5>Please fill out the form and press the submit button.
                We will get back to you within 1-2 business days</h5>

            <Form onSubmit={handleSubmit} submitText="Find More Local EA's">
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
            </Form>
        </div>
    )
}

export default RequestCallback
