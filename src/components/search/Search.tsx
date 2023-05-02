import React from "react";
import Weather from "../weather/Weather";
import { useState } from "react";

export default function Search() {
  const [input, setInput] = useState("");
  const [city, setCity] = useState("");

  const handleInputChange = (event: any) => setInput(event.target.value);

  console.log(input);

  return (
    <>
      <input
        role="search"
        type="text"
        value={input as unknown as string}
        onChange={handleInputChange}
      />

      <button onClick={() => setCity(input)}>Show Weather</button>

      {city && <Weather city={city} />}
    </>
  );
}
