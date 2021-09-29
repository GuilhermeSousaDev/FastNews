import React from 'react';

function PostsList({list}){
    return(
        <>
        <div className="list-api">
            <li style={{padding:'16px 8px',listStyleType:'none'}}>
             <a href={list.url} target="_blank">{list.title}</a>
             <br/>
             <strong>Autor: {list.author}</strong>
            </li>
            <button>
             <a style={{color:'#000'}} href={list.url} target="_blank">Ver</a>
            </button>
        </div>
        </>
    )
}

export default PostsList