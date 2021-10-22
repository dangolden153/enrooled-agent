import {useState, useEffect} from "react";
import { getAllCities } from "../src/redux/actions/city";
import { useDispatch, useSelector } from "react-redux";
import Link from 'next/link'

const CityList = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const cities = useSelector((state) => state.getCities.cities);
    let groupBy16 = (data) => {
        let result = []
        for (let i = 0; i < data.length; i += 16) result.push(data.slice(i, i + 16))
        return result
    }
  useEffect(() => {
    dispatch(getAllCities());
  }, []);


    const cityGroups = groupBy16(cities)

    return (
        <>
            {
                cityGroups.slice(0, 64).map((group, index) => (
                    <div key={index} className="city-list d-flex flex-column col-3">
                        {group.map((item, index) => (
                            <Link key={index} href="">{item.name}</Link>
                        )
                        )}
                    </div>
                ))
            }
        </>
    )
}

export default CityList
