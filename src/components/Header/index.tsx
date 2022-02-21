import react from 'react'
import { useParams } from 'react-router-dom';
import Button from "../Button";

import './styles.scss';

export default function Header(){

    const {id} = useParams();
    let className = 'active';    

    function isActive(){

        if(id){
            return className;
        }
        else{        
            return className="active";
        }
    }

    return(
        <div className="line">
             <div className="header">
                <ul>
                    <li className={className}>Home</li>
                </ul>
                <Button text="Minha conta" theme="red" onClick={()=>{}}/>
             </div>
        </div>
    )
}