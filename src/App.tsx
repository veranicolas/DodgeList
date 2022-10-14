import React, { useState } from 'react'
import './App.css';
import { Box } from '@mui/material'
import { FormField } from './components/Form';
import MuiAlert , { AlertProps } from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(props,ref,) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const App = () =>{

  const [match, setMatch] = useState(undefined)
  const [open, setOpen] = useState(false)

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <Box className='mainBox'>
      <Box className='secondaryBox'>
        <h1>DodgeList</h1>
        <FormField handleClick={handleClick} setMatch={setMatch}/>
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

      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Se lo agrego al terrorista
        </Alert>
      </Snackbar>
    </Box>
  );
}

export default App;
