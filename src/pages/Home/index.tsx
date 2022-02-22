import react from 'react';
import FilterCharacter from './componentes/FilterCharacter/index';

import './styles.scss';

export default function Home(){
    return(
        <>            

            <div className="mt-50">
                <h1>Hero dossier</h1>
                <p className="subtitle">Your dossier with all Marvel heroes </p>
            </div>

            <div className="mt-100">
                <FilterCharacter/>
            </div>


        </>
    )
}