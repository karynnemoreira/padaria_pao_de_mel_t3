import Caramelo from "./padaria.png"
//import Logo1 from "../../assets/padaria.png" Exemplo para quem usou assets

function Header() {
    return (
        <header>
            <nav>
                <img src={Caramelo} alt="" />
                <ul>
                    <li>Cardápio</li>
                    <li>Contatos</li>
                    <li>Encomendas</li>
                    <li>Unidades</li>
                    <li> <a href="https://icons8.com.br/" target="_blank">Icones </a> </li>
                </ul>
            </nav>


            {/* <img src="https://i.pinimg.com/originals/35/73/ec/3573ecf93035e51e53049dcfb3472b89.jpg" alt="" /> */}
        </header>
    )
}
export default Header