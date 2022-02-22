import Filter from "./components/Filter";

import '../../../../assets/styles/global.scss';
import CardCharacter from "./components/CardCharacter";
import { HerosProvider } from "../../../../contexts/HerosContext";

export default function FilterCharacter(){
    return(
        <>
            <HerosProvider>
                <Filter/>

                <p className="characterTitle">Characters</p>

                <CardCharacter/>
                
            </HerosProvider>

            
        </>
    )
}