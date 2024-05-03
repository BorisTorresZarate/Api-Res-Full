import express from 'express'
import {PORT} from './config/config.js'
import usuariosRouters from './routes/usuarios.routes.js'
import rolesRouters from './routes/roles.routes.js'
import publicacionesRouters from './routes/publicaciones.routes.js'
import comentarioRouters from './routes/comentario.routes.js'
import categoriaRouters from './routes/categorias.routes.js'

const app = express()
app.use(express.json())

/* //cors
app.use((req,res,next)=>{
    const {origin} = req.headers

    if(origin === undefined) return next()

    const permitidos = ['http://127.0.0.1:5500']

    if(permitidos.includes(origin)){
        res.setHeader('Access-Control-Allow-Origin',origin)
        next();
    }
}) */

//rutas
app.use(usuariosRouters)
app.use(rolesRouters)
app.use(publicacionesRouters)
app.use(comentarioRouters)
app.use(categoriaRouters)

//crear servidor
app.listen(PORT,() => console.log(`servidor corriendo en http://localhost:${PORT}`))