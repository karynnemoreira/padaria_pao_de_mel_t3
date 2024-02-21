import React, { useState } from "react";

function Footer() {

    //setTimeout é um método que executa um bloco de codigo
    // depois de um determinado tempo.
    // estrutura do setTimeout()

    //sintaxe 

    // setTimeout(()=>{
    //     o que quero que faça
    // }, tempo)

    //setTimeout(()=>{},tempo)

    //----------------Criando uma função para mensagem, utilizando arrow function-------

    // const Mensagem = () => {
    //     setTimeout(()=>{
    //         alert("Parabéns você ganhou um sonho e um pastel grátis!")
    //     },5000)
    // }

    //----------------Criando uma função para mensagem, utilizando function normal-------

    function Mensagem() {
        setTimeout(() => {
            alert("Parabéns você ganhou um sonho e um pastel grátis!")
        }, 4000)
    }

    //      Estado,  setEstado
    const [numero, setNumero] = useState(0)

    const Add = () => {
        setTimeout(() => {
            setNumero(numero + 1)
        }, 2000)
    }


    function Remover() {
        setTimeout(() => {
            setNumero(numero - 1)
        }, 3000)
    }

    //--------------------SETINTERVAL-------------------------

    //setInterval => é um método que executa um bloco de codigo
    // a cada intervalo de tempo

    //estrutura:
    //setInterval(()=>{}, tempo)

    // setInterval(()=>{
    //     o que quero que faça
    // }, de tanto em tanto tempo)

    const [valor, setValor] = useState(0)
    const [Parando, setParando] = useState() //ela foi criada basicamente para o setInterval

    const Iniciar = () => {

        const guardarIntervalo = setInterval(() => {
            setValor((valor) => valor + 1) //arrow function para armazenar o valor atualizado
        }, 1000)

        setParando(guardarIntervalo) //Pegando a const da linha 66 para que assim consigamos acessar ele de qualquer lugar.
    }


    //Função para parar o setInterval, sendo ativada no botão de PARAR

    const PararContagem = () => clearInterval(Parando)




    //-------AVISOOO, CUIDADO COM O SETINTERVAL PURO, ELE PODE CAUSAR LOOPS------
    // setInterval(() => {
    //     setValor((valor)=> valor + 1)
    // }, 1000)
    //-------------------------------------------

    return (
        <footer>
            <section>
                <h3>Mensagem do setTimeout</h3>
                <button onClick={Mensagem}>Mensagem</button>
            </section>

            <section>
                <h3>Contador com setTimeout</h3>
                <h3> {numero} </h3>
                <button onClick={Add}>+</button>
                <button onClick={Remover}>-</button>
            </section>

            <section>
                <h2>Cronômetro</h2>
                <h3> {valor} </h3>
                <button onClick={Iniciar}>Iniciar</button>
                <button onClick={PararContagem}>Parar</button>
            </section>

        </footer>
    )
}
export default Footer