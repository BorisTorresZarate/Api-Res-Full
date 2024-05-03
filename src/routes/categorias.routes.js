import { Router } from "express";
import { createCategoria, listaCategoria, removeCategoria, updateCategoria } from '../controller/categoria.controller.js'
import { valCreateCategoria, valDeleteCategoria, valListaCategoria, valUpdateCategoria } from "../helpers/validacionesCategoria.js";
const router= Router()
//motrar,eliminar,crear y actualizar una categoria
router.get('/api/categoria',valListaCategoria,listaCategoria)
router.delete('/api/categoria/:idRolUser',valDeleteCategoria,removeCategoria)
router.post('/api/categoria/:idRolUser',valCreateCategoria ,createCategoria)
router.put('/api/categoria/:idRolUser',valUpdateCategoria,updateCategoria)
export default router