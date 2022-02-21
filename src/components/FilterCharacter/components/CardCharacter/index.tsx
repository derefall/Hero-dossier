import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

import Button from "../../../Button";

import './styles.scss'
const charImg = require("../../../../assets/images/a-bomb.jpg");




export default function CardCharacter(){

    const element = <FontAwesomeIcon icon={faCoffee} />

    return(
        <>
            <div className="row">
            <div className="content">
                <div className="img-container">
                    <div className="position-relative">                        
                        <img src={charImg}/>
                        <div className="background-red"></div>
                    </div>                    
                </div>
                <div className="content-container">
                        <h3>A-Bom (HAS)</h3>
                        <p>Rick Jones has been Hulk's best bud since day one, but now he's more than a friend...he's 
                            a teammate! Transformed by a Gamma .... Ver mais</p>
                            <div className="icons-container">
                                <ul>
                                    <li>{element} 4
                                        <div>
                                            <p>Comics</p>
                                        </div>
                                    </li>
                                    <li>{element} 4
                                        <div>
                                            <p>Comics</p>
                                        </div>
                                    </li>                                    
                                </ul>
                                <ul>
                                <li>{element} 4
                                        <div>
                                            <p>Comics</p>
                                        </div>
                                    </li>
                                    <li>{element} 4
                                        <div>
                                            <p>Comics</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        <Button text="Add to favorite" theme="red" onClick={()=>{}}/>
                    </div>
            </div>
            <div className="content">
                <div className="img-container">
                    <div className="position-relative">                        
                        <img src={charImg}/>
                        <div className="background-red"></div>
                    </div>                    
                </div>
                <div className="content-container">
                        <h3>A-Bom (HAS)</h3>
                        <p>Rick Jones has been Hulk's best bud since day one, but now he's more than a friend...he's 
                            a teammate! Transformed by a Gamma .... Ver mais</p>
                            <div className="icons-container">
                                <ul>
                                    <li>{element} 4
                                        <div>
                                            <p>Comics</p>
                                        </div>
                                    </li>
                                    <li>{element} 4
                                        <div>
                                            <p>Comics</p>
                                        </div>
                                    </li>                                    
                                </ul>
                                <ul>
                                <li>{element} 4
                                        <div>
                                            <p>Comics</p>
                                        </div>
                                    </li>
                                    <li>{element} 4
                                        <div>
                                            <p>Comics</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        <Button text="Add to favorite" theme="red" onClick={()=>{}}/>
                    </div>
            </div>
            <div className="content">
                <div className="img-container">
                    <div className="position-relative">                        
                        <img src={charImg}/>
                        <div className="background-red"></div>
                    </div>                    
                </div>
                <div className="content-container">
                        <h3>A-Bom (HAS)</h3>
                        <p>Rick Jones has been Hulk's best bud since day one, but now he's more than a friend...he's 
                            a teammate! Transformed by a Gamma .... Ver mais</p>
                            <div className="icons-container">
                                <ul>
                                    <li>{element} 4
                                        <div>
                                            <p>Comics</p>
                                        </div>
                                    </li>
                                    <li>{element} 4
                                        <div>
                                            <p>Comics</p>
                                        </div>
                                    </li>                                    
                                </ul>
                                <ul>
                                <li>{element} 4
                                        <div>
                                            <p>Comics</p>
                                        </div>
                                    </li>
                                    <li>{element} 4
                                        <div>
                                            <p>Comics</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        <Button text="Add to favorite" theme="red" onClick={()=>{}}/>
                    </div>
            </div>
            </div>
        </>
    )
}