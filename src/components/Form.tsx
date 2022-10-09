import { Button, FormControl, TextField } from '@mui/material'
import { useState } from 'react'
import { cleanupData, compareData, saveData } from '../services/dataHandling'

import './Form.css'

const FormField = ({setMatch}:any) =>{

    const [hijodeputa, setHijodeputa] = useState('')
    const [busqueda, setBusqueda] = useState('')

    const handleSubmit = () =>{
        console.log(hijodeputa)
        saveData(hijodeputa)
    }

    const handleSubmitSearch = () =>{
        const result = compareData(busqueda)
        console.log(result)
        if(result?.length !== 0){
            setMatch('matches')
        } else {
            setMatch(undefined)
        }
    }

    return(
        <div className='inputsContainer'>
            <FormControl className='formContainer'>
                <TextField
                    variant="outlined" 
                    onChange={(event)=> { setHijodeputa(event.target.value)}}
                    placeholder='Ingrese al hijo de puta' 
                    label="Agregar"
                />
                <Button variant="contained" onClick={handleSubmit}>Agregar al desgraciado</Button>
            </FormControl>
            <FormControl className='formContainer'>
                <TextField
                    label="Buscar"
                    variant="outlined" 
                    onChange={(event)=> { setBusqueda(event.target.value)}}
                    placeholder='Ingrese al hijo de puta' 
                />
                <Button variant="contained" onClick={handleSubmitSearch}>Busque al desgraciado</Button>
            </FormControl>
        </div>
    )
}

export { FormField }