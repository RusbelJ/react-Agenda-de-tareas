import { useState } from "react"
import { UsuarioAutentificacion } from "../../context/ContextUsuarios"

export function Formulario({onFinalizar}){
    const [nombreUsuario, setNombreUsuario] = useState("")
    const [correo, setCorreo] = useState("")
    const [contrasena, setContrasena] = useState("")
    //Es importante que al ejecutar esta funcion sea despues de los use State porque esta utiliza el use context
    const { registrar, error, cargando } = UsuarioAutentificacion()

    const enviarUsuario = async (e) => {
        e.preventDefault()
        const exito = await registrar(nombreUsuario, correo, contrasena)
        if (exito) {
            onFinalizar()
        }
    }

    return(<div className="w-full">
        <form className="" onSubmit={enviarUsuario}>
            <h1 className="text-center text-2xl text-black font-extrabold">Registrar nuevo usuario</h1>
            <label className="ml-3 text-xs text-white">Nombre de usuario</label>
            <input placeholder="Ingresa un usuario" 
            className="w-full bg-blue-200 ml-3 mr-3 rounded-md"
            value={nombreUsuario}
            disabled={cargando}
            onChange={(e) => setNombreUsuario(e.target.value)}
            ></input>
            <label className="ml-3 text-xs text-white ">Correo electronico</label>
            <input placeholder="Ingresa un correo" 
            className="w-full bg-blue-200 ml-3 mr-3 rounded-md"
            type="email"
            value={correo}
            disabled={cargando}
            onChange={(e) => setCorreo(e.target.value)}
            ></input>
            <label className="ml-3 text-xs text-white ">Contraseña</label>
            <input placeholder="Ingresa una contraseña" 
            className="w-full bg-blue-200 ml-3 mr-3 mb-10 rounded-md"
            type="password"
            value={contrasena}
            disabled={cargando}
            onChange={(e) => setContrasena(e.target.value)}
            ></input>

            {error && <p className="ml-3 text-red-400 text-xs mb-2">{error}</p>}

            <span 
            onClick={onFinalizar}
            disabled={cargando}
            className="ml-3 mt-10 text-xs text-white cursor-pointer underline">
                Iniciar sesion
            </span>
            <button
            type="submit"
            disabled={cargando}
            className=" w-full ml-3 bg-indigo-500 px-4 py-2 text-white rounded-md hover:bg-indigo-300">
            {cargando ? "Agregando..." : "Agregar"}
            </button>
        </form>
    </div>)
}