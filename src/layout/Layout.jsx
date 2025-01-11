import React from "react";
import AbilityScores from "../components/AbilityScores";

const Layout = () => {
  return (
    <main className="flex flex-col m-4 ">
      <div id="left-div" className="md:flex-1">
        <div>
          <h1>Name </h1>
          <input
            type="text"
            placeholder="Name"
            className="input input-bordered input-lg w-full"
          />
          <h2>Title</h2>
          <input
            type="text"
            placeholder="Name"
            className="input input-bordered input-md w-full"
          />
        </div>
        <div id="details-container">
          <div id="species-container">
            <div id="species-selector" className="flex flex-row ">
              <label className="label">Species</label>
              <select className="select w-full max-w-xs">
                <option>Human</option>
                <option>Dwarf</option>
                <option>High Elf</option>
                <option>Wood Elf</option>
              </select>
            </div>
            <div>
              <p>species details</p>
            </div>
          </div>
          <div id="career-container">
            <div id="career-selector" className="flex flex-row ">
              <label className="label">Career</label>
              <select className="select w-full max-w-xs">
                <option>Human</option>
                <option>Dwarf</option>
                <option>High Elf</option>
                <option>Wood Elf</option>
              </select>
            </div>
            <div>
              <p>career details</p>
            </div>
          </div>
        </div>
        <div id="ability-scores-container">
          <AbilityScores />
        </div>
        <div id="skills-container"></div>
        <div id="talents-container"></div>
      </div>
      <div id="right-div" className="md:flex-1">
        <div id="portrait"></div>
        <div id="combat-container"></div>
        <div id="inventory-container"></div>
      </div>
    </main>
  );
};

export default Layout;
