import "./App.css";
import PigzLogo from './assets/logo.svg';
import Burger1 from './assets/burger1/250.png';

function Navbar() {
  return (
    <div className="nav-div">
      <div>
      <img className="Logo" src={PigzLogo} alt="React Logo" />
      </div>
      <div>
        <button>Já sou parceiro</button>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="Container1">
      <div class="title-div">
        <h2>Pigz: tudo que você precisa pra vender mais!</h2>
        {/* <img src={Burger1} /> */}
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

function Form() {
  return (
    <div className="form1">
      <form>
        <h3>Quero vender no Pigz</h3>
        <p>Dê o primeiro passo para aumentar as suas vendas.</p>

        <div className="Form-input">
          <label>Nome</label><br />
          <input type="text" />
        </div>
        <div className="Form-input" >
          <label>Email</label><br />
          <input type="email" />
        </div>
      </form>
    </div>
  );
}

export default function App() {
  return (
    <section>
      <Navbar />
      <Container1 />
      <Form />
    </section>
  );
}
