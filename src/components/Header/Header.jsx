import "./Header.css";
import img from "./img/byk.png"


const Header = () => {
  return (
    <header className="header">
     <img src={img} alt="logo" width={"100px"}/>
     <h2>Mehmet Doğan</h2>
    </header>
  )
}

export default Header
