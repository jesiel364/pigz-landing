import "./App.css";
import PigzLogo from './assets/logo.svg';
import Burger1 from './assets/burger1/500.png';

function Navbar() {
  return (
    <div className="nav-div">
      <div>
      <img className="Logo" src={PigzLogo} alt="React Logo" />
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
      <div class="title-div">
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

function Form() {
  return (
    <div className="form1">
      <form>
        <p class="title">Quero vender no Pigz</p>
        <p>Dê o primeiro passo para aumentar as suas vendas.</p>

        <div className="Form-input">
          <label>Nome</label><br />
          <input type="text" placeholder="Jesiel Gomes"/>
        </div>
        <div className="Form-input" >
          <label>Email</label><br />
          <input type="email" placeholder="jesiel@email.com"/>
        </div>
        <div className="Form-input" >
          <label>Telefone</label><br />
          <input type="phone" placeholder="(95) 99875-5432"/>
        </div>

        <p >Ao continuar, aceito que a Pigz entre em contato comigo por telefone, e-mail ou WhatsApp.</p>

        <button className="Btn">Já sou parceiro</button>
      </form>
    </div>
  );
}

export default function App() {
  return (
    <section>
      <Navbar />
      <div className='Div1'>
      <Container1 />
      <Form />
      </div>
    </section>
  );
}
