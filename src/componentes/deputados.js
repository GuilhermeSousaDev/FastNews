import React,{useState,useEffect} from 'react';
import DeputadosList from './deputadosList';
import {ArrayContext} from './context'

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
        <ArrayContext.Provider value={{data}}>
            <div className="search">
                <input type="text" onChange={e => setQuery(e.target.value)} placeholder="Procurar Deputado"/>
            </div>
            <DeputadosList/>     
            <p style={{textAlign:'center'}}>{loading}</p>
        </ArrayContext.Provider>
    )
}

export default Deputado;