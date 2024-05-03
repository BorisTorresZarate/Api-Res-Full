import { Router } from "express";
import { buscarPublicacion, createPublicaciones, listaPublicaciones, removePublicaciones, updatePublicaciones } from "../controller/publicaciones.controller.js";
import { valCreatePublicaciones, valDeletePublicaciones, valListaPublicaciones, valUpdatePublicaciones } from "../helpers/validacionesPublicaciones.js";

const router= Router()

router.get('/api/publicaciones/:usuarioId',valListaPublicaciones,listaPublicaciones)
router.delete('/api/publicaciones/:idUser',valDeletePublicaciones,removePublicaciones)
router.post('/api/publicaciones/:idUser',valCreatePublicaciones,createPublicaciones)
router.put('/api/publicaciones/:idUser',valUpdatePublicaciones,updatePublicaciones)
router.get('/publicaciones/busqueda',buscarPublicacion)
export default router