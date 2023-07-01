import "./App.css";
import PigzLogo from './assets/logo.svg';
import Logo2 from './assets/logo2.svg';
import Burger1 from './assets/burger1/500.png';
import Store from './assets/icones-banner/store.svg';
import Smartphone from './assets/icones-banner/smartphone.svg';
import PigzGestao from './assets/icones-banner/pigz-gestao.svg';
import Print from './assets/icones-banner/print.svg';

function Navbar() {
  return (
    <div className="Nav-div">
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

function Form() {
  return (
    <div className="form1">
      <form>
        <p className="Title">Quero vender no Pigz</p>
        <p>Dê o primeiro passo para aumentar as suas vendas.</p>

        <div className="Form-input">
          <label>Nome</label><br />
          <input type="text" placeholder="Jesiel Gomes" />
        </div>
        <div className="Form-input" >
          <label>Email</label><br />
          <input type="email" placeholder="jesiel@email.com" />
        </div>
        <div className="Form-input" >
          <label>Telefone</label><br />
          <input type="phone" placeholder="(95) 99875-5432" />
        </div>

        <p >Ao continuar, aceito que a Pigz entre em contato comigo por telefone, e-mail ou WhatsApp.</p>

        <button className="Btn">Já sou parceiro</button>
      </form>
    </div>
  );
}

function Card(props) {
  return (
    <div className="card-banner">
      <img src={props.pic} />
      <p id="title">{props.title}</p>
      <p id="desc">{props.desc}</p>
    </div>
  );
}

function Secao() {


  return (
    <div id="div-meio">

      <img id="logo2" src={Logo2} />
      <p>Você tem um novo Pigzdido!</p>

    </div>
  );
}

function Secao2() {
  return (
    <div className="Secao2">
      <p className='Title'>Tudo que você precisa<br></br> por apenas R$199/mês</p>
      <p className="Desc">Tenha todas as funcionalidades<br></br> Pigz sem taxa de adesão, sem<br></br> comissão por cada venda, sem<br></br> letrinhas miúdas.</p>
    </div>
  );
}

function TabCard(props){
  return (
  <div className="TabCard">
    <p id='title'>{props.title}</p>

    <div id='card'>
      <p>{props.desc}</p>
    </div>
  </div>
  );
}

function Tabs(props) {

  let tab = null

  const openTab = (param) => {
    alert(param);
  }

  return (
    <div className="cont">
    <div className="TabBar">
      <button className="TabBarButton" onClick={event => openTab(props.title)}></button>
      
    </div>
    
    </div>
  );
}


export default function App() {

  const info = [
    { id: 1, title: 'Marketplace', desc: 'Pra sua loja vender mais', pic: Store },
    { id: 2, title: 'É fácil e rápido', desc: 'Fazer um pedido no Pigz', pic: Smartphone },
    { id: 3, title: 'Pigz Gestão', desc: 'Você no controle, sempre', pic: PigzGestao },
    { id: 4, title: 'Vias de impressão', desc: 'Vias de impressão', pic: Print },
  ]


  return (

    <div className="Wrapper" >
      <Navbar />
      <div className='Div1'>
        <Container1 />
        <Form />
      </div>

      <Secao />
      {
        info.map((item) => <Card key={item.id} pic={item.pic} title={item.title} desc={item.desc} />)
      }

      <Secao2 />

      <div className="Tabular">
        <Tabs title='Padrão' />
        <Tabs title='Gestão' />
        <Tabs title='Entregadores' />
        <Tabs title='Pagamento' />

       
      </div>
      <TabCard title='Pigz Marketplace' desc='Além de uma página exclusiva, com o Pigz Marketplace sua loja terá mais visibilidade, no app e no site. Uma vitrine com milhares de clientes todos os dias, pra vender muito mais.' />

    </div>

  );
}
