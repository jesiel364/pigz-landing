import { useState } from "react";
import { DropdownMenu } from "/src/components/forms/DropdownMenu.jsx";
import { useContext } from "react";
import { FormContext } from "/src/context/formContext.jsx";

function Drop(props) {
  const [show, setShow] = useState(false);
  const [tipo, setTipo] = useState(props.title);
  const {store, setStore, setTipoLoja, tipoLoja} = useContext(FormContext)

  function handleClick(evt) {
    evt.preventDefault();
    setShow(!show);
  }

  function Data(evt, item) {
    evt.preventDefault();
    setShow(!show);
    setTipo(item.index1)
    if(item.index2){
      setStore({cidade: item.index1,uf: item.index2})
  
    }

    if(props.callback == 'loja'){
      setTipoLoja(item.index1)
    }

    console.log(store)

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
  const { form, toggleForm, user, setUser,  } = useContext(FormContext);

  const [nome, setNome] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();

  function submitForm(e) {
    e.preventDefault();
    console.log(nome, email, phone);
    setUser({nome: nome, email: email, phone: phone});
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
  const { toggleForm, store, ufs, ci, setEndereco, endereco } = useContext(FormContext);



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



  const [cep, setCep] = useState()
  const [state, setState] = useState()
  const [city, setCity] = useState()
  const [rua, setRua] = useState()
  const [numeroCasa, setNumeroCasa] = useState()
  const [comp, setComp] = useState()

  function submit(e){
    e.preventDefault()
    endereco.push(
      {cep: cep, loja: store, rua: rua, numero: numeroCasa, comp: comp},
    )
    console.log(endereco)
    toggleForm(3)
  }
  
  return (
    <form onSubmit={submit}>
    <div id="endereco" style={{ display: "block" }}>
      <p className="Title">Onde fica a sua loja?</p>

      <div className="Form-input">
        <label>CEP</label>
        <input value={cep} onChange={(e) => setCep(e.target.value)} type="text" placeholder="00000-00" />
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
      <input value={rua} onChange={(e) => setRua(e.target.value)} type="text" placeholder="Avenida Brasil" />
      <div className="div-flex">
        <div className="Form-input">
          <label>Numero</label>
          <br />
          <input value={numeroCasa} onChange={(e) => setNumeroCasa(e.target.value)} className="numero" type="number" placeholder="123" />
        </div>
        <div className="Form-input">
          <label>Complemento</label>
          <br />
          <input value={comp} onChange={(e) => setComp(e.target.value)} className="comp" type="text" placeholder="Sala 1" />
        </div>
      </div>

      <br></br>


      <button className="Btn">
        Próximo
      </button>
    </div>
    </form>
  );
}

function Store() {
  const { loja, setLoja, toggleForm } = useContext(FormContext)
  const [cnpj, setCnpj ] = useState();
  const [ tipo, setTipo ] = useState();
  const [ nome, setNome ] = useState();
  const { ci, tipoLoja } = useContext(FormContext);

  const items = [
    {index1: "Restaurante"}, 
    {index1: "Lanchonete"},
    {index1: "Pizzaria"},
    {index1: "Sorveteria"},
  ];

  function submit(e) {
    e.preventDefault();
    setLoja({nome: nome, cnpj: cnpj, tipo: tipoLoja});
    // if(nome, email, phone){
    //   toggleForm(2)
    // }
    toggleForm(4);
  }


  return (
    <form onSubmit={submit}>
      <div id="padrao" style={{ display: "block" }}>
        <p className="Title">Me conta um pouco sobre sua loja</p>

        <div className="Form-input">
          <label>Nome da loja</label>

          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder="Restaurante Todo Mundo Gosta"
          />
        </div>
        <div className="Form-input">
          <label>CNPJ da loja</label>
          <br />
          <input
            type="text"
            value={cnpj}
            onChange={(e) => setCnpj(e.target.value)}
            placeholder="12.345.678/0001-99"
          />
        </div>
        <div className="Form-input">
          <label>Tipo de loja</label>
          <br />
          <Drop title="Selecione" data={items} callback={'loja'} />
        </div>

  
        <button className="Btn">Concluir</button>
      </div>
    </form>
  );
}

function Confirmar(){
  const {setUserData, userData, user, loja, endereco} = useContext(FormContext)

  function submit(e){
    e.preventDefault()
    setUserData(
      
      [ {user: user, loja: loja, local: endereco }]
      
      )

        console.log(userData)


  }

  return (
    <form onSubmit={submit}>
      <div id="padrao" style={{ display: "block" }}>
        <p className="Title">Confirmar</p>
        <p>Dê o primeiro passo para aumentar as suas vendas.</p>

       <small>{JSON.stringify(userData)}</small>

 

        <button className="Btn">Confirmar</button>
      </div>
    </form>
  );
}

export { FormEndereco, FormPadrao, Store, Confirmar };
