import React from 'react'
import './styles.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { HerosContext } from '../../../../../../contexts/HerosContext'


export default function Filter(){
    const search = <FontAwesomeIcon icon={faMagnifyingGlass} />

    const {paramters, setParamters} = React.useContext(HerosContext);

    return(
        <>
            <div>
                <form className="form-filter">
                    
                   <div className="position-relative">
                    <input
                        className="default-input"
                        type="text"
                        placeholder='Hero name'
                        onChange={(e) => setParamters(e.target.value)}
                        value={paramters}
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