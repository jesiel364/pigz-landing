import MarketPic from "/src/assets/pigzMarket/Grupo de máscara 2417@3x.png";
import GestaoPic from "/src/assets/pigzGestao/Grupo de máscara 2418@3x.png";
import EntregaPic from "/src/assets/pigzEntrega/Grupo de máscara 2420@3x.png";
import MobilePic from "/src/assets/pigzMobile/mobile@3x.png";

import { useState } from "react";


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
  
  export function Tabs() {
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