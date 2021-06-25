import React,{useState,useEffect} from 'react';

function Artist(){
    const [data,setData] = useState([])
    const [query,setQuery] = useState('')
    useEffect(async () => {
        const request = await fetch(`https://dadosabertos.camara.leg.br/api/v2/deputados?nome=arthur&ordem=ASC&ordenarPor=nome`)
        const response = await request.json()
        console.log(response);
        //await setTimeout(() => setData(response.response.docs),1000)
    },[])
    return(
        <>
        <div className='list-api'>
            <input type="text" onChange={e => setQuery(e.target.value)}/>
        </div>
        
        </>
    )
}

export default Artist;