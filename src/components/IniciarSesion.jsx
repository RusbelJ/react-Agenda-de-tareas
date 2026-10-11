import { useState, useRef } from "react"
import { UsuarioAutentificacion } from "../context/ContextUsuarios"

export function IniciarSesion({onFinalizar, onRegistrar}) {
    const [correo, setCorreo] = useState("")
    const [contrasena, setContrasena] = useState("")
    const enviandoRef = useRef(false)
    
    const { iniciarSesion, cargando, setCargando } = UsuarioAutentificacion()

    const ocupado = cargando

    const enviarUsuario = async (e) => {
    e.preventDefault()
    if (enviandoRef.current) return   // bloquea doble clic inmediato

    enviandoRef.current = true
    setCargando(true)                 // desactiva el botón en el siguiente render

    try {
      const exito = await iniciarSesion(correo, contrasena)
      if (exito) onFinalizar()
    } finally {
      enviandoRef.current = false
      setCargando(false)
    }
  }

    return (
            <div className="w-full min-h-screen flex items-center justify-center bg-[url('/fondo_pg_registrar.jpg')] bg-cover bg-center bg-no-repeat">
                <div className="w-1/2 h-96 bg-gray-700 p-5 rounded-2xl flex">
                    <img 
                    src='Iniciarsesion.jpg' 
                    alt="/Foto_de_gatito"  
                    className="w-1/2 h-full object-cover rounded-3xl"
                    />
                    <form onSubmit={enviarUsuario} className="w-full">
                        <h1 className="text-center text-2xl text-black font-extrabold">Iniciar sesion</h1>
                        <label className="block w-full ml-3 mt-5 text-xs text-white ">Correo electronico</label>
                        <input placeholder="Ingresa un correo" 
                        className="w-full bg-blue-200 ml-3 mr-3 mt-5 p-1 rounded-md"
                        type="email"
                        value={correo}
                        onChange={(e) => setCorreo(e.target.value)}
                        ></input>
                        <label className=" block w-full ml-3 mt-5 text-xs text-white ">Contraseña</label>
                        <input placeholder="Ingresa una contraseña" 
                        className="w-full bg-blue-200 ml-3 mr-3 mt-5 p-1 rounded-md"
                        type="password"
                        disabled={ocupado}
                        value={contrasena}
                        onChange={(e) => setContrasena(e.target.value)}
                        ></input>
                        <span 
                        className="block ml-3 mt-5 mb-1 text-xs text-white cursor-pointer underline"
                        onClick={onRegistrar}>
                            Registrarse
                        </span>
                        <button
                        type="submit"
                        disabled={ocupado}
                        className=" w-full ml-3 bg-indigo-500 px-4 py-2 text-white rounded-md hover:bg-indigo-300 disabled:opacity-50">
                        {ocupado ? "Iniciando..." : "Iniciar sesion"}
                        </button>
                    </form>
                </div>
                
            </div>
        )
}