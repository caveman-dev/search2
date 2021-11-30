import axios from "axios";
import { useEffect, useState } from "react";
import 'boxicons'
import './App.css'
function App() {
  const [search,setSearch]=useState("")
  const [inputv,setInputv]=useState("")
  const [result,setResult]=useState("")
  useEffect(() =>{
    axios.get(`https://searchv7.expertrec.com/v6/search/99e34e8c2151480091253df3c88dafce/?user=6aff2c57-295f-4e59-86a1v2-t17d2c283e6e-b606c6468acd&q=${inputv}&size=5&suggestions=1&maxSuggestions=5`)
    .then((response)=>{
      console.log(response.data)
      setResult(response.data.results)
    })
    
  },[inputv])
  return (
    <div className="App">
    <div id='searchboxContainer'>
    <input id='searchbox' placeholder="Search" type='text' value={inputv} onChange={(e)=>setInputv(e.target.value)}/><span><box-icon name='search-alt-2'></box-icon></span>
    </div>
    {
      inputv&&<div id="Suggestions">
      <h4>PRODUCTS</h4>
      <hr/>
      {
        result&&result.map((ele)=>{
          return<div className="inner" key={ele.gkey}>
          <div className='image'><img src={ele.paint_colour_swatch_image}/></div>
          <div className  ="info">
          <div>
          <button>Touch Up Pen</button>
          <button>Aerosol</button>
          <button>Pro Sizes (Water)</button>
          <button>Pro sizes (Solvent)</button>
          <button>Show All</button>
          </div>
          <div>
          <b><span>{ele.paint_color_description}</span></b>
          <span>{ele.make}</span>
          <span className='link1'>{ele.model}</span>
          </div>
          </div>
          </div>
        })
      }
      </div>
    }
    </div>
  );
}

export default App;
