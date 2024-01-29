import Caramelo from "./padaria.png"
//import Logo1 from "../../assets/padaria.png" Exemplo para quem usou assets

function Header() {
    return (
        <>
            <nav>
                <img src={Caramelo} alt="" />
                <ul>
                    <li>Cardápio</li>
                    <li>Contatos</li>
                    <li>Encomendas</li>
                    <li>Unidades</li>
                </ul>
            </nav>


            {/* <img src="https://i.pinimg.com/originals/35/73/ec/3573ecf93035e51e53049dcfb3472b89.jpg" alt="" /> */}
        </>
    )
}
export default Header