import {pool} from '../config/db.js'
export async function removerComentario(req , res){
    try {
        const {idComentario} = req.body
        await pool.execute('DELETE FROM comentario WHERE id_comentario = ?', [idComentario])
        return res.json({message: "comentario eliminado"})
    } catch (error) {
        return res.status(500).json({message: "hubo un error interno " + error.message})
    }
}
export async function createComentario(req , res){
    try {
        const { idUser } = req.params;
        const { comentario, idPublicacion} = req.body;
        await pool.execute('INSERT INTO comentario (comentario,id_publicaciones,id_usuario) VALUES (?,?,?)', [comentario,idPublicacion,idUser]);
        return res.status(201).json({ message: 'comentario creado con exito' });
    } catch (error) {
        return res.status(500).json({message: "hubo un error interno" + error.message})
    }
}
export async function updatecomentario(req , res){
    try {
        const { idComentario,comentario } = req.body;
        await pool.execute('UPDATE comentario SET comentario = ?  WHERE id_comentario = ?', [comentario,idComentario])
        return res.json({message: "comentario actualizado"})
    } catch (error) {
        return res.status(500).json({message: "hubo un error interno " + error.message})
    }
}