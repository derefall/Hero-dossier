
import './styles.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart} from '@fortawesome/free-solid-svg-icons'

export default function Footer(){

    const element = <FontAwesomeIcon icon={faHeart} />
    return(
        <div className="background-footer">
            <div className="d-flex">
                Feito com <div className="heartIcon">{element}</div> por Thayane Bomfim
            </div>
        </div>
    )
}