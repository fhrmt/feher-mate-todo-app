import React from "react";
import "./style.css";

export default function App() {
  return (
    <div>
      <h1>Todo App</h1>
      <div className="input-group mb-3">
  <input type="text" className="form-control" />
  <button className="input-group-text" id="basic-addon2">Hozzáadás</button>
</div>
<ul className="list-group" >
  <li className="list-group-item">
    <input className="form-check-input me-1" type="checkbox" value="" aria-label="..."/>
    Teszt kész
  <button className="input-group-text" id="basic-addon2">Törlés</button>
  </li>  
  <li className="list-group-item">
    <input className="form-check-input me-1" type="checkbox" value="" aria-label="..."/>
Kenyeret venni
  </li>
  <li className="list-group-item">
    <input className="form-check-input me-1" type="checkbox" value="" aria-label="..."/>
Kimosni a ruhákat
  </li>
  <li className="list-group-item">
    <input className="form-check-input me-1" type="checkbox" value="" aria-label="..."/>
Vizsgára készülni
  </li>
  <li className="list-group-item">
    <input className="form-check-input me-1" type="checkbox" value="" aria-label="..."/>
Teszt
  </li>
</ul>




    </div>
    
  );
}
