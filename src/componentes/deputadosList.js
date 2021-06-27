import React from 'react';

function DeputadosList({list}){
    return(       
           <div className="list">
            <li style={{listStyleType:'none',padding:'16px 8px'}}>
                <h1>{list.nome}</h1>
                <br/>
                <img style={{width:'200px',height:'200px',borderRadius:'5px'}} src={list.urlFoto}/>
                <h4>Email: {list.email}</h4>
                <h4>Estado: {list.siglaUf}</h4>
                <h4>Partido: <a href={list.uriPartido}>{list.siglaPartido}</a></h4>
            </li>
        </div>
    )
}
export default DeputadosList;