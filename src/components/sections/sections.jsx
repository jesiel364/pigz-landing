import Logo2 from "/src/assets/logo2.svg";
import Whats from "/src/assets/Icon-whatsapp.svg";

function Secao1() {
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

function Secao3() {
  return (
    <div className="Secao3">
      <p id="title">E mais: suporte que realmente funciona!</p>

      <p id="desc">Resposta automáticas e robôs?
        Aqui não. Nossa equipe está sempre disponivel pra ajudar você e seus clientes.</p>


    </div>
  );
}

function Secao4() {
  return (
    <div className="Secao4">
      <p id="title">Pigz</p>
      <p id="desc1">Tudo o que você precisa</p>
      <p id="desc2">Pigz Marketplace<br></br>
        Página exclusiva<br></br>
        Pigz Gestão Desktop e Mobile<br></br>
        Gestão de entregadores<br></br>
        Vias de impressão personalizáveis</p>


      <p id='price'>R$199/mês</p>

      <button className="
        Btn">Vender no Pigz agora</button>


    </div>
  );
}

function Secao5() {
  return (
    <div className="Secao4">
      <p id="title">Pagamento On-line</p>
      <p id="desc1">Segurança e agilidade</p>
      <p id="desc2">Aceite Pix e Cartão de Crédito<br></br>
        Antecipação Pix automática<br></br>
        Não dependa de maquininha de cartão<br></br>
        Segurança para receber pedidos<br></br>
        Agilidade para entregar

      </p>


      <p id='price'>2,99% por transação</p>

      <button id='SaibaMais' className="Btn">Saiba mais</button>


    </div>
  );
}

function Contact() {
  return (
    <div className="Contact">
      <p id='text'>Fale com a Pigz</p>
      <p>
        <img className="icon" src={Whats}></img>
        <span className="ddd">95</span>
        <span className="number">3224-2603</span>
      </p>
    </div>
  );
}

export { Secao1, Secao2, Secao3, Secao4, Secao5, Contact }