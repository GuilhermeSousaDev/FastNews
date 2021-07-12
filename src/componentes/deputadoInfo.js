import React,{useEffect,useState} from 'react';
import { useParams,Link } from 'react-router-dom';

function DeputadoInfo(){
    const [data,setData] = useState([])
    const {id} = useParams()
    useEffect(async () => {
        const request = await fetch(`https://dadosabertos.camara.leg.br/api/v2/deputados/${id}`)
        const response = await request.json()
        setData(response.dados)
        for(let i in data) {
            setData(data[i])
        } 
    },[id])
    return(
        <div className="deputado-info">
            <h1>{data.nomeCivil}</h1> <br/>
            <p>CPF: {data.cpf}</p>
            <p>Nascimento: {data.dataNascimento}</p>
            <p>Escolaridade: {data.escolaridade}</p>
            <p>Município Nascimento:{data.municipioNascimento}</p>
            <p>Rede Social: {data.redeSocial? 'Sem Rede Social' : data.redeSocial}</p>
            <p>Sexo: {data.sexo}</p>
            <p>Estado Nascimento: {data.ufNascimento}</p>
            <button><Link to="/deputado">Voltar</Link></button>
        </div>
    )
}

export default DeputadoInfo;
