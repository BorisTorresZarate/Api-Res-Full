import {pool} from '../config/db.js'
export async function listaCategoria (req, res){
    try {
        const sql="SELECT * FROM categoria"
        const [categoria] = await pool.query(sql)
        return res.json(categoria)
    } catch (error) {
        return res.status(500).json({message: "hubo un error interno " + error.message})
    }
}
export async function removeCategoria (req, res){
    try {
        const { idCategoria } = req.body
        await pool.execute('DELETE FROM categoria WHERE id_categoria = ? ', [idCategoria])
        return res.json({message: "categoria eliminada"})
    } catch (error) {
        return res.status(500).json({message: "hubo un error interno " + error.message})
    }
}
export async function createCategoria (req, res){
    try {
        const { categoria } = req.body;
        //rol por defecto al crear usuario con rol usuario = 2
        await pool.execute('INSERT INTO categoria(categoria_nombre) VALUES (?)', [categoria]);
        return res.status(201).json({ message: 'categoria creada con exito' });
    } catch (error) {
        return res.status(500).json({message: "hubo un error interno" + error.message})
    }
}
export async function updateCategoria (req, res){
    try {
        const {idcategoria,categoria} = req.body
        await pool.execute('UPDATE categoria SET categoria_nombre = ? WHERE id_categoria = ?', [categoria,idcategoria])
        return res.json({message: "categoria actualizada"})
        
    } catch (error) {
        res.status(500),json({message: "hubo un error interno " + error.message})
    }
}