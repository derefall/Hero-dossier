import Button from "../Button";

import './styles.scss';

export default function Header(){
    return(
        <div className="line">
             <div className="header">
                <ul>
                        <li>Home</li>
                        <li>Herois</li>
                </ul>
                <Button text="Minha conta" theme="red" onClick={()=>{}}/>
             </div>
        </div>
    )
}