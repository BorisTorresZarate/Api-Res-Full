import { pool } from '../config/db.js'

//validar si existe el usuario para generar la consulta de todas las publicaciones
export async function valListaPublicaciones(req, res, next){
    const { usuarioId } = req.params
    if(!usuarioId){
        return res.status(400).json({message: "usuario no identificado"})
    }
    const [ usuario ] = await pool.execute('SELECT * FROM usuario WHERE id_usuario = ?', [usuarioId])

    if(usuario.length === 0){
        return res.status(400).json({message: "usuario no encontrado"})
    }
    next()
} 
//validar si es un usuario admin o no, si lo es continua para eliminar
export async function valDeletePublicaciones(req, res, next){
    const { idUser } = req.params;
    const { idPublicacion } = req.body
    // validar si existe el usuario
    if (!idUser) {
        return res.status(400).json({ message: 'usuario no encontrado' });
    }
    const [ usuario ] = await pool.execute('SELECT * FROM usuario WHERE id_usuario = ?',[idUser])
    if(usuario.length === 0){
        return res.status(400).json({ message: 'usuario no registrado' });
    }
    //validar si faltan datos y si existe o no la publicacion
    if (!idPublicacion) {
        return res.status(400).json({ message: 'faltan datos de la publicacion' });
    }
    const [ publicacion ] = await pool.execute('SELECT * FROM publicaciones WHERE id_publicaciones = ?', [idPublicacion])
    if(publicacion.length === 0){
        return res.status(400).json({ message: 'no existe la publicacion publicacion' });
    }
    //validar si al usuario le pertenece la publicacion
    const [usuarioPublicacion] = await pool.execute('SELECT * FROM publicaciones WHERE id_publicaciones = ? AND id_usuario = ?', [idPublicacion,idUser])
    if(usuarioPublicacion.length === 0){
        return res.status(400).json({ message: 'publicacion no pertenece a usuario' });
    }
    next()
}
export async function valCreatePublicaciones(req, res, next){
    const { idUser } = req.params;
    const { titulo, contenido} = req.body;
    if(!idUser){
        return res.status(400).json({message: "usuario no identificado"})
    }
    const [ usuario ] = await pool.execute('SELECT * FROM usuario WHERE id_usuario = ?', [idUser])

    if(usuario.length === 0){
        return res.status(400).json({message: "usuario no encontrado"})
    }

    if (!titulo || !contenido) {
        return res.status(400).json({ message: 'faltan datos' });
    }
    next()
}
export async function valUpdatePublicaciones(req,res,next){
    const { idUser } = req.params;
    const { idPublicacion } = req.body
    // validar si existe el usuario
    if (!idUser) {
        return res.status(400).json({ message: 'usuario no encontrado' });
    }
    const [ usuario ] = await pool.execute('SELECT * FROM usuario WHERE id_usuario = ?',[idUser])
    if(usuario.length === 0){
        return res.status(400).json({ message: 'usuario no registrado' });
    }
    //validar si faltan datos y si existe o no la publicacion
    if (!idPublicacion) {
        return res.status(400).json({ message: 'faltan datos de la publicacion' });
    }
    const [ publicacion ] = await pool.execute('SELECT * FROM publicaciones WHERE id_publicaciones = ?', [idPublicacion])
    if(publicacion.length === 0){
        return res.status(400).json({ message: 'no existe la publicacion' });
    }
    //validar si al usuario le pertenece la publicacion
    const [usuarioPublicacion] = await pool.execute('SELECT * FROM publicaciones WHERE id_publicaciones = ? AND id_usuario = ?', [idPublicacion,idUser])
    if(usuarioPublicacion.length === 0){
        return res.status(400).json({ message: 'publicacion no pertenece a usuario' });
    }
    next()
}