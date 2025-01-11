import React from "react";

const CareerAndSpecies = () => {
  return (
    <div className="flex flex-row justify-between">
      <div id="species-container">
        <select className="select select-ghost w-full max-w-xs flex-1">
          <option disabled selected>
            Species
          </option>
          <option>Svelte</option>
          <option>Vue</option>
          <option>React</option>
        </select>
      </div>
      <div id="species-container">
        <select className="select select-ghost w-full max-w-xs flex-1">
          <option disabled selected>
            Career
          </option>
          <option>Svelte</option>
          <option>Vue</option>
          <option>React</option>
        </select>
      </div>
    </div>
  );
};

export default CareerAndSpecies;
