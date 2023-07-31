import React, { useState } from "react";

export default function Calculator() {
  return (
    <div>
      <TipCalculator />
    </div>
  );
}

function TipCalculator() {
  const [bill, setBill] = useState("");
  const [percentage1, setPercentage1] = useState(0);
  const [percentage2, setPercentage2] = useState(0);

  const tip = bill * ((percentage1 + percentage2) / 2 / 100);

  function handleReset() {
    setBill("");
    setPercentage1(0);
    setPercentage2(0);
  }

  return (
    <div>
      <BillInput bill={bill} onSetBill={setBill} />
      <SelectPercentage percentage={percentage1} onSelect={setPercentage1}>
        How did you like the service?
      </SelectPercentage>
      <SelectPercentage percentage={percentage2} onSelect={setPercentage2}>
        How did your friend like the service?
      </SelectPercentage>
      {bill > 0 && (
        <>
          <Output bill={bill} tip={tip} />
          <Reset onReset={handleReset} />
        </>
      )}
    </div>
  );
}

function BillInput({ bill, onSetBill }) {
  return (
    <div>
      <label>How much was the bill?</label>
      <input
        type="text"
        placeholder="Bill value"
        value={bill}
        onChange={(e) => onSetBill(Number(e.target.value))}
      />
    </div>
  );
}

function SelectPercentage({ children, percentage, onSelect }) {
  return (
    <div>
      <label>{children}</label>
      <select
        value={percentage}
        onChange={(e) => onSelect(Number(e.target.value))}
      >
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">It was okay (5%)</option>
        <option value="10">It was good (10%)</option>
        <option value="20">Absolutely amazing! (20%)</option>
      </select>
    </div>
  );
}

function Output({ bill, tip }) {
  return (
    <h3>
      You pay {bill + tip} (${bill} + ${tip} tip)
    </h3>
  );
}

function Reset({ onReset }) {
  return <button onClick={onReset}>Reset</button>;
}

// *****************************************************************************************************************

//***** My Solution  **************/

// const selectPer = [
//   { desc: "Dissatisfied", numb: 0 },
//   { desc: "It was ok ", numb: 5 },
//   { desc: "It was good ", numb: 10 },
//   { desc: "Absolutely Amazing ", numb: 20 },
// ];

// export default function Calculator() {
//   const [value1, setValue1] = useState(null);
//   const [value2, setValue2] = useState(null);
//   const [bill, setBill] = useState(null);
//   const totalTip = Number((value1 + value2) / 2);

//   function handleReset() {
//     setBill(null);
//   }

//   return (
//     <div>
//       <BillInput setBill={setBill} bill={bill} />
//       <SelectPercentage data={selectPer} setValue={setValue1} value={value1}>
//         How do You like the service?
//       </SelectPercentage>
//       <SelectPercentage data={selectPer} setValue={setValue2} value={value2}>
//         How did your friend like the service?
//       </SelectPercentage>
//       <Output bill={bill} totalTip={totalTip} handleReset={handleReset} />
//     </div>
//   );
// }

// function BillInput({ setBill, bill }) {
//   const [myValue, setMyValue] = useState();

//   setBill(Number(myValue));

//   return (
//     <div style={{ display: "flex" }}>
//       <p>How much was the bill?</p>
//       <form>
//         <input
//           value={myValue}
//           onChange={(e) => setMyValue(e.target.value)}
//           type="number"
//         />
//       </form>
//     </div>
//   );
// }

// function SelectPercentage({ data, children, value, setValue }) {
//   //   const [myValue, setMyValue] = useState();
//   function handleClick(e) {
//     setValue(e.target.value.split(/\D+/).filter(Boolean).map(Number));
//   }
//   return (
//     <div style={{ display: "flex" }}>
//       <p>{children}</p>2
//       <select onChange={handleClick}>
//         {data.map((item, i) => (
//           <option key={item.desc}>
//             {item.desc} {item.numb}%
//           </option>
//         ))}
//       </select>
//     </div>
//   );
// }

// function Output({ bill, totalTip, handleReset }) {
//   return (
//     <div>
//       {bill && (
//         <>
//           <p>{`You pay $${bill + totalTip} ( $${bill}+$${totalTip} tip)`}</p>
//           <button onClick={handleReset}>Reset</button>
//         </>
//       )}
//     </div>
//   );
// }
