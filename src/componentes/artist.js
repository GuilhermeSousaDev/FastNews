import React,{useState,useEffect} from 'react';
import ArtistList from './artistList';

function Artist(){
    const [data,setData] = useState([])
    const [loading,setLoading] = useState('')
    useEffect(async () => {
        const request = await fetch('https://api.vagalume.com.br/hotspots.php?')
        const response = await request.json()
        await setTimeout(() => setData(response.hotspots),1000)
        if(data.length == 0){
            setTimeout(() => setLoading('Sem Resultados'),1000)
            setLoading('Carregando...')
        }
    },[])
    return(
        <> 
        <div className="api">
           <h1>Novidades</h1> 
        </div>
        <>
            {data.length? data.map(hot => <ArtistList key={hot.id} hot={hot}/>) : <p style={{textAlign:'center'}}>{loading}</p>}
        </>
        
        </>
    )
}

export default Artist;