import Button from "../../../../components/Button";

import './styles.scss'

const charImg = require("../../../../assets/images/comic.jpg");

export default function CharacterItems(id?: any){
    return(
        <>
            <div className="line">
                <ul>
                    <li>Comics</li>
                    <li>Series</li>
                    <li>Stories</li>
                    <li>Events</li>
                </ul>
            </div>

            <div className="items-content">
                <div className="container-items">
                            <div className="item-description">
                                <h4>FREE COMIC BOOK DAY 2013 1 (2013) #1</h4>
                                <p>Writer - Joe Caramagna</p>
                                <p>First sale - 20/03/2013</p>
                            </div>

                            <div className="item-description">
                                <h4>FREE COMIC BOOK DAY 2013 1 (2013) #1</h4>
                                <p>Writer - Joe Caramagna</p>
                                <p>First sale - 20/03/2013</p>
                            </div>

                            <div className="item-description">
                                <h4>FREE COMIC BOOK DAY 2013 1 (2013) #1</h4>
                                <p>Writer - Joe Caramagna</p>
                                <p>First sale - 20/03/2013</p>
                            </div>

                            <Button text="Show more" theme="red" onClick={()=>{}}/>
                        </div>
                        <div className="container-img">
                            <img src={charImg}/>
                        </div>
            </div>
        </>
    )
}