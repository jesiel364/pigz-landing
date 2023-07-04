import Logo2 from "/src/assets/logo2.svg";

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
  
function Secao4(){
  	return (
  		<div className="Secao4">
  			<p id="title">Pigz</p>
  			<p id="desc">Pigz</p>
  			<p id="title">Pigz</p>
  			
  		</div>
  		);
  }

  export { Secao1, Secao2, Secao3, Secao4 }