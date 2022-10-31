import React, {useState} from 'react';
import {useParams} from "react-router-dom";
import './Author.css'
import axios from "axios";
function Author(props) {
    let { id } = useParams();
    const [travelers, setTravelers]=useState([])
    async function start(){
        await axios.post('https://travelress.herokuapp.com/api/travel/find',{
            userId:id
        }).then(res=>{
            // console.log(res.data.newTravel)
            setTravelers(res.data.newTravel)
        })
    }
    start()
    console.log(travelers)
    return (
        <div className={'container'}>{travelers.map((traveler)=>{
            return(
                <div className={'cards'}>
                    <h2 className={'country'}>{traveler.country}</h2>
                    <h3 className={'about'}>{traveler.about}</h3>
                    <img src={traveler.url} alt="" className={'img'}/>
                    <p>{traveler.moreAbout}</p>
                </div>
            )
        })}</div>
    );
}

export default Author;