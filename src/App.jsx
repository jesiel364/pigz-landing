import "./App.css";
import "/src/components/forms/form.css";
import "/src/components/sections/section.css";
import "/src/components/footer/footer.css";
import { useState } from "react";
import { useContext } from "react";
import { FormContext } from "./context/formContext.jsx";

import { FormEndereco, FormPadrao, Store } from "./components/forms/forms.jsx"
import { Navbar, Container1 } from "./components/header/header.jsx"
import { Tabs } from "./components/TabsComp.jsx"
import { SectionCards } from "./components/CardsComp"
import { Secao1, Secao2, Secao3, Secao4, Secao5, Contact } from "./components/sections/sections.jsx"
import { Footer } from "./components/footer/footer";

function Form() {
  const { form, toggleForm } = useContext(FormContext)

 
 if(form == 1){
  return (
    <div className="form1">
    <FormPadrao />
    </div>
  );
 }
 if (form == 2) {
  return (
    <div className="form1">
    <FormEndereco />
    </div>
  );
 }
 if(form == 3){
  return (
  	<div className="form1">
      <Store />
      </div>
    );
 }
  
}

export default function App() {

  return (
    <div className="Wrapper">
      <Navbar />

      <div className="Div1">
        <Container1 />
        <Form />
      </div>

      <Secao1 />
      <SectionCards />
      <Secao2 />
      <Tabs />
      <Secao3 />
      <Secao4 />
      <Secao5 />
      <Contact />
      <Footer />

    </div>
  );
}
