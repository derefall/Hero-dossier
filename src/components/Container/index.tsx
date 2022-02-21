import react from "react";
import { ContainerProps } from "./types";

import './styles.scss';

export default function Container({children}:ContainerProps){
    return(
        <div className="container">{children}</div>
    )
}