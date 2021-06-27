import React,{useState,useEffect} from 'react';
import MusicList from './musicList';

function MusicApi(){
    const [data,setData] = useState([])
    const [loading,setLoading] = useState('')
    useEffect(async () => {
        const request = await fetch('https://www.vagalume.com.br/news/index.js')
        const response = await request.json()
        await setTimeout(() => setData(response.news),1000)
        if(data.length == 0){
            setTimeout(() => setLoading('Sem Resultados'),1500)
            setLoading('Carregando...')
        }
    },[])
    return(
        <div className="api">
            <h1>Principais Notícias</h1>
            {data.length? 
            data.map(music => <MusicList key={music.id} music={music}/>) : <p>{loading}</p>
            }
        </div>
    )
}

export default MusicApi