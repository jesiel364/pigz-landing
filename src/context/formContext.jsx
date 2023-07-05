import { createContext, useState, useEffect } from "react";

export const FormContext = createContext()

export const FormProvider = ({ children }) => {
    const [form, setForm] = useState(1)
    const [store, setStore] = useState({ uf: 'RO' })
    const [user, setUser] = useState()
    const [endereco, setEndereco] = useState([])
    const [ufs, setUfs] = useState([])
    const [ci, setCi] = useState()
    const [loja, setLoja] = useState()
    const [tipoLoja, setTipoLoja] = useState()
    const [userData, setUserData] = useState()



    useEffect(() => {
        fetch('https://gist.githubusercontent.com/rgiaviti/e4cddd4ab8220ba71b90272b815e6fc5/raw/1b48b960ef159390600bbf3a3ffe9b2d3cb3ec4d/unidades-federativas.json')
            .then((response) => {
                return response.json()

            })
            .then((data) => {
                setUfs(data['unidades-federativas']) //esse é o state que armazena a lista 
            })
    }, [])




      
        useEffect(() => {
          fetch('https://raw.githubusercontent.com/chandez/Estados-Cidades-IBGE/master/json/municipios.json')
            .then((response) => {
              return response.json()
      
            })
            .then((data) => {
              setCi(data.data) //esse é o state que armazena a lista 

            })
        }, [])


    const toggleForm = (data) => {
        setForm(data)
    }


    return (
        <FormContext.Provider value={{userData, setUserData, form, toggleForm, store, setStore, user, setUser, ufs, ci, loja, setLoja, tipoLoja, setTipoLoja, endereco, setEndereco }}>
            {children}
        </FormContext.Provider>
    );
}
