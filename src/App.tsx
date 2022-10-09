import { useState } from 'react'
import './App.css';
import { Box } from '@mui/material'
import { FormField } from './components/Form';

const App = () =>{

  const [match, setMatch] = useState(undefined)

  return (
    <Box className='mainBox'>
      <Box className='secondaryBox'>
        <h1>DodgeList</h1>
        <FormField setMatch={setMatch}/>
        {
          match !== undefined ? 
          (
            <div className='dodgeBox'>
              <p>DODGEA ESE LOBBY</p>
            </div>
          ) 
          : 
          (<></>)
        }
      </Box>
    </Box>
  );
}

export default App;
