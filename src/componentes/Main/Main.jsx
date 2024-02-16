import React, { useState } from "react" //Chamando o hook useState
import Paocomovo from "./paocomovo.jpg" //importando da pasta main a imagem pão com ovo
import Misto from "../../assets/mistoquente.jpeg"
import Cafe from "./cafe.jpeg"
import Paodequeijo from "./paodequeijo.png"

function Main() { //componente funcional 

    //1º criar uma const
    //2º criar um array [ , ] que vai guardar duas coisas [estado , setEstado]
    //3º receber = o hook useState()
    //4º dentro do () colocar o valor inicial

    const [numero, setNumero] = useState(0) //primeiro card
    const [numero2, setNumero2 ] = useState(0) //segundo card
    const [ , ] = useState() //terceiro card
    const [ , ] = useState() //quarto card

    // const [a coisa, habilidade de mudar essa coisa] = useState(valor inicial)

    //-------------Criando a função para adicionar 1 valor - SEM CONDIÇÃO

    // function Adicionar(){
    //     setNumero(numero + 1) 
    //     //setNumero altera o estado (numero), então: setNumero(pega o estado "numero" e some 1 valor a ele)
    // }

    //---------CRIANDO FUNÇÃO COM ARROW FUNCTION , COM CONDIÇÃO

    const Adicionar = () => {
        if (numero < 10) {
            setNumero(numero + 1)
        }
    }

//Criando uma função para remover

function Remover(){
    if(numero > 0){
        setNumero(numero - 1)
    }
}


//arrow () => {}

const Limpar = ()=> {
    setNumero(0)
}


//funções para o card 2

const Adicionar2 = () => {
    if (numero2 < 10) {
        setNumero2(numero2 + 1)
    }
}

function Remover2(){
    if(numero2 > 0){
        setNumero2(numero2 - 1)
    }
}

const Limpar2 = ()=> {
    setNumero2(0)
}





    return ( //retornando o html
        <main>
            <div className="card">
                <img className="imgCard" src={Paocomovo} alt="" />
                <h3>R$6,00</h3>
                <button onClick={Adicionar}> Adicionar </button>
                <button onClick={Remover}>Remover</button> 
                <img onClick={Limpar} src="https://cdn-icons-png.flaticon.com/512/54/54324.png" alt="" />
                {/* <button onClick={Limpar}>Limpar</button> */}
                <h2> {numero} </h2>
            </div>

            <div className="card">
                <img className="imgCard" src={Misto} alt="" />
                <h3>R$10,00</h3>
                <button onClick={Adicionar2}> Adicionar </button>
                <button onClick={Remover2}>Remover</button> 
                <img onClick={Limpar2} src="https://cdn-icons-png.flaticon.com/512/54/54324.png" alt="" />
                {/* <button onClick={Limpar}>Limpar</button> */}
                <h2> {numero2} </h2>
            </div>


            <div className="card">
                <img className="imgCard" src={Cafe} alt="" />
                <h3>R$2,50</h3>
                <button> Adicionar </button>
                <button>Remover</button> 
                <img onClick={Limpar} src="https://cdn-icons-png.flaticon.com/512/54/54324.png" alt="" />
                {/* <button onClick={Limpar}>Limpar</button> */}
                <h2> 0 </h2>
            </div>

            <div className="card">
                <img className="imgCard" src={Paodequeijo} alt="" />
                <h3>R$3,50</h3>
                <button> Adicionar </button>
                <button>Remover</button> 
                <img onClick={Limpar} src="https://cdn-icons-png.flaticon.com/512/54/54324.png" alt="" />
                {/* <button onClick={Limpar}>Limpar</button> */}
                <h2> 0 </h2>
            </div>

        </main>
    )
}

export default Main