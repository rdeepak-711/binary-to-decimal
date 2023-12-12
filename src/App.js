import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BiArrowToRight } from 'react-icons/bi';

function App() {
  const [decimalValue, setDecimalValue] = useState('');

  const convertBinaryToDecimal = (binaryValue) => {
    const decimal = parseInt(binaryValue, 2);
    return isNaN(decimal) ? '' : decimal;
  };

  const handleButtonClick = () => {
    const binaryInput = document.getElementById('binaryInput').value;
    if (binaryInput) {
      const decimal = convertBinaryToDecimal(binaryInput);
      setDecimalValue(decimal.toString());
      document.getElementById('decimalOutput').value = decimal.toString();
    } else {
      alert("Enter a binary value")
    }
  };

  const handleBinaryInputChange = (event) => {
    const inputValue = event.target.value;
    const regex = /^[01]*$/;
    
    if (!regex.test(inputValue)) {
      event.target.value = inputValue.slice(0, -1);
      alert("Only 0s and 1s allowed")
    }
  }
  return (
    <div className="container-fluid vh-100 d-flex justify-content-center align-items-center bg-primary">
      <div className="p-2 square bg-white d-flex flex-column mb-3 border border-black border-2 rounded">
        <div className="p-2 text-primary text-center">
          <h3>Binary to Decimal Converter</h3>
        </div>
        <div className="d-flex flex-row mb-3">
          <div className="p-2">
            <label for="binaryInput" className="form-label">Enter Binary Value</label>
            <input type="text" className="form-control" id="binaryInput" onChange={handleBinaryInputChange}/>
          </div>
          <div className="p-2">
            <button className="btn btn-outline-dark" onClick={handleButtonClick}>
              <BiArrowToRight size={24} color="black"/>
            </button>
          </div>
          <div className="p-2">
            <label for="decimalOutput" className="form-label">Converted Decimal Value</label>
            <input type="text" className="form-control" id="decimalOutput" readOnly/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
