import { pool } from '../config/db.js'
//validar si algun campo falta para crear un usuario
export function valiCreateUsers(req, res, next){
    const { username, email, password, rol } = req.body;
    if (!username ||!email ||!password || !rol) {
        return res.status(400).json({ message: 'faltan datos' });
    }
    next()
}
//validar al usuario si es un admin o no si lo se se le muestran todos los usuarios
export async function valListaUsers(req, res, next){
    const { usuarioRolId } = req.body
    if(!usuarioRolId){
        return res.status(400).json({message: "usuario no identificado"})
    }
    const [ usuario ] = await pool.execute('SELECT * FROM usuario WHERE id_rol = ?', [usuarioRolId])

    if(usuario.length === 0){
        return res.status(400).json({message: "usuario no encontrado"})
    }
    // id 1 es el usuario administrador queremos que no ingrese rol usuario 2
    if(usuario[0].id_rol !== 1){
        return res.status(403).json({message: "usuario no permitido"})
    }
    next()
}  
export function valiUpdateUsers(req,res,next){
    const { id } = req.params
    if(!id) return res.status(400).json({message: 'no se reconoce al usuario'})
    const {nombre, email, pasword, rol} = req.body
    if(!nombre || !email ||!pasword || !rol){
        return res.status(400).json({message: "faltan datos"})
    }
    next()
}