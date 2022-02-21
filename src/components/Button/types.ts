import { ReactNode } from "react";

export type ButtonProps = {
    onClick: ()=>void,
    theme: ButtonTheme,
    text: string,
    icon?: string,    

}

export type ButtonTheme = "blue" | "red";