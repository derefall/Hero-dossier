import react from 'react'

import './styles.scss'

export default function Filter(){
    return(
        <>
            <div>
                <form className="form-filter">
                    <input
                    className="default-input"
                    type="text"
                    placeholder='Hero name'
                    />

                    <input
                    className="default-input"
                    type="text"
                    placeholder='Comic name'
                    />

                    <input
                    className="default-input"
                    type="text"
                    placeholder='Serie name'
                    />

                    <select placeholder="Order by"
                    className="default-input">
                        <option>Nome</option>
                    </select>
                    
                </form>
            </div>
        </>
    )
}