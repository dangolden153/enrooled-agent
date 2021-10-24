import Link from 'next/link'
import {useState, useEffect} from "react";
import { getAllCities } from "../src/redux/actions/city";
import { useDispatch, useSelector } from "react-redux";
const CitySelect = () => {
      const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const cities = useSelector((state) => state.getCities.cities);

    return (
        <select class="form-select form-select-lg" aria-label="Default select example">
            <option selected disable>Open this select menu</option>
            {cities.map((city, index) => (
                <Link href="">
                    <option className='select-option' key={index} value={city.name}>
                        {city.name}
                    </option>
                </Link>
            ))}
        </select>
    )
}

export default CitySelect