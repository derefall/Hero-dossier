import react from 'react'
import './styles.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'


export default function Filter(){
    const search = <FontAwesomeIcon icon={faMagnifyingGlass} />

    return(
        <>
            <div>
                <form className="form-filter">
                   <div className="position-relative">
                    <input
                        className="default-input"
                        type="text"
                        placeholder='Hero name'
                        />
                        <div className="search-icon">{search}</div>
                   </div>

                   <div className="position-relative">
                    <input
                        className="default-input"
                        type="text"
                        placeholder='Comic name'
                        />
                        <div className="search-icon">{search}</div>
                   </div>
                    
                   <div className="position-relative">
                    <input
                        className="default-input"
                        type="text"
                        placeholder='Serie name'
                        />
                        <div className="search-icon">{search}</div>
                   </div>

                    {/* <div className="select">
                        <select placeholder="Order by"
                        className="default-input">
                            <option className="option">Name</option>
                            <option>Comic Name</option>
                            <option>Nome</option>
                        </select>
                    </div> */}
                    
                </form>
            </div>
        </>
    )
}