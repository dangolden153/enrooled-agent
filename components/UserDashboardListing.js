import {useState} from "react";
import {useSelector} from "react-redux";
import Card from './Card'
import { useToasts } from "react-toast-notifications";

const UserDashboardListing = () => {
    const { addToast } = useToasts();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    state: "",
    last_name: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const {
      state,
      last_name,
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
    function SubmitButton(){
    if (data.state && data.last_name){
      return <button className ="input_filled_btn" type="submit">Claim my profile</button>
    } else {
      return <button className ="input_not_filled_btn" disabled>Claim my profile</button>
    };
  };
    return (
        <Card className='card-user-listing'>
            <h2>Claim your listing!</h2>

            <ul>
                <li>Excited about advertising your practice as a licensed Tax Expert for free?</li>
                <li>Show your practice before thousands of potential clients by claiming your listing.</li>
                <li>Attract customers seeking your services in their area.</li>
            </ul>

            <form>
                <label for="state" className="form-label">State<span className='text-danger'>*</span></label>
                <input className="form-control" list="stateList" id="state" placeholder="-Select state-" 
                  name="state"
                  value={data.state}
                  onChange={handleChange}
                  disabled={loading ? true : false}
                  required
                />
                <datalist id="stateList">
                    <option value="San Francisco" />
                    <option value="New York" />
                    <option value="Seattle" />
                    <option value="Los Angeles" />
                    <option value="Chicago" />
                </datalist>
                <label for="lname" className="form-label">Enter last name<span className='text-danger'>*</span></label>
                <input type="text" id="lname" className="form-control" 
                  placeholder='' 
                  name="last_name"
                  value={data.last_name}
                  onChange={handleChange}
                  disabled={loading ? true : false}
                  required
                  />
                <SubmitButton/>
            </form>
        </Card>
    )
}

export default UserDashboardListing
