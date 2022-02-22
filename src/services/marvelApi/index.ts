import api from '../index';
const key = '?ts=1&apikey=351a2974505301fcb90be16bb7458387&hash=4612df42cd0d75f731e921788138daa5';

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

export {getHeros, getHeroById, getHeroByName};
