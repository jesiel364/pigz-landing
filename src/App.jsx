import "./App.css";
import "./dropdown.css";

import { FormEndereco, FormPadrao } from "./components/forms/forms.jsx"
import { Navbar, Container1 } from "./components/header/header.jsx"
import { Secao1, Secao2, Secao3 } from "./components/sections/sections.jsx"
import { Tabs } from "./components/TabsComp.jsx"
import { SectionCards } from "./components/CardsComp"

function Form() {
  return (
    <div className="form1">
      <form>

        {/* <FormPadrao /> */}
        <FormEndereco />

      </form>
    </div>
  );
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
      <Secao2 />
      <SectionCards />
      <Tabs />
      <Secao3 />

    </div>
  );
}
