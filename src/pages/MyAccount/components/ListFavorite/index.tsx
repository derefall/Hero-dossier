import Button from "../../../../components/Button";

import './styles.scss'

const charImg = require("../../../../assets/images/a-bomb.jpg");

export default function ListFavorite(){
    return(

        <>
            <div className='blueContainer'>
                <div className="img-container">
                    <img src={charImg}/>
                </div>
                <div className="content-container">
                    <h3>A-Bomb (HAS)</h3>
                    <div>
                    <div className="margin-button"><Button text="More details" theme="red" onClick={()=>{}}/></div>
                    <Button text="Remove favorite" theme="red" onClick={()=>{}}/>
                    </div>
                </div>
            </div>
        </>

    )
}