import * as React from 'react';
// import { useTheme } from '@mui/material/styles';
import Title from './Title';
import Input from '@mui/material/Input';
import FormHelperText from '@mui/material/FormHelperText';
import Box from '@mui/material/Box';

const categories = ['Categoría 1', 'Categoría 2', 'Categoría 3', 'Categoría 4', 'Categoría 5'];

import { TextField, Button, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import { useState } from 'react';

export default function Form() {
  // const theme = useTheme();
  const [age, setAge] = React.useState('');
  const [categoria, setCategoria] = useState('');
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes realizar la lógica para enviar el formulario
    console.log('Categoría:', categoria);
    console.log('Nombre:', nombre);
    console.log('Descripción:', descripcion);
  };


  return (
    <React.Fragment>
      <Title>Crear Movimiento</Title>
      <Box
      component="form"
     
    >
      <form onSubmit={handleSubmit}>
      <FormControl sx={{ marginBottom: 2 }}>
        <InputLabel id="categoria-label">Categoría</InputLabel>
        <Select
          labelId="categoria-label"
          id="categoria"
          value={categoria}
          onChange={(e) => setCategoria(e.target.value)}
          fullWidth
        >
          {categories.map((cat) => (
            <MenuItem key={cat} value={cat}>
              {cat}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <TextField
        id="nombre"
        label="Nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        fullWidth
        sx={{ marginBottom: 2 }}
      />

      <TextField
        id="descripcion"
        label="Descripción"
        value={descripcion}
        onChange={(e) => setDescripcion(e.target.value)}
        fullWidth
        multiline
        rows={4}
        sx={{ marginBottom: 2 }}
      />

      <Button type="submit" variant="contained" color="primary">
        Enviar
      </Button>
    </form>
    </Box>
    </React.Fragment>
  );
}
