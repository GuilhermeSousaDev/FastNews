import React from 'react';

function ArtistList({hot}){
    return(
        <>
        <div className="list-api">
            <li style={{listStyleType:'none',margin:'8px'}}>
               <h2 style={{textTransform:'capitalize'}}>{hot.artUrl}</h2> <br/>
               <img style={{borderRadius:'5px',width:hot.pic_width,height:hot.pic_height}} src={hot.art_pic_src} /> <br/>
               <a href={hot.link}>{hot.descr}</a>
               <p style={{textTransform:'capitalize'}}>Tipo: {hot.type}</p>
            </li>
            <button><a href={hot.link}>Ver</a></button>
        </div>  
        </>
    )
}

export default ArtistList;