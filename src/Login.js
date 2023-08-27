import React from "react";
import {useDispatch} from "react-redux";
import {login} from './features/User';
export default function Login(){
    const dispatch = useDispatch()
    return(
        <div>
            <button onClick={()=>dispatch(login({
                email:"marwa@email.com",
                nom:"mn",
                prenom:"marwa",
                adress:"tunisie",
            }))}>
                se connecter!
            </button>
        </div>
    )
}