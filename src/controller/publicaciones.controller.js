import {pool} from '../config/db.js'
export async function listaPublicaciones(req, res){
    try {
        const sql="SELECT p.titulo, p.contenido, p.id_usuario, c.comentario, c.id_usuario FROM publicaciones p INNER JOIN comentario c WHERE p.id_publicaciones = c.id_publicaciones"
        const [publicaciones] = await pool.query(sql)
        return res.json(publicaciones)
    } catch (error) {
        return res.status(500).json({message: "hubo un error interno " + error.message})
    }
}
export async function removePublicaciones(req, res){
    try {
        const { idUser } = req.params;
        const { idPublicacion } = req.body;
        await pool.execute('DELETE FROM publicaciones WHERE id_publicaciones = ? AND id_usuario = ?', [idPublicacion,idUser])
        return res.json({message: "publicacion eliminada"})
    } catch (error) {
        return res.status(500).json({message: "hubo un error interno " + error.message})
    }
}
export async function createPublicaciones(req, res){
    try {
        const { idUser } = req.params;
        const { titulo, contenido} = req.body;
        await pool.execute('INSERT INTO publicaciones(titulo,contenido,id_usuario) VALUES (?,?,?)', [titulo,contenido,idUser]);
        return res.status(201).json({ message: 'publicacion creada con exito' });
    } catch (error) {
        return res.status(500).json({message: "hubo un error interno" + error.message})
    }
}
export async function updatePublicaciones(req, res){
    try {
        const { idUser } = req.params;
        const { idPublicacion,titulo,contenido } = req.body;
        await pool.execute('UPDATE publicaciones SET titulo = ? , contenido = ? WHERE id_publicaciones = ? AND id_usuario = ?', [titulo,contenido,idPublicacion,idUser])
        return res.json({message: "publicacion actualizada"})
    } catch (error) {
        return res.status(500).json({message: "hubo un error interno " + error.message})
    }
}
//funcion incompleta
export async function buscarPublicacion(req, res){
    try {
        const { titulo } = req.body;
        if (!titulo) {
            return res.status(400).json({message: "se necesita ingresar un titulo para buscar"})
        }
        const {title} = `${titulo.trim()}`;
        console.log(title)
        // aqui no me acepta pasar el parametro ejemplo:  "me siento raro"
        const {publicaciones} = await pool.execute('SELECT * FROM publicaciones WHERE titulo like ?',[title])

        console.log(publicaciones)
        /* if(publicaciones.length === 0 ){
            return res.status(404).json({message: "publicacion no encontrada"})
        } */
        res.status(200).json(publicaciones + "holaaa")
    } catch (error) {
        return res.status(500).json({message: "hubo un error interno " + error.message})
    }
    
}