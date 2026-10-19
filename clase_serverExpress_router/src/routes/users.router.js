import { Router } from "express";
import { uploader } from '../util.js';

const router = Router();

const data=[
    {id:1,username: 'Wilmer', email: 'wilmer@example.com', rol: 'admin'},
    {id:2,username: 'Juan', email: 'juan@example.com', rol: 'user'},
    {id:3,username: 'Maria', email: 'maria@example.com', rol: 'user'},
    {id:4,username: 'Pedro', email: 'pedro@example.com', rol: 'user'}
]


router.get('/', (req, res) => {
  res.json(data)
})

router.get('/:id/:username', (req, res) => {
  const {id, username} = req.params;
  const user = data.find(u => u.id === parseInt(id) && u.username === username);
  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }
  res.json(user);
});

router.get('/:id', (req, res) => {
  const {id} = req.params;
  const user = data.find(u => u.id === parseInt(id));
  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }
  res.json(user);
});

router.get('/consulta', (req, res) => {
  const {id, username} = req.query;  
  const user = data.find(u => u.id === parseInt(id) && u.username === username);
  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }
  res.json(user);
});

router.post('/', (req, res) => {
  const {id, username, email, rol} = req.body;
  if(!id || !username || !email || !rol) {
    return res.status(400).json({ error: 'Faltan campos para crear un usuario' });
  }
  const newUser = {id, username, email, rol};
  data.push(newUser);
  res.status(201).json(newUser);
});

//app.post('/profile', , function (req, res, next) {

router.post('/userFile',uploader.single('avatar'), (req, res) => {
  const file = req.file;
  console.log(file);
  if (!file) {
    return res.status(400).json({ error: 'No se ha subido ningún archivo' });
  }
  const {id, username, email, rol} = req.body;
  if(!id || !username || !email || !rol) {
    return res.status(400).json({ error: 'Faltan campos para crear un usuario' });
  }
  const newUser = {id, username, email, rol, file};
  data.push(newUser);
  res.status(201).json(newUser);
});

export default router;