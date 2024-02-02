import React, {useState} from "react" //Chamando o hook useState
import Paocomovo from "./paocomovo.jpg" //importando da pasta main a imagem pão com ovo

function Main() { //componente funcional 

    //1º criar uma const
    //2º criar um array [ , ] que vai guardar duas coisas [estado , setEstado]
    //3º receber = o hook useState()
    //4º dentro do () colocar o valor inicial

    const [numero, setNumero] = useState(0) 
// const [a coisa, habilidade de mudar essa coisa] = useState(valor inicial)

//-------------Criando a função para adicionar 1 valor - SEM CONDIÇÃO

// function Adicionar(){
//     setNumero(numero + 1) 
//     //setNumero altera o estado (numero), então: setNumero(pega o estado "numero" e some 1 valor a ele)
// }

//---------CRIANDO FUNÇÃO COM ARROW FUNCTION , COM CONDIÇÃO

const Adicionar = ()=>{
    if(numero < 10){
        setNumero(numero + 1)
    }
}






    return ( //retornando o html
        <main>
            <div className="card">
                <img className="paocomovo" src={Paocomovo} alt="" />
                <h3>R$6,00</h3>
                <button onClick={Adicionar}>COMPRAR</button>
                <h2> {numero} </h2>
            </div>
        </main>
    )
}

export default Main