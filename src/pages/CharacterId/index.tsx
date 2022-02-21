import react from 'react';
import './styles.scss'

import Button from '../../components/Button';
import CharacterItems from './components/CharacterItems';
const charImg = require("../../assets/images/a-bomb.jpg");


export default function CharacterId(){
    return(
        <>
           <div className="mt-100 character-container">
           <div className="img-content">
                <div className="position-relative">                        
                    <img src={charImg}/>
                    <div className="background-red"></div>
                </div>                    
            </div>

            <div className="character-content">
                <div>
                <h3>A-Bom (HAS)</h3>
                <p>Rick Jones has been Hulk's best bud since day one, but now he's more than a friend...he's a teammate! Transformed by a Gamma energy explosion, A-Bomb's thick, armored skin is just as strong and powerful as it is blue. And when he curls into action, he uses it like a giant bowling ball of destruction! </p>
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
