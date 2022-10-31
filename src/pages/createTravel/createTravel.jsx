import React, {useContext, useState} from 'react';
import axios from "axios";
import {UseAuthContext} from "../../context/AuthContext";
import {useHistory} from "react-router-dom";

function CreateTravel(props) {
    const [country, setcountry]=useState('');
    const [url, seturl]=useState('');
    const [costOfPrice, setcostOfPrice]=useState('');
    const [about, setAbout]=useState('');
    const [moreAbout, setmoreAbout]=useState('');
    const {userId}=useContext(UseAuthContext)
    const history=useHistory();
    const submitHandler=async ()=>{
        await axios.post('https://travelress.herokuapp.com/api/travel/create',{
            costOfPrice, country, url, about, moreAbout, userId
        }).then(
            history.push('/')
        )
    }
    return (
        <div className={'container'}>
            <form onSubmit={event => event.preventDefault()}>
                <div className="userNamePlusSecondName">
                    <label htmlFor="userNamePlusSecondName">country</label>
                    <input onChange={e=>setcountry(e.target.value)} type="text" id={'userNamePlusSecondName'} className={'form form-control'}/>
                </div>
                <div className="email">
                    <label htmlFor="email">url for image</label>
                    <input onChange={e=>seturl(e.target.value)} type="text" id={'email'} className={'form form-control'}/>
                </div>
                <div className="password">
                    <label htmlFor="password">setcostOfPrice</label>
                    <input onChange={e=>setcostOfPrice(e.target.value)} type="text" id={'password'} className={'form form-control'}/>
                </div>
                <div className="about">
                    <label htmlFor="about">about</label>
                    <textarea onChange={e=>setAbout(e.target.value)} id={'about'} className={'form form-control'}/>
                </div>
                <div className="about">
                    <label htmlFor="about">more about</label>
                    <textarea onChange={e=>setmoreAbout(e.target.value)} id={'about'} className={'form form-control'}/>
                </div>
                <button onClick={submitHandler} type={'submit'} className={'btn btn-outline-primary'} >Sig in</button>
            </form>
        </div>    );
}

export default CreateTravel;