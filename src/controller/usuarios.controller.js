
import {pool} from '../config/db.js'
export async function listaUsers (req,res){
    try {
        const sql="SELECT * FROM usuario"
        const [usuarios] = await pool.query(sql)
        return res.json(usuarios)
    } catch (error) {
        return res.status(500).json({message: "hubo un error interno"})
    }
}
//eliminar usuario
export async function removeUsers(req, res){
    try {
        const { id } = req.params
        await pool.execute('DELETE FROM usuario WHERE id_usuario = ? ', [id])
        return res.json({message: "usuario eliminado"})
    } catch (error) {
        return res.status(500).json({message: "hubo un error interno " + error.message})
    }
}
//registrar usuario
export async function createUsers (req, res){
    try {
        const { username, email, password, rol } = req.body;
        //rol por defecto al crear usuario con rol usuario = 2
        await pool.execute('INSERT INTO usuario(usuario_nombre, email, pasword, id_rol) VALUES (?,?,?,?)', [username, email, password, rol]);
        return res.status(201).json({ message: 'usuario creado con exito' });
    } catch (error) {
        return res.status(500).json({message: "hubo un error interno" + error.message})
    }
}
//actualizar datos de usuario
export async function updateUsers(req, res){
    try {
        const { id } = req.params
        const {nombre,email,pasword,rol} = req.body
        await pool.execute('UPDATE usuario SET usuario_nombre = ?, email = ?, pasword = ?, id_rol = ? WHERE id_usuario = ?', [nombre,email,pasword,rol,id])
        return res.json({message: "usuario actualizado"})
        
    } catch (error) {
        res.status(500),json({message: "hubo un error interno"})
    }
}
