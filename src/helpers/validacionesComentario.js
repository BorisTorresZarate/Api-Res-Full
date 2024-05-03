import { pool } from '../config/db.js'
//validar si es un usuario admin o no, si lo es continua para eliminar
export async function valDeleteComentario(req, res, next){
    const { idUser } = req.params;
    const { idComentario, idPublicacion } = req.body
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
    //validar si existe el comentario para actualizarlo
    const [ comentario ] = await pool.execute('SELECT * FROM comentario WHERE id_comentario = ?', [idComentario])

    if(comentario.length === 0){
        return res.status(400).json({message: "comentario no existe"})
    }
    //validar si al usuario le pertenece la publicacion
    const [usuarioComentario] = await pool.execute('SELECT * FROM comentario WHERE id_publicaciones = ? AND id_usuario = ?', [idPublicacion,idUser])
    if(usuarioComentario.length === 0){
        return res.status(400).json({ message: 'comentario no pertenece a usuario' });
    }
    next()
}
export async function valCreateComentario(req, res, next){
    const { idUser } = req.params;
    const {  idPublicacion,comentario} = req.body;
    //verificar al usuario que esta creando el comentario
    if(!idUser){
        return res.status(400).json({message: "usuario no identificado"})
    }
    const [ usuario ] = await pool.execute('SELECT * FROM usuario WHERE id_usuario = ?', [idUser])

    if(usuario.length === 0){
        return res.status(400).json({message: "usuario no encontrado"})
    }
    //verificar si la publicacion existe 
    const [ publicacion ] = await pool.execute('SELECT * FROM publicaciones WHERE id_publicaciones = ?', [idPublicacion])

    if(publicacion.length === 0){
        return res.status(400).json({message: "publicacion no encontrada"})
    }
    //verificar el comentario 
    if (!comentario || !idPublicacion) {
        return res.status(400).json({ message: 'faltan datos' });
    }

    next()
}
export async function valUpdateComentario(req,res,next){
    const { idUser } = req.params;
    const { idComentario,idPublicacion } = req.body
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
    //validar si existe el comentario para actualizarlo
    const [ comentario ] = await pool.execute('SELECT * FROM comentario WHERE id_comentario = ?', [idComentario])

    if(comentario.length === 0){
        return res.status(400).json({message: "comentario no existe"})
    }
    //validar si al usuario le pertenece la publicacion
    const [usuarioPublicacion] = await pool.execute('SELECT * FROM publicaciones WHERE id_publicaciones = ? AND id_usuario = ?', [idPublicacion,idUser])
    if(usuarioPublicacion.length === 0){
        return res.status(400).json({ message: 'publicacion no pertenece a usuario' });
    }
    next()
}