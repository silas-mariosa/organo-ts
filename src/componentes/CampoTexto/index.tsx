import React from 'react'

import './CampoTexto.css'

interface CampoTextoProps {
    aoAlterado: (valor: string) => void
    placeholder: string
    label: string
    valor: string
<<<<<<< HEAD
    obrigatorio?: boolean
=======
    obrigatorio: boolean
>>>>>>> 4f836b4 (fim da aula 2)
}

const CampoTexto = ({ aoAlterado, label, obrigatorio, placeholder, valor } : CampoTextoProps) => {

    const placeholderModificada = `${placeholder}...` 

    const aoDigitado = (evento: React.ChangeEvent<HTMLInputElement>) => {
        aoAlterado(evento.target.value)
    }

    return (
        <div className="campo-texto">
            <label>
                {label}
            </label>
            <input 
                value={valor} 
                onChange={aoDigitado} 
                required={obrigatorio} 
                placeholder={placeholderModificada}
            />
        </div>
    )
}

export default CampoTexto