
import { pool } from "../config/db.js"
export const index = async (req, res)=>{
    try {
        const [roles]= await pool.query('SELECT * FROM roles')
        return res.json(roles)
    } catch (error) {
        return res.status(500).json({message: "hubo un error interno", details: error.message})
    }
}