import { useState } from "react";
import underWeight from './assets/underweight.jpeg'
import normal from './assets/normal.jpeg'
import overWeight from './assets/overweight.jpeg'
import obese from './assets/obese.jpeg'
import extra from './assets/extra.jpeg'

import "./App.css";

function App() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");

  const [bmi, setBMI] = useState("");

  const addWeight = (e) => {
    setWeight(e.target.value);
  };

  const addHeight = (e) => {
    setHeight(e.target.value);
  };

  let weightText = "";
  let bmiImage = ''
  let textColor =''

  const count = () => {
    let heightinM = height / 100;
    let result = weight / (heightinM * heightinM);
    setBMI(result.toFixed(2));
  };
  if (bmi != "") {
    if (bmi < 18.5) {
      weightText = "Underweight";
      bmiImage = underWeight
      textColor = 'text-[#87B1D9]'
    } else if (bmi > 18.5 && bmi < 24.9) {
      weightText = "Normal";
      bmiImage = normal
      textColor = 'text-[#3CD366]'
    } else if (bmi > 25 && bmi < 29.9) {
      weightText = "Overweight";
      bmiImage = overWeight
      textColor = 'text-[#EEE132]'

    } else if (bmi > 30 && bmi < 34.9) {
      weightText = "Obese";
      bmiImage = obese
      textColor = 'text-[#FD802E]'

    } else if (bmi > 35) {
      weightText = "Extremely obese ";
      bmiImage = extra
      textColor = 'text-[#F95353]'

    }
  }

  return (

    <div className="flex flex-col items-center justify-center h-screen w-full bg-stone-200">
      <p className="text-3xl font-semibold">Calculate Your BMI</p>
      <div className="flex items-center justify-around w-full p-10 max-md:flex-col">

   
      <div className="w-[40vw] flex flex-col items-center max-md:w-[60vw] max-sm:w-[80vw]">

      <label className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text text-xl">Enter you weight</span>
        </div>
        <input
          type="text"
          value={weight}
          onChange={addWeight}
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"
          />
      </label>
      <label className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text text-xl">Enter you height</span>
        </div>
        <input
          type="text"
          value={height}
          onChange={addHeight}
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"
          />
      </label>
      <button onClick={count} className="btn bg-cyan-500 text-white px-10 my-2 w-[20vw] max-md:w-[50vw] max-sm:w-[60vw]">
        Calculate BMI
      </button>
          </div>
      <div>

      <p className="font-bold text-2xl my-2">BMI: <span className={textColor}>{bmi}</span></p>
      <p className="my-4 font-semibold">Your BMI means that your weight is: <span className={textColor + ' font-bold'}>{weightText}</span></p>
      </div>

        <img src={bmiImage} alt="" className="w-[12%] max-md:w-[20%] max-sm:w-[30%]" />
        </div>
    </div>
  );
}

export default App;
