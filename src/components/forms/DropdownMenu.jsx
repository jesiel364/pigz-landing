import "/src/components/forms/dropdown.css";
import React, { useState, useEffect } from 'react'
import { useContext } from "react";
import { FormContext } from "../../context/formContext";

function Estados() {
  const [ufs, setUfs] = useState([])
  const { store, setStore } = useContext(FormContext)

  useEffect(() => {
    fetch('https://gist.githubusercontent.com/rgiaviti/e4cddd4ab8220ba71b90272b815e6fc5/raw/1b48b960ef159390600bbf3a3ffe9b2d3cb3ec4d/unidades-federativas.json')
      .then((response) => {
        return response.json()

      })
      .then((data) => {
        setUfs(data['unidades-federativas']) //esse é o state que armazena a lista 
      })
  }, [])

  let res = []
  ufs.forEach(element => {
    let abreviacao = element.abreviacao
    let unidade = element['unidade-federativa']
    res.push({ abreviacao: abreviacao, unidade: unidade })

  })

  const [show, setShow] = useState(false)

  function handleClick(event) {
    event.preventDefault()
    setShow(!show)
  }

  const [data, setData] = useState({uf: 'RO'})
  // setStore({uf: 'RO'})
  function Data(event, item) {
    event.preventDefault()
    setData({ uf: item.abreviacao })
    setStore({uf: item.abreviacao})
    setShow(!show)

  }


  return (
    <div id="">
      <button onClick={(event) => handleClick(event)} className="Dropbtn">{data.uf} <span className="setaEstado">▼</span>
     
      </button>
 
      {show && <div className={show ? '': 'disable'} id="dropdown-content">
        {res.map((item) => {


            return (
              <div >
                <button
              
                  className="DropItem"
                  key={item}
                  onClick={(event) => Data(event, item)}
                >{item.unidade} - {item.abreviacao}</button> <br></br>


              </div>

            );
       

        })}

      </div>}

    </div>
  );


}

function Municipios() {
  const [ci, setCi] = useState()
  const { store } = useContext(FormContext)

  let city = []

  // console.log(store)

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/chandez/Estados-Cidades-IBGE/master/json/municipios.json')
      .then((response) => {
        return response.json()

      })
      .then((data) => {
        setCi(data.data) //esse é o state que armazena a lista 


      })
  })

}


export function DropdownMenu() {

  return (
    <div>
    <div className='div-flex'>
          <Estados />
    <Municipios />
    </div>

    </div>
  );




}
