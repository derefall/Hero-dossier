import ListFavorite from './components/ListFavorite'
import './styles.scss'

export default function MyAccount(){
    return(
        <>
            <div className="mt-50">
                <h1>Hero dossier</h1>
                <p className="subtitle">Favorite characters</p>
                <div className="container-btn">
                    <p>john_doe@gmail.com</p>
                    <a>Exit</a>
                </div>
            </div>

            <div className="mt-50">
                <ListFavorite/>
            </div>
        </>
    )
}