import { Router } from "express";
import { createComentario, removerComentario, updatecomentario } from "../controller/comentario.controller.js";
import { valCreateComentario, valDeleteComentario, valUpdateComentario } from "../helpers/validacionesComentario.js";

const router= Router()

router.delete('/api/comentario/:idUser',valDeleteComentario,removerComentario)
router.post('/api/comentario/:idUser',valCreateComentario,createComentario)
router.put('/api/comentario/:idUser',valUpdateComentario,updatecomentario)
export default router