import React, {useState} from 'react';
import './Register.css'
import axios from 'axios';
function Register(props) {
    const [userNamePlusSecondName, setUserNamePlusSecondName]=useState('');
    const [email, setEmail]=useState('');
    const [password, setPassword]=useState('');
    const [about, setAbout]=useState('');
    const submitHandler=async()=>{
        try {
            await axios.post('https://travelress.herokuapp.com/api/auth/register', {
                userNamePlusSecondName, email, password, about
            }, {
                headers: {"Content-Type": "application/json"}
            }).then(res => console.log(res))
        }catch (e){console.log(e+"MARK_")}
    }

    return (
        <div className={'container'}>
            <form onSubmit={event => event.preventDefault()}>
                <div className="userNamePlusSecondName">
                    <label htmlFor="userNamePlusSecondName">userName Plus SecondName</label>
                    <input onChange={e=>setUserNamePlusSecondName(e.target.value)} type="text" id={'userNamePlusSecondName'} className={'form form-control'}/>
                </div>
                <div className="email">
                    <label htmlFor="email">email</label>
                    <input onChange={e=>setEmail(e.target.value)} type="email" id={'email'} className={'form form-control'}/>
                </div>
                <div className="password">
                    <label htmlFor="password">password</label>
                    <input onChange={e=>setPassword(e.target.value)} type="password" id={'password'} className={'form form-control'}/>
                </div>
                <div className="about">
                    <label htmlFor="about">about</label>
                    <textarea onChange={e=>setAbout(e.target.value)} id={'about'} className={'form form-control'}/>
                </div>
                <button onClick={submitHandler} type={'submit'} className={'btn btn-outline-primary'} >Sig in</button>
            </form>
        </div>
    );
}

export default Register;