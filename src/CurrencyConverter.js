// `https://api.frankfurter.app/latest?amount=100&from=EUR&to=USD`
import { useEffect, useState } from "react";
import "./CurrencyConverter.css";

export default function CurrencyConverter() {
  const [country1, setCountry1] = useState("EUR");
  const [country2, setCountry2] = useState("USD");
  const [amount, setAmount] = useState(1);
  const [result, setResult] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  function Loader() {
    return <p>Loading...</p>;
  }

  useEffect(
    function () {
      async function convertor() {
        setIsLoading(true);
        const res = await fetch(
          `https://api.frankfurter.app/latest?amount=${amount}&from=${country1}&to=${country2}`
        );
        const data = await res.json();
        setResult(data.rates[country2]);
        setIsLoading(false);
      }
      // if value of country1 and country2 is same
      if (country1 === country2) return setResult(amount);
      convertor();
    },
    [amount, country1, country2]
  );

  return (
    <div>
      <input
        type="text"
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
        disabled={isLoading}
      />
      )
      <select
        value={country1}
        onChange={(e) => setCountry1(e.target.value)}
        disabled={isLoading}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <select
        value={country2}
        onChange={(e) => setCountry2(e.target.value)}
        disabled={isLoading}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <p>
        {result} {country2}
      </p>
    </div>
  );
}
