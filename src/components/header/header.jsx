import PigzLogo from "/src/assets/logo.svg";
import Burger1 from "/src/assets/burger1/500.png";

function Navbar() {
    return (
      <div className="Nav-div">
        <div>
          <a href="#"><img className="Logo" src={PigzLogo} alt="React Logo" /></a>
        </div>
        <div>
          <button className="Btn">Já sou parceiro</button>
        </div>
      </div>
    );
  }
  
  function Container1() {
    return (
      <div className="Container1">
        <div className="Title-div">
          <h2>Pigz: tudo que você precisa pra vender mais!</h2>
  
          <div>
            <img src={Burger1} />
          </div>
        </div>
        <div>
          <p>
            Temos uma equipe ansiosa para cadastrar seus produtos no Pigz
            Marketplace e deixar sua loja pontinha para iniciar as vendas.
          </p>
        </div>
      </div>
    );
  }

  export { Container1, Navbar }