import react from "react"
import {useState,useEffect} from 'react'

function Renderizardatos(url){
    const [datos, setDatos] = useState(null)
    const [error,setError]= useState(null)
    useEffect(()=>{
        fetch(url)
        .then(Response=>Response.json())
        .then(data=>setDatos(data))
        .catch(error=>setError(error))
    },[])
    return(
        {datos,error}
    )
}

export default Renderizardatos