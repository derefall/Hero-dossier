import react from 'react';
import FilterCharacter from '../../components/FilterCharacter';
import Header from '../../components/Header';

import './styles.scss';

export default function Home(){
    return(
        <>
            <Header/>

            <div className="mt-50">
                <h1>Hero dossier</h1>
                <p className="subtitle">Seu arquivo com todos os heróis da Marvel</p>
            </div>

            <div className="line">
                <div className="charTitle">
                    <p>Os principais personagens</p>
                </div>
            </div>

            <div className="mt-100">
                <FilterCharacter/>
            </div>
        </>
    )
}