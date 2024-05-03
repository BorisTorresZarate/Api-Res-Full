import { Router } from "express";
import {createUsers, listaUsers, removeUsers, updateUsers} from '../controller/usuarios.controller.js'
//modulo para importar las funciones que haces las validaciones por cada modulo
import { valListaUsers, valiCreateUsers, valiUpdateUsers } from "../helpers/validacionesUsers.js";

const router= Router()

router.get('/api/usuarios',valListaUsers,listaUsers)
router.delete('/api/usuarios/:id', removeUsers)
router.post('/api/usuarios',valiCreateUsers,createUsers)
router.put('/api/usuarios/:id',valiUpdateUsers,updateUsers)
export default router