import React,{useEffect, useState} from 'react'
import { topRatedAgents } from "../src/services/agent";
import TopRatedCard from './TopRatedCard';
import { ChevronRight } from 'react-bootstrap-icons';
import woman from '../public/images/card-woman.png'
import man from '../public/images/card-man.png'
import CardList from './CardList';

const TopRated = () => {
    const [topRatedAgent, setTopRatedAgent] = useState([]);
    useEffect(() => {
        const fetchAgents = async() => {
            const res = await topRatedAgents();
            setTopRatedAgent(res.data.data);
            console.log("res",res);
        }
        fetchAgents();
    },[]);
    return (
        <div className="top-rated d-flex flex-column w-100 align-items-center justify-content-center">
            <div className="col-12 d-flex flex-column align-items-center justify-content-center">
                <h1>Top Rated Enrolled Agents</h1>
                <span>Licensed and Verified Enrolled Agents</span>
            </div>

            <CardList>
                {topRatedAgent.map((agent, index) => {
                <TopRatedCard
                    key={index}
                    image={woman}
                    name={agent?.first_name}
                    location='PINELLAS PARK, Florida'
                    numStars='3'
                    profileLink='/profile-link'
                />
                })}
            </CardList>

            <button type="button" className='btn-common'>Find more local EA's <ChevronRight /></button>
        </div>
    )
}

export default TopRated;
