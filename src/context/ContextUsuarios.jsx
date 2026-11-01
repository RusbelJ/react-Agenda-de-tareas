import { createContext, useContext, useState } from "react"
import { auth, db } from "../firebase"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"
import { doc, setDoc } from "firebase/firestore"

const ContextUsuario = createContext()

export function UsuarioAutentificacion() {
    return useContext(ContextUsuario)
}

export function ContextUsuarioProvider({ children }) {
    const [usuario, setUsuario] = useState(null)
    const [cargando, setCargando] = useState(false)
    const mostrarErrorYRecargar = (mensaje) => {
        alert(mensaje)
        window.location.reload()
    }

    const registrar = async (nombreUsuario, correo, contrasena) => {
        setCargando(true)
        try {
            const resultado = await createUserWithEmailAndPassword(auth, correo, contrasena)

            await setDoc(doc(db, "usuarios", resultado.user.uid), {
                uid: resultado.user.uid,
                nombreUsuario: nombreUsuario,
                correo: correo,
                contrasena: contrasena,
                creadoEn: new Date()
            })

            setUsuario(resultado.user)
            return true
        } catch (err) {
            console.log(err.code, err.message)
            if (err.code === "auth/email-already-in-use") {
                mostrarErrorYRecargar("Este correo ya está registrado.")
            } else if (err.code === "auth/weak-password") {
                mostrarErrorYRecargar("La contraseña debe tener al menos 6 caracteres.")
            } else if (err.code === "auth/invalid-email") {
                mostrarErrorYRecargar("El correo no es válido.")
            } else {
                mostrarErrorYRecargar("Ocurrió un error. Intenta de nuevo.")
            }
            return false
        } finally {
        setCargando(false)
        }
    }

    const iniciarSesion = async (correo, contrasena) => {
        try {
            const resultado = await signInWithEmailAndPassword(auth, correo, contrasena)
            setUsuario(resultado.user)
            return true
        } catch (err) {
            return false
        }
    }

     return (
        <ContextUsuario.Provider value={{ usuario, cargando, setCargando, registrar, iniciarSesion }}>
            {children}
        </ContextUsuario.Provider>
    )
}