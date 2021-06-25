import React,{useState,useEffect} from 'react';
import MusicList from './musicList';

function MusicApi(){
    const [data,setData] = useState([])
    useEffect(async () => {
        const request = await fetch('https://www.vagalume.com.br/news/index.js')
        const response = await request.json()
        await setTimeout(() => setData(response.news),1000)
    },[])
    return(
        <div className="api">
            <h1>Principais Notícias</h1>
            <h1>Do Mundo da Música</h1>
            {data.length? 
            data.map(music => <MusicList key={music.id} music={music}/>) : <p>Carregando...</p>
            }
        </div>
    )
}

export default MusicApi