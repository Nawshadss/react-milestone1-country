import { useEffect, useState } from "react";
import Country from "./Country";
import "./Country.css";

const Countries = () => {
  const [countries, setCountrires] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountrires(data));
  }, []);

  return (
    <div className="flex">
      <h3>Countries lenght:{countries.length}</h3>

      {countries.map((data) => {
        console.log(data);
        return <Country key={data.ccn3} country={data}></Country>;
      })}
    </div>
  );
};

export default Countries;
