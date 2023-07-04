import { useState } from "react";
import { DropdownMenu } from "/src/components/forms/DropdownMenu.jsx"
import { useContext } from "react";
import { FormContext } from "/src/context/formContext.jsx";



function FormPadrao(){
  const { form, toggleForm, user, setUser } = useContext(FormContext)

  const [  nome, setNome] = useState()
  const [  email, setEmail] = useState()
  const [  phone, setPhone] = useState()
  
  function submitForm(e){
    e.preventDefault()
    console.log(nome, email, phone)
    setUser([nome, email, phone])
    if(nome, email, phone){
      toggleForm(2)
    }
    
    
  }


    return (
      <form onSubmit={submitForm}>

      <div id='padrao' style={{display: 'block'}}>
      <p className="Title">Quero vender no Pigz</p>
      <p>Dê o primeiro passo para aumentar as suas vendas.</p>
      

      <div className="Form-input">
        <label>Nome</label>
     
        <input type="text" value={nome} onChange={e => setNome(e.target.value)}  placeholder="Jesiel Gomes" />
      </div>
      <div className="Form-input">
        <label>Email</label>
        <br />
        <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="jesiel@email.com" />
      </div>
      <div className="Form-input">
        <label>Telefone</label>
        <br />
        <input type="phone" value={phone} onChange={e => setPhone(e.target.value)} placeholder="(95) 99875-5432" />
      </div>
  
      <p>
        Ao continuar, aceito que a Pigz entre em contato comigo por telefone,
        e-mail ou WhatsApp.
      </p>
  
      <button  className="Btn">Continuar</button>
    </div>
    </form>
    );
  }
  
  function FormEndereco(){
    const { form, toggleForm, store, setStore, user } = useContext(FormContext)

    return (
      <div id='endereco' style={{display: 'block'}}>
      <p className="Title">Onde fica a sua loja?</p>
  
      <div className="Form-input">
        <label>CEP</label>
        <input type="text" placeholder="00000-00" />
      </div>
  
      <div className="Form-input estado">
        <label>Estado</label>
        <br />
        <DropdownMenu />
  
  
  
    
        <label>Endereço</label>
        <br />

      </div>
      <input type="text" placeholder="Avenida Brasil" />
 <div className="div-flex">
      <div className="Form-input">
        <label>Numero</label>
        <br />
        <input className="numero" type="number" placeholder="123" />
      </div>
      <div className="Form-input">
        <label>Complemento</label>
        <br />
        <input className="comp" type="text" placeholder="Sala 1" />
      </div>
  </div>

<br></br>
      <p>{user[0]} ✅</p>
      <p>{user[1]} ✅</p>
      <p>{user[2]} ✅</p>
  
      <button className="Btn">Próximo</button>
      
    </div>
    );
  }

  export { FormEndereco, FormPadrao }