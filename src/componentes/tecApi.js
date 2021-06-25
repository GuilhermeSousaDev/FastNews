import React,{useState,useEffect} from 'react';
import PostsList from './postslist';

function TecApi(){
    const [data,setData] = useState([])
    const [query,setQuery] = useState('')
    useEffect(async () => {
        const request = await fetch('https://hn.algolia.com/api/v1/search?query=' + query)
        const response = await request.json()
        await setTimeout(() => setData(response.hits),1000)
    },[query])
    return(
        <>
        <div className="search">
         <input 
         type='text' 
         placeholder="O que Procura?"
         onChange={e => setQuery(e.target.value)}
         />
        </div>
        <div>
        <>
           {data.length? 
              data.map(list => <PostsList key={list.id} list={list}/>) : <p>Carregando...</p>
           }
        </>
    </div>
    </>
    )
}

export default TecApi