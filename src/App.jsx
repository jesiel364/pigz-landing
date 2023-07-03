import "./App.css";
import { useState } from "react";
import PigzLogo from "./assets/logo.svg";
import Logo2 from "./assets/logo2.svg";
import Burger1 from "./assets/burger1/500.png";
import Store from "./assets/icones-banner/store.svg";
import Smartphone from "./assets/icones-banner/smartphone.svg";
import PigzGestao from "./assets/icones-banner/pigz-gestao.svg";
import Print from "./assets/icones-banner/print.svg";
import MarketPic from "./assets/pigzMarket/Grupo de máscara 2417@3x.png";
import GestaoPic from "./assets/pigzGestao/Grupo de máscara 2418@3x.png";
import EntregaPic from "./assets/pigzEntrega/Grupo de máscara 2420@3x.png";
import MobilePic from "./assets/pigzMobile/mobile@3x.png";

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
          <label>Nome</label>
          <br />
          <input type="text" placeholder="Jesiel Gomes" />
        </div>
        <div className="Form-input">
          <label>Email</label>
          <br />
          <input type="email" placeholder="jesiel@email.com" />
        </div>
        <div className="Form-input">
          <label>Telefone</label>
          <br />
          <input type="phone" placeholder="(95) 99875-5432" />
        </div>

        <p>
          Ao continuar, aceito que a Pigz entre em contato comigo por telefone,
          e-mail ou WhatsApp.
        </p>

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
      <p className="Title">Tudo que você precisa por apenas R$199/mês</p>
      <p className="Desc">
        Tenha todas as funcionalidades Pigz sem taxa de adesão, sem comissão por
        cada venda, sem letrinhas miúdas.
      </p>
    </div>
  );
}

const ItemsTab = [
  {
    id: 1,
    active: true,
    pic: MarketPic,
    title: "Pigz Marketplace",
    desc: "Além de uma página exclusiva, com o Pigz Marketplace sua loja terá mais visibilidade, no app e no site. Uma vitrine com milhares de clientes todos os dias, pra vender muito mais.",
  },
  {
    id: 2,
    active: false,
    pic: GestaoPic,
    title: "Pigz Gestão",
    desc: "Acompanhe suas vendas em tempo real, no computador ou no celular, de onde estiver. Faça alterações de preços e disponibilidade de produtos rapidamente, como deve ser.",
  },
  {
    id: 3,
    active: false,
    pic: EntregaPic,
    title: "Gestão de entregadores",
    desc: "A ferramenta ideal pra quem tem entrega própria. Controle de entregas por motoboy, geração de relatórios por entregas e por taxas de entrega, individualmente.",
  },
  {
    id: 4,
    active: false,
    pic: MobilePic,
    title: "Pagamento on-line",
    desc: "Segurança e agilidade para receber e entregar pedidos. Seus clientes pagam com Pix ou cartão de crédito pelo app, e o entregador nem precisa levar a maquininha de cartão.",
  },
];

function Tabs() {
  const [tab, setTab] = useState(ItemsTab[0]);

  const change = (item) => {
    tab.active = true;
    ItemsTab.filter((ele) => {
      if (ele.title == item.title) {
        // alert(ele.title)
        ele.active = true;
      } else {
        ele.active = false;
      }
    });
    setTab(item);
  };

  return (
    <>
      <div className="cont">
        <div className="TabBar">
          {ItemsTab.map((item) => {
            return (
              <button
                key={item.id}
                style={{ backgroundColor: item.active ? "#FA641E" : "" }}
                className="TabBarButton"
                onClick={() => change(item)}
              ></button>
            );
          })}
        </div>
      </div>

      <div className="TabCard">
        <p id="title">{tab.title}</p>

        <div id="card">
          <p id="desc">{tab.desc}</p>
          
            <img src={tab.pic}></img>
          
        </div>
      </div>
    </>
  );
}

function Secao3() {
  return (
    <div className="Secao3">
      <p id="title">E mais: suporte que realmente funciona!</p>

      <Card title="Pigz" desc="Tudo o que você precisa" />
    </div>
  );
}

export default function App() {
  const info = [
    {
      id: 1,
      title: "Marketplace",
      desc: "Pra sua loja vender mais",
      pic: Store,
    },
    {
      id: 2,
      title: "É fácil e rápido",
      desc: "Fazer um pedido no Pigz",
      pic: Smartphone,
    },
    {
      id: 3,
      title: "Pigz Gestão",
      desc: "Você no controle, sempre",
      pic: PigzGestao,
    },
    {
      id: 4,
      title: "Vias de impressão",
      desc: "Personalizáveis",
      pic: Print,
    },
  ];

  return (
    <div className="Wrapper">
      <Navbar />
      <div className="Div1">
        <Container1 />
        <Form />
      </div>

      <Secao />
      {info.map((item) => (
        <Card
          key={item.id}
          pic={item.pic}
          title={item.title}
          desc={item.desc}
        />
      ))}

      <Secao2 />
      <Tabs />
      <Secao3 />
      
    </div>
  );
}
