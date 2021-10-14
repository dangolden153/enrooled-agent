import React,{ useState} from 'react'
import { useToasts } from "react-toast-notifications";
import {contactFormRequest} from "../src/services/common"

const index = () => {
    const { addToast } = useToasts();
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
    const handleChange = (e) => {
        const {name, value} = e.target;
        setData({...data, [name]:value});
    }
const handleSubmit = async(e) => {
    e.preventDefault();
    const { 
        name, 
        email, 
        phone, 
        subject, 
        message, 
    } = data;

    try{
        setLoading(true);
        let response = await contactFormRequest(data);
        if(response){
            if(response.data){
            addToast("Contact form has been sent successfully!", {
             appearance: "success",
             autoDismiss: true,
           });
            }
            setLoading(false);
        }
    }catch(error)
    {
        setLoading(false);
        addToast(`${error.response.msg ? error.response.msg : "An error occured. Please try again."}`, {
             appearance: "error",
             autoDismiss: true,
           });
    }
} 
    return (
        <div>
            
        </div>
    )
}

export default index
