import react, { useEffect, useState } from 'react';
import './styles.scss'

import Button from '../../components/Button';
import CharacterItems from './components/CharacterItems';
import { useNavigate, useParams } from 'react-router-dom';
import { getHeroById } from '../../services/marvelApi';
import { herosProps } from '../../types/heros';


export default function CharacterId(){
    const {id} = useParams();    

    const [hero, setHero] = useState<herosProps>();

    const navigate = useNavigate();
    const portrait = '/portrait_xlarge.';

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
                    <img src={hero?.thumbnail.path + portrait + hero?.thumbnail.extension}/>
                    <div className="background-red"></div>
                </div>                    
            </div>

            <div className="character-content" key={hero?.id}>
                <div>
                    <h3>{hero?.name}</h3>
                    <p>{hero?.description}</p>
                </div>
               <div>
                    <Button text="More details" theme="red" onClick={()=>{}}/>
                    <Button text="Add to favorite" theme="red" onClick={()=>{}}/>
               </div>
            </div>
           </div>

           <div className="mt-50">
                <CharacterItems id={id}/>
           </div>


        </>
    )
}
