import Store from "/src/assets/icones-banner/store.svg";
import Smartphone from "/src/assets/icones-banner/smartphone.svg";
import PigzGestao from "/src/assets/icones-banner/pigz-gestao.svg";
import Print from "/src/assets/icones-banner/print.svg";

function Card(props) {
    return (
      <div className="card-banner">
        <img src={props.pic} />
        <p id="title">{props.title}</p>
        <p id="desc">{props.desc}</p>
      </div>
    );
  }

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

  export function SectionCards(){
    return (
        <div>
        {info.map((item) => (
            <Card
              key={item.id}
              pic={item.pic}
              title={item.title}
              desc={item.desc}
            />
          ))}</div>
    );
  }
