import './App.css';
import { useState } from "react";
 
function App() {
  const [weight, setWeight] = useState(0)
  const [bottles, setBottles] = useState(1)
  const [time, setTime] = useState(1)
  const [gender, setGender] = useState("male")
  const [result, setResult] = useState(0)

  function calculate() {
    const grams = ((bottles * 0.33) * 8 * 4.5) - ((weight / 10) * time)
    let result = null;

    if(gender === "male") {
      result = grams / (weight * 0.7);
    } else {
      result = grams / (weight * 0.6);
    }

    if(result < 0) { return setResult(0)}

    setResult(result);
  }

  return (
    <div className="container">
      <div className="row flex-column border">
        <h2 className='border-bottom'>Laske veren alkoholipitoisuus</h2>
        <div className="col-3">
          <div className="d-flex mt-2">
            <label className="col-form-label me-2">Paino: </label>
            <input type="number" className="form-control" id="weight" value={weight} onChange={e => setWeight(e.target.value)}/>
          </div>
        </div>
        <div className="col-3">
          <div className="d-flex mt-2">
            <label className="col-form-label me-2">Annokset: </label>
            <select className="form-select" value={bottles} onChange={e => setBottles(e.target.value)}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
            </select>
          </div>
        </div>
        <div className="col-3">
          <div className="d-flex mt-2">
            <label className="col-form-label me-2">Tunnit: </label>
            <select className="form-select" value={time} onChange={e => setTime(e.target.value)}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
              <option value="13">13</option>
              <option value="14">14</option>
            </select>
          </div>
        </div>
        <div className="col-3">
          <div className="d-flex align-items-center p-0 m-0 mt-2">
            <label className="col-form-label me-2">Sukupuoli: </label>
            <div>
              <label>Mies:</label>
              <input className="ms-2 me-4" type="radio" name="gender" id="male" value="male" checked={gender === "male"} onChange={e => setGender(e.target.value)}/>
            </div>
            <div>
              <label>Nainen:</label>
              <input className="ms-2" type="radio" name="gender" id="female" value="female" checked={gender === "female"} onChange={e => setGender(e.target.value)}/>
            </div>
          </div>
        </div>
        <div className="col-3 mt-2">
          <button type="button" className="btn btn-primary mb-3" onClick={calculate}>Laske</button>
          <h4>Tulos: {result.toFixed(2)}</h4>
        </div>
      </div>
    </div>
  );
}

export default App;

