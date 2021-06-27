import React from 'react';

function MusicList({music}){
    return(
        <>
        <div className="list-api">
            <li style={{padding:'16px 8px',listStyleType:'none'}}>
             <a href={music.url} target="_blank">{music.headline}</a>
             <br/>
             <img src={`https://${music.pic_src}`}/>
             <h4>Notícia: {music.kicker}</h4>
             <h4>Tema: {music.featured}</h4>
             <strong>Data: {music.inserted}</strong>
            </li>
            <button>
             <a style={{color:'#000'}} 
             href={music.url} 
             target="_blank"
             >Ver</a>
            </button>
        </div>
        </>
    )
}

export default MusicList