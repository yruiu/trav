import React, {useCallback, useState} from 'react';
import './MainPage.css'
import axios from "axios";
function MainPage(props) {
    let [allPersons, setAllPersons]=useState([]);
   const start=useCallback(async ()=>{
       try {
           await axios.get('https://travelress.herokuapp.com/api/auth/alluser', {
               headers: {"Content-Type": "application/json"}
           }).then(resp => {
               setAllPersons(resp.data.allUser);

           })
       } catch (e){console.log(e+"MARK")}
   },[allPersons])
    start();
    console.log(allPersons)
    return (
        <div className={'container'}>
            {allPersons.map((person)=>{
            return(
                <div className="person">
                    <a href={`/author/${person._id}`}>
                        <h3 className={'about'}>{person.about}</h3>
                        <h4 className={'userName'}>{person.userNamePlusSecondName}</h4>
                    </a>
                </div>
            )})}
        </div>
    );
}

export default MainPage;