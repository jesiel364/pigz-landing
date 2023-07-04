import "/src/components/forms/dropdown.css";
import React, { useState, useEffect } from 'react'

function Estados() {
  const [ufs, setUfs] = useState([])

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

  const [data, setData] = useState({ UF: 'UF' })
  function Data(event, item) {
    event.preventDefault()
    setData({ UF: item.abreviacao })
    setShow(!show)

  }


  return (
    <div id="dropdown">
      <button onClick={(event) => handleClick(event)} className="Dropbtn">{data.UF}</button>

      <div id="dropdown-content">
        {res.map((item) => {

          if (show) {
            return (
              <div>
                <button
                  key={item}
                  onClick={(event) => Data(event, item)}
                >{item.unidade} - {item.abreviacao}</button> <br></br>


              </div>

            );
          }

        })}

      </div>

    </div>
  );


}

function Municipios() {
  const [ci, setCi] = useState([])

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/chandez/Estados-Cidades-IBGE/master/json/municipios.json')
      .then((response) => {
        return response.json()

      })
      .then((data) => {
        setCi(data.data) //esse é o state que armazena a lista 
      })
  }, [])

  let city = []

ci.forEach(item => {
  let cidade = item.Nome
  let uf  = item.Uf
  city.push({cidade: cidade, uf: uf})

})


return (

 
    <div id="">
      {city.map((item) => {

        if (true) {
          return (
            <div>
              <button
                key={item}
                onClick={(event) => Data(event, item)}
              >{item.cidade} - {item.uf}</button> <br></br>


            </div>

          );
        }

      })}

    </div>


);


}


export function DropdownMenu() {

  return (
    <div>
    <Estados />
    {/* <Municipios /> */}
    </div>
  );




}
