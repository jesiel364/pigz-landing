import { useState } from "react";
import { DropdownMenu } from "/src/components/forms/DropdownMenu.jsx";
import { useContext } from "react";
import { FormContext } from "/src/context/formContext.jsx";

function Drop(props) {
  const [show, setShow] = useState(false);
  const [tipo, setTipo] = useState(props.title);
  const {store, setStore} = useContext(FormContext)

  function handleClick(evt) {
    evt.preventDefault();
    setShow(!show);
  }

  function Data(evt, item) {
    evt.preventDefault();
    setShow(!show);
    setTipo(item.index1)
    if(item.index2){
      setStore({uf: item.index2})
   
    }
  }

  return (
    <div id="">
      <button onClick={(evt) => handleClick(evt)} className="Dropbtn Drop-fit">
        {tipo} <span className="setaEstado">▼</span>
      </button>

      {show && (
        <div className={show ? "" : "disable"} id="dropdown-content">
          
            {props.data.map((item) => {
              return (
              	<div key={item.index1}>
                <button
                  key={item}
                  onClick={(evt) => Data(evt, item)}
                  className="DropItem"
                >
                  {item.index1} 
                  {item.index2 && ` - ${item.index2}`}
                </button>
                </div>
              );
            })}
          
        </div>
      )}
    </div>
  );
}

function FormPadrao() {
  const { form, toggleForm, user, setUser } = useContext(FormContext);

  const [nome, setNome] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();

  function submitForm(e) {
    e.preventDefault();
    console.log(nome, email, phone);
    setUser([nome, email, phone]);
    // if(nome, email, phone){
    //   toggleForm(2)
    // }
    toggleForm(2);
  }

  return (
    <form onSubmit={submitForm}>
      <div id="padrao" style={{ display: "block" }}>
        <p className="Title">Quero vender no Pigz</p>
        <p>Dê o primeiro passo para aumentar as suas vendas.</p>

        <div className="Form-input">
          <label>Nome</label>

          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder="Jesiel Gomes"
          />
        </div>
        <div className="Form-input">
          <label>Email</label>
          <br />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="jesiel@email.com"
          />
        </div>
        <div className="Form-input">
          <label>Telefone</label>
          <br />
          <input
            type="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="(95) 99875-5432"
          />
        </div>

        <p>
          Ao continuar, aceito que a Pigz entre em contato comigo por telefone,
          e-mail ou WhatsApp.
        </p>

        <button className="Btn">Continuar</button>
      </div>
    </form>
  );
}

function FormEndereco() {
  const { form, toggleForm, store, setStore, user, ufs, ci } = useContext(FormContext);

  function handleClick(evt) {
    evt.preventDefault();
    toggleForm(3);
  }

  const items = [
  ]

  const estados = ufs
  estados.map(item => {
    items.push(
      {
        index1: item['unidade-federativa'],
        index2: item['abreviacao'],
      }
      )
  })

  const cidades = []
  ci.map(item => {
    if(store.uf == item.Uf){
      cidades.push(
        {
          index1: item.Nome,
          index2: item.Uf,
        }
        )
    }

  })
  
  return (
    <div id="endereco" style={{ display: "block" }}>
      <p className="Title">Onde fica a sua loja?</p>

      <div className="Form-input">
        <label>CEP</label>
        <input type="text" placeholder="00000-00" />
      </div>

      <div className="Form-input estado ">
        <label>Estado</label>
        <br />
      

        <Drop title='Estado' data={items}></Drop>
        
        <label>Municipio</label>

        <Drop title='Municipio' data={cidades}></Drop>

    
        <br />
      </div>    
      <label>Endereço</label>
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

      <button className="Btn" onClick={(evt) => handleClick(evt)}>
        Próximo
      </button>
    </div>
  );
}

function Store() {
  const { loja, setLoja } = useState();
  const { cnpj, setCnpj } = useState();
  const { tipo, setTipo } = useState();
  const { ci } = useContext(FormContext);

  const items = [
    {index1: "Restaurante"}, 
    {index1: "Lanchonete"}
  ];



  return (
    <form>
      <div id="padrao" style={{ display: "block" }}>
        <p className="Title">Me conta um pouco sobre sua loja</p>

        <div className="Form-input">
          <label>Nome da loja</label>

          <input
            type="text"
            value={loja}
            onChange={(e) => setLoja(e.target.value)}
            placeholder="Restaurante Todo Mundo Gosta"
          />
        </div>
        <div className="Form-input">
          <label>CNPJ da loja</label>
          <br />
          <input
            type="number"
            value={cnpj}
            onChange={(e) => setCnpj(e.target.value)}
            placeholder="12.345.678/0001-99"
          />
        </div>
        <div className="Form-input">
          <label>Tipo de loja</label>
          <br />
          <Drop title="Selecione" data={items} />
        </div>

  
        <button className="Btn">Concluir</button>
      </div>
    </form>
  );
}

export { FormEndereco, FormPadrao, Store };
