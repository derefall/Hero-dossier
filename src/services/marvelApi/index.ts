import api from '../index';
const key = '?ts=1&apikey=3947fb879368e816e4a997495b3a49aa&hash=afb5985cd38bfc27eb71a885782a3d20';

async function getHeros(){    
    const {data} = await api.get('characters' + key);
    return data.data.results;
}

async function getHeroById(id?: string){
    const {data} = await api.get('characters/' + id + key);
    return data.data.results[0];
}

async function getHeroByName(name: string){
    const {data} = await api.get('characters' + key, {
        params:{
            nameStartsWith: name
        }
    });
    return data.data.results;
}

async function getComicsByHero(id: string){
    const {data} = await api.get('comics/'+ id + key, {});
    return data.data.results;
}

export {getHeros, getHeroById, getHeroByName};
