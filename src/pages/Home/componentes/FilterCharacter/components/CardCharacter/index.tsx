import React, { useEffect, useState } from 'react';
import './styles.scss'

import {herosProps} from '../../../../../../types/heros/index'

import Button from "../../../../../../components/Button/index";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookOpen, faBookOpenReader, faTv, faPerson } from '@fortawesome/free-solid-svg-icons'

import  { useNavigate }  from 'react-router-dom';

import { HerosContext } from '../../../../../../contexts/HerosContext';

export default function CardCharacter(){

    const comic = <FontAwesomeIcon icon={faBookOpen} />
    const stories = <FontAwesomeIcon icon={faBookOpenReader} />
    const series = <FontAwesomeIcon icon={faTv} />
    const events = <FontAwesomeIcon icon={faPerson} />

    const navigate = useNavigate();

    const portrait = '/portrait_xlarge.';

    const {heros} = React.useContext(HerosContext)    

    function handleCharacterId(id: number){
        navigate('/characters/' + id);      

    }

    return(
        <>
            <div className="row">

            {
                heros? heros.map((hero: herosProps) => (

                    <div className="content" key={hero.id}>
                    <div className="img-container">
                        <div className="position-relative">                        
                            <img src={hero.thumbnail.path + portrait + hero.thumbnail.extension}/>
                            <div className="background-red"></div>
                        </div>                    
                    </div>
                    <div className="content-container">
                        <h3>{hero.name}</h3>
                        <p className="description-hero">{hero.description}                            
                        </p>
                        <a onClick={()=>{handleCharacterId(hero.id)}}>Read more</a>
                            <div className="icons-container">
                                <ul>
                                    <li>{comic} {hero.comics.available}
                                        <div>
                                            <p>Comics</p>
                                        </div>
                                    </li>
                                    <li>{stories} {hero.series.available}
                                        <div>
                                            <p>Series</p>
                                        </div>
                                    </li>                                    
                                </ul>
                                <ul>
                                <li>{series} {hero.stories.available}
                                        <div>
                                            <p>Stories</p>
                                        </div>
                                    </li>
                                    <li>{events} {hero.events.available}
                                        <div>
                                            <p>Events</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <Button text="Add to favorite" theme="red" onClick={()=>{}}/>
                    </div>
                </div>

                )) : 'Loading...'
            }
                
            </div>
        </>
    )
}