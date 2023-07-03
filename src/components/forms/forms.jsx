import { DropdownMenu } from "/src/components/forms/DropdownMenu.jsx"

function FormPadrao(){
    return (
      <div id='padrao' style={{display: 'block'}}>
      <p className="Title">Quero vender no Pigz</p>
      <p>Dê o primeiro passo para aumentar as suas vendas.</p>
  
      <div className="Form-input">
        <label>Nome</label>
     
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
  
      <button className="Btn">Continuar</button>
    </div>
    );
  }
  
  function FormEndereco(){
    return (
      <div id='endereco' style={{display: 'block'}}>
      <p className="Title">Onde fica a sua loja?</p>
  
      <div className="Form-input">
        <label>CEP</label>
        <input type="text" placeholder="00000-00" />
      </div>
  
      <div className="Form-input">
        <label>Estado</label>
        <br />
        <DropdownMenu />
  
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
  
      <button className="Btn">Continuar</button>
      
    </div>
    );
  }

  export { FormEndereco, FormPadrao }