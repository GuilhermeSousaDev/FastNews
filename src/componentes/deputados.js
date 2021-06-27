import React,{useState,useEffect} from 'react';
import DeputadosList from './deputadosList';

function Deputado(){
    const [data,setData] = useState([])
    const [query,setQuery] = useState('')
    const [loading,setLoading] = useState()
    useEffect(async () => {
        const request = await fetch(`https://dadosabertos.camara.leg.br/api/v2/deputados?nome=${query}&itens=50&ordem=ASC&ordenarPor=nome`)
        const response = await request.json()
        await setTimeout(() => setData(response.dados),1000)
        if(data.length == 0){
            setTimeout(() => setLoading('Sem Resultados'),1000)
            setLoading('Carregando...')
        }
    },[query])
    return(
        <>
            <div className="search">
                <input type="text" onChange={e => setQuery(e.target.value)} placeholder="Procurar Deputado"/>
            </div>
            {data.length? data.map(list => <DeputadosList key={list.id} list={list}/>) 
            : 
            <p>{loading}</p>
            }
        </>
    )
}

export default Deputado;