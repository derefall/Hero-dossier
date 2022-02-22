import { createContext, ReactNode, useEffect, useState } from "react";
import { getHeros, getHeroByName } from "../services/marvelApi";
import { herosProps } from "../types/heros";

type HeroContextType = {
    heros: any;
    setHeros: any;
    paramters: any;
    setParamters: any;
  }

export const HerosContext = createContext({} as HeroContextType);

export function HerosProvider(props:any){
    const [heros, setHeros] = useState<herosProps>();

    const [paramters, setParamters]= useState<any>();

    useEffect( () => {
        setTimeout( () => {
            reqHeros();          
        }, 3000)
    }, [])    ;

    useEffect( () => {
        reqHerosParamters(paramters);
    });  
    
    async function reqHeros() {
        const res = await getHeros();    
        setHeros(res);     
    }

    async function reqHerosParamters(name:string){
        if(name === undefined || name === ''){
            reqHeros();
        }
        else{
            const res = await getHeroByName(name);
            setHeros(res); 
        }
    }

    return(

        <HerosContext.Provider value={{heros, setHeros, paramters, setParamters}}>
            {props.children}
        </HerosContext.Provider>

    )

}