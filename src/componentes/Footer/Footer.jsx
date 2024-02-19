import React, {useState} from "react";

function Footer() {
    
    //setTimeout é um método que executa um bloco de codigo
    // depois de um determinado tempo.
    // estrutura do setTimeout()

    //setTimeout(()=>{},tempo)
    const Mensagem = () => {
        setTimeout(()=>{
            alert("Parabéns você ganhou um sonho e um pastel grátis!")
        },5000)
    }

    const [numero, setNumero] = useState(0)


    //setInterval => é um método que executa um bloco de codigo
    // a cada intervalo de tempo

    //estrutura:
    //setInterval(()=>{}, tempo)

    return (
        <footer>
            <h3>Mensagem do setTimeout</h3>
            <button onClick={Mensagem}>Mensagem</button>
            <section>
                <h3>Contador com setTimeout</h3>
                <h3>{numero}</h3>
                <button>+</button>
                <button>-</button>
            </section>
        </footer>
    )
}
export default Footer