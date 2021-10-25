import {useState} from "react";
import {useSelector} from "react-redux";
import Card from './Card';
import { useRouter } from "next/router";
import { useToasts } from "react-toast-notifications";

const UserDashboardListing = () => {
    const { addToast } = useToasts();
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const [searchData, setSearchData] = useState({
    state: "",
    lname: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSearchData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSearch = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const form = e.currentTarget;
    if (form) {
      // const formData = new FormData(form);
      //dispatch(updateProfile(formData));
      router.push(`/agents/search?data=${searchData?.state}&lName=${searchData?.lname}`);
    }
    
  };
    function SubmitButton(){
    if (searchData.state && searchData.lname){
      return <button className ="input_filled_btn"  type="submit">Claim my profile</button>
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

            <form onSubmit={handleSearch}>
                <label for="state" className="form-label">State<span className='text-danger'>*</span></label>
                <input className="form-control" list="stateList" id="state" placeholder="-Select state-" 
                  name="state"
                  value={searchData.state}
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
                  name="lname"
                  value={searchData.lname}
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
