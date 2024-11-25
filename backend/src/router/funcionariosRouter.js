import express from 'express' 
import { login } from '../controllers/funcionariosController.js' 

const router = express.Router() 

router.post('/validar', login); 

export default router;