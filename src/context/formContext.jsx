import { createContext, useState } from "react";

export const FormContext = createContext()

export const FormProvider = ({children}) => {
    const [form, setForm] = useState(1)
    const [store, setStore] = useState({uf: 'RO'})
    const [user, setUser] = useState()

    const toggleForm = (data) => {
        setForm(data)
    }
  

    return (
        <FormContext.Provider value={{form, toggleForm, store, setStore, user, setUser}}>
        {children}
        </FormContext.Provider>
    );
}
