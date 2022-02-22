import react, { useEffect, useState } from 'react';
import './styles.scss'

import Button from '../../components/Button';
import CharacterItems from './components/CharacterItems';
import { useParams } from 'react-router-dom';
import { getHeroById } from '../../services/marvelApi';
import { herosProps } from '../../types/heros';
const charImg = require("../../assets/images/a-bomb.jpg");


export default function CharacterId(){
    const {id} = useParams();    

    const [hero, setHero] = useState<herosProps>();

    useEffect( () => {
        setTimeout( () => {
            reqHero();
        }, 3000)
    }, [])    
    
    async function reqHero() {
        const res = await getHeroById(id);     
        setHero(res);        
    }

    return(
        <>
        <div className="mt-100 character-container">
           <div className="img-content">
                <div className="position-relative">                        
                    <img src={charImg}/>
                    <div className="background-red"></div>
                </div>                    
            </div>

            <div className="character-content" key={hero?.id}>
                <div>
                <h3>{hero?.name}</h3>
                <p>{hero?.description}</p>
                </div>
               <div>
                <Button text="Mais detalhes" theme="red" onClick={()=>{}}/>
                <Button text="Add to favorite" theme="red" onClick={()=>{}}/>
               </div>
            </div>
           </div>

           <div className="mt-50">
                <CharacterItems/>
           </div>


        </>
    )
}
