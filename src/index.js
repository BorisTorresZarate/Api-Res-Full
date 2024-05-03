import express from 'express'
import {PORT} from './config/config.js'
import usuariosRouters from './routes/usuarios.routes.js'
import rolesRouters from './routes/roles.routes.js'
import publicacionesRouters from './routes/publicaciones.routes.js'
import comentarioRouters from './routes/comentario.routes.js'
import categoriaRouters from './routes/categorias.routes.js'
import {swaggerDocs} from './swaggerUI.js'
const app = express()
app.use(express.json())

//rutas
app.use(usuariosRouters)
app.use(rolesRouters)
app.use(publicacionesRouters)
app.use(comentarioRouters)
app.use(categoriaRouters)

//swagger Documentacion
swaggerDocs(app)
//crear servidor
app.listen(PORT,() => console.log(`servidor corriendo en http://localhost:${PORT}`))