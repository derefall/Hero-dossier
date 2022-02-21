import { ButtonProps } from "./types";
import './styles.scss';

export default function Button({text, onClick, theme, icon}:ButtonProps){
    return(
        <button 
        className={theme} 
        onClick={onClick}>
            <>
                {icon&& "Teste"}
                {text}
            </>
        </button>
    )
}