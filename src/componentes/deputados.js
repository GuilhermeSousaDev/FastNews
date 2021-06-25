import React,{useState,useEffect} from 'react';
import DeputadosList from './deputadosList';


function Deputado(){
    const [data,setData] = useState([])
    const [id,setId] = useState('')
    const [query,setQuery] = useState('')
    useEffect(async () => {
        const request = await fetch(`https://dadosabertos.camara.leg.br/api/v2/deputados?nome=${query}&itens=50&ordem=ASC&ordenarPor=nome`)
        const response = await request.json()
        await setTimeout(() => setData(response.dados),1000)
        data.map(list => setId(list.uri))
        console.log(id)
    },[query])
    useEffect(async (id) => {

    })
    return(
        <>
            <div className="search">
                <input type="text" onChange={e => setQuery(e.target.value)} placeholder="Procurar Deputado"/>
            </div>
            {data.length? data.map(list => <DeputadosList key={list.id} list={list}/>) 
            : 
            <p>Carregando...</p>}
        </>
    )
}

export default Deputado;