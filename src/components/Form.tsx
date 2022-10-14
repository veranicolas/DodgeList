import { Button, FormControl, FormLabel, TextField } from '@mui/material'
import { useState } from 'react'
import { compareData, saveData } from '../services/dataHandling'

import './Form.css'

const FormField = ({setMatch, handleClick}:any) =>{

    const [maldito, setMaldito] = useState('')
    const [busqueda, setBusqueda] = useState('')

    const handleSubmit = () =>{
        if(maldito !== ''){
            saveData(maldito)
            handleClick()
        }
    }

    const handleSubmitSearch = () =>{
        const result = compareData(busqueda)
        console.log(result)
        if(result === undefined || result?.length === 0){
            setMatch(undefined)
        } else {
            setMatch('matches')
        }
    }

    return(
        <div className='inputsContainer'>
            <FormControl className='agregarContainer'>
                <FormLabel>Ingresa el nombre y se guarda.<br></br> Ej: Ferchito</FormLabel>
                <TextField
                    variant="outlined" 
                    onChange={(event)=> { setMaldito(event.target.value.trim())}}
                    placeholder='Ingrese al maldito' 
                />
                <Button variant="contained" onClick={handleSubmit}>Agregar al maldito</Button>
            </FormControl>
            <FormControl className='buscarContainer'>
                <FormLabel>Ingresa los nombres y se buscan los nombres del lobby entre los de la lista.<br></br> Ej: 0 8 se unió a la sala
                bera se unió a la sala...</FormLabel>
                <TextField
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