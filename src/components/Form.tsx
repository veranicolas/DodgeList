import { Button, FormControl, TextField } from '@mui/material'
import { useState } from 'react'
import { compareData, saveData } from '../services/dataHandling'

import './Form.css'

const FormField = ({setMatch}:any) =>{

    const [maldito, setMaldito] = useState('')
    const [busqueda, setBusqueda] = useState('')

    const handleSubmit = () =>{
        console.log(maldito)
        saveData(maldito)
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
                    onChange={(event)=> { setMaldito(event.target.value)}}
                    placeholder='Ingrese al maldito' 
                    label="Agregar"
                />
                <Button variant="contained" onClick={handleSubmit}>Agregar al maldito</Button>
            </FormControl>
            <FormControl className='formContainer'>
                <TextField
                    label="Buscar"
                    variant="outlined" 
                    onChange={(event)=> { setBusqueda(event.target.value)}}
                    placeholder='Ingrese al maldito' 
                />
                <Button variant="contained" onClick={handleSubmitSearch}>Busque al maldito</Button>
            </FormControl>
        </div>
    )
}

export { FormField }