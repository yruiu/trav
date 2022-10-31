import React, {useContext, useState} from 'react';
import axios from "axios";
import {UseAuthContext} from "../../context/AuthContext";
import {Link, useHistory} from "react-router-dom";

function Login(props) {
    const [email, setEmail]=useState('');
    const [password, setPassword]=useState('');
    const {login}=useContext(UseAuthContext)
    const history=useHistory();
    const submitHandler=async()=>{
        try {
            await axios.post('https://travelress.herokuapp.com/api/auth/login', {
                email, password
            }, {
                headers: {"Content-Type": "application/json"}
            }).then(res =>{
                login(res.data.token, res.data.userId);
                }
            )
            history.push('/')
        }catch (e){console.log(e+"MARK_")}
    }
    return (
        <div className={'container'}>
                <form onSubmit={event => event.preventDefault()}>
                <div className="email">
                    <label htmlFor="email">email</label>
                    <input onChange={e=>setEmail(e.target.value)} type="email" id={'email'} className={'form form-control'}/>
                </div>
                <div className="password">
                    <label htmlFor="password">password</label>
                    <input onChange={e=>setPassword(e.target.value)} type="password" id={'password'} className={'form form-control'}/>
                </div>
                <button onClick={submitHandler} type={'submit'} className={'btn btn-outline-primary'} >Sig in</button>
            </form>
            <Link to={'/register'}>Sig in</Link>
        </div>
    );
}

export default Login;