// app.js

const express = require('express');
const path = require('path')
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res)=>{
    res.set('Content-Type', 'text/html');
    res.status(200).send("<h1>Bienvenido al puerto 1789 (fecha de la revolución francesa)</h1>");
});

// --- RUTAS DE LA API REST (Operaciones CRUD) ---
// Obtener una lista de recursos (Lectura)
app.get('/estudiante', (req, res) => { 
    res.json({ message: 'Mostrando lista de estudiantes' }); 
});

// Crear un nuevo recurso
app.post('/estudiante', (req, res) => {
    const nuevoEstudiante = req.body; 
    res.json({ message: 'Estudiante creado', user: nuevoEstudiante }); 
});

// Actualizar un recurso existente (usando un parámetro dinámico en la URL)
app.put('/estudiante/:id', (req, res) => { 
    const IdEstudainte = req.params.id; 
    const Actualizado = req.body; 
    res.json({ message: `Estudiante con ID ${IdEstudainte} actualizado`, user: Actualizado });
});

// Eliminar un recurso existente
app.delete('/estudiante/:id', (req, res) => { 
    const IdEstudainte = req.params.id;
    res.json({ message: `Estudiante con ID ${IdEstudainte} eliminado` }); 
});

// --- ENVÍO DE ARCHIVOS ESPECÍFICOS ---

app.use('/static', express.static(path.join(__dirname, 'Static Files')))

app.get('/file', (req, res)=>{
    res.sendFile(path.join(__dirname,'image.jpg'));
});

app.listen(PORT, (error) =>{
    if(!error)
        console.log("Server is Successfully Running, and App is listening on port "+ PORT);
    else 
        console.log("Error occurred, server can't start", error);
    }
);
