import { useState } from "react";
import IcontadorNew from "../basic/IcontadorNew";


export default function contar(){
    const [numero, setNumero] = useState(0)
    // conceito de estado, conceito de estado interno

    function inc(){
        setNumero(numero + 1)
    }
//   função logo acima
    const dec = () => setNumero(numero - 1)
    // constante logo acima
// ah duas formas de voce declarar, uma função ou uma constante
    const stilo ={
        cursor:"pointer"
    }
    return(
        <div style={{
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            flexDirection:"column",
            fontSize:"2rem"
        }}>
            <h1>Contador</h1>
             <IcontadorNew numero={numero} />
            <div>
                <button style={stilo} onClick={inc}>+</button>
                <button style={stilo} onClick={dec}>-</button>
            {/* função de evento a partir do onClick */}
            </div>
            
        </div>
    )
}