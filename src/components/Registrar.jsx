import { Formulario } from "./Registrar/Formulario"


export function Registrar({onFinalizar}){
    return (
        <div className="w-full min-h-screen flex items-center justify-center bg-[url('/fondo_pg_registrar.jpg')] bg-cover bg-center bg-no-repeat">
            <div className="w-1/2 h-96 bg-gray-700 p-5 rounded-2xl flex">
                <img 
                    src='fondo_registrar.jpg' 
                    alt="/Foto_de_gatito"  
                    className="w-1/2 h-full object-cover rounded-3xl"
                />         
                <Formulario onFinalizar={onFinalizar}></Formulario>

            </div>
        </div>
    )
}