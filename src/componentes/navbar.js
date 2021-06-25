import React,{useState} from 'react';
import {NavLink} from 'react-router-dom'

function Navbar(){
    const [show,setShow] = useState(false)
    const [politic,setPolitic] = useState(false)
    const showLinks = () => show? setShow(false) : setShow(true)
    const showPolitic = () => politic? setPolitic(false) : setPolitic(true)
    return(
        <nav>
            <h1>Sneecss</h1>
            <NavLink exact activeStyle={{background:'#fff'}} to="/">Tecnologia</NavLink> 
            <div onClick={showLinks} style={{cursor:'pointer'}}>Música         
                {show? 
                <div className="link">
                <NavLink to="/music">Principais Noticias</NavLink> 
                <NavLink to="/artist">Artistas</NavLink>
                </div> : ''}   
                </div>      
                <div onClick={showPolitic} style={{cursor:'pointer'}}>Política
                        {politic? 
                        <div className='link'>
                            <NavLink to="/deputado">Lista de Deputados</NavLink>
                        </div> : ''}
                </div>         
        </nav>
    )
}

export default Navbar