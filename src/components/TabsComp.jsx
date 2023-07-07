import MarketPic from "/src/assets/pigzMarket/Grupo de máscara 2417@3x.png";
import GestaoPic from "/src/assets/pigzGestao/Grupo de máscara 2418@3x.png";
import EntregaPic from "/src/assets/pigzEntrega/Grupo de máscara 2420@3x.png";
import MobilePic from "/src/assets/pigzMobile/mobile@3x.png";
import { useContext, useState } from "react"
import { FormContext } from "/src/context/formContext.jsx"; 


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
    const [index, setIndex] = useState(1)

    const [stop, setStop] = useState(false)
  
    const change = (item, trigger) => {
      
      tab.active = true;
      ItemsTab.filter((ele) => {
        if (ele.title == item.title) {
          ele.active = true;
        } else {
          ele.active = false;
        }
      });
      setTab(item);

      if(trigger == 'time'){
        
        
      } if(trigger == 'button'){
        setStop(true)
        console.log(item.id)
        
      }
      
    };
    
    function time(){

      if(index == 3){
        setIndex(0)
        
      }else{
        setIndex(index + 1)

      }
 
    if(stop){
      setStop(true)
      // setInterval(console.log(setStop(false)), 15000)
    }else{
      change(ItemsTab[index], "time")
    } 
  }
  
setTimeout(time,3000)
  
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
                  onClick={() => change(item, 'button')}
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