import React,{useEffect, useState} from 'react'
import { useSelector} from 'react-redux';
import TopRatedCard from './TopRatedCard';
import { ChevronRight } from 'react-bootstrap-icons';
import woman from '../public/images/card-woman.png'
import man from '../public/images/card-man.png'
import avatar from '../public/images/avatar.png'
import CardList from './CardList';

const TopRated = () => {
    const agents = useSelector((state) => state.getAgents.topAgents);
    console.log(agents);
    return (
        <div className="top-rated d-flex flex-column w-100 align-items-center justify-content-center">
            <div className="col-12 d-flex flex-column align-items-center justify-content-center">
                <h1>Top Rated Enrolled Agents</h1>
                <span>Licensed and Verified Enrolled Agents</span>
            </div>

            <CardList>
                {agents && agents.map((agent, index) => {
                return (
                <TopRatedCard
                    key={index}
                    image={agent.agent && (agent.agent.image_url ?? avatar)}
                    name={agent.agent && agent.agent.first_name + agent.agent.first_name}
                    location={agent.agent && agent.agent.city + ',' + agent.agent.state}
                    numStars={agent.rating}
                    profileLink={`agent/${agent.id}/${agent.first_name}`}
                />
                    )
                })}
            </CardList>

            <button type="button" className='btn-common'>Find more local EA's <ChevronRight /></button>
        </div>
    )
}

export default TopRated;
