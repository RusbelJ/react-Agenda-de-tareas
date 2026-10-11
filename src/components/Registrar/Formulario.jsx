import { useState, useRef } from "react"
import { UsuarioAutentificacion } from "../../context/ContextUsuarios"

export function Formulario({onFinalizar, onIniciar}){
    const [nombreUsuario, setNombreUsuario] = useState("")
    const [correo, setCorreo] = useState("")
    const [contrasena, setContrasena] = useState("")
    const enviandoRef = useRef(false)
    //Es importante que al ejecutar esta funcion sea despues de los use State porque esta utiliza el use context
    const { registrar, cargando, setCargando } = UsuarioAutentificacion()

    const ocupado = cargando

    const enviarUsuario = async (e) => {
    e.preventDefault()
    if (enviandoRef.current) return   // bloquea doble clic inmediato

    enviandoRef.current = true
    setCargando(true)                 // desactiva el botón en el siguiente render

    try {
      const exito = await registrar(nombreUsuario, correo, contrasena)
      if (exito) onFinalizar()
    } finally {
      enviandoRef.current = false
      setCargando(false)
    }
  }

    return(<div className="w-full">
        <form className="" onSubmit={enviarUsuario}>
            <h1 className="text-center text-2xl text-black font-extrabold">Registrar nuevo usuario</h1>
            <label className="ml-3 text-xs text-white">Nombre de usuario</label>
            <input placeholder="Ingresa un usuario" 
            className="w-full bg-blue-200 ml-3 mr-3 rounded-md"
            value={nombreUsuario}
            disabled={ocupado}
            onChange={(e) => setNombreUsuario(e.target.value)}
            ></input>
            <label className="ml-3 text-xs text-white ">Correo electronico</label>
            <input placeholder="Ingresa un correo" 
            className="w-full bg-blue-200 ml-3 mr-3 rounded-md"
            type="email"
            value={correo}
            disabled={ocupado}
            onChange={(e) => setCorreo(e.target.value)}
            ></input>
            <label className="ml-3 text-xs text-white ">Contraseña</label>
            <input placeholder="Ingresa una contraseña" 
            className="w-full bg-blue-200 ml-3 mr-3 mb-10 rounded-md"
            type="password"
            value={contrasena}
            disabled={ocupado}
            onChange={(e) => setContrasena(e.target.value)}
            ></input>
            <span 
            onClick={onIniciar}
            className="ml-3 mt-10 text-xs text-white cursor-pointer underline">
                Iniciar sesion
            </span>
            <button
            type="submit"
            disabled={ocupado}
            className=" w-full ml-3 bg-indigo-500 px-4 py-2 text-white rounded-md hover:bg-indigo-300 disabled:opacity-50">
            {ocupado ? "Agregando..." : "Agregar"}
            </button>
        </form>
    </div>)
}