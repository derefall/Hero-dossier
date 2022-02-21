import Filter from "./components/Filter";

import '../../../../assets/styles/global.scss';
import CardCharacter from "./components/CardCharacter";

export default function FilterCharacter(){
    return(
        <>
            <Filter/>

            <p className="characterTitle">Characters</p>

            <CardCharacter/>
        </>
    )
}