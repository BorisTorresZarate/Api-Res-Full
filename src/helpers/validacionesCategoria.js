import { pool } from '../config/db.js'

//validar al usuario si es un admin o no si lo se se le muestran todos los usuarios
export async function valListaCategoria(req, res, next){
    const { usuarioId } = req.body
    if(!usuarioId){
        return res.status(400).json({message: "usuario no identificado"})
    }
    const [ usuario ] = await pool.execute('SELECT * FROM usuario WHERE id_rol = ?', [usuarioId])

    if(usuario.length === 0){
        return res.status(400).json({message: "usuario no encontrado"})
    }
    // id 1 es el usuario administrador queremos que no ingrese rol usuario 2
    if(usuario[0].id_rol != 1){
        return res.status(403).json({message: "usuario no permitido para ver lista de categorias"})
    }
    next()
} 
//validar si es un usuario admin o no, si lo es continua para eliminar
export async function valDeleteCategoria(req, res, next){
    const { idRolUser } = req.params;
    //admin tiene el id 1 si es diferente a 1 no es admin
    if (idRolUser != 1) {
        return res.status(400).json({ message: 'usuario no autorizado para eliminar categorias' });
    }
    const { idCategoria } = req.body
    const [ categoria ] = await pool.execute('SELECT * FROM categoria WHERE id_categoria = ?',[idCategoria])
    if(categoria.length === 0){
        return res.status(400).json({ message: 'categoria no encontrada' });
    }
    next()
}
export async function valCreateCategoria(req, res, next){
    const { idRolUser } = req.params;
    const { categoria } = req.body;
    if(!idRolUser){
        return res.status(400).json({message: "usuario no identificado"})
    }
    const [ usuario ] = await pool.execute('SELECT * FROM usuario WHERE id_rol = ?', [idRolUser])

    if(usuario.length === 0){
        return res.status(400).json({message: "usuario no encontrado"})
    }
    // id 1 es el usuario administrador queremos que no ingrese rol usuario 2 y los demas roles si existiera
    if(usuario[0].id_rol != 1){
        return res.status(403).json({message: "usuario no permitido para crear una categorias"})
    }
    
    if (!categoria) {
        return res.status(400).json({ message: 'faltan datos' });
    }
    next()
}
export async function valUpdateCategoria(req,res,next){
    const { idRolUser } = req.params
    const {idcategoria,categoria} = req.body
    if(!idRolUser){
        return res.status(400).json({message: "usuario no identificado"})
    }
    const [ usuario ] = await pool.execute('SELECT * FROM usuario WHERE id_rol = ?', [idRolUser])

    if(usuario.length === 0){
        return res.status(400).json({message: "usuario no encontrado"})
    }
    // id 1 es el usuario administrador queremos que no ingrese rol usuario 2 y los demas roles si existiera
    if(usuario[0].id_rol != 1){
        return res.status(403).json({message: "usuario no permitido para actualizar una categoria"})
    }

    if (!categoria || !idcategoria) {
        return res.status(400).json({ message: 'faltan datos' });
    }
    next()
}