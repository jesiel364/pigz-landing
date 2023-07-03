import "/src/components/forms/dropdown.css";

function FindCep(){
    return fetch("https://gist.githubusercontent.com/rgiaviti/e4cddd4ab8220ba71b90272b815e6fc5/raw/1b48b960ef159390600bbf3a3ffe9b2d3cb3ec4d/unidades-federativas.json")
  }
  
  const appDiv = document.getElementById('app');
  
  var request = new XMLHttpRequest();
  var cep = "69315-613"
  
  FindCep(cep)
    .then(response => response.json())
    .then(data => {
      if(data){
        return (<small>{JSON.stringify(data)}</small>);
        alert(data)
  
  
      } else {
        return (<small>{JSON.stringify(data)}</small>);
        alert('dfg')
      }
      
    })


export function DropdownMenu() {
   console.log(FindCep())
   
    return (
        <div id="dropdown">
            <button id="dropbtn">UF</button>
            <div id="dropdown-content">
{JSON.stringify(FindCep)}
                <p>dfg</p>
                <p>dfg</p>
            </div>
        </div>
    );
}
